<template>
  <div className="One">
    <div className="header1">
      <h2>2020年github开发者规模top10国家</h2>
      <h3>（开发者价值等级分布情况）</h3>
    </div>
    <div id="HorizontalChart1" className="chart">
    </div>
  </div>
</template>

<script>
import {inject, onMounted, reactive} from "vue";

export default {
  setup() {
    let $echarts = inject("echarts");
    let $http = inject("axios");

    let data = reactive({});
    let country = reactive([]);
    let count = reactive([]);
    let S = reactive([]);
    let A = reactive([]);
    let B = reactive([]);
    let C = reactive([]);
    let D = reactive([]);

    async function getState() {
      // data = await $http({url:"one/data"});
      data = await $http({url: "one/data"});
    }

    function setData() {
      country = data.data.chartOne.map(v => v.country)
      count = data.data.chartOne.map(v => v.count)
      A = data.data.chartOne.map(v => v.A)
      B = data.data.chartOne.map(v => v.B)
      C = data.data.chartOne.map(v => v.C)
      D = data.data.chartOne.map(v => v.D)
      S = data.data.chartOne.map(v => v.S)
      // console.log("country", country)
      // console.log("count", count)
      // console.log("A", A)
      // console.log("B", B)
      // console.log("C", C)
      // console.log("D", D)
      // console.log("S", S)
    }

    onMounted(() => {
      //调用请求
      getState().then(() => {
        setData()
        console.log("层叠柱状图", data);
        // console.log("层叠柱状图",data2);
        let myChart = $echarts.init(document.getElementById("HorizontalChart1"));
        myChart.resize({width: 500, height: 350});
        // setData()
        myChart.setOption({
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true
          },
          xAxis: {
            type: "category",
            data: country,
            axisLine: {
              lineStyle: {
                color: "#fff"
              }
            },
            axisLabel: {
              fontFamily: '华文中宋',
              fontSize: 10 // 设置x轴标签字体大小为14px
            }
          },
          yAxis: {
            name: "单位（人）",
            type: "value",
            axisLine: {
              lineStyle: {
                color: "#fff"
              },
              axisLabel: {
                fontSize: 10 // 设置x轴标签字体大小为14px
              }
            }
          },
          legend: {
            data: ["S级", "A级", "B级", "C级", "D级", "总人数"],
            textStyle: {
              fontSize: 13, // 设置图例的文字大小为16px
              color: '#fff' // 设置图例的文字颜色为白色
            }
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "shadow"
            },
            formatter: function (params) {
              var result = params[0].name + '<br/>';
              for (var i = params.length - 1; i >= 0; i--) {
                result += params[i].marker + params[i].seriesName + ': ' + params[i].value + '人<br/>';
              }
              return result;
            }
          },
          // tooltip : {
          //   trigger: 'axis',
          //   axisPointer: {
          //     type: "shadow",
          //     label: {
          //       formatter: function (params) {
          //         if (params.seriesData.length === 0) {
          //           window.mouseCurValue = params.value;
          //         }
          //       }
          //     }
          //   },
          //   formatter: function (params) {
          //     let res = "", sum = 0;
          //     for (let i = 0; i < params.length; i++) {
          //       let series = params[i];
          //       sum += Number(series.data);
          //       if (sum >= window.mouseCurValue) {
          //         res = series.axisValue + "<br/>" + series.marker + series.seriesName + ":" + series.data + "<br/>";
          //         break;
          //       }
          //     }
          //     return res;
          //   },
          // },
          series: [
            {
              name: "总人数",
              type: "line",
              data: count,
              barGap: '-100%',
              barWidth: '20%',
              label: {
                color: '#fff',
                show: true,
                position: 'top',
                formatter: '{c}'
              },
              itemStyle: {
                normal: {
                  color: 'rgb(0,142,255)' // 设置背景颜色为透明
                }
              },
              emphasis: {
                focus: "series"
              }
            },
            {
              name: "S级",
              type: "bar",
              data: S,
              stack: "total",
              // label:{
              //   show:true,
              //   position:'inside',
              //   formatter:'{c}%'
              // },
              itemStyle: {
                normal: {
                  color: 'rgb(243,53,167)',
                  colorSaturation: 0.3 // 设置柱子的颜色饱和度为0.5
                }
              },
              emphasis: {
                focus: "series"
              }
            },
            {
              name: "A级",
              type: "bar",
              data: A,
              stack: "total",
              // label:{
              //   position: 'top',
              //   show:true
              // },
              itemStyle: {
                normal: {
                  color: new $echarts.graphic.LinearGradient(
                      // 渐变色从左到右
                      0, 1, 0, 0,
                      [
                        {offset: 0, color: 'rgba(131,191,246,0.4)'}, // 左边的颜色
                        {offset: 0.5, color: 'rgba(24,141,240,0.8)'}, // 中间的颜色
                        {offset: 1, color: '#188df0'} // 右边的颜色
                      ]
                  )
                }
              },
              emphasis: {
                focus: "series"
              }
            },
            {
              name: "B级",
              type: "bar",
              data: B,
              stack: "total",
              // label:{
              //   show:true
              // },
              itemStyle: {
                normal: {
                  color: new $echarts.graphic.LinearGradient(
                      // 渐变色从上到下
                      0, 1, 0, 0,
                      [
                        {offset: 0, color: 'rgba(135,246,131,0.4)'}, // 左边的颜色
                        {offset: 0.5, color: 'rgba(58,255,75,0.8)'}, // 中间的颜色
                        {offset: 1, color: '#07a41f'} // 右边的颜色
                      ]
                  )
                }
              },
              emphasis: {
                focus: "series"
              }
            },
            {
              name: "C级",
              type: "bar",
              data: C,
              stack: "total",
              // label:{
              //   show:true
              // },
              itemStyle: {
                normal: {
                  color: new $echarts.graphic.LinearGradient(
                      // 渐变色从左到右
                      0, 1, 0, 0,
                      [
                        {offset: 0, color: 'rgba(246,237,115,0.4)'}, // 左边的颜色
                        {offset: 0.5, color: 'rgba(255,239,58,0.8)'}, // 中间的颜色
                        {offset: 1, color: '#ada404'} // 右边的颜色
                      ]
                  )
                }
              },
              emphasis: {
                focus: "series"
              }
            },
            {
              name: "D级",
              type: "bar",
              data: D,
              stack: "total",
              // label:{
              //   show:true
              // },
              itemStyle: {
                normal: {
                  color: new $echarts.graphic.LinearGradient(
                      // 渐变色从左到右
                      0, 1, 0, 0,
                      [
                        {offset: 0, color: 'rgba(252,55,55,0.4)'}, // 左边的颜色
                        {offset: 0.5, color: 'rgba(204,27,27,0.8)'}, // 中间的颜色
                        {offset: 1, color: '#be0c0c'} // 右边的颜色
                      ]
                  )
                }
              },
              emphasis: {
                focus: "series"
              }
            }
          ]
        })
      })
    });
    return {
      getState,
      data, setData, country, count, A, B, C, D, S
    }
  }
}
</script>

<style lang="less">
.header1 {
  height: 1rem;
  width: 100%;
  //background-color: rgba(2, 2, 42, 0.2);
  h2 {
    height: 0.6rem;
    color: rgb(255, 255, 255);
    line-height: 0.6rem;
    text-align: center;
    font-size: 0.35rem;
  }

  h3 {
    height: 0.6rem;
    color: rgb(255, 255, 255);
    line-height: 0.6rem;
    text-align: center;
    font-size: 0.3rem;
  }
}

.chart {
  height: 8rem;
}

@font-face {
  font-family: 'LCdd';
  src: url("@/fonts/LCdd.TTF");
}
</style>
