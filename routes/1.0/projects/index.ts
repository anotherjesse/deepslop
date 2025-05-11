import { FreshContext } from "$fresh/server.ts";
import { get } from "../../../incus.ts";

export const handler = async (
  _req: Request,
  _ctx: FreshContext,
): Promise<Response> => {
  const body = await get("/projects");
  return new Response(JSON.stringify(body), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
