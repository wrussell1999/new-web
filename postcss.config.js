module.exports = {
    plugins: [
        require('cssnano')({
            preset: 'default',
        }),
        require('@fullhuman/postcss-purgecss')({
            content: [
                './assets/**/*.md',
                './content/**/*.md',
                './themes/orbitor-hugo/layouts/**/*.html',
                './themes/orbitor-hugo/assets/**/*.js',
                './themes/orbitor-hugo/static/**/*.js',
            ],
            whitelist: ['pre', 'h1', 'h2', 'h3', 'h4', 'h5', 'ul', 'li', 'blockquote']
        }),
        require('autoprefixer'),
        require('postcss-csso')
    ],
};
