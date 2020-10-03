<template>
<div class="item" @click = "itemClick">
<img :src="goodsItem.show.img" alt="" @load = 'imgLoad'>
<p>{{goodsItem.title}}</p>
<span class="price">{{goodsItem.price}}</span>  <span class="collect">{{goodsItem.cfav}}</span>

</div>
</template>

<script>
export default {
name: 'GoodsListItem',
props:{
goodsItem:{
    type:Object,
    default(){
        return  {}
    }
}
},
data() {
return {

}
},
methods: {
    itemClick(){
       this.$router.push('/detail/' + this.goodsItem.iid)
    },
imgLoad(){
   
    this.$emit('imgLoad')
}
},
           components:{

},
           computed:{

},
           watch:{

},
};
</script>


<style scoped>

</style>