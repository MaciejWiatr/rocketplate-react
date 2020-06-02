const path = require("path");
const common = require("./webpack.common");
const merge = require("webpack-merge");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = merge(common, {
    mode: "development",
    devtool: "inline-source-map",
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "../dist"),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "../src/template.html"),
        }),
    ],
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: [
                    "style-loader", //3. Inject styles into DOM
                    "css-loader", //2. Turns css into commonjs
                    "sass-loader", //1. Turns sass into css
                ],
            },
        ],
    },
});
