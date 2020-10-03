<template>
<div id="home">
      
           <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
          <tab-control :titles="['流行','新款','精选']"  class="tab-control " v-on:tabClick="tabClick" ref="Control1" v-show="isDisplay">
          </tab-control>
           
            <scroll ref="scroll" :probe-type="3"  @scrollPosition = "getPosition" :pull-up-load = 'true' @pullUpLoad = 'loadMore'>
              <recommend-view :recommends ='recommends' ></recommend-view>
           <tab-control :titles="['流行','新款','精选']" class="tab-control" v-on:tabClick="tabClick" ref="Control2" v-show="!isDisplay">
           </tab-control>
          
            <goods-list :goods="showGoods" @imgLoad = "imgLoad"></goods-list>

            </scroll>
            <back-top @click.native='backClick' v-show="isShow"></back-top>
</div>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar.vue';
import TabControl from 'components/content/tabControl/TabControl.vue';
import GoodsList from 'components/content/goods/GoodsList.vue';
import BackTop from 'components/content/backTop/BackTop.vue';

import RecommendView from './childComps/RecommendView'

import {getHomeMutidata,getHomeGoods}   from 'network/home'

import Scroll from "components/common/scroll/Scroll";


export default {
    name: 'Home',
    data() {
        return {
            save:0,
    isDisplay:false,
isShow:false,
banners:[],
recommends:[],
goods:{
    'pop':{page:0,list:[]},
      'new':{page:0,list:[]},
        'sell':{page:0,list:[]},
},
currentType:'pop'
        }
    },

    methods: {
        // 封装一个防抖函数
        // debounce(func,delay){
        //     let timer = null
        //     return function(...args){
        //         if(timer)clearTimeout(timer)
        //         timer = setTimeout(()=>{
        //             func.apply(this,args)
        //         },delay)
        //     }
        // },
        imgLoad(){
        this.$refs.scroll.scroll.refresh()
      
        },
        loadMore(){
             this.getHomeGoods(this.currentType)
       
      
        },
        getPosition(position){
if(position.y<-5000){
    this.isShow = true
}else{
    this.isShow = false
}
if(position.y<-176){
   
this.isDisplay = true
}
else{
    this.isDisplay  =false
}
        },
        backClick() {
            
           this.$refs.scroll.scroll.scrollTo(0,0,500) 
     
        
       
        },
 
        //事件监听相关的方法
tabClick(index){
switch(index){
    case 0:
    this.currentType = 'pop'
    this.$refs.Control1.currentIndex = 0
     this.$refs.Control2.currentIndex = 0
    break;
    case 1:
    this.currentType = 'new'
    this.$refs.Control1.currentIndex = 1
     this.$refs.Control2.currentIndex = 1
    break;
    case 2:
    this.currentType = 'sell'
    this.$refs.Control1.currentIndex = 2
     this.$refs.Control2.currentIndex = 2
    break;
}
},
    
        //网络请求相关的方法
 getHomeMutidata(){
 getHomeMutidata().then(res=>{
           
            this.recommends = res.data.recommend.list
             this.banners = res.data.banner.list
            
        })
 },
 getHomeGoods(type){
     const page = this.goods[type].page+1
 getHomeGoods(type,page).then(res=>{
     //将请求来的数组塞入新的数组
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page+=1
           
        })
 }
    },
   
    created(){
        // 请求多个数据
        this.getHomeMutidata()
        this.getHomeGoods('pop')
        this.getHomeGoods('sell')
        this.getHomeGoods('new')
    },
    mounted(){
        // console.log(this.$refs.tabControl.$el.style)
      

    },
    //进入本页面时调用
    activated(){
this.$refs.scroll.scroll.scrollTo(0,this.save)
    },
    //离开本页面时调用
    deactivated(){
this.save = this.$refs.scroll.scroll.y

    },
    components: {
      NavBar,
      RecommendView,
       TabControl,
       GoodsList,
       Scroll,
       BackTop
    },
    computed: {
showGoods(){
    return this.goods[this.currentType].list
},


    },
    watch: {

    }
   
};
</script>

<style scoped>

.home-nav{
    background-color: deeppink;
    color:white;
    
}

</style>
