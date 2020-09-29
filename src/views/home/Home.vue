<template>
<div id="home">
      
           <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
           <recommend-view :recommends ='recommends' ></recommend-view>
</div>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar.vue';
import {getHomeMutidata}   from 'network/home'
import RecommendView from './childComps/RecommendView'

export default {
    name: 'Home',
    data() {
        return {
banners:[],
recommends:[]

        }
    },
    methods: {

    },
    components: {
      NavBar,
      RecommendView
    },
    computed: {

    },
    watch: {

    },
    created(){
        //请求多个数据
        
        getHomeMutidata().then(res=>{
           
            this.recommends = res.data.recommend.list
             this.banners = res.data.banner.list
        })
        
    },
   
};
</script>

<style>
.home-nav{
    background-color: deeppink;
    color:white;
}

</style>
