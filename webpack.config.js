//import
const path = require('path')

const HtmlPlugin = require('html-webpack-plugin')
const copyPlugin = require('copy-webpack-plugin')

// export
module.exports =  {
    // parcel main.js 와 동일
    entry: './js/main.js', //파일을 읽어들이기 시작하는 자바스크립트 진입점 설정
    
    // 결과물(번들)을 반환하는 설정
    output: {
        // path: path.resolve(__dirname, 'dist'),
        // filename: 'main.js',
        clean: true
    },

    module: {
        rules: [
            {
                test: /\.scss$/,
                use:[
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.js$/,
                use: [
                    'babel-loader'
                ]
            }
        ]
    },
    // 번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
    plugins: [
        new HtmlPlugin({
            template: './index.html'
        }),
        new copyPlugin({
            patterns: [
                { from: 'static'}
            ]
        })
    ],

    devServer: {
        host: "localhost"
    }
}