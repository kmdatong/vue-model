
<template>
    <div class='temp'>

     <mt-swipe :auto="4000">
        <mt-swipe-item>1</mt-swipe-item>
        <mt-swipe-item>2</mt-swipe-item>
        <mt-swipe-item>3</mt-swipe-item>
        <mt-swipe-item>4</mt-swipe-item>
        <mt-swipe-item>5</mt-swipe-item>
        <mt-swipe-item>6</mt-swipe-item>
    </mt-swipe>

    </div>
</template>

<script>
    
</script>

<style lang='scss' scoped>
    .temp{
      margin-top:40px;
    }
    .mint-swipe{
        height:200px;
        
        .mint-swipe-item {
            
        &:nth-child(1){
           background-color:red;
        }
        &:nth-child(2){
           background-color:green;
        }
        &:nth-child(3){
           background-color:yellow;
        }
        &:nth-child(4){
           background-color:green;
        }
        &:nth-child(5){
           background-color:red;
        }
    }
    }
   
</style>