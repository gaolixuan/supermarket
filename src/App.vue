<template>
<div id="app">
  <keep-alive>
  <router-view></router-view>
  </keep-alive>
    
    <tab-bar>

        <tab-bar-item path='/home' activeColor='blue'>
            <img src="@/assets/img/tabbar/a3.png" alt slot="item-icon" />
            <img src="@/assets/img/tabbar/b3.jpg" alt slot="item-icon-active" />
            <div slot="item-text">首页</div>
        </tab-bar-item>
        <tab-bar-item path='/category' activeColor='blue'>
            <img src="./assets/img/tabbar/a4.png" alt slot="item-icon" />
            <img src="./assets/img/tabbar/b4.jpg" alt slot="item-icon-active" />
            <div slot="item-text">分类</div>
        </tab-bar-item>
        <tab-bar-item path='/cart' activeColor='blue'>
            <img src="./assets/img/tabbar/a5.png" alt slot="item-icon" />
            <img src="./assets/img/tabbar/b5.jpg" alt slot="item-icon-active" />
            <div slot="item-text">购物车</div>
        </tab-bar-item>
        <tab-bar-item path='/profile' activeColor='blue'>
            <img src="./assets/img/tabbar/a6.png" alt slot="item-icon" />
            <img src="./assets/img/tabbar/b6.jpg" alt slot="item-icon-active" />
            <div slot="item-text">我的</div>
        </tab-bar-item>
    </tab-bar>
</div>
</template>

<script>
import TabBar from "./components/common/tabbar/TabBar";
import TabBarItem from "./components/common/tabbar/TabBarItem";
import HelloVuex from "./components/common/tabbar/HelloVuex"

export default {
    name: "App",
    components: {
        TabBar,
        TabBarItem,
        HelloVuex
    },
};
</script>

<style>
@import "assets/css/base.css";

</style>
