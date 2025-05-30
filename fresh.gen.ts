// DO NOT EDIT. This file is generated by Fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import * as $_1_0_path_ from "./routes/1.0/[...path].ts";
import * as $_404 from "./routes/_404.tsx";
import * as $_app from "./routes/_app.tsx";
import * as $index from "./routes/index.tsx";
import * as $Instances from "./islands/Instances.tsx";
import * as $Server from "./islands/Server.tsx";
import * as $projects_Create from "./islands/projects/Create.tsx";
import * as $projects_Instances from "./islands/projects/Instances.tsx";
import * as $projects_List from "./islands/projects/List.tsx";
import * as $projects_ProjectDetail from "./islands/projects/ProjectDetail.tsx";
import type { Manifest } from "$fresh/server.ts";

const manifest = {
  routes: {
    "./routes/1.0/[...path].ts": $_1_0_path_,
    "./routes/_404.tsx": $_404,
    "./routes/_app.tsx": $_app,
    "./routes/index.tsx": $index,
  },
  islands: {
    "./islands/Instances.tsx": $Instances,
    "./islands/Server.tsx": $Server,
    "./islands/projects/Create.tsx": $projects_Create,
    "./islands/projects/Instances.tsx": $projects_Instances,
    "./islands/projects/List.tsx": $projects_List,
    "./islands/projects/ProjectDetail.tsx": $projects_ProjectDetail,
  },
  baseUrl: import.meta.url,
} satisfies Manifest;

export default manifest;
