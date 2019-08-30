const HtmlWebpackPlugin = require('html-webpack-plugin')
// const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')
const { CheckerPlugin } = require('awesome-typescript-loader')

module.exports = {
    entry: {
        app: './src/index.tsx'
    },
    output: {
        filename: 'app.[chunkhash:8].js'
    },
    resolve: {
        extensions: ['.js', '.ts', '.tsx']
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/i,
                use: [{
                    // loader: 'ts-loader',
                    loader: 'awesome-typescript-loader',
                    options: {
                        // 只做语言转换，不做类型检查，（缺点也是不做类型检查）
                        transpileOnly: true
                    }
                }],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/tpl/index.html'
        }),
        // new ForkTsCheckerWebpackPlugin(),
        new CheckerPlugin()
    ],
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    }
}