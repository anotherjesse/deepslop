import { FreshContext } from "$fresh/server.ts";
import { del, get, patch, post } from "@/incus.ts";
import { jsonToResponse } from "@/helpers.ts";

export const handler = async (r: Request, c: FreshContext) => {
  if (r.method === "GET") {
    return jsonToResponse(await get(c.params.path));
  }
  if (r.method === "POST") {
    const body = await r.json();
    return jsonToResponse(await post(c.params.path, body));
  }
  if (r.method === "PATCH") {
    const body = await r.json();
    return jsonToResponse(await patch(c.params.path, body));
  }
  if (r.method === "DELETE") {
    return jsonToResponse(await del(c.params.path));
  }
  return jsonToResponse(new Response("Method not allowed", { status: 405 }));
};
