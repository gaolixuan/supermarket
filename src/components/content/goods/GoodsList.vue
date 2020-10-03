<template>
<div class="height" >


    <goods-list-item v-for="(item, index) in goods" :key="index" :goodsItem="item" @imgLoad = "imgLoad">
    </goods-list-item>

</div>
</template>

<script>
import GoodsListItem from './GoodsListItem.vue'

export default {
name: 'GoodsList',
props:{

goods:{
    type:Array,
    default(){
        return []
    }
}
},
data() {
return {

}
},
methods: {
    imgLoad(){
        this.$emit('imgLoad')
    }

},
           components:{
GoodsListItem
},
           computed:{

},
           watch:{

},
};
</script>


<style scoped>

</style>