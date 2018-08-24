

import Vue from '../node_modules/vue/dist/vue.js'
// 在这里不能使用 import Vue from 'vue' 这种形式
// 包查找规则 import Vue from 'vue'
// 1 先看项目更目录有没有 node_modules 文件夹
// 2 在 node_modules 文件中查找 vue 文件夹
// 3 在 vue 文件夹中 查找 webpack.json 的配置文件
// 4 在 webpack.json 文件中，查找一个 main 属性 （这个main 属性指定了，这个包在加载时候的入口文件）

import login from '../src/login.vue'
// 默认 webpack 无法打包 .vue 文件，需要相关的 loader 
// npm i vue-loader vue-template-compiler -D 
// 在配置文件中新增 loader 配置 {test:/\.vue/,use:'vue-loader'}
//




// 安装 html-webpack-plugin 插件，作用是在内存中生成 html ,否则先 new Vue() 代码 无法正常运行
// 应给 webpack-dev-server 生成的包（bundlejs）在内存中，如果html 不在内存中，就掉不到 bundlel.js 问

var vm = new Vue({
    el:'#app',
    data:{
        list:['第一个','第二个','第三个','第四个','第五个']
    },
    render:(createElements)=>{

        return new createElements(login);
    }
    
})

console.log('输出数据：'+login.data.name)