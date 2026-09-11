import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  base: process.env.VITE_BASE ?? '/',
  plugins: [react(), VitePWA({ registerType: 'prompt', includeAssets: ['icons/icon.svg'], manifest: { name: 'PR Lab', short_name: 'PR Lab', start_url: './#/path', scope: './', display: 'standalone', theme_color: '#0B0F14', background_color: '#0B0F14', icons: [{ src: 'icons/icon.svg', sizes: 'any', type: 'image/svg+xml', purpose: 'any' }] }, workbox: { globPatterns: ['**/*.{js,css,html,svg,json}'] } })]
});
