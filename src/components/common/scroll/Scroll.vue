<template>
  <div ref="aaa" class="wrapper" >
    <div class="h">
    
    <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";


export default {
  name: "Scroll",
  props:{
  probeType:{
    type:Number,
    default:0
  },
  pullUpLoad:{
    type:Boolean,
    default:false
  }

  },
  mounted(){
      
this.scroll = new BScroll(this.$refs.aaa,{
         probeType:this.probeType,
         pullUpLoad:this.pullUpLoad,
        click:true
})
 
 this.scroll.on('pullingUp',()=>{
  //  console.log("ok")
    // this.$emit('addHeight', this.height)
    
       
        this.$emit('pullUpLoad')
        
        this.scroll.finishPullUp()
 
   })
  
 this.scroll.on('scroll',(position)=>{
      // this.scroll.refresh()
      this.$emit('scrollPosition',position)
   })
  },
  data() {
    return {
      
        scroll:null,
        x:'',
        y:''
     
    };
  },
  methods: {},
  components: {
  
  },
  computed: {},
  watch: {},
};
</script>


<style scoped>
.wrapper{
     height: 1000px;
   
    overflow: hidden;
 
}

</style>