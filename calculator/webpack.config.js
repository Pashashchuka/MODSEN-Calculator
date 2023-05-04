/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
  entry: "./src/index.tsx",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "build"),
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(ts|js|jsx|tsx)?$/,
        use: {
          loader: "babel-loader",
          options: {
            presets: [
              "@babel/preset-env",
              "@babel/preset-react",
              "@babel/preset-typescript",
            ],
          },
        },
      },
    ],
  },
  resolve: {
    alias: {
      components: path.resolve(__dirname, "src/components/"),
      constants: path.resolve(__dirname, "src/constants/"),
      locales: path.resolve(__dirname, "public/locales/"),
      router: path.resolve(__dirname, "src/router/"),
      styles: path.resolve(__dirname, "src/styles/"),
      router: path.resolve(__dirname, "src/router"),
      types: path.resolve(__dirname, "src/types/"),
      utils: path.resolve(__dirname, "src/utils/"),
      pages: path.resolve(__dirname, "src/pages/"),
      store: path.resolve(__dirname, "src/store/"),
      store: path.resolve(__dirname, "src/store"),
    },
    extensions: [".*", ".js", ".ts", ".json", ".jsx", ".tsx"],
  },
  plugins: [
    new ESLintPlugin({
      emitError: true,
      emitWarning: true,
      failOnError: true,
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
  devServer: {
    historyApiFallback: true,
    static: {
      directory: path.join(__dirname, "build"),
    },
    port: 3000,
  },
};