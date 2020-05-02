const path = require('path')

module.exports = {
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.(js|vue)$/,
                loader: 'eslint-loader',
                exclude: /node_modules/,
                options: {
                    fix: true,
                    cache: false,
                    //...
                }
            }
        ]
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'resources/js/src'),
            '@assets': path.resolve(__dirname, 'resources/assets'),
            '@sass': path.resolve(__dirname, 'resources/sass')
        }
    }
}
