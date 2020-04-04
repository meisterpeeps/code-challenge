const event = process.env.npm_lifecycle_event;
const path = require('path');

const mode = event === "build:dev" 
    ? "development" 
    : "production";

module.exports = {
    mode,
    entry: {index: './index.tsx' },
    output: {
        path: path.resolve(__dirname, './public/'),
        filename: '[name].bundle.js'
    },
    devtool: 'source-map',
    resolve: {
        extensions: ['.ts', '.tsx','.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)$/,
                loader: 'ts-loader',
                exclude: '/node_modules/'
            },
            { 
                enforce: "pre", 
                test: /\.js$/, 
                loader: "source-map-loader",
                exclude: '/node_modules/' 
            }
        ]
    }
}