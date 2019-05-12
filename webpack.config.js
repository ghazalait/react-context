const path = require("path");
const webpack = require("webpack");

module.exports = {
    entry: "./src/index.js",
    mode: "development",
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          loader: "babel-loader",
          options: { presets: ["@babel/env"] }
        },
        {
          test: /\.scss$/,
          use: [
            {
              loader: "style-loader" // creates style nodes from JS strings
            },
            {
              loader: "css-loader" // translates CSS into CommonJS
            },
            {
              loader: "sass-loader" // compiles Sass to CSS
            }
          ]
        }
    ]
    },
    resolve: {
      extensions: ["*", ".js", ".jsx"],
      modules: [path.resolve("./src"), path.resolve("./node_modules")]
    },
    output: {
      path: path.resolve(__dirname, "dist/"),
      publicPath: "/dist/",
      filename: "bundle.js"
    },
    devServer: {
      contentBase: path.join(__dirname, "public/"),
      inline: true,
      host: "0.0.0.0",
      port: 3000,
      publicPath: `http://localhost:3000/dist/`,
      hotOnly: true,
      historyApiFallback: true,
      disableHostCheck: true,
      headers: { "Access-Control-Allow-Origin": "*" }
    },
    plugins: [new webpack.HotModuleReplacementPlugin()]
  };