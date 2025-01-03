// @ts-check
import { defineConfig } from "astro/config";

import react from "@astrojs/react";
import tailwind from "@astrojs/tailwind";

import compress from "astro-compress";

import node from "@astrojs/node";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
// @see https://docs.astro.build/ja/reference/configuration-reference/
export default defineConfig({
  server: {
    host: true,
    open: true,
    headers: {
      //
      "accept-language": "ja",
    },
  },

  integrations: [react(), tailwind(), compress(), sitemap()],

  // @see https://docs.astro.build/ja/guides/prefetch/
  prefetch: {
    defaultStrategy: "tap",
  },

  // astro-sitemap
  //site: 'https://example.com',

  // astro-node
  output: "server",
  adapter: node({
    mode: "middleware",
  }),

  build: {
    // NOTE: dev環境以降で必要
    //assetsPrefix: 'https://cdn.example.com'
  },
});
