
<template>
    <div>

    <!--header区域-->
     <mt-header fixed title="大通的cms系统"></mt-header>

 <!--router-view 区域-->
<transition>
	<router-view></router-view>
</transition>



<!--tabbar 区域-->
<nav class="mui-bar mui-bar-tab">
			<router-link class="mui-tab-item" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link to="/shopcar" class="mui-tab-item">
      <span class="mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">0</span></span>
		
				<span class="gouwuche  mui-tab-label">购物车</span>
			</router-link>
		
      <router-link to="/search" class="mui-tab-item">
      	<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
      </router-link>
			
		</nav>

    </div>
</template>

<script>
    
</script>

<style scoped>
    .gouwuche{
   font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
    }

	body{
		background-color: #fff;
	}

	.v-enter,.v-leave-to{
        opacity: 0;
		transform:  translateX(100%)
	}

	.v-enter-active,
	.v-leave-active{
		transition: all 0.5s ease;
	}

</style>