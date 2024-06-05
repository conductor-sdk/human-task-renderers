/*
* Copyright 2024 Conductor Authors.
* <p>
* Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with
* the License. You may obtain a copy of the License at
* <p>
* http://www.apache.org/licenses/LICENSE-2.0
* <p>
* Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on
* an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the
* specific language governing permissions and limitations under the License.
*/


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
        "**/*.stories.tsx",
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
