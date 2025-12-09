// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://shriram.dev',
  vite: {
    plugins: [tailwindcss()]
  },
  output: 'server',
  integrations: [mdx({
    syntaxHighlight: false,
    rehypePlugins: [
      rehypeSlug,
      [rehypePrettyCode, { theme: 'github-light' }]
    ]
  }), sitemap()],
  adapter: vercel(),
});