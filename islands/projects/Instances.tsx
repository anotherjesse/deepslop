import { type Instance } from "@/incus.ts";
import { useEffect } from "preact/hooks";
import { useSignal } from "@preact/signals";

export default function ProjectInstances({ name }: { name: string }) {
  const instanceIds = useSignal<string[]>([]);

  useEffect(() => {
    fetch(`/1.0/instances?filter=${name}`)
      .then((r) => r.json())
      .then((instances) => {
        instanceIds.value = instances;
      });
  }, [name]);

  return (
    <div class="border-t pt-8">
      <h2 class="text-lg font-bold">Instances</h2>
      <ul>
        {instanceIds.value.map((id) => <li key={id}>{id}</li>)}
      </ul>
      <button
        type="button"
        onClick={() => {
          fetch(`/1.0/instances?project=${name}`, {
            method: "POST",
            body: JSON.stringify({
              description: "test",
              name: "test",
              "source": {
                "type": "image",
                "fingerprint": "17776c60882c",
              },
            }),
          });
        }}
      >
        Create Instance
      </button>
    </div>
  );
}
