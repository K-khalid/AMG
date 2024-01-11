import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import eslint from "vite-plugin-eslint";
import { BASEURL } from "./src/utils/Base";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslint()],
  base: `/${BASEURL}/`,
});
