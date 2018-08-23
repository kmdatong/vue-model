// 这里是项目的 js 入口文件

//1 导入jquery 
import $ from 'jquery'


$(function(){

$('li:odd').css('background-color','green');
$('li:even').css('background-color','red');
})

// 使用 webpack-dev-server 这个工具，来实现自动打包功能
//1、运行 命令 npm i webpack-dev-server -D 将工具安装到本地开发依赖
//2、 安装完毕后，webpack-dev-server 的 命令和 webpack 完全一样
//3、 由于是本地安装的（不是全局安装 -g） ，无法直接当做命令运行
//4、注意：webpack-dev-server 要求在本地安装（即使已经全局安装了也不行） webpack 
//5、在webpack.json 文件的 scripts 节点中 添加配置 
//6、webpack-dev-server 打包好的js文件并没有存放在磁盘上，而是存放在内存中
//7、webpack-dev-server 把打包好的文件托管到本地项目中，与dist、src 平级

// 运行命令  npm run start 或者 npm run dev 