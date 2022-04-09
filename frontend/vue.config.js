const FileManagerPlugin = require('filemanager-webpack-plugin');
module.exports = {
    lintOnSave : false,
    publicPath: '/',
    outputDir:'dist',
    assetsDir : 'static',
    devServer : {
        index: 'home.html'
    },

    pages :{
        home : {
            template: 'public/index.html',
            entry : 'src/pages/main_home.js',
            filename : 'home.html',
            title: 'VueDjangoPhoto/home.html',
            minify:false,
        },

        test_list : {
            template: 'public/index.html',
            entry : 'src/pages/main_test_list.js',
            filename : 'test_list.html',
            title: 'VueDjangoPhoto/test_list.html',
            minify:false,
        },
    },

    configureWebpack : {
        plugins:[
          new FileManagerPlugin({
            events:{
                onStart : {
                    delete:[
                      '../backend/static/**/',
                      '../backend/templates/**/'
                    ]
                },
                onEnd :{
                  copy : [
                    { source : 'dist/static', destination:'../backend/static/'},
                    { source : 'dist/favicon.ico', destination:'../backend/static/image'},
                    { source : 'dist/home.html', destination:'../backend/templates/'},
                    { source : 'dist/test*.html', destination:'../backend/templates/test/'},
                  ]
                }
            }
    
          })
        ]
      }
}

