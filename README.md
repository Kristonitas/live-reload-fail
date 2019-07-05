# Live reload fail

This is a minimum project used to test `webpack-dev-server` and `html-webpack-plugin` combo when using `"web"` or `"node"` as compilation target (inside `webpack.config.js`). When using `"node"` target, live reloading doesn't work and there are no obvious warnings inside the terminal or browser console.

To run the server with `"web"` target:
```
$ npm start
or
$ npm run start
```

To run with `"node"` target:
```
$ npm run start:node
```

`html-webpack-plugin` helps to load bundles and extra js from `webpack-dev-server` and seems not to be the cause of the issue

## What this highlights?

Setting `target` to `"node"` cancels the option of `devServer.liveReload` being set to `true`, (`true` is also the default value, [devServer.liveReload](https://webpack.js.org/configuration/dev-server/#devserverlivereload)).
