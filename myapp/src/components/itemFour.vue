<template>
  <div class="header4">
    <h2><span style="color: #f39c12; font-size: 0.5rem;">{{chartData.ownerinfo_login}}</span>的五维能力分布</h2>
    <div class="chart" id = "radarchart">
    </div>
  </div>
</template>

<script setup>
import {defineProps, inject, onMounted, reactive, toRefs, onBeforeUnmount,ref,watchEffect,watch} from "vue";
import 'echarts/theme/macarons'
let $echarts=inject("echarts");
let $http=inject("axios");
const props = defineProps({
  ownerinfo_login:null,
  className:
      {
        type: String,
        default: 'chart'
      },
  width:
      {
        type: String,
        default: '100%'
      },
  height:
      {
        type: String,
        default: '500px'
      },
  autoResize:
      {
        type: Boolean,
        default: true
      },
  chartData:
      {
        type: Object,
        required: true
      }
});
const chart = ref(null)
const {} = toRefs(props);
watch(() => props.chartData, (val) => { setOptions(val)}, { deep: true })
console.log("雷达图",props)
onMounted(() => { initChart() })
onBeforeUnmount(() =>
{
  if (!chart.value)
{
  return
}
chart.value.dispose()
})
// const echarts = inject('echarts')
function initChart()
{
  chart.value = $echarts.init(document.getElementById("radarchart"))
  setOptions(props.chartData)
}
 async function setOptions({ pm_score, code_score, eng_score,learn_score,team_score } = {}) {
     chart.value.setOption({
              tooltip:{
                trigger:'item',
                axisPointer:
                    {
                      type:"cross",
                    }
              },
              color: ['#800080', '#00FFFF', '#56A3F1', '#FF917C'],
              legend:{
                textStyle: {
                  fontSize: 12, // 设置图例的文字大小为16px
                  color: '#fff' // 设置图例的文字颜色为白色
                }
              },
              radar:[
                {
                  indicator:[
                { text: '项目管理能力',max:100 },
                { text: '编程能力',max:100 },
                { text: '敬业度' ,max:100},
                { text: '学习能力' ,max:100},
                { text: '团队协作能力',max:100 }
                  ],
                  center: ['50%', '60%'],
                  radius: 120,
                  startAngle: 90,
                  splitNumber: 4,
                  shape: 'circle',
                  axisName: {
                    formatter: '{value}',
                    color: '#ffffff',
                    fontSize: 13,
                    fontFamily:'FontAwesome'
                  },
                  splitArea: {
                    areaStyle: {
                      color: ['rgba(63,165,236,0.15)', 'rgba(0,142,255,0.15)', 'rgba(22,65,220,0.15)', 'rgba(28,41,234,0.15)'],
                      shadowColor: 'rgba(0, 0, 0, 0.2)',
                      shadowBlur: 10
                    }
                  },
                  axisLine: {
                    lineStyle: {
                      color: 'rgba(211, 253, 250, 0.8)'
                    }
                  },
                  splitLine: {
                    lineStyle: {
                      color: 'rgba(211, 253, 250, 0.8)'
                    }
                  }
                }
              ],
              series:
              [{

                type: 'radar',
                emphasis: {
                  lineStyle: {
                    width: 4
                  },
                  focus:"series"
                },
                data: [
                  {
                    name: '开发者',
                    value:[pm_score, code_score, eng_score,learn_score,team_score],
                    // label: {
                    //   show: true,
                    //   position: 'inside',
                    //   color: 'rgb(2,97,136)',
                    //   formatter: function (params) {
                    //     return params.value;
                    //   }
                    // }
                  },
                  {
                    name: '平均分数',
                    value: ["31.39","33.47","14.47","13.81","4.28"],
                    areaStyle: {
                      color: '#00FFFF',
                    },

                  }
                ],

              }
              ]
    });
}
</script>

<style lang="less">
.header4{
  h2{
    height: 0.6rem;
    color: #ffffff;
    line-height: 0.6rem;
    text-align: center;
    font-size: 0.35rem;
    font-family: 华文中宋;
  }
}

.chart{
  height: 8rem;
}
//@font-face {
//  font-family: 'LCdd';
//  src: url("@/fonts/LCdd.TTF");
//}
</style>
