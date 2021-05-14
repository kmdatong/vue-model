

<style scoped>
 .header{
     width: 100%;
     height: 100%;
 }
 .header .left{
     float: left;
     text-align: left;
     line-height: 60px;
     width:64px;
 }
 .header .left i{
     font-size: 30px;
     display: inline-block;
     vertical-align:baseline;
 }
 .header .logo{
   text-align: center;
   width: 260px;
   line-height: 60px;
   margin-left: 30px;
   font-size: 28px;
   color: aliceblue;
 }
</style>

<template>
    <div class="header">
        <div class="left">
            <i class="el-icon-menu" ></i>
        </div>
        <div class="logo">
            后台管理系统
        </div>
    <div class="right">

    </div>
    </div>
</template>

<script>
export default {
    data(){
        return {}
    }
}
</script>