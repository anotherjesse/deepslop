import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { type Project } from "@/incus.ts";
import ProjectDetail from "./ProjectDetail.tsx";
import CreateProject from "./Create.tsx";

export default function ProjectsIsland() {
  const projects = useSignal<string[]>([]); // list of names
  const selectedId = useSignal<string | null>(null); // the clicked name
  const selectedDetail = useSignal<Project | null>(null); // fetched details
  const createProject = useSignal<boolean>(false); // create project

  const refreshProjects = () =>
    fetch("/1.0/projects")
      .then((r) => r.json())
      .then((links) => {
        projects.value = links;
      });

  useEffect(() => {
    refreshProjects();
  }, []);

  if (!projects.value.length) return <p>Loading…</p>;

  return (
    <div class="flex gap-8 py-6">
      <ul>
        <li>
          <button
            type="button"
            onClick={() => createProject.value = true}
          >
            Create Project
          </button>
        </li>
        {projects.value.map((name) => (
          <li
            key={name}
            onClick={() => selectedId.value = name}
            class="cursor-pointer hover:bg-gray-100 p-2 rounded"
          >
            {name}
          </li>
        ))}
      </ul>

      {selectedId.value && (
        <ProjectDetail
          id={selectedId.value}
          onDeleted={() => {
            refreshProjects();
            selectedId.value = null;
          }}
        />
      )}

      {createProject.value && (
        <CreateProject
          onCreated={() => {
            refreshProjects();
            createProject.value = false;
          }}
        />
      )}
    </div>
  );
}
