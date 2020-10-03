<template>
  <div>
    <div class="wrapper" ref="aaa">
     <ul>
     
         <li>jkkj1</li>
         <li>jkkj2</li>
         <li>jkkj3</li>
         <li>jkkj4</li>
         <li>jkkj5</li>
         <li>jkkj6</li>
         <li>jkkj7</li>
         <li>jkkj8</li>
         <li>jkkj9</li>
         <li>jkkj10</li>
         <li>jkkj11</li>
         <li>jkkj12</li>
         <li>jkkj13</li>
         <li>jkkj14</li>
         <li>jkkj15</li>
         <li>jkkj16</li>
         <li>jkkj17</li>
         <li>jkkj18</li>
         <li>jkkj19</li>
         <li>jkkj20</li>
         <li>jkkj21</li>
         <li>jkkj22</li>
         <li>jkkj23</li>
         <li>jkkj24</li>
         <li>jkkj25</li>
         <li>jkkj26</li>
         <li>jkkj27</li>
         <li>jkkj28</li>
         <li>jkkj29</li>
         <li>jkkj30</li>
         <li>jkkj31</li>
         <li>jkkj32</li>
         <li>jkkj33</li>
         <li>jkkj34</li>
         <li>jkkj35</li>
         <li>jkkj36</li>
         <li>jkkj37</li>
         <li>jkkj38</li>
         <li>jkkj39</li>
         <li>jkkj40</li>
         <li>jkkj41</li>
         <li>jkkj42</li>
         <li>jkkj43</li>
         <li>jkkj44</li>
         <li>jkkj45</li>
         <li>jkkj46</li>
         <li>jkkj47</li>
         <li>jkkj48</li>
         <li>jkkj49</li>
         <li>jkkj50</li>
         <li>jkkj51</li>
         <li>jkkj52</li>
         <li>jkkj53</li>
         <li>jkkj54</li>
         <li>jkkj55</li>
         <li>jkkj56</li>
         <li>jkkj57</li>
         <li>jkkj58</li>
         <li>jkkj59</li>
         <li>jkkj60</li>
         <li>jkkj61</li>
         <li>jkkj62</li>
         <li>jkkj63</li>
         <li>jkkj64</li>
         <li>jkkj65</li>
         <li>jkkj66</li>
         <li>jkkj67</li>
         <li>jkkj68</li>
         <li>jkkj69</li>
         <li>jkkj70</li>
         <li>jkkj71</li>
         <li>jkkj72</li>
         <li>jkkj73</li>
         <li>jkkj74</li>
         <li>jkkj75</li>
         <li>jkkj76</li>
         <li>jkkj77</li>
         <li>jkkj78</li>
         <li>jkkj79</li>
         <li>jkkj80</li>
         <li>jkkj81</li>
         <li>jkkj82</li>
         <li>jkkj83</li>
         <li>jkkj84</li>
         <li>jkkj85</li>
         <li>jkkj86</li>
         <li>jkkj87</li>
         <li>jkkj88</li>
         <li>jkkj89</li>
         <li>jkkj90</li>
         <li>jkkj91</li>
         <li>jkkj92</li>
         <li>jkkj93</li>
         <li>jkkj94</li>
         <li>jkkj95</li>
         <li>jkkj96</li>
         <li>jkkj97</li>
         <li>jkkj98</li>
         <li>jkkj99</li>
         <li>jkkj100</li>
     </ul>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Category",
  mounted() {
      //默认情况下BScroll是不会实时监听滚动的位置
      //probe侦测
      //0,1都是不侦测实时的位置
      //2:在手指滚动的过程中侦测，手指离开后的惯性滚动过程中不侦测
      //3:只要是滚动都侦测
    this.scroll = new BScroll(this.$refs.aaa, {
        probeType:3,
        pullUpLoad:true
    });
   this.scroll.on('scroll',(position)=>{
       console.log(position)
   })
   this.scroll.on('pullingUp',()=>{
       console.log('上拉加载更多')
       this.scroll.finishPullUp()
       
   })
  },
  data() {
    return {
      scroll: null,
    };
  },
  methods: {
     divClick(){
       console.log('jjkjk')
     }
  },
  components: {},
  computed: {},
  watch: {},
};
</script>

<style scoped>
.wrapper {
  height: 150px;
  background-color: red;
  overflow: hidden;

}

</style>
