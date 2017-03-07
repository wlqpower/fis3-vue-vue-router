/* eslint-disable */
fis.set('project.ignore', fis.get('project.ignore').concat('package.json', '*.md', 'BCLOUD', 'build/**'));
// 启用 node_modules  依赖
fis.hook('node_modules').unhook('components');
// 启用 commonjs 模块化规范
fis.hook('commonjs', { baseUrl: '/src', extList: ['.js', '.vue', '.es6'] });



// 模块化 js
fis.match('{/node_modules/**.js,*.{vue,es6}}', { isMod: true });

// 编译 vue es6
fis.match('*.{vue:js,es6}', {
    preprocessor: fis.plugin('js-require-css'),
    parser: fis.plugin('babel-5.x', {
        sourceMaps: true,
        optional: ['es7.decorators', 'es7.classProperties']
    }),
    rExt: 'js'
})
.match('*.vue', {
    parser: fis.plugin('vue-component', {
        runtimeOnly: true
    }),
    rExt: 'js'
});

// 打包
fis.match('::package', {
    postpackager: fis.plugin('loader', {
        useInlineMap: true,
        resourcemapWhitespace: 0
    })
});

// 上线
fis.media('production')
   .match('*.{vue,es6}',                           { packTo: '/pkg/app.js' })
   .match('/node_modules/**.js',                   { packTo: '/pkg/third.js' })
   .match('!(*.{html,json})',                      { useHash: true })
// .match('*.json',                                { release: false })
   .match('*.html',                                { optimizer: fis.plugin('dfy-html-minifier', { removeComments: true, minifyJS: true, minifyCSS: true }) })
   .match('*.css',                                 { optimizer: fis.plugin('clean-css'), packTo: '/pkg/app.css' })
   .match('*.{js,vue,es6}',                        { optimizer: fis.plugin('uglify-js') })
