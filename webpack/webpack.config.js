/*
npx webpack --watch: 작업하고 있는 파일들이 변형되었을 때 그것을 감지하여 자동으로 컴파일
*/

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { template } = require("@babel/core");

module.exports = {
  mode: "development",
  /* 하나 이상의 entry를 설정할 경우, filename 변경 할 것  */
  entry: { index: "./source/index.js", about: "./source/about.js" },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name]_bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        /* 
        뒤 쪽에 있는 loader가 먼저 실행된다.
        1. 물리적인 css파일을 읽어와서 webpack으로 가져오는 loader가 실행(css-loader)
        2. 실행된 파일을 받아서 그것을 스타일로 적용하는 loader가 실행 (style-loader)
        */
        use: [
          // style-loader
          { loader: "style-loader" },
          // css-loader
          {
            loader: "css-loader",
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./source/index.html",
      filename: "./index.html",
      chunks: ["index"],
    }),
    new HtmlWebpackPlugin({
      template: "./source/about.html",
      filename: "./about.html",
      chunks: ["about"],
    }),
  ],
};
