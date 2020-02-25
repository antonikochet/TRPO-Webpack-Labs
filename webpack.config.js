const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    mode: "development",
    plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html'
        })
    ],
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader','css-loader']
            },
        ]
    },

    devServer: {
        contentBase: './dist',
        port: 10000,
        inline: true,
    }
}