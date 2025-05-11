import { FreshContext } from "$fresh/server.ts";
import { get } from "../../../incus.ts";

export const handler = async (
  _req: Request,
  _ctx: FreshContext,
): Promise<Response> => {
  const name = _req.url.split("/").pop()?.split("?")[0];
  if (!name) {
    return new Response("No name provided", { status: 400 });
  }
  const body = await get(`/projects/${name}`);
  return new Response(JSON.stringify(body), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
