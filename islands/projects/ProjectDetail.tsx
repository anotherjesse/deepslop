import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { type Project } from "@/incus.ts";

export default function ProjectDetail(
  { id, onDeleted }: { id: string; onDeleted: () => void },
) {
  const selectedDetail = useSignal<Project | null>(null);

  useEffect(() => {
    fetch(id).then((r) => r.json()).then((data) => {
      selectedDetail.value = data;
    });
  }, [id]);

  if (!selectedDetail.value) return null;

  return (
    <div class="border-l pl-8">
      <button
        type="button"
        onClick={() => {
          if (!id) return;
          if (!confirm("Really delete this project?")) return;
          fetch(id, { method: "DELETE" })
            .then((r) => r.ok && (onDeleted()));
        }}
      >
        delete
      </button>
      <dl>
        {Object.entries(selectedDetail.value.config ?? {}).map(
          ([key, value]) => (
            <>
              <dt>{key}</dt>
              <dd>{value}</dd>
            </>
          ),
        )}
      </dl>
    </div>
  );
}
