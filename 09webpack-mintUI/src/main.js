
import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import goodslist from './main/goodslist.vue'
import userlist from './main/userlist.vue'
import vueRouter from 'vue-router'

// 导入子组件
import login from './main/login.vue'
import register from './main/register.vue'

// 导入 mint-ui 框架
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(vueRouter)  // 注册路由
Vue.use(MintUI)     // 注册 mint-ui 

var router = new vueRouter({
    routes:[
        {
            path:'/userlist',
            component:userlist,
            children:[
                {path:'/login',component:login},
                {path:'/register',component:register}
            ]
         },
        {path:'/goodslist',component:goodslist}
    ]
})

var vm = new Vue({
    el:'#app',
    render:c => c(App),
    router:router
})

