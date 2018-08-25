
<template>
    <div>
     <h2>商品 组件 </h2>

       <ul v-for="item in list">
         <li>{{item}}</li>
       </ul>
    </div>
</template>

<script>
    export default{
        data(){
            var data = [
                '第一个商品',
                '第二个商品',
                '第三个商品',
                '第四个商品',
                '第五个商品',
                '第六个商品'
                ]

            return {list:data};
        }
    }
</script>

<style>
    
</style>