import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://rede.loopsbrasil.com.br',
  integrations: [tailwind(), sitemap()],
});
