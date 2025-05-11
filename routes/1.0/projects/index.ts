import { FreshContext } from "$fresh/server.ts";
import { createProject, get, ProjectsPost } from "../../../incus.ts";
import { jsonToResponse } from "../../../helpers.ts";

export const handler = async (r: Request, _c: FreshContext) => {
  if (r.method === "POST") {
    const body = await r.json() as ProjectsPost;
    return jsonToResponse(await createProject(body));
  } else {
    return jsonToResponse(await get("/projects"));
  }
};
