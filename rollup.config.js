import babel from 'rollup-plugin-babel';

export default {
  input: 'src/index.js',
  plugins: [
    babel({
      presets: [['@babel/preset-env', {
        targets: {
          node: 6,
        },
      }],
      ],
    }),
  ],
  external: ['path', 'fs', 'builtin-modules', 'resolve', 'browser-resolve', 'is-module', 'rollup-pluginutils'],
  output: [
    { file: 'dist/rollup-plugin-local-resolve.cjs.js', format: 'cjs' },
    { file: 'dist/rollup-plugin-local-resolve.es.js', format: 'es' },
  ],
};
