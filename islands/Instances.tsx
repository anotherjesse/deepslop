/** islands/InstancesIsland.tsx */
import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { type Instance } from "../incus.ts";

export default function InstancesIsland() {
  const instances = useSignal<string[]>([]); // list of names
  const selectedId = useSignal<string | null>(null); // the clicked name
  const selectedDetail = useSignal<Instance | null>(null); // fetched details

  useEffect(
    () => {
      fetch("/1.0/instances")
        .then((r) => r.json())
        .then((links) => {
          instances.value = links;
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

  if (!instances.value.length) return <p>Loading…</p>;

  return (
    <div class="flex gap-8 py-6">
      <ul>
        {instances.value.map((name) => (
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
          <h2 class="text-xl font-bold mb-4">Instance details</h2>
          <p>Name: {selectedDetail.value.name}</p>
          <p>
            OS: {selectedDetail.value.config?.["image.os"]}{" "}
            {selectedDetail.value.config?.["image.release"]}
          </p>
          <p>Status: {selectedDetail.value.status}</p>
          <p>Type: {selectedDetail.value.type}</p>
          <p>Architecture: {selectedDetail.value.architecture}</p>
          <p>Created at: {selectedDetail.value.created_at}</p>
          <p>Last used: {selectedDetail.value.last_used_at}</p>
        </div>
      )}
    </div>
  );
}
