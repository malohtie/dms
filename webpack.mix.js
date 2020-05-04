const mix = require('laravel-mix');
const config = require('./webpack.config');
const obfuscator = require('webpack-obfuscator');
require('dotenv').config();
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.js('resources/js/app.js', 'public/js');
mix.sass('resources/sass/main.scss', 'public/css');
mix.webpackConfig(config);
mix.setResourceRoot("/");

if (mix.inProduction()) {
    mix.version();
    mix.sourceMaps();
    mix.webpackConfig({
        output: {
            publicPath: '/',
            chunkFilename: 'js/chunks/[name].[chunkhash].js',
        },
        plugins: [
            new obfuscator({
                rotateUnicodeArray: true
            })
        ]
    });
}
else{
    mix.webpackConfig({
        output: {
            chunkFilename: 'js/chunks/[name].js',
        }
    });
}
