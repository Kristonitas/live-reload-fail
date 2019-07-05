"use strict";

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
  };

  config.devServer = {
    port: 7777,
    open: true,
    liveReload: true, // true is the default value
    writeToDisk: true
  };

  return config;
};
