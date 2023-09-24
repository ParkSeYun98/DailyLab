import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import path from "path";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      injectRegister: "auto",
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/j9b104\.p\.ssafy\.io\/dev\/api\/oauth2\//,
            handler: "NetworkFirst",
            options: {
              cacheName: "oauth2-cache",
            },
          }]
      },
      devOptions: {
        enabled: true,
        type: "module",
      },
      injectManifest: {
        swSrc: path.resolve(__dirname, 'src/service-worker.js'),
        injectionPoint: undefined
      },
      manifest: {
        icons: [
          {
            src: "icons/coco_icon.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "public", replacement: path.resolve(__dirname, "public") },
    ],
  },
  define: {
    global: "window",
  },
});
