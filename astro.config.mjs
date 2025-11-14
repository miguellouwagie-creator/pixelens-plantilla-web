// @ts-check
import { defineConfig } from 'astro/config';
import { loadEnv } from 'vite'; // <--- CORRECCIÓN: Importar desde 'vite'
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';

// Cargamos las variables de entorno del archivo .env
// process.cwd() le dice que busque en la carpeta actual
const { PUBLIC_SANITY_PROJECT_ID, PUBLIC_SANITY_DATASET } = loadEnv(process.env.NODE_ENV || 'development', process.cwd(), "");

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    sanity({
      projectId: PUBLIC_SANITY_PROJECT_ID, 
      dataset: PUBLIC_SANITY_DATASET,      
      useCdn: true,
      apiVersion: '2023-05-03',
    }),
  ],
});