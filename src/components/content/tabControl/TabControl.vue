<template>
<div class="tabControl"  ref="aa" >
<div v-for="(item, index) in titles" :key="index" class="tabControl-item" :class="{active:index===currentIndex}" v-on:click="itemClick(index)">
<span>{{item}}</span>
</div>
</div>
</template>

<script>
export default {
name: 'TabControl',
props:{
titles:{
    type:Array,
    default(){
        return []
    }
}
},
data() {
return {
currentIndex:0,

// isLoad:false

}
},
mounted(){
// this.fixedTop()
},
methods: {
    //让某个执行多次的操作只执行一次，可以用这种方法
    // imgLoad(){
// if(!this.isLoad){
//     this.$emit('imgLoad')
//     this.isLoad = true
// }
//     },
    // fixedTop(){
       
    //         console.log(this.$refs.aa.offsetTop)
       
    
    // },
itemClick(index){
    this.currentIndex = index
    this.$emit('tabClick',index)
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
.tabControl{
    display: flex;
    text-align: center;
    line-height: 40px;
    font-size: 15px;
 

}
.tabControl-item{
    flex: 1;
    height: 40px;
    
}
.tabControl-item span{
   
    padding: 10px;
}
.active span{
     color:red;
     border-bottom: 2px solid ;
}
</style>