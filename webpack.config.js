"use strict";

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = (env = {}) => {
  const config = {
    entry: ["./src/index.js"],
    mode: env.development ? "development" : "production",
    target: env.node ? "node" : "web",
    devtool: env.development ? "inline-source-map" : false,
    output: {
      filename: `out.js`
    },
    resolve: {
      extensions: [".js"],
      modules: ["node_modules", "src"]
    },
    module: {
      rules: []
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src/index.html")
      })
    ]
  };

  config.devServer = {
    port: 7777,
    open: true,
    liveReload: true
  };

  return config;
};
