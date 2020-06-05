const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  /* here you can define another js file */
  entry: {
    index: "./src/js/main.js",
    experience: "./src/js/experience.js",
  },
  output: {
    filename: "[name].[hash:8].js",
    path: __dirname + "/dist",
  },
  module: {
    rules: [
      {
        test: [/.js$/],
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "img/[name].[hash:8].[ext]",
            },
          },
        ],
      },
    ],
  },

  devServer: {
    port: 8080,
  },

  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "public" }],
    }),

    /* here you can define another html file and its dependencies */
    new HtmlWebpackPlugin({
      template: "./src/pages/index.html",
      inject: true,
      chunks: ["index"],
      filename: "index.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/pages/indexEN.html",
      inject: true,
      chunks: ["index"],
      filename: "indexEN.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/pages/contactEN.html",
      inject: true,
      chunks: ["index"],
      filename: "contactEN.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/pages/contactPL.html",
      inject: true,
      chunks: ["index"],
      filename: "contactPL.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/pages/experiencePL.html",
      inject: true,
      chunks: ["experience"],
      filename: "experiencePL.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/pages/experienceEN.html",
      inject: true,
      chunks: ["experience"],
      filename: "experienceEN.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/pages/skillsEN.html",
      inject: true,
      chunks: ["index"],
      filename: "skillsEN.html",
    }),

    new HtmlWebpackPlugin({
      template: "./src/pages/skillsPL.html",
      inject: true,
      chunks: ["index"],
      filename: "skillsPL.html",
    }),
  ],
};
