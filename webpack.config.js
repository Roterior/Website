const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

var htmlPlugin = new HtmlWebpackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

module.exports = {
    devServer: {
        inline:true,
        port: 8081
        // historyApiFallback: true,
        // noInfo: true,
        // proxy: {
        //     '/' : 'http://localhost:8082',
        //     secure: false
        // }
    },
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/build',
        filename: 'index_bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                'file-loader',
                {
                    loader: 'image-webpack-loader',
                    options: {
                    bypassOnDebug: true, // webpack@1.x
                    disable: true, // webpack@2.x and newer
                    },
                },
              ],
            },
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            }
        ],
    },
    resolve: {
        extensions: ['.less', '.js', '.jsx']
    },
    plugins: [new HtmlWebpackPlugin({ template: "src/index.html" })]
};
