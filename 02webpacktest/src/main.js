// 这里是项目的 js 入口文件
import Vue from '../node_modules/vue/dist/vue.js'
//1 导入jquery 
import $ from 'jquery'
// 导入样式表
import './css/index.css'
// 注意： webpack 默认只能打包处理 js 类型的文件，无法处理其他的非js类型的文件
// 如果要处理非js 文件，需要手动安装一些 第三方的加载器
// 如果需要处理 css 文件，要安装 style-loader 和 css-loader
// 1、执行 命令 npm i style-loader css-loader -D 
// 2、在webpack.config.js 文件中添加一个 module 节点，在该节点中添加 rules 属性，用于匹配css文件

$(function(){

$('li:odd').css('background-color','green');
$('li:even').css('background-color','red');
})

// 使用 webpack-dev-server 这个工具，来实现自动打包功能
//1、运行 命令 npm i webpack -D 将工具安装到本地开发依赖
//2、 安装完毕后，webpack-dev-server 的 命令和 webpack 完全一样
//3、 由于是本地安装的（不是全局安装 -g） ，无法直接当做命令运行
//4、注意：webpack-dev-server 要求在本地安装（即使已经全局安装了也不行） webpack 
//5、在webpack.json 文件的 scripts 节点中 添加配置 
//6、webpack-dev-server 打包好的js文件并没有存放在磁盘上，而是存放在内存中
//7、webpack-dev-server 把打包好的文件托管到本地项目中，与dist、src 平级

// 运行命令  npm run start 或者 npm run dev 


// 安装 html-webpack-plugin 插件，作用是在内存中生成 html ,否则先 new Vue() 代码 无法正常运行
// 应给 webpack-dev-server 生成的包（bundlejs）在内存中，如果html 不在内存中，就掉不到 bundlel.js 问

var vm = new Vue({
    el:'#app',
    data:{
        list:[
            '第1个',
            '第2个',
            '第3个',
            '第4个',
            '第5个',
            '第6个'
        ]
    },
    methods:{
        showtext:(item)=>{
                alert(item);
        }
    }
});