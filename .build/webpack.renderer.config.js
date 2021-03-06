const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const RENDER_PATH = path.resolve(__dirname, "../src/render/");
const DIST_PATH = path.resolve(__dirname, "../dist");
module.exports = env => {
  return {
    mode: env.NODE_ENV,
    target: "electron-renderer",
    entry: {
      render: path.resolve(RENDER_PATH, "./js/app.ts")
    },
    output: {
      path: DIST_PATH,
      filename: "[name].js"
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: [/node_modules/]
        }
      ]
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: path.resolve(DIST_PATH, "./index.html"),
        template: path.resolve(RENDER_PATH, "./index.html"),
        showErrors: true,
        inject: "body"
      })
    ],
    devtool: "source-map"
  };
};

// module.exports = config;
