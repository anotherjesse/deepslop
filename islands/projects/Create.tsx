interface CreateProjectProps {
  onCreated: () => void;
}

export default function CreateProject({ onCreated }: CreateProjectProps) {
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
    }).then((r) => r.json()).then(() => {
      onCreated();
    });
  };

  return (
    <div class="border-l pl-8">
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
        <label class="flex flex-col gap-2">
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
  );
}
