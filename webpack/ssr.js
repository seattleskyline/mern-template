// Server Side Render

const path =require('path');
const webpackNodeExternals = require('webpack-node-externals');
module.exports = {
  target: "node",
  entry: "./server.js",
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, "../bundle"),
    publicPath: "bundle"
  },
  mode: 'development',
  watch: true,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules/",
        use: {
          loader: 'babel-loader',
          options: {
            presets: ["@babel/preset-env"]
          }
        }
      }
    ],
  },
  externals: [webpackNodeExternals()],
}