import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "https://come-and-see.github.io/test-kartki-tvitiv",
  plugins: [react()],
});
