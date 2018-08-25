
import Vue from 'vue/dist/vue.js'
import App from './App.vue'
import goodslist from './main/goodslist.vue'
import userlist from './main/userlist.vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)  // 注册路由

var router = new vueRouter({
    routes:[
        {path:'/userlist',component:userlist},
        {path:'/goodslist',component:goodslist}
    ]
})

var vm = new Vue({
    el:'#app',
    render:c => c(App),
    router:router
})

