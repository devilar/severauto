const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    devServer: {
        port:3200,
        historyApiFallback: true,
    },
    resolve: {
        extensions: [ '.tsx', '.ts', '.js' ],
    },
    mode:"development",
    entry:('./src/index.tsx'),
    output: {
        path:path.resolve(__dirname,'dist'),
        filename: "[contenthash].[name].index.js",
    },
    plugins: [
        new HtmlWebpackPlugin({template: "./src/index.html"}),
        new CleanWebpackPlugin()],

    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
            {
                test: /\.(ts|tsx)$/i,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ["@babel/preset-typescript"]
                    }
                }
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
            }

        ],
    },

}