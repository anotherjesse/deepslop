import { FreshContext } from "$fresh/server.ts";
import { getInstance } from "../../../incus.ts";
import { jsonToResponse } from "../../../helpers.ts";

export const handler = async (_: Request, c: FreshContext) =>
  jsonToResponse(await getInstance(c.params.name));
