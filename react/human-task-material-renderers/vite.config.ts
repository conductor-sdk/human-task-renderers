import { defineConfig } from "vite";
import { resolve } from "pathe";

export default defineConfig({
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.ts"),
      name: "Human Task Material Renderers",
      // the proper extensions will be added
      fileName: "human-task-material-renderers",
      formats: ["es", "umd", "cjs"],
    },
    rollupOptions: {
      onwarn(warning, warn) {
        if (warning.code === "MODULE_LEVEL_DIRECTIVE") {
          return;
        }
        warn(warning);
      },
    },
  },
});
