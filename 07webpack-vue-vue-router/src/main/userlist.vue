
<template>
    <div>
     <h2>用户 组件 </h2>

       <ul v-for="item in list" :key="item">
         <li>{{item}}</li>
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