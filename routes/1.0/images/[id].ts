import { FreshContext } from "$fresh/server.ts";
import { get, Image } from "../../../incus.ts";

export const handler = async (
  _: Request,
  c: FreshContext,
): Promise<Response> => {
  const img = await get(`/images/${c.params.id}`) as Image;
  return new Response(JSON.stringify(img, null, 2), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
