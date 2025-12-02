import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), sitemap(), tailwind(), mdx()],
  output: 'server',
  adapter: vercel(),
import vercel from '@astrojs/vercel';


import mdx from '@astrojs/mdx';


// https://astro.build/config
export default defineConfig({
  integrations: [react(), partytown({config: {debug: false }}), sitemap(), mdx()],
  output: 'static',
  site: 'https://www.invisibletext.me',

  i18n: {
    defaultLocale: 'en',
    locales: [
      'en', 'es', 'fr', 'de', 'pt', 'ru', 'ko', 'tr', 'nl', 'it', 'id', 'my', 'fi', 'ja', 'hu', 'vi', 'th'
    ],
    routing: {
      prefixDefaultLocale: false
    }
  },
  trailingSlash: 'never'
});

  trailingSlash: 'never',
  adapter: vercel(),
});
