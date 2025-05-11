import { FreshContext } from "$fresh/server.ts";
import { getImage } from "../../../incus.ts";
import { jsonToResponse } from "../../../helpers.ts";

export const handler = async (_: Request, c: FreshContext) =>
  jsonToResponse(await getImage(c.params.id));
