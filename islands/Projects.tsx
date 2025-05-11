/** islands/InstancesIsland.tsx */
import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { type Project } from "../incus.ts";

export default function ProjectsIsland() {
  const projects = useSignal<string[]>([]); // list of names
  const selectedId = useSignal<string | null>(null); // the clicked name
  const selectedDetail = useSignal<Project | null>(null); // fetched details
  const createProject = useSignal<boolean>(false); // create project

  const refreshProjects = () => {
    fetch("/1.0/projects")
      .then((r) => r.json())
      .then((links) => {
        projects.value = links;
      });
  };

  useEffect(refreshProjects, []);

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
    const github = form.github.value;
    fetch("/1.0/projects", {
      method: "POST",
      body: JSON.stringify({
        name,
        config: { "user.github": github },
      }),
    }).then((r) => r.json()).then(refreshProjects);
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
          <h2 class="text-xl font-bold mb-4">{selectedDetail.value.name}</h2>
          <button
            onClick={() => {
              if (!selectedId.value) return;
              fetch(selectedId.value, {
                method: "DELETE",
              }).then(
                (r) => {
                  if (r.ok) {
                    fetch("/1.0/projects")
                      .then((r) => r.json())
                      .then((links) => {
                        projects.value = links;
                      });
                    selectedId.value = null;
                    selectedDetail.value = null;
                  }
                },
              );
            }}
          >
            delete
          </button>
          <table>
            {Object.entries(selectedDetail.value.config ?? {}).map(
              ([key, value]) => (
                <tr>
                  <td>{key}</td>
                  <td>{value}</td>
                </tr>
              ),
            )}
          </table>
        </div>
      )}

      {createProject.value && (
        <div class="border-l pl-8">
          <h2>Create Project</h2>
          <form onSubmit={createProjectPost}>
            <label class="flex flex-col gap-2">
              Name
              <input
                type="text"
                name="name"
                autofocus
                class="border-2 border-gray-300 rounded-md p-2"
              />
            </label>
            <label>
              Github
              <input
                type="text"
                name="github"
                class="border-2 border-gray-300 rounded-md p-2"
              />
            </label>
            <button type="submit">Create</button>
          </form>
        </div>
      )}
    </div>
  );
}
