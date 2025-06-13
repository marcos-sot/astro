// @ts-check
import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({  
  site: "https://example.com",
  integrations: [preact(), vue()]
});