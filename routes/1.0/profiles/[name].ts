import { FreshContext } from "$fresh/server.ts";
import { getProfile } from "../../../incus.ts";
import { jsonToResponse } from "../../../helpers.ts";

export const handler = async (_: Request, c: FreshContext) =>
  jsonToResponse(await getProfile(c.params.name));
