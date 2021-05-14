
<template>
    <div class="temp">
       <div class="title">
				新闻资讯
			</div>
			<ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media" v-for="item in list" :key="item.id">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" v-bind:src="item.imageUrl">
						<div class="mui-media-body">
							{{item.title}}
							<p class='mui-ellipsis' v-text="item.content"></p>
						</div>
					</a>
				</li>
			
			</ul>
    </div>
</template>

<script>
export default {
    data(){
         return{
                list:[]
            };
    },
    created(){
        this.getDataList();
    },
    methods:{
        getDataList(){
            this.$http.get('http://127.0.0.1:8222/api/newslist').then(result=>{
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

<style lang="scss"  scoped>
    .temp{
      margin-top:40px;
    }
</style>
