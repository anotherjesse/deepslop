export * from "./incus.d.ts";

import type {
  Image,
  Instance,
  Network,
  Profile,
  Project,
  Server,
} from "./incus.d.ts";

export type Metadata = Image | Instance | Network | Project | Profile | Server;

export const getImage = (id: string) => get(`/images/${id}`) as Promise<Image>;
export const getInstance = (id: string) =>
  get(`/instances/${id}`) as Promise<Instance>;
export const getNetwork = (id: string) =>
  get(`/networks/${id}`) as Promise<Network>;
export const getProject = (id: string) =>
  get(`/projects/${id}`) as Promise<Project>;
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

export const get = async (
  path: string,
  leaveOpen?: boolean,
): Promise<Metadata> => {
  const socketPath = "/var/lib/incus/unix.socket";
  // remove trailing slash
  const requestPath = `/1.0${path.endsWith("/") ? path.slice(0, -1) : path}`;

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

    // Build an ordinary HTTP/1.1 request
    const httpRequest = `GET ${requestPath} HTTP/1.1\r\n` +
      `Host: incus\r\n` +
      `User-Agent: deno-unix-socket/1.0\r\n` +
      `Accept: */*\r\n` +
      `Connection: close\r\n` +
      `\r\n`;

    await conn.write(enc.encode(httpRequest));

    // Collect the whole response
    const buf = new Uint8Array(16_384);
    for (;;) {
      const n = await conn.read(buf);
      if (n === null) break;
      response += dec.decode(buf.subarray(0, n));
    }

    // Parse HTTP response
    const [headers, ...bodyParts] = response.split("\r\n\r\n");
    if (!bodyParts.length) {
      throw new Error("Invalid HTTP response: missing body");
    }

    // Handle chunked transfer encoding
    let body = bodyParts.join("\r\n\r\n");
    if (headers.includes("Transfer-Encoding: chunked")) {
      const chunks: string[] = [];
      let remaining = body;

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

      body = chunks.join("");
    }

    const ir = JSON.parse(body) as IncusResponse;

    if (ir.error) {
      throw new Error(JSON.stringify({ error: ir.error, response }));
    }

    return ir.metadata;
  } catch (e) {
    throw new Error(JSON.stringify({ e, response }));
  } finally {
    if (conn && !leaveOpen) {
      conn.close();
    }
  }
};

const post = async (path: string, data: any, leaveOpen?: boolean) => {
  const socketPath = "/var/lib/incus/unix.socket";
  const requestPath = `/1.0${path}`;

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

    data = JSON.stringify(data);

    // Build an ordinary HTTP/1.1 request
    const httpRequest = `POST ${requestPath} HTTP/1.1\r\n` +
      `Host: incus\r\n` +
      `User-Agent: deno-unix-socket/1.0\r\n` +
      `Accept: */*\r\n` +
      `Connection: close\r\n` +
      `Content-Type: application/json\r\n` +
      `Content-Length: ${data.length}\r\n` +
      `\r\n` +
      data;

    await conn.write(enc.encode(httpRequest));

    // Collect the whole response
    const buf = new Uint8Array(16_384);
    for (;;) {
      const n = await conn.read(buf);
      if (n === null) break;
      response += dec.decode(buf.subarray(0, n));
    }

    // Parse HTTP response
    const [headers, ...bodyParts] = response.split("\r\n\r\n");
    if (!bodyParts.length) {
      throw new Error("Invalid HTTP response: missing body");
    }

    // Handle chunked transfer encoding
    let body = bodyParts.join("\r\n\r\n");
    if (headers.includes("Transfer-Encoding: chunked")) {
      const chunks: string[] = [];
      let remaining = body;

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

      body = chunks.join("");
    }

    console.log("body", body);

    return JSON.parse(body);
  } catch (e) {
    console.error(e);
    return { error: e, response };
  } finally {
    if (conn && !leaveOpen) {
      conn.close();
    }
  }
};
