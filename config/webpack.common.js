const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname, "../src", "index.js"),
    },
    output: {
        filename: '[name].[hash].js',
        path: path.resolve(__dirname, '../dist'),
        publicPath: "/"
    },
    devServer: {
        port: 4227,
        historyApiFallback: true,
        overlay: true,
        open: true,
    },
    performance: {
        hints: 'warning'
    },
    module: {
        rules: [{
                test: /\.(js)$/,
                exclude: [/node_modules/],
                use: [{
                    loader: "babel-loader"
                }]
            },
            {
                test: /.*\.(gif|png|jp(e*)g)$/i,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        name: "images/[name].[ext]"
                    }
                }]
            },
        ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: path.resolve(__dirname, '../public', 'index.html'),
            title: 'Progessive Web applications'
        }),
        new WorkboxPlugin.GenerateSW({
            // these options encourage the ServiceWorkers to get in there fast 
            // and not allow any straggling "old" SWs to hang around
            clientsClaim: true,
            skipWaiting: true

        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    },
}