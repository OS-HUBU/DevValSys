<template>
  <router-view/>
<!--湖北大学OS-HUBU社区-->
</template>
<script>
import {createApp, provide} from "vue";
import * as echarts from "echarts";
import axios from 'axios';
axios.defaults.baseURL="http://localhost:30015/"
// axios.defaults.baseURL="http://47.98.247.52:8888/"
// axios.defaults.baseURL="http://111.47.28.118:30015/"
export default {
  setup(){
    provide("echarts",echarts)
    provide("axios",axios)
    provide("App",app)
  },
}
</script>

<style lang="less">
body{
  background: url("~@/images/53bg.png") top center no-repeat;
}
//@font-face {
//  font-family:'液晶数字字体';
//  src: url("fonts/液晶数字字体.TTF");
//}
*{
 margin: 0;
 padding: 0;
  box-sizing: border-box;
}
</style>
