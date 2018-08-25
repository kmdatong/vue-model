
import Vue from 'vue/dist/vue.js'
import login from '../src/login.vue'
import datatest,{title,content} from './testdata.js'

var vm = new Vue({
    el:'#app',
    render:createElements => {

        return new createElements(login)
    }
})

console.log('输出数据：'+ datatest.name+'---title：'+title+'---content:'+content )