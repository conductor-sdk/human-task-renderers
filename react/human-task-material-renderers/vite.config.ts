import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import path from "path";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const packageJson = require("./package.json");

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      exclude: ["**/*.stories.tsx"],
    }),
  ],
  resolve: {
    alias: {
      components: `${path.resolve(__dirname, "./src/components/")}`,
    },
  },
  build: {
    minify: false,
    lib: {
      entry: path.resolve(__dirname, "src/components/index.ts"),
      name: "human-components",
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: [
        ...Object.keys(packageJson.devDependencies),
        ...Object.keys(packageJson.peerDependencies),
      ],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
    //Generates sourcemaps for the built files,
    //aiding in debugging.
    sourcemap: true,
    //Clears the output directory before building.
    emptyOutDir: true,
  },
});
