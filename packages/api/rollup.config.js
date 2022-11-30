import typescript from "@rollup/plugin-typescript";
import postcss from "rollup-plugin-postcss";
import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";
import external from "rollup-plugin-peer-deps-external";
import { nodeResolve } from "@rollup/plugin-node-resolve";
// import less from 'rollup-plugin-less';
// import { terser } from 'rollup-plugin-terser';
import pkg from "./package.json";
export default {
  input: "src/index.tsx",
  output: [
    {
      file: pkg.module,
      format: "es",
      sourcemap: true,
    },
    {
      file: pkg.main,
      format: "cjs",
      sourcemap: true,
    },
  ],
  external: ["react"],
  plugins: [
    json(),
    postcss({
      // extract: true,
      // modules: {
      //     localsConvention: 'camelCase',
      // },
      autoModules: true,
      use: ["less"],
    }),
    external({
      includeDependencies: true,
    }),
    typescript({
      tsconfig: "./tsconfig.build.json",
    }),
    nodeResolve(),
    image(),
    commonjs(),
    // terser(),
  ],
};
