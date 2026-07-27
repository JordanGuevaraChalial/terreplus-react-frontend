import { defineConfig } from 'vite';

const createProxy = (target, rewrite) => ({
  target,
  changeOrigin: true,
  secure: false,
  configure: (proxy) => {
    proxy.on('proxyReq', (proxyReq) => {
      proxyReq.removeHeader('origin');
      proxyReq.removeHeader('Origin');
    });
  },
  ...(rewrite ? { rewrite } : {}),
});

export default defineConfig({
  server: {
    port: 5173,
    strictPort: true,
    proxy: {
      '/api/auth': createProxy('http://127.0.0.1:3001'),
      '/api/user': createProxy('http://127.0.0.1:3001'),
      '/api/terrain': createProxy('http://127.0.0.1:3002'),
      '/api/dashboard': createProxy('http://127.0.0.1:3002'),
      '/api/ml': createProxy('http://127.0.0.1:8000', (path) => path.replace(/^\/api\/ml/, '/api/v1')),
    },
  },
});
