import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// import svgr from "vite-plugin-svgr";
import svgLoader from "vite-svg-loader";

export default defineConfig({
  plugins: [
    vue(),
    // svgr(),
    svgLoader(),
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
