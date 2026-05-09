import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import path from "node:path";

// https://astro.build/config
export default defineConfig({
  site: 'https://anuraggaur29.netlify.app',
  integrations: [sitemap(), tailwind(), react()],
  vite: {
    resolve: {
      alias: {
        "@": path.resolve("./src"),
        "@components": path.resolve("./src/components"),
        "@layouts": path.resolve("./src/layouts"),
      },
    },
    build: {
      sourcemap: false
    }
  }
});
