const path =require('path');
module.exports = {
  target: "node",
  entry: "./src/index.js",
  output: {
    filename: 'app_bundle.js',
    path: path.resolve(__dirname, "../public/app"),
    publicPath: "/public/app"
  },
  mode: 'development',
  watch: true,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: "/node_modules/",
      }
    ]
  },
}