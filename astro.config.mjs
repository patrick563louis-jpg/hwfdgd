// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import react from '@astrojs/react';
import keystatic from '@keystatic/astro';
import vercel from '@astrojs/vercel';
import markdoc from '@astrojs/markdoc';

// https://astro.build/config
export default defineConfig({
  site: 'http://khadamatelai.xyz',
  adapter: vercel(),
  integrations: [mdx(), sitemap(), react(), keystatic(), markdoc()],
  vite: {
    optimizeDeps: {
      exclude: ['@keystatic/core', '@keystatic/astro'],
    },
  },
});
