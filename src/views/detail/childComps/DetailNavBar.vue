<template>
<div class = ''>
<nav-bar>
<div slot="left" class="left">
<img src="../../../assets/img/tabbar/a3.png" alt="" @click = 'backClick'>
</div>
<div slot="center" class="titles">
<div v-for="(item, index) in titles" :key="index" class="title" :class="{active:index===currentIndex}" @click="titleClick(index)">{{item}}</div>
</div>
</nav-bar>

</div>
</template>

<script>
import NavBar from 'components/common/NavBar/NavBar'


export default {
name: 'DetailNavBar',
props:{

},
data() {
return {
titles:['商品','参数','评论','推荐'],
currentIndex:0
}
},
methods: {
    backClick(){
this.$router.push('/home')
    },
titleClick(index){
    this.currentIndex  = index
}
},
           components:{
NavBar
},
           computed:{

},
           watch:{

},
           created(){

},
           mounted(){

},
};
</script>


<style scoped>
.titles{
    display: flex;
}
.title{
    flex: 1;
}
.active{
    color:red
}
.left img{
width: 40px;
height: 40px;

}
</style>