import { FreshContext } from "$fresh/server.ts";
import { getServer } from "../../incus.ts";
import { jsonToResponse } from "../../helpers.ts";

export const handler = async (_r: Request, _c: FreshContext) =>
  jsonToResponse(await getServer());
