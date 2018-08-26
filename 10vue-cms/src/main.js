


import Vue from 'vue/dist/vue.js'
import vueRouter from 'vue-router'
import App from './App.vue'

// 按需导入mint-ui 中的组件
import {Header,Swipe, SwipeItem} from 'mint-ui';
import  'mint-ui/lib/style.css'

import '../src/lib/nui/css/mui.min.css'
import './lib/nui/css/icons-extra.css'

// 导入组件
import Home from './components/Home.vue'
import Member from './components/Member.vue'
import ShopCar from './components/ShopCar.vue'
import Search from './components/Search.vue'

// 导入 vue-resource
import VueResource from 'vue-resource'

Vue.component(Header.name, Header );
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.use(vueRouter)
Vue.use(VueResource)

var router = new vueRouter({
    routes:[
        {path:'/',redirect:Home},
      {path:'/home',component:Home},
      {path:'/member',component:Member},
      {path:'/shopcar',component:ShopCar},
      {path:'/search',component:Search}
    ],
    linkActiveClass:'mui-active'
})

var vm = new Vue({
    el:'#app',
    render:c => c(App),
    router
})

