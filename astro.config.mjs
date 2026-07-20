import { defineConfig } from 'astro/config';
import cloudflare from '@astrojs/cloudflare';
import tailwindcss from '@tailwindcss/vite';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import partytown from '@astrojs/partytown';

export default defineConfig({
  output: 'static',
  adapter: cloudflare(),
  integrations: [
    partytown({ config: { forward: ['dataLayer.push', 'gtag'] } }),
    react(),
    sanity({
      projectId: 'pgcr1bh7',
      dataset: 'production',
      useCdn: false,
      apiVersion: '2026-07-20',
      studioBasePath: '/admin',
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
