const CircularDependencyPlugin = require('circular-dependency-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const path = require('path');
const projectRoot = '../';


module.exports = {
    entry: './src/index.ts',
    mode: 'production',
    // mode: 'development',
    // devtool: 'inline-source-map',
    devtool: false,
    resolve: {
        extensions: [ '.tsx', '.ts', '.js', '.d.ts'],
        extensionAlias: {
            ".js": [".js", ".ts"],
            ".cjs": [".cjs", ".cts"],
            ".mjs": [".mjs", ".mts"]
        },
        alias: {}
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                    silent: true
                },
                exclude: /node_modules/
            }
        ]
    },
    output: {
        filename: 'index.min.js',
        path: path.resolve(__dirname, 'browser'),
        library: { type: 'module' }
    },
    stats: {
        all: false,
        colors: true,
        errors: true,
        builtAt: true
    },
    optimization: {
        minimize: false
    },
    plugins: [
        // new BundleAnalyzerPlugin()
        // new CircularDependencyPlugin({
        //     exclude: /node_modules/,
        //     failOnError: true,
        //     allowAsyncCycles: false,
        //     // set the current working directory for displaying module paths
        //     cwd: process.cwd()
        // })
    ],
    experiments: { outputModule: true },
    externals: {
        react: 'module react',
    }
};