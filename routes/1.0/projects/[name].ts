import { FreshContext } from "$fresh/server.ts";
import { getProject } from "../../../incus.ts";
import { jsonToResponse } from "../../../helpers.ts";

export const handler = async (_: Request, c: FreshContext) =>
  jsonToResponse(await getProject(c.params.name));
