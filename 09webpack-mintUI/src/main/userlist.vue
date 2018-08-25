
<template>
    <div>
     <h2>商品 组件 </h2>
      <router-link to="/login">登录</router-link>
      <router-link to="/register">注册</router-link>
      
      <router-view></router-view>
   
     <ul>
        <li v-for="item in list">{{ item }}</li>
        </ul>

    </div>
</template>

<script>
    export default{
        data(){
            var data = [
                '第一个用户',
                '第二个用户',
                '第三个用户',
                '第四个用户',
                '第五个用户',
                '第六个用户'
                ]

            return {list:data};
        }
    }
</script>

<style>
    
</style>