
import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import goodslist from './main/goodslist.vue'
import userlist from './main/userlist.vue'
import vueRouter from 'vue-router'

// 导入子组件
import login from './main/login.vue'
import register from './main/register.vue'

Vue.use(vueRouter)  // 注册路由

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

