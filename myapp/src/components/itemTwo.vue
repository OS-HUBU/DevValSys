<template>
  <div>
    <div class="header2">
      <h2>2020年github开发者规模top10企业</h2>
      <h3>（开发者价值等级分布情况）</h3>
    </div>
    <div id="HorizontalChart2" class="chart">
    </div>
  </div>
</template>

<script>
import {inject,onMounted,reactive} from "vue";

export default {
  setup()
  {
    let $echarts=inject("echarts");
    let $http=inject("axios");
    let company = reactive([]);
    let count = reactive([]);
    let S = reactive([]);
    let A = reactive([]);
    let B = reactive([]);
    let C = reactive([]);
    let D = reactive([]);
    let data = reactive({});
    async function getState(){
      data = await $http({url:"two/data"});
    }
    function setData(){
      company = data.data.chartTwo.map(v=>v.company)
      count = data.data.chartTwo.map(v=>v.count)
      A = data.data.chartTwo.map(v=>v.A)
      B = data.data.chartTwo.map(v=>v.B)
      C = data.data.chartTwo.map(v=>v.C)
      D = data.data.chartTwo.map(v=>v.D)
      S = data.data.chartTwo.map(v=>v.S)
      // console.log("company",company)
      // console.log("count",count)
      // console.log("A",A)
      // console.log("B",B)
      // console.log("C",C)
      // console.log("D",D)
      // console.log("S",S)
    }
    onMounted(()=>{
      //调用请求
      getState().then(()=>{
        setData()
        //console.log("层叠条形图",data);
        let myChart=$echarts.init(document.getElementById("HorizontalChart2"));
        // setData()
        myChart.resize({width:500, height: 350});
        myChart.setOption({
          grid:{
            left:"3%",
            right:"4%",
            bottom:"1%",
            containLabel:true
          },
          xAxis:{
            type:"value",
            axisLine:{
              show: true,
              lineStyle:{
                color:"#ffffff"
              }
            },
            axisLabel: {
              formatter:"{value}人",
              fontSize: 10, // 设置x轴标签字体大小为14px
              fontFamily:'华文中宋'
            }
          },
          yAxis:{
            name:"企业",
            type:"category",
            data: company,
            axisLine:{
              lineStyle:{
                color:"#fff"
              }
            },
            inverse:true,
            nameLocation:'start', // 添加这个属性
          },
          legend:{
            data:["S级","A级","B级","C级","D级"],
            textStyle: {
              fontSize: 12, // 设置图例的文字大小为16px
              color: '#fff' // 设置图例的文字颜色为白色
            }
          },
          tooltip:{
            trigger:"axis",
            axisPointer:{
              type:"shadow"
            },
            formatter: function (params) {
              var result = params[0].name + '<br/>';
              for (var i = params.length - 1; i >= 0; i--) {
                result += params[i].marker + params[i].seriesName + ': ' + params[i].value + '人<br/>';
              }
              return result;
            }
          },
          series:[
            {
              name:"总数",
              type:"bar",
              data:count,
              barGap:'-100%',
              label:{
                color: '#fff',
                show:true,
                position:'right',
                formatter:'{c}'
              },
              itemStyle: {
                normal: {
                  color: 'rgba(128, 128, 128, 0)' // 设置背景颜色为透明
                }
              },
              emphasis:{
                focus:"series"
              }
            },
            {
              name:"S级",
              type:"bar",
              data:S,
              stack:"total",
              // label:{
              //   show:true
              // },
              itemStyle: {
                normal: {
                  color: 'rgb(243,53,167)',
                  colorSaturation: 0.3 // 设置柱子的颜色饱和度为0.5
                }
              },
              emphasis:{
                focus:"series"
              },
              animation: true,
              // 设置动画时长为 1000 毫秒
              animationDuration: 1000,
              // 设置动画延迟为索引 * 100 毫秒
              animationDelay: function (idx) {
                return idx * 100;
              },
              // 设置动画缓动函数为 bounceOut
              animationEasing: 'bounceOut'
            },

            {
              name:"A级",
              type:"bar",
              data:A,
              stack:"total",
              // label:{
              //   show:true
              // },
              itemStyle: {
                normal: {
                  color: new $echarts.graphic.LinearGradient(
                      // 渐变色从左到右
                      0, 0, 1, 0,
                      [
                        {offset: 0, color: 'rgba(131,191,246,0.4)'}, // 左边的颜色
                        {offset: 0.5, color: 'rgba(24,141,240,0.8)'}, // 中间的颜色
                        {offset: 1, color: '#188df0'} // 右边的颜色
                      ]
                  )
                }
              },
              animation: true,
              // 设置动画时长为 1000 毫秒
              animationDuration: 1000,
              // 设置动画延迟为索引 * 100 毫秒
              animationDelay: function (idx) {
                return idx * 100;
              },
              // 设置动画缓动函数为 bounceOut
              animationEasing: 'bounceOut',
              emphasis:{
                focus:"series"
              }
            },
            {
              name:"B级",
              type:"bar",
              data:B,
              stack:"total",
              // label:{
              //   show:true
              // },
              itemStyle: {
                normal: {
                  color: new $echarts.graphic.LinearGradient(
                      // 渐变色从左到右
                      0, 0, 1, 0,
                      [
                        {offset: 0, color: 'rgba(0,255,0,0.4)'}, // 左边的颜色
                        {offset: 0.5, color: 'rgba(39,229,39,0.8)'}, // 中间的颜色
                        {offset: 1, color: '#009b00'} // 右边的颜色
                      ]
                  )
                }
              },
              emphasis:{
                focus:"series"
              },
              animation: true,
              // 设置动画时长为 1000 毫秒
              animationDuration: 1000,
              // 设置动画延迟为索引 * 100 毫秒
              animationDelay: function (idx) {
                return idx * 100;
              },
              // 设置动画缓动函数为 bounceOut
              animationEasing: 'bounceOut'
            },
            {
              name:"C级",
              type:"bar",
              data:C,
              stack:"total",
              // label:{
              //   show:true
              // },
              itemStyle: {
                normal: {
                  color: new $echarts.graphic.LinearGradient(
                      // 渐变色从左到右
                      0, 0, 1, 0,
                      [
                        {offset: 0, color: 'rgba(0,255,255,0.4)'}, // 左边的颜色
                        {offset: 0.5, color: 'rgba(0,255,255,0.8)'}, // 中间的颜色
                        {offset: 1, color: '#00a9a9'} // 右边的颜色
                      ]
                  )
                }
              },
              emphasis:{
                focus:"series"
              },
              animation: true,
              // 设置动画时长为 1000 毫秒
              animationDuration: 1000,
              // 设置动画延迟为索引 * 100 毫秒
              animationDelay: function (idx) {
                return idx * 100;
              },
              // 设置动画缓动函数为 bounceOut
              animationEasing: 'bounceOut'
            },
            {
              name:"D级",
              type:"bar",
              data:D,
              stack:"total",
              // label:{
              //   show:true
              // },
              itemStyle: {
                normal: {
                  color: new $echarts.graphic.LinearGradient(
                      // 渐变色从左到右
                      0, 0, 1, 0,
                      [
                        {offset: 0, color: 'rgba(128,0,128,0.4)'}, // 左边的颜色
                        {offset: 0.5, color: 'rgba(183,26,183,0.8)'}, // 中间的颜色
                        {offset: 1, color: '#790579'} // 右边的颜色
                      ]
                  )
                }
              },
              emphasis:{
                focus:"series"
              },
              animation: true,
              // 设置动画时长为 1000 毫秒
              animationDuration: 1000,
              // 设置动画延迟为索引 * 100 毫秒
              animationDelay: function (idx) {
                return idx * 100;
              },
              // 设置动画缓动函数为 bounceOut
              animationEasing: 'bounceOut'
            }
          ]
        })
      })
    });
    return{
      getState,
      data,setData,company,count,A,B,C,D,S
    }
  }
}
</script>

<style lang="less">
.header2{
  height: 1rem;
  width: 100%;
  //background-color: rgba(2, 2, 42, 0.2);
  h2{
    height: 0.6rem;
    color: rgb(255, 255, 255);
    line-height: 0.6rem;
    text-align: center;
    font-size: 0.35rem;
  }
  h3{
    height: 0.6rem;
    color: rgb(255, 255, 255);
    line-height: 0.6rem;
    text-align: center;
    font-size: 0.3rem;
  }
}
.chart{
  height: 8rem;
}
@font-face {
  font-family: 'LCdd';
  src: url("~@/fonts/LCdd.TTF");
}
</style>
