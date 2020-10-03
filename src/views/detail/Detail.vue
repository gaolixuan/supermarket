<template>
<div class = 'detail'>
<detail-nav-bar></detail-nav-bar>
</div>
</template>

<script>
import DetailNavBar from './childComps/DetailNavBar'

export default {
name: 'Detail',
props:{

},
data() {
return {
iid:null
}
},
methods: {

},
           components:{
DetailNavBar
},
           computed:{

},
           watch:{

},
           created(){
              
     this.iid = this.$route.params.iid
},
           mounted(){

},
};
</script>


<style scoped>

</style>