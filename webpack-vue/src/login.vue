
<template id='temp1'>
  <div>
      <h2 v-on:click="showtext(name)">{{name}}的登录组件</h2>
  </div>
</template>

<script>
  export default{
      data(){
          return {name:'dataong',age:23}
      },
      methods:{
        showtext(msg){
            alert(msg);
        }
      }
  }
</script>

<style>
   
</style>

