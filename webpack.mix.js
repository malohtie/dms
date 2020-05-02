const mix = require('laravel-mix');
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
mix.js('resources/js/app.js', 'public/js')
mix.webpackConfig({
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js/src'),
            '@assets': path.resolve(__dirname, 'resources/assets'),
            '@scss': path.resolve(__dirname, 'resources/scss')
        }
    }
})
mix.sass('resources/sass/main.scss', 'public/css');

if (mix.inProduction()) {
    mix.version();
    mix.webpackConfig({
        output: {
            publicPath: '/',
            chunkFilename: 'js/chunks/[name].[chunkhash].js',
        }
    });
    mix.setResourceRoot("/");
    mix.sourceMaps();
}
else{
    mix.webpackConfig({
        output: {
            chunkFilename: 'js/chunks/[name].js',
        }
    });
    mix.sourceMaps();
}
