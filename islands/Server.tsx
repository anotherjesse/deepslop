import { useSignal } from "@preact/signals";
import { useEffect } from "preact/hooks";
import { type Server } from "../incus.ts";

export default function ServerIsland() {
  const server = useSignal<Server | null>(null);

  useEffect(() => {
    fetch("/1.0").then((res) => res.json()).then((data) => {
      console.log(data);
      server.value = data;
    });
  }, []);

  return (
    <div class="flex gap-8 py-6">
      {!server.value ? <p>Loading...</p> : (
        <div>
          <h1>name: {server.value.environment?.server_name}</h1>
          <p>version: {server.value.environment?.server_version}</p>
        </div>
      )}
    </div>
  );
}
