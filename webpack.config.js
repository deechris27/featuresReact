const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.join(__dirname, '/dist'),
        filename: 'index_bundle.js'
    },
    devtool: 'source-map',
    module:{
        rules:[
            {test: /\.jsx$/, use:{loader:'babel-loader'}},
            {test: /\.js$/, use:{loader: 'babel-loader'}},
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    },
    plugins:[
        new htmlWebpackPlugin({
            template: './index.html'
        })
    ]
};