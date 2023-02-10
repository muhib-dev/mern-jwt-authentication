import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import jsconfigPaths from "vite-jsconfig-paths";
import dns from "dns";

dns.setDefaultResultOrder("verbatim"); // for localhost

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), jsconfigPaths()],
});
