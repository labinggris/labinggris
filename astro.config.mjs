import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import cloudflare from '@astrojs/cloudflare';
import sanity from '@sanity/astro';
import react from '@astrojs/react';
import partytown from '@astrojs/partytown';

export default defineConfig({
  // Static output is the default, ensuring maximum speed
  output: 'static',
  adapter: cloudflare(),
  integrations: [
    tailwind(),
    partytown({
      config: { forward: ['dataLayer.push', 'gtag'] },
    }),
    react(),
    sanity({
      projectId: 'pgcr1bh7', // Replace with your ID
      dataset: 'production',
      useCdn: false, // Set to false for static builds
      apiVersion: '2026-07-20',
      studioBasePath: '/admin', // Embeds the CMS dashboard at yoursite.com/admin
    }),
  ]
});