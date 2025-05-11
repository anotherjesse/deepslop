import { FreshContext } from "$fresh/server.ts";
import { getNetwork } from "../../../incus.ts";
import { jsonToResponse } from "../../../helpers.ts";

export const handler = async (_: Request, c: FreshContext) =>
  jsonToResponse(await getNetwork(c.params.name));
