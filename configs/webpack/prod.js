// production config
const { merge } = require("webpack-merge");
const { resolve } = require("path");
const dotenv = require('dotenv')

const commonConfig = require("./common");

dotenv.config();

module.exports = merge(commonConfig, {
  mode: "production",
  output: {
    filename: "js/bundle.[contenthash].min.js",
    path: resolve(__dirname, "../../dist"),
    publicPath: "/",
  },
  devtool: "source-map",
  plugins: [new ReactRefreshPlugin(),
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(process.env)
   })
  ],
  externals: {
    react: "React",
    "react-dom": "ReactDOM",
  },
});
