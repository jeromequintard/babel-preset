const env = process.env.BABEL_ENV || process.env.NODE_ENV;

if (env !== 'test') {
  module.exports = {
    presets: [
      [ require.resolve('babel-preset-es2015'), { modules: false } ],
      require.resolve('babel-preset-react'),
    ],
    plugins: [
      [ require.resolve('babel-plugin-transform-object-rest-spread'), { useBuiltIns: true } ],
      [ require.resolve('babel-plugin-transform-runtime') ],
      require.resolve('babel-plugin-syntax-dynamic-import'),
    ]
  };
} else {
  module.exports = {
    presets: [
      require('babel-preset-es2015'),
      require.resolve('babel-preset-react'),
    ]
  };
}