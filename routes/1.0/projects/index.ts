import { FreshContext } from "$fresh/server.ts";
import { get } from "../../../incus.ts";
import { jsonToResponse } from "../../../helpers.ts";

export const handler = async (_r: Request, _c: FreshContext) =>
  jsonToResponse(await get("/projects"));
