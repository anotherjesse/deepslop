import type { Metadata } from "./incus.ts";

export const jsonToResponse = (json: Metadata) => {
  return new Response(JSON.stringify(json, null, 2), {
    headers: {
      "Content-Type": "application/json",
    },
  });
};
