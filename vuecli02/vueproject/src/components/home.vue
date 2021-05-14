
<style scoped>
.el-header {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
    position:fixed;
    top: 0;
    left: 0;
    width:100%;
  }
  
  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
    position:absolute;
    top: 62px;
    left: 0;
    bottom: 0;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    right: 0;
    position:absolute;
    top:64px;
    left: 305px;
    bottom: 0;
    overflow: auto;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>

<template>
    <div>
        <el-container>
        <el-aside>Aside</el-aside>
        <el-container>
            <el-header>
              <ht-header />
            </el-header>
            <el-main>
              <router-view/>
            </el-main>
        </el-container>
        </el-container>
    </div>
</template>

<script>
import header from './header'

export default {
  components:{
    'ht-header':header
  },
    data () {
        return {
          msg:''
         }
    },
    created () {
      this.initData();
    },
    methods: {
      initData(){
        debugger
        this.msg = '加载完成';

      }
    }
}
</script>