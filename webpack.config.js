// Ce fichier contient le début d'une configuration webpack dans le but de vous aider.
// Vous avez bien entendu le droit de la modifier partiellement ou totalement :)

const path = require('path');

// then build specific webpack config for environment
module.exports = function(appPaths, dotenv) {
    return {
        resolve: {
            extensions: ['.js', '.jsx'],
            modules: [
                path.resolve('.'),
                'node_modules'
            ]
        },
        // app entry point
        entry: {
            app: 'src/index.js',
        },
        output: {
            filename: '[name].min.js',
            path: path.join(path.resolve('.'), 'dist')
        },
        mode: 'production',
        module: {},
        plugins: [],

        devServer: {
            contentBase: path.join('.', 'dist'),
            host: 'localhost',
            port: 8080
        }
    };
};
