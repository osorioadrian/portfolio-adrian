// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  base: '/portfolio-adrian/', 
  site: 'https://osorioadrian.github.io',
  vite: {
    plugins: [tailwindcss()]
  },
  trailingSlash: 'always',
  redirects: {
    "/": "/portfolio-adrian/es",
  },
});
