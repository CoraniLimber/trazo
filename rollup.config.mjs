export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/trazo.esm.js',
      format: 'esm'
    },
    {
      file: 'dist/trazo.umd.js',
      format: 'umd',
      name: 'Trazo',
      exports: 'named'
    }
  ]
};