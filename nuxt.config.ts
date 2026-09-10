import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  extends: ['@kirchdev/duxt'],
  compatibilityDate: '2026-09-02',
  vite: process.env.DUXT_TUNNEL
    ? { server: { hmr: { protocol: 'wss', clientPort: 443 } } }
    : undefined
});
