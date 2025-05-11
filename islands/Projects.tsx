/** islands/InstancesIsland.tsx */
import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { type Project } from "../incus.ts";

export default function ProjectsIsland() {
  const projects = useSignal<string[]>([]); // list of names
  const selectedId = useSignal<string | null>(null); // the clicked name
  const selectedDetail = useSignal<Project | null>(null); // fetched details
  const createProject = useSignal<boolean>(false); // create project

  useEffect(
    () => {
      fetch("/1.0/projects")
        .then((r) => r.json())
        .then((links) => {
          projects.value = links;
        });
    },
    [],
  );

  useEffect(() => {
    if (!selectedId.value) {
      selectedDetail.value = null;
      return;
    }

    fetch(selectedId.value).then((r) => r.json()).then((data) => {
      selectedDetail.value = data;
    });
  }, [selectedId.value]);

  if (!projects.value.length) return <p>Loading…</p>;

  const createProjectPost = (e: Event) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const name = form.name.value;
    fetch("/1.0/projects", {
      method: "POST",
      body: JSON.stringify({ name }),
    }).then((r) => r.json()).then((data) => {
      fetch("/1.0/projects")
        .then((r) => r.json())
        .then((links) => {
          projects.value = links;
        });
    });
    createProject.value = false;
  };

  return (
    <div class="flex gap-8 py-6">
      <ul>
        <li>
          <a onClick={() => createProject.value = true}>Create Project</a>
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

      {selectedDetail.value && (
        <div class="border-l pl-8">
          <h2 class="text-xl font-bold mb-4">Project details</h2>
          <pre>{JSON.stringify(selectedDetail.value, null, 2)}</pre>
        </div>
      )}

      {createProject.value && (
        <div class="border-l pl-8">
          <h2>Create Project</h2>
          <form onSubmit={createProjectPost}>
            <input
              type="text"
              name="name"
              autofocus
              class="border-2 border-gray-300 rounded-md p-2"
            />
            <button type="submit">Create</button>
          </form>
        </div>
      )}
    </div>
  );
}
