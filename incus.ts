export * from "./incus.d.ts";

import type {
  Image,
  Instance,
  Network,
  Profile,
  Project,
  ProjectsPost,
  Server,
} from "./incus.d.ts";

export type Metadata = Image | Instance | Network | Project | Profile | Server;

export const getImage = (id: string) => get(`/images/${id}`) as Promise<Image>;
export const getInstance = (id: string) =>
  get(`/instances/${id}`) as Promise<Instance>;
export const getNetwork = (id: string) =>
  get(`/networks/${id}`) as Promise<Network>;
export const getProject = (name: string) =>
  get(`/projects/${name}`) as Promise<Project>;
export const createProject = (params: ProjectsPost) =>
  post(`/projects`, params) as Promise<Project>;
export const getProfile = (id: string) =>
  get(`/profiles/${id}`) as Promise<Profile>;
export const getServer = () => get("/") as Promise<Server>;

export type IncusResponse = {
  type: "sync";
  status: "Success";
  status_code: number;
  operation: string;
  error_code: number;
  error: string;
  metadata: Metadata;
};

const constructRequestPath = (path: string) => {
  if (!path.startsWith("/1.0")) {
    if (!path.startsWith("/")) {
      path = `/${path}`;
    }
    path = `/1.0${path}`;
  }
  if (path.endsWith("/")) {
    path = path.slice(0, -1);
  }
  return path;
};

const makeRequest = async (
  method: string,
  path: string,
  data?: any,
  leaveOpen?: boolean,
): Promise<any> => {
  const socketPath = "/var/lib/incus/unix.socket";
  const requestPath = constructRequestPath(path);

  console.log("requestPath", requestPath);
  console.log("socketPath", socketPath);

  let conn: Deno.Conn | null = null;
  let response = "";

  try {
    conn = await Deno.connect({
      transport: "unix",
      path: socketPath,
    });

    const enc = new TextEncoder();
    const dec = new TextDecoder();

    const headers = [
      `Host: incus`,
      `User-Agent: deno-unix-socket/1.0`,
      `Accept: */*`,
      `Connection: close`,
    ];

    let body = "";
    if (data !== undefined) {
      body = JSON.stringify(data);
      headers.push(
        `Content-Type: application/json`,
        `Content-Length: ${body.length}`,
      );
    }

    const httpRequest = `${method} ${requestPath} HTTP/1.1\r\n` +
      headers.join("\r\n") + "\r\n\r\n" +
      body;

    await conn.write(enc.encode(httpRequest));

    // Collect the whole response
    const buf = new Uint8Array(16_384);
    for (;;) {
      const n = await conn.read(buf);
      if (n === null) break;
      response += dec.decode(buf.subarray(0, n));
    }

    // Parse HTTP response
    const [responseHeaders, ...bodyParts] = response.split("\r\n\r\n");
    if (!bodyParts.length) {
      throw new Error("Invalid HTTP response: missing body");
    }

    // Handle chunked transfer encoding
    let responseBody = bodyParts.join("\r\n\r\n");
    if (responseHeaders.includes("Transfer-Encoding: chunked")) {
      const chunks: string[] = [];
      let remaining = responseBody;

      while (remaining.length > 0) {
        // Find the chunk size line
        const chunkSizeEnd = remaining.indexOf("\r\n");
        if (chunkSizeEnd === -1) break;

        const chunkSizeHex = remaining.substring(0, chunkSizeEnd);
        const chunkSize = parseInt(chunkSizeHex, 16);

        // Skip the chunk size line and get the chunk data
        const chunkStart = chunkSizeEnd + 2;
        const chunkEnd = chunkStart + chunkSize;
        const chunk = remaining.substring(chunkStart, chunkEnd);

        chunks.push(chunk);

        // Move to next chunk (skip chunk data and \r\n)
        remaining = remaining.substring(chunkEnd + 2);
      }

      responseBody = chunks.join("");
    }

    console.log("body", responseBody);

    const parsed = JSON.parse(responseBody);
    if (method === "GET" && parsed.error) {
      throw new Error(JSON.stringify({ error: parsed.error, response }));
    }
    return parsed;
  } catch (e) {
    console.error(e);
    return { error: e, response };
  } finally {
    if (conn && !leaveOpen) {
      conn.close();
    }
  }
};

export const get = async (path: string, leaveOpen?: boolean) =>
  (await makeRequest("GET", path, undefined, leaveOpen)).metadata;

export const post = (path: string, data: any, leaveOpen?: boolean) =>
  makeRequest("POST", path, data, leaveOpen);

export const patch = (path: string, data: any, leaveOpen?: boolean) =>
  makeRequest("PATCH", path, data, leaveOpen);

export const del = (path: string, data: any, leaveOpen?: boolean) =>
  makeRequest("DELETE", path, data, leaveOpen);
