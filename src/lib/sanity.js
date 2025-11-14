import { createClient } from "@sanity/client";

export const client = createClient({
  projectId: import.meta.env.PUBLIC_SANITY_PROJECT_ID, // <--- Lee del archivo .env
  dataset: import.meta.env.PUBLIC_SANITY_DATASET,     // <--- Lee del archivo .env
  useCdn: true,
  apiVersion: "2023-05-03",
});