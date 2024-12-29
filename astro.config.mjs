// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

import compress from 'astro-compress';

import node from '@astrojs/node';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  server: {
    host: true,
    open: true,
  },

  integrations: [react(), tailwind(), compress(), sitemap()],

  // astro-sitemap
  //site: 'https://example.com',

  // astro-node
  adapter: node({
    mode: 'standalone'
  })
});