<template>
<div class="recommends">

<div v-for="(item, index) in recommends" :key="index" class="recommends-item">
<a :href="item.link" class="recommends-item">
<img :src="item.image" alt="" class="recommends-item">
<div class="recommends-item">{{item.title}}</div>
</a>
</div>
</div>
</template>

<script>
export default {
name: 'RecommendView',
props:{
    recommends:{
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

},
           components:{

},
           computed:{

},
           watch:{

},
};
</script>


<style>
.recommends{
    
    display:flex;
    text-align: center;
    font-size: 12px;
    padding: 15px 0 30px;
    border-bottom: 8px solid #eee;
}
.recommends-item{
    flex: 1;
}
.recommends-item img{
   width: 65px;
   height: 65px;
   margin-bottom: 10px;
}
</style>