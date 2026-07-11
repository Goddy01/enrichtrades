import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const siteUrl = (process.env.VITE_SITE_URL ?? 'https://enrichtrades.vercel.app').replace(/\/$/, '');

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'html-site-url',
      transformIndexHtml(html) {
        return html.replaceAll('__SITE_URL__', siteUrl);
      },
    },
  ],
  server: {
    proxy: {
      '/api/stock-quotes': {
        target: 'https://query1.finance.yahoo.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/stock-quotes/, '/v8/finance/spark'),
        configure: (proxy) => {
          proxy.on('proxyReq', (proxyReq) => {
            proxyReq.setHeader('User-Agent', 'Mozilla/5.0');
          });
        },
      },
    },
  },
});
