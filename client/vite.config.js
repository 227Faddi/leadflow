import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8000,
  },
  future: {
    /* any enabled future flags */
    v7_skipActionErrorRevalidation: true, // <-- early opt-in
  },
});
