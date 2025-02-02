// @ts-check
import { defineConfig, passthroughImageService } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), react()],
  experimental: {
    svg: true
  },
  image: {
    service:passthroughImageService()
  }
});