
<template>
    <div class='temp'>

     <mt-swipe :auto="4000">
        <mt-swipe-item  v-for="item in list" :key="item.url">
            <img v-bind:src="item.url"/>
        </mt-swipe-item>
       
    </mt-swipe>

    <!--六宫格-->

<ul class="mui-table-view mui-grid-view mui-grid-9">
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
            <a href="#">
                <span class="mui-icon-extra mui-icon-extra-dictionary"></span>
                <div class="mui-media-body">新闻资讯</div>
            </a>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
            <a href="#">
                <span class="mui-icon mui-icon-image"><span class="mui-badge">5</span></span>
                <div class="mui-media-body">图片分享</div>
            </a>
        </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
            <a href="#">
                <span class="mui-icon-extra mui-icon-extra-cart"></span>
                <div class="mui-media-body">商品够买</div>
             </a>
         </li>
      
        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
            <a href="#">
                <span class="mui-icon-extra mui-icon-extra-comment"></span>
                <div class="mui-media-body">留言反馈</div>
            </a>
         </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
            <a href="#">
                <span class="mui-icon-extra mui-icon-extra-classroom"></span>
                <div class="mui-media-body">视频专区</div>
            </a>
         </li>

        <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-4">
            <a href="#">
                <span class="mui-icon mui-icon-phone-filled"></span>
                <div class="mui-media-body">联系我们</div>
            </a>
        </li>
        
       
	</ul>


    </div>
</template>

<script>
    export default{
        data(){
            return{
                list:[]
            };
        },
        created(){
           this.getdatalist();
        },
        methods:{
            getdatalist(){
                this.$http.get('http://127.0.0.1:8222/api/lunbolist').then(result=>{
                       if(result.statusText == "OK")
                       {
                           console.log('后台拿到的数据：'+result.body.data);
                            this.list = result.body.data;
                       }
                })
            }
           
        }
    }
</script>

<style lang='scss' scoped>

   body{
       background-color: #fff;
   }
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
   .mui-grid-9{
       background-color:#fff !important;
       li{
        border: none !important;
       }
      
   }
</style>