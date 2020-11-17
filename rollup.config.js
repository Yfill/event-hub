import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import babel from '@rollup/plugin-babel';
import { terser } from 'rollup-plugin-terser';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

const isProduction = process.env.NODE_ENV === 'production';
const basePlugins = [
  typescript(),
  resolve(),
  commonjs(),
  babel({
    exclude: [
      'node_modules/**',
    ],
    babelHelpers: 'bundled',
    extensions: [
      '.ts',
    ],
  }),
];
const developmentPlugins = [];
const productionPlugins = [
  terser(),
];
export default {
  input: './src/index.ts',
  output: {
    name: 'EventHub',
    format: 'umd',
    file: isProduction ? 'dist/index.js' : 'node_modules/.event-hub/dist/index.js',
    sourcemap: !isProduction,
    banner: `/*! ${pkg.name} v${pkg.version} | ${new Date().toGMTString()} | ${pkg.homepage} */`,
  },
  plugins: [
    ...basePlugins,
    ...(
      isProduction
        ? productionPlugins
        : developmentPlugins
    ),
  ],
};
