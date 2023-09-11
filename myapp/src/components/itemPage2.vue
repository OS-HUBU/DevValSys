<template>
  <div>
    <div class="total">
      <div class = "header3">
        <ul class="lev">
          <li>
            <dv-border-box7>
            <h1>(80,100]</h1>
            <h2>S</h2>
            </dv-border-box7>
          </li>
          <li>
            <dv-border-box7>
            <h1>(60,80]</h1>
            <h2>A</h2>
            </dv-border-box7>
          </li>
          <li>
            <dv-border-box7>
            <h1>(40,60]</h1>
            <h2>B</h2>
            </dv-border-box7>
          </li>
          <li>
            <dv-border-box7>
            <h1>(20,40]</h1>
            <h2>C</h2>
            </dv-border-box7>
          </li>
          <li>
            <dv-border-box7>
            <h1>(0,20]</h1>
            <h2>D</h2>
            </dv-border-box7>
          </li>
        </ul>
        <h2><span style="color: #f39c12; font-size: 0.5rem;">{{ ownerinfo_login }}</span>开发者的评估价值</h2>
      </div>
      <div class="sphere">
        <div class="sphere-bg"></div>
        <div class="sum">
          <p>{{ value_score }}</p>
          <span>{{value_score_lev}}</span>
        </div>
      </div>
      <div class="cicle3"></div>
      <div class="cicle4"></div>
      <div class="cicle5"></div>
      <div class="cicle6"></div>
      <div class="cicle7"></div>
      <div id="cicle8">
<!--        <span>团队协作能力</span>-->
<!--        <p class="p1">{{ team_score.value }}</p>-->
<!--        <p class="p2">{{ team_score_lev.value }}</p>-->
        <Cicle8 v-bind="data"></Cicle8>
      </div>
      <div id="cicle9">
<!--        <span>{{ title }}</span>-->
<!--        <p class="p1">{{ score }}</p>-->
<!--        <p class="p2">{{ level }}</p>-->
        <Cicle9 v-bind="data2"></Cicle9>
      </div>
      <div id="cicle10">
<!--        <span>{{ title }}</span>-->
<!--        <p class="p1">{{ score }}</p>-->
<!--        <p class="p2">{{ level }}</p>-->
        <Cicle10 v-bind="data3"></Cicle10>
      </div>
      <div id="cicle11">
<!--        <span>{{ title }}</span>-->
<!--        <p class="p1">{{ score }}</p>-->
<!--        <p class="p2">{{ level }}</p>-->
        <Cicle11 v-bind="data4"></Cicle11>
      </div>
      <div id="cicle12">
<!--        <span>{{ title }}</span>-->
<!--        <p class="p1">{{ score }}</p>-->
<!--        <p class="p2">{{ level }}</p>-->
        <cicle12 v-bind="data5"></cicle12>
      </div>
      </div>
    </div>
</template>


<script setup>
import { ref,toRefs,defineProps,reactive } from 'vue'
import Cicle8 from "@/components/cicle/cicle8.vue"
import Cicle9 from "@/components/cicle/cicle9.vue"
import Cicle10 from "@/components/cicle/cicle10.vue"
import Cicle11 from "@/components/cicle/cicle11.vue"
import Cicle12 from "@/components/cicle/cicle12.vue"
import Dashed from "@/components/cicle/dashed"

const props = defineProps({
  value_score:Number,
  value_score_lev:String,
  team_score: Number,
  pm_score: Number,
  learn_score:Number,
  code_score:Number,
  eng_score:Number,
  pm_score_lev:String,
  code_score_lev:String,
  eng_score_lev:String,
  learn_score_lev:String,
  team_score_lev:String,
  ownerinfo_login:String
});
const {
  ownerinfo_login,
  value_score,
  value_score_lev,
  team_score,
  pm_score,
  learn_score,
  code_score,
  eng_score,
  pm_score_lev,
  code_score_lev,
  eng_score_lev,
  learn_score_lev,
  team_score_lev } = toRefs(props);
// console.log("userlogin",props)
const data = reactive({
  title: "团队协作能力",
  score: team_score,
  level: team_score_lev,
  description:
      "团队协作能力能够评估开发者和协作者的联系的密切程度的指标。目标是激励更多的开发者积极参与到开源项目中，共同贡献代码、参与讨论，为项目的发展做出更多的贡献。通过对开发者敬业度的评估，可以促进开源社区的发展，提高开源项目的质量和可靠性。"
});
// console.log(data)
// 解构props对象

// const data =
//   {
//     title: props.ownerinfo_login,
//     score: props.coding_score,
//     level: "D",
//     description:
//         "团队协作能力能够评估开发者和协作者的联系的密切程度的指标。目标是激励更多的开发者积极参与到开源项目中，共同贡献代码、参与讨论，为项目的发展做出更多的贡献。通过对开发者敬业度的评估，可以促进开源社区的发展，提高开源项目的质量和可靠性。",
//   };
const data2 =reactive({
  title: "编程能力",
  score: code_score,
  level: code_score_lev,
  description: "这是第二个文本框",
})

const data3 = reactive({
      title: "项目管理能力",
      score: pm_score,
      level: pm_score_lev,
      description:
          "开发者的项目管理能力意在寻找与人沟通、解决问题、协调能力强的开发者。这些开发者统筹能力强。能够控制局面，规划全局，建立团队，整合资源，引领项目的发展。",
    })
const data4 =reactive(
    {
      title: "敬业度",
      score: eng_score,
      level: eng_score_lev,
      description: "这是第四个文本框",
    })
const data5 =reactive(
    {
      title: "学习能力",
      score: learn_score,
      level: learn_score_lev,
      description: "这是第五个文本框",
    })

</script>

<style lang="less">
.anim-stop { animation-play-state: paused; }
.total{
  height: 16rem;
  margin: 0.125rem;
  .header3 {
    height: 1.2rem;
    width: 100%;
    position: relative;
    top: 100px;
    margin-top : -4%;
    //background-color: rgba(2, 2, 42, 0.2);
    h2 {
      height: 0.6rem;
      color: rgb(169,166,171);
      line-height: 0.6rem;
      text-align: center;
      font-size: 0.5rem;
      font-family: 华文细黑;
      //transform: rotate3d(0.5, -0.5, 0, -30deg);
      text-shadow: -1px -1px 1px rgba(0,0,0,0.2), 1px 1px 1px rgba(255,255,255,0.2);
      clip-path: circle(50%);
    }

    .lev {
      list-style-type: none; /* 去掉列表项的标记 */
      margin: 0; /* 去掉外边距 */
      padding: 0; /* 去掉内边距 */
      //overflow: hidden; /* 隐藏溢出的内容 */
      /* 设置li元素的样式 */
      li {
        margin-top: -40px;
        float: left; /* 让每个li元素浮动在一行中 */
        width: 20%; /* 设置每个li元素的宽度为20% */
        height: 70px; /* 设置每个li元素的高度为100px */
        //border: 1px solid #ec1717; /* 设置每个li元素的边框为1px实线 */
        h1{
          color: rgba(172, 236, 239, 0.5);
          text-align: center;
          font-size: 0.4rem;
          font-family: "Times New Roman";
          clip-path: circle(50%);
        }
        h2{
          color: rgb(217, 208, 42);
          text-align: center;
          font-size: 0.4rem;
          font-family: "Times New Roman";
          clip-path: circle(50%);
        }
      }
    }
  }
  /* 设置ul元素的样式 */
  .dashed {
    position: absolute;
    left: 0;
    top: 0;
  }
  .sphere {
    width   : 11rem;
    height  : 11rem;
    position: relative;
    margin  : 10% auto 0;

    .sphere-bg {
      position       : absolute;
      z-index        : 100;
      left           : 0;
      top            : 0;
      width          : 100%;
      height         : 100%;
      background     : url("~@/images/53earth.png") no-repeat center;
      background-size: contain;
      // animation   : rotate 5s linear infinite;
    }

    .sum {
      position       : absolute;
      z-index        : 100;
      left           : 0;
      top            : 0;
      width          : 100%;
      height         : 100%;
      background     : url("~@/images/53cloud.png") no-repeat center;
      background-size: 55%;

      p {
        margin-top : 31%;
        text-align : center;
        color      : #003c63;
        font-family: 'LCdd';
        font-size  : 1rem;
      }
      span {
        display     : block;
        margin-top  : 0%;
        text-align: center;
        color       : rgb(0, 0, 0);
        font-size   : 0.4rem;
        font-family: 华文中宋;
      }
    }
  }
  .cicle3 {
    width          : 10.5rem;
    height         : 10.5rem;
    background     : url("~@/images/circle.png") no-repeat center;
    background-size: 100%;
    position       : absolute;
    top            : 50%;
    left           : 50%;
    transform-style: preserve-3d;
    transform      : translateX(-50%) rotateX(75deg);
    animation      : rotate3 20s linear infinite;
  }
  .cicle4 {
    width          : 8rem;
    height         : 8rem;
    position       : absolute;
    top            : 55%;
    left           : 50%;
    transform-style: preserve-3d;
    background     : url("~@/images/53gqright.png") no-repeat center;
    background-size: 100%;
    transform      : translateX(-50%) rotateX(75deg);
    animation      : rotate3 2s linear infinite;
  }

  .cicle5 {
    width          : 8rem;
    height         : 8rem;
    position       : absolute;
    top            : 60%;
    left           : 50%;
    transform-style: preserve-3d;
    background     : url("~@/images/53gqleft.png") no-repeat center;
    background-size: 100%;
    transform      : translateX(-50%) rotateX(75deg);
    animation      : rotate4 2s linear infinite;
  }

  .cicle6 {
    width          : 8rem;
    height         : 8rem;
    position       : absolute;
    top            : 65%;
    left           : 50%;
    transform-style: preserve-3d;
    background     : url("~@/images/535gqbottomright.png") no-repeat center;
    background-size: 100%;
    transform      : translateX(-50%) rotateX(75deg);
    animation      : rotate3 2s linear infinite;
  }

  .cicle7 {
    width          : 7rem;
    height         : 7rem;
    position       : absolute;
    top            : 70%;
    left           : 50%;
    transform-style: preserve-3d;
    background     : url("~@/images/53gqbottomleft.png") no-repeat center;
    background-size: 100%;
    transform      : translateX(-50%) rotateX(75deg);
    animation      : rotate4 2s linear infinite;
  }

}


@font-face {
  font-family: 'LCdd';
  src: url("~@/fonts/LCdd.TTF");
}
@keyframes rotate3 {
  0% {
    transform: translateX(-50%) rotateX(75deg) rotateZ(0)
  }

  100% {
    transform: translateX(-50%) rotateX(75deg) rotateZ(360deg)
  }
}
@keyframes rotate4 {
  0% {
    transform: translateX(-50%) rotateX(75deg) rotateZ(0)
  }

  100% {
    transform: translateX(-50%) rotateX(75deg) rotateZ(-360deg)
  }
}
@keyframes rotate5 {
  0% {
    transform: matrix3d(0.9, 0, 0, 0, 0, 0.9, 0, 0, 0, 0, 1, 0, 270, 0, 0, 1);
    z-index  : 100;
  }

  1% {
    transform: matrix3d(0.92093, 0, 0, 0, 0, 0.92093, 0, 0, 0, 0, 1, 0, 269.46722, 6.27905, 0, 1);
    z-index  : 100.06279;
  }

  2% {
    transform: matrix3d(0.94178, 0, 0, 0, 0, 0.94178, 0, 0, 0, 0, 1, 0, 267.87097, 12.53332, 0, 1);
    z-index  : 100.12533;
  }

  3% {
    transform: matrix3d(0.96246, 0, 0, 0, 0, 0.96246, 0, 0, 0, 0, 1, 0, 265.21756, 18.73813, 0, 1);
    z-index  : 100.18738;
  }

  4% {
    transform: matrix3d(0.9829, 0, 0, 0, 0, 0.9829, 0, 0, 0, 0, 1, 0, 261.51745, 24.86899, 0, 1);
    z-index  : 100.24869;
  }

  5% {
    transform: matrix3d(1.00301, 0, 0, 0, 0, 1.00301, 0, 0, 0, 0, 1, 0, 256.78526, 30.9017, 0, 1);
    z-index  : 100.30902;
  }

  6% {
    transform: matrix3d(1.02271, 0, 0, 0, 0, 1.02271, 0, 0, 0, 0, 1, 0, 251.03965, 36.81246, 0, 1);
    z-index  : 100.36812;
  }

  7% {
    transform: matrix3d(1.04193, 0, 0, 0, 0, 1.04193, 0, 0, 0, 0, 1, 0, 244.3033, 42.57793, 0, 1);
    z-index  : 100.42578;
  }

  8% {
    transform: matrix3d(1.06058, 0, 0, 0, 0, 1.06058, 0, 0, 0, 0, 1, 0, 236.6028, 48.17537, 0, 1);
    z-index  : 100.48175;
  }

  9% {
    transform: matrix3d(1.07861, 0, 0, 0, 0, 1.07861, 0, 0, 0, 0, 1, 0, 227.96854, 53.58268, 0, 1);
    z-index  : 100.53583;
  }

  10% {
    transform: matrix3d(1.09593, 0, 0, 0, 0, 1.09593, 0, 0, 0, 0, 1, 0, 218.43459, 58.77853, 0, 1);
    z-index  : 100.58779;
  }

  11% {
    transform: matrix3d(1.11247, 0, 0, 0, 0, 1.11247, 0, 0, 0, 0, 1, 0, 208.03858, 63.7424, 0, 1);
    z-index  : 100.63742;
  }

  12% {
    transform: matrix3d(1.12818, 0, 0, 0, 0, 1.12818, 0, 0, 0, 0, 1, 0, 196.82153, 68.45471, 0, 1);
    z-index  : 100.68455;
  }

  13% {
    transform: matrix3d(1.14299, 0, 0, 0, 0, 1.14299, 0, 0, 0, 0, 1, 0, 184.82772, 72.89686, 0, 1);
    z-index  : 100.72897;
  }

  14% {
    transform: matrix3d(1.15684, 0, 0, 0, 0, 1.15684, 0, 0, 0, 0, 1, 0, 172.10448, 77.05132, 0, 1);
    z-index  : 100.77051;
  }

  15% {
    transform: matrix3d(1.16967, 0, 0, 0, 0, 1.16967, 0, 0, 0, 0, 1, 0, 158.70202, 80.9017, 0, 1);
    z-index  : 100.80902;
  }

  16% {
    transform: matrix3d(1.18144, 0, 0, 0, 0, 1.18144, 0, 0, 0, 0, 1, 0, 144.67323, 84.43279, 0, 1);
    z-index  : 100.84433;
  }

  17% {
    transform: matrix3d(1.1921, 0, 0, 0, 0, 1.1921, 0, 0, 0, 0, 1, 0, 130.07349, 87.63067, 0, 1);
    z-index  : 100.87631;
  }

  18% {
    transform: matrix3d(1.20161, 0, 0, 0, 0, 1.20161, 0, 0, 0, 0, 1, 0, 114.96041, 90.48271, 0, 1);
    z-index  : 100.90483;
  }

  19% {
    transform: matrix3d(1.20993, 0, 0, 0, 0, 1.20993, 0, 0, 0, 0, 1, 0, 99.39363, 92.97765, 0, 1);
    z-index  : 100.92978;
  }

  20% {
    transform: matrix3d(1.21702, 0, 0, 0, 0, 1.21702, 0, 0, 0, 0, 1, 0, 83.43459, 95.10565, 0, 1);
    z-index  : 100.95106;
  }

  21% {
    transform: matrix3d(1.22286, 0, 0, 0, 0, 1.22286, 0, 0, 0, 0, 1, 0, 67.14627, 96.85832, 0, 1);
    z-index  : 100.96858;
  }

  22% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0, 50.59295, 98.22873, 0, 1);
    z-index  : 100.98229;
  }

  23% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0, 33.83997, 99.21147, 0, 1);
    z-index  : 100.99211;
  }

  24% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0, 16.95344, 99.80267, 0, 1);
    z-index  : 100.99803;
  }

  25% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0, 0, 100, 0, 1);
    z-index  : 101;
  }

  26% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0, -16.95344, 99.80267, 0, 1);
    z-index  : 100.99803;
  }

  27% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0, -33.83997, 99.21147, 0, 1);
    z-index  : 100.99211;
  }

  28% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0, -50.59295, 98.22873, 0, 1);
    z-index  : 100.98229;
  }

  29% {
    transform: matrix3d(1.22286, 0, 0, 0, 0, 1.22286, 0, 0, 0, 0, 1, 0, -67.14627, 96.85832, 0, 1);
    z-index  : 100.96858;
  }

  30% {
    transform: matrix3d(1.21702, 0, 0, 0, 0, 1.21702, 0, 0, 0, 0, 1, 0, -83.43459, 95.10565, 0, 1);
    z-index  : 100.95106;
  }

  31% {
    transform: matrix3d(1.20993, 0, 0, 0, 0, 1.20993, 0, 0, 0, 0, 1, 0, -99.39363, 92.97765, 0, 1);
    z-index  : 100.92978;
  }

  32% {
    transform: matrix3d(1.20161, 0, 0, 0, 0, 1.20161, 0, 0, 0, 0, 1, 0, -114.96041, 90.48271, 0, 1);
    z-index  : 100.90483;
  }

  33% {
    transform: matrix3d(1.1921, 0, 0, 0, 0, 1.1921, 0, 0, 0, 0, 1, 0, -130.07349, 87.63067, 0, 1);
    z-index  : 100.87631;
  }

  34% {
    transform: matrix3d(1.18144, 0, 0, 0, 0, 1.18144, 0, 0, 0, 0, 1, 0, -144.67323, 84.43279, 0, 1);
    z-index  : 100.84433;
  }

  35% {
    transform: matrix3d(1.16967, 0, 0, 0, 0, 1.16967, 0, 0, 0, 0, 1, 0, -158.70202, 80.9017, 0, 1);
    z-index  : 100.80902;
  }

  36% {
    transform: matrix3d(1.15684, 0, 0, 0, 0, 1.15684, 0, 0, 0, 0, 1, 0, -172.10448, 77.05132, 0, 1);
    z-index  : 100.77051;
  }

  37% {
    transform: matrix3d(1.14299, 0, 0, 0, 0, 1.14299, 0, 0, 0, 0, 1, 0, -184.82772, 72.89686, 0, 1);
    z-index  : 100.72897;
  }

  38% {
    transform: matrix3d(1.12818, 0, 0, 0, 0, 1.12818, 0, 0, 0, 0, 1, 0, -196.82153, 68.45471, 0, 1);
    z-index  : 100.68455;
  }

  39% {
    transform: matrix3d(1.11247, 0, 0, 0, 0, 1.11247, 0, 0, 0, 0, 1, 0, -208.03858, 63.7424, 0, 1);
    z-index  : 100.63742;
  }

  40% {
    transform: matrix3d(1.09593, 0, 0, 0, 0, 1.09593, 0, 0, 0, 0, 1, 0, -218.43459, 58.77853, 0, 1);
    z-index  : 100.58779;
  }

  41% {
    transform: matrix3d(1.07861, 0, 0, 0, 0, 1.07861, 0, 0, 0, 0, 1, 0, -227.96854, 53.58268, 0, 1);
    z-index  : 100.53583;
  }

  42% {
    transform: matrix3d(1.06058, 0, 0, 0, 0, 1.06058, 0, 0, 0, 0, 1, 0, -236.6028, 48.17537, 0, 1);
    z-index  : 100.48175;
  }

  43% {
    transform: matrix3d(1.04193, 0, 0, 0, 0, 1.04193, 0, 0, 0, 0, 1, 0, -244.3033, 42.57793, 0, 1);
    z-index  : 100.42578;
  }

  44% {
    transform: matrix3d(1.02271, 0, 0, 0, 0, 1.02271, 0, 0, 0, 0, 1, 0, -251.03965, 36.81246, 0, 1);
    z-index  : 100.36812;
  }

  45% {
    transform: matrix3d(1.00301, 0, 0, 0, 0, 1.00301, 0, 0, 0, 0, 1, 0, -256.78526, 30.9017, 0, 1);
    z-index  : 100.30902;
  }

  46% {
    transform: matrix3d(0.9829, 0, 0, 0, 0, 0.9829, 0, 0, 0, 0, 1, 0, -261.51745, 24.86899, 0, 1);
    z-index  : 100.24869;
  }

  47% {
    transform: matrix3d(0.96246, 0, 0, 0, 0, 0.96246, 0, 0, 0, 0, 1, 0, -265.21756, 18.73813, 0, 1);
    z-index  : 100.18738;
  }

  48% {
    transform: matrix3d(0.94178, 0, 0, 0, 0, 0.94178, 0, 0, 0, 0, 1, 0, -267.87097, 12.53332, 0, 1);
    z-index  : 100.12533;
  }

  49% {
    transform: matrix3d(0.92093, 0, 0, 0, 0, 0.92093, 0, 0, 0, 0, 1, 0, -269.46722, 6.27905, 0, 1);
    z-index  : 100.06279;
  }

  50% {
    transform: matrix3d(0.9, 0, 0, 0, 0, 0.9, 0, 0, 0, 0, 1, 0, -270, 0, 0, 1);
    z-index  : 100;
  }

  51% {
    transform: matrix3d(0.87907, 0, 0, 0, 0, 0.87907, 0, 0, 0, 0, 1, 0, -269.46722, -6.27905, 0, 1);
    z-index  : 99.93721;
  }

  52% {
    transform: matrix3d(0.85822, 0, 0, 0, 0, 0.85822, 0, 0, 0, 0, 1, 0, -267.87097, -12.53332, 0, 1);
    z-index  : 99.87467;
  }

  53% {
    transform: matrix3d(0.83754, 0, 0, 0, 0, 0.83754, 0, 0, 0, 0, 1, 0, -265.21756, -18.73813, 0, 1);
    z-index  : 99.81262;
  }

  54% {
    transform: matrix3d(0.8171, 0, 0, 0, 0, 0.8171, 0, 0, 0, 0, 1, 0, -261.51745, -24.86899, 0, 1);
    z-index  : 99.75131;
  }

  55% {
    transform: matrix3d(0.79699, 0, 0, 0, 0, 0.79699, 0, 0, 0, 0, 1, 0, -256.78526, -30.9017, 0, 1);
    z-index  : 99.69098;
  }

  56% {
    transform: matrix3d(0.77729, 0, 0, 0, 0, 0.77729, 0, 0, 0, 0, 1, 0, -251.03965, -36.81246, 0, 1);
    z-index  : 99.63188;
  }

  57% {
    transform: matrix3d(0.75807, 0, 0, 0, 0, 0.75807, 0, 0, 0, 0, 1, 0, -244.3033, -42.57793, 0, 1);
    z-index  : 99.57422;
  }

  58% {
    transform: matrix3d(0.73942, 0, 0, 0, 0, 0.73942, 0, 0, 0, 0, 1, 0, -236.6028, -48.17537, 0, 1);
    z-index  : 99.51825;
  }

  59% {
    transform: matrix3d(0.72139, 0, 0, 0, 0, 0.72139, 0, 0, 0, 0, 1, 0, -227.96854, -53.58268, 0, 1);
    z-index  : 99.46417;
  }

  60% {
    transform: matrix3d(0.70407, 0, 0, 0, 0, 0.70407, 0, 0, 0, 0, 1, 0, -218.43459, -58.77853, 0, 1);
    z-index  : 99.41221;
  }

  61% {
    transform: matrix3d(0.68753, 0, 0, 0, 0, 0.68753, 0, 0, 0, 0, 1, 0, -208.03857, -63.7424, 0, 1);
    z-index  : 99.36258;
  }

  62% {
    transform: matrix3d(0.67182, 0, 0, 0, 0, 0.67182, 0, 0, 0, 0, 1, 0, -196.82153, -68.45471, 0, 1);
    z-index  : 99.31545;
  }

  63% {
    transform: matrix3d(0.65701, 0, 0, 0, 0, 0.65701, 0, 0, 0, 0, 1, 0, -184.82772, -72.89686, 0, 1);
    z-index  : 99.27103;
  }

  64% {
    transform: matrix3d(0.64316, 0, 0, 0, 0, 0.64316, 0, 0, 0, 0, 1, 0, -172.10447, -77.05132, 0, 1);
    z-index  : 99.22949;
  }

  65% {
    transform: matrix3d(0.63033, 0, 0, 0, 0, 0.63033, 0, 0, 0, 0, 1, 0, -158.70201, -80.9017, 0, 1);
    z-index  : 99.19098;
  }

  66% {
    transform: matrix3d(0.61856, 0, 0, 0, 0, 0.61856, 0, 0, 0, 0, 1, 0, -144.67323, -84.43279, 0, 1);
    z-index  : 99.15567;
  }

  67% {
    transform: matrix3d(0.6079, 0, 0, 0, 0, 0.6079, 0, 0, 0, 0, 1, 0, -130.07348, -87.63067, 0, 1);
    z-index  : 99.12369;
  }

  68% {
    transform: matrix3d(0.59839, 0, 0, 0, 0, 0.59839, 0, 0, 0, 0, 1, 0, -114.96039, -90.4827, 0, 1);
    z-index  : 99.09517;
  }

  69% {
    transform: matrix3d(0.59007, 0, 0, 0, 0, 0.59007, 0, 0, 0, 0, 1, 0, -99.39361, -92.97765, 0, 1);
    z-index  : 99.07022;
  }

  70% {
    transform: matrix3d(0.58298, 0, 0, 0, 0, 0.58298, 0, 0, 0, 0, 1, 0, -83.43456, -95.10565, 0, 1);
    z-index  : 99.04894;
  }

  71% {
    transform: matrix3d(0.57714, 0, 0, 0, 0, 0.57714, 0, 0, 0, 0, 1, 0, -67.14622, -96.85831, 0, 1);
    z-index  : 99.03142;
  }

  72% {
    transform: matrix3d(0.57257, 0, 0, 0, 0, 0.57257, 0, 0, 0, 0, 1, 0, -50.59289, -98.22872, 0, 1);
    z-index  : 99.01771;
  }

  73% {
    transform: matrix3d(0.5693, 0, 0, 0, 0, 0.5693, 0, 0, 0, 0, 1, 0, -33.83989, -99.21146, 0, 1);
    z-index  : 99.00789;
  }

  74% {
    transform: matrix3d(0.56732, 0, 0, 0, 0, 0.56732, 0, 0, 0, 0, 1, 0, -16.95333, -99.80266, 0, 1);
    z-index  : 99.00197;
  }

  75% {
    transform: matrix3d(0.56667, 0, 0, 0, 0, 0.56667, 0, 0, 0, 0, 1, 0, 0.00015, -99.99999, 0, 1);
    z-index  : 99;
  }

  76% {
    transform: matrix3d(0.56732, 0, 0, 0, 0, 0.56732, 0, 0, 0, 0, 1, 0, 16.95364, -99.80266, 0, 1);
    z-index  : 99.00197;
  }

  77% {
    transform: matrix3d(0.5693, 0, 0, 0, 0, 0.5693, 0, 0, 0, 0, 1, 0, 33.84024, -99.21145, 0, 1);
    z-index  : 99.00789;
  }

  78% {
    transform: matrix3d(0.57257, 0, 0, 0, 0, 0.57257, 0, 0, 0, 0, 1, 0, 50.59331, -98.2287, 0, 1);
    z-index  : 99.01771;
  }

  79% {
    transform: matrix3d(0.57714, 0, 0, 0, 0, 0.57714, 0, 0, 0, 0, 1, 0, 67.14674, -96.85828, 0, 1);
    z-index  : 99.03142;
  }

  80% {
    transform: matrix3d(0.58298, 0, 0, 0, 0, 0.58298, 0, 0, 0, 0, 1, 0, 83.4352, -95.1056, 0, 1);
    z-index  : 99.04894;
  }

  81% {
    transform: matrix3d(0.59007, 0, 0, 0, 0, 0.59007, 0, 0, 0, 0, 1, 0, 99.39444, -92.97758, 0, 1);
    z-index  : 99.07022;
  }

  82% {
    transform: matrix3d(0.59839, 0, 0, 0, 0, 0.59839, 0, 0, 0, 0, 1, 0, 114.96147, -90.48262, 0, 1);
    z-index  : 99.09517;
  }

  83% {
    transform: matrix3d(0.6079, 0, 0, 0, 0, 0.6079, 0, 0, 0, 0, 1, 0, 130.07487, -87.63055, 0, 1);
    z-index  : 99.12369;
  }

  84% {
    transform: matrix3d(0.61856, 0, 0, 0, 0, 0.61856, 0, 0, 0, 0, 1, 0, 144.67503, -84.43264, 0, 1);
    z-index  : 99.15567;
  }

  85% {
    transform: matrix3d(0.63033, 0, 0, 0, 0, 0.63033, 0, 0, 0, 0, 1, 0, 158.70434, -80.9015, 0, 1);
    z-index  : 99.19099;
  }

  86% {
    transform: matrix3d(0.64316, 0, 0, 0, 0, 0.64316, 0, 0, 0, 0, 1, 0, 172.10748, -77.05106, 0, 1);
    z-index  : 99.22949;
  }

  87% {
    transform: matrix3d(0.65701, 0, 0, 0, 0, 0.65701, 0, 0, 0, 0, 1, 0, 184.83158, -72.89652, 0, 1);
    z-index  : 99.27103;
  }

  88% {
    transform: matrix3d(0.67182, 0, 0, 0, 0, 0.67182, 0, 0, 0, 0, 1, 0, 196.82649, -68.45427, 0, 1);
    z-index  : 99.31546;
  }

  89% {
    transform: matrix3d(0.68753, 0, 0, 0, 0, 0.68753, 0, 0, 0, 0, 1, 0, 208.04493, -63.74182, 0, 1);
    z-index  : 99.36258;
  }

  90% {
    transform: matrix3d(0.70407, 0, 0, 0, 0, 0.70407, 0, 0, 0, 0, 1, 0, 218.4427, -58.77778, 0, 1);
    z-index  : 99.41222;
  }

  91% {
    transform: matrix3d(0.72139, 0, 0, 0, 0, 0.72139, 0, 0, 0, 0, 1, 0, 227.97887, -53.58172, 0, 1);
    z-index  : 99.46418;
  }

  92% {
    transform: matrix3d(0.73942, 0, 0, 0, 0, 0.73942, 0, 0, 0, 0, 1, 0, 236.61593, -48.17414, 0, 1);
    z-index  : 99.51826;
  }

  93% {
    transform: matrix3d(0.75808, 0, 0, 0, 0, 0.75808, 0, 0, 0, 0, 1, 0, 244.31993, -42.57636, 0, 1);
    z-index  : 99.57424;
  }

  94% {
    transform: matrix3d(0.7773, 0, 0, 0, 0, 0.7773, 0, 0, 0, 0, 1, 0, 251.06067, -36.81045, 0, 1);
    z-index  : 99.6319;
  }

  95% {
    transform: matrix3d(0.797, 0, 0, 0, 0, 0.797, 0, 0, 0, 0, 1, 0, 256.81175, -30.89914, 0, 1);
    z-index  : 99.69101;
  }

  96% {
    transform: matrix3d(0.81711, 0, 0, 0, 0, 0.81711, 0, 0, 0, 0, 1, 0, 261.55076, -24.86574, 0, 1);
    z-index  : 99.75134;
  }

  97% {
    transform: matrix3d(0.83755, 0, 0, 0, 0, 0.83755, 0, 0, 0, 0, 1, 0, 265.25934, -18.73401, 0, 1);
    z-index  : 99.81266;
  }

  98% {
    transform: matrix3d(0.85824, 0, 0, 0, 0, 0.85824, 0, 0, 0, 0, 1, 0, 267.92326, -12.52811, 0, 1);
    z-index  : 99.87472;
  }

  99% {
    transform: matrix3d(0.87909, 0, 0, 0, 0, 0.87909, 0, 0, 0, 0, 1, 0, 269.5325, -6.27248, 0, 1);
    z-index  : 99.93728;
  }

  100% {
    transform: matrix3d(0.90003, 0, 0, 0, 0, 0.90003, 0, 0, 0, 0, 1, 0, 270.08133, 0.00827, 0, 1);
    z-index  : 100.00008;
  }
}
// 旋转动画6
@keyframes rotate6 {
  0% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0, -16.95344, 99.80267, 0, 1);
    z-index  : 100.99803;
  }

  1% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0, -33.83997, 99.21147, 0, 1);
    z-index  : 100.99211;
  }

  2% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0, -50.59295, 98.22873, 0, 1);
    z-index  : 100.98229;
  }

  3% {
    transform: matrix3d(1.22286, 0, 0, 0, 0, 1.22286, 0, 0, 0, 0, 1, 0, -67.14627, 96.85832, 0, 1);
    z-index  : 100.96858;
  }

  4% {
    transform: matrix3d(1.21702, 0, 0, 0, 0, 1.21702, 0, 0, 0, 0, 1, 0, -83.43459, 95.10565, 0, 1);
    z-index  : 100.95106;
  }

  5% {
    transform: matrix3d(1.20993, 0, 0, 0, 0, 1.20993, 0, 0, 0, 0, 1, 0, -99.39363, 92.97765, 0, 1);
    z-index  : 100.92978;
  }

  6% {
    transform: matrix3d(1.20161, 0, 0, 0, 0, 1.20161, 0, 0, 0, 0, 1, 0, -114.96041, 90.48271, 0, 1);
    z-index  : 100.90483;
  }

  7% {
    transform: matrix3d(1.1921, 0, 0, 0, 0, 1.1921, 0, 0, 0, 0, 1, 0, -130.07349, 87.63067, 0, 1);
    z-index  : 100.87631;
  }

  8% {
    transform: matrix3d(1.18144, 0, 0, 0, 0, 1.18144, 0, 0, 0, 0, 1, 0, -144.67323, 84.43279, 0, 1);
    z-index  : 100.84433;
  }

  9% {
    transform: matrix3d(1.16967, 0, 0, 0, 0, 1.16967, 0, 0, 0, 0, 1, 0, -158.70202, 80.9017, 0, 1);
    z-index  : 100.80902;
  }

  10% {
    transform: matrix3d(1.15684, 0, 0, 0, 0, 1.15684, 0, 0, 0, 0, 1, 0, -172.10448, 77.05132, 0, 1);
    z-index  : 100.77051;
  }

  11% {
    transform: matrix3d(1.14299, 0, 0, 0, 0, 1.14299, 0, 0, 0, 0, 1, 0, -184.82772, 72.89686, 0, 1);
    z-index  : 100.72897;
  }

  12% {
    transform: matrix3d(1.12818, 0, 0, 0, 0, 1.12818, 0, 0, 0, 0, 1, 0, -196.82153, 68.45471, 0, 1);
    z-index  : 100.68455;
  }

  13% {
    transform: matrix3d(1.11247, 0, 0, 0, 0, 1.11247, 0, 0, 0, 0, 1, 0, -208.03858, 63.7424, 0, 1);
    z-index  : 100.63742;
  }

  14% {
    transform: matrix3d(1.09593, 0, 0, 0, 0, 1.09593, 0, 0, 0, 0, 1, 0, -218.43459, 58.77853, 0, 1);
    z-index  : 100.58779;
  }

  15% {
    transform: matrix3d(1.07861, 0, 0, 0, 0, 1.07861, 0, 0, 0, 0, 1, 0, -227.96854, 53.58268, 0, 1);
    z-index  : 100.53583;
  }

  16% {
    transform: matrix3d(1.06058, 0, 0, 0, 0, 1.06058, 0, 0, 0, 0, 1, 0, -236.6028, 48.17537, 0, 1);
    z-index  : 100.48175;
  }

  17% {
    transform: matrix3d(1.04193, 0, 0, 0, 0, 1.04193, 0, 0, 0, 0, 1, 0, -244.3033, 42.57793, 0, 1);
    z-index  : 100.42578;
  }

  18% {
    transform: matrix3d(1.02271, 0, 0, 0, 0, 1.02271, 0, 0, 0, 0, 1, 0, -251.03965, 36.81246, 0, 1);
    z-index  : 100.36812;
  }

  19% {
    transform: matrix3d(1.00301, 0, 0, 0, 0, 1.00301, 0, 0, 0, 0, 1, 0, -256.78526, 30.9017, 0, 1);
    z-index  : 100.30902;
  }

  20% {
    transform: matrix3d(0.9829, 0, 0, 0, 0, 0.9829, 0, 0, 0, 0, 1, 0, -261.51745, 24.86899, 0, 1);
    z-index  : 100.24869;
  }

  21% {
    transform: matrix3d(0.96246, 0, 0, 0, 0, 0.96246, 0, 0, 0, 0, 1, 0, -265.21756, 18.73813, 0, 1);
    z-index  : 100.18738;
  }

  22% {
    transform: matrix3d(0.94178, 0, 0, 0, 0, 0.94178, 0, 0, 0, 0, 1, 0, -267.87097, 12.53332, 0, 1);
    z-index  : 100.12533;
  }

  23% {
    transform: matrix3d(0.92093, 0, 0, 0, 0, 0.92093, 0, 0, 0, 0, 1, 0, -269.46722, 6.27905, 0, 1);
    z-index  : 100.06279;
  }

  24% {
    transform: matrix3d(0.9, 0, 0, 0, 0, 0.9, 0, 0, 0, 0, 1, 0, -270, 0, 0, 1);
    z-index  : 100;
  }

  25% {
    transform: matrix3d(0.87907, 0, 0, 0, 0, 0.87907, 0, 0, 0, 0, 1, 0, -269.46722, -6.27905, 0, 1);
    z-index  : 99.93721;
  }

  26% {
    transform: matrix3d(0.85822, 0, 0, 0, 0, 0.85822, 0, 0, 0, 0, 1, 0, -267.87097, -12.53332, 0, 1);
    z-index  : 99.87467;
  }

  27% {
    transform: matrix3d(0.83754, 0, 0, 0, 0, 0.83754, 0, 0, 0, 0, 1, 0, -265.21756, -18.73813, 0, 1);
    z-index  : 99.81262;
  }

  28% {
    transform: matrix3d(0.8171, 0, 0, 0, 0, 0.8171, 0, 0, 0, 0, 1, 0, -261.51745, -24.86899, 0, 1);
    z-index  : 99.75131;
  }

  29% {
    transform: matrix3d(0.79699, 0, 0, 0, 0, 0.79699, 0, 0, 0, 0, 1, 0, -256.78526, -30.9017, 0, 1);
    z-index  : 99.69098;
  }

  30% {
    transform: matrix3d(0.77729, 0, 0, 0, 0, 0.77729, 0, 0, 0, 0, 1, 0, -251.03965, -36.81246, 0, 1);
    z-index  : 99.63188;
  }

  31% {
    transform: matrix3d(0.75807, 0, 0, 0, 0, 0.75807, 0, 0, 0, 0, 1, 0, -244.3033, -42.57793, 0, 1);
    z-index  : 99.57422;
  }

  32% {
    transform: matrix3d(0.73942, 0, 0, 0, 0, 0.73942, 0, 0, 0, 0, 1, 0, -236.6028, -48.17537, 0, 1);
    z-index  : 99.51825;
  }

  33% {
    transform: matrix3d(0.72139, 0, 0, 0, 0, 0.72139, 0, 0, 0, 0, 1, 0, -227.96854, -53.58268, 0, 1);
    z-index  : 99.46417;
  }

  34% {
    transform: matrix3d(0.70407, 0, 0, 0, 0, 0.70407, 0, 0, 0, 0, 1, 0, -218.43459, -58.77853, 0, 1);
    z-index  : 99.41221;
  }

  35% {
    transform: matrix3d(0.68753, 0, 0, 0, 0, 0.68753, 0, 0, 0, 0, 1, 0, -208.03857, -63.7424, 0, 1);
    z-index  : 99.36258;
  }

  36% {
    transform: matrix3d(0.67182, 0, 0, 0, 0, 0.67182, 0, 0, 0, 0, 1, 0, -196.82153, -68.45471, 0, 1);
    z-index  : 99.31545;
  }

  37% {
    transform: matrix3d(0.65701, 0, 0, 0, 0, 0.65701, 0, 0, 0, 0, 1, 0, -184.82772, -72.89686, 0, 1);
    z-index  : 99.27103;
  }

  38% {
    transform: matrix3d(0.64316, 0, 0, 0, 0, 0.64316, 0, 0, 0, 0, 1, 0, -172.10447, -77.05132, 0, 1);
    z-index  : 99.22949;
  }

  39% {
    transform: matrix3d(0.63033, 0, 0, 0, 0, 0.63033, 0, 0, 0, 0, 1, 0, -158.70201, -80.9017, 0, 1);
    z-index  : 99.19098;
  }

  40% {
    transform: matrix3d(0.61856, 0, 0, 0, 0, 0.61856, 0, 0, 0, 0, 1, 0, -144.67323, -84.43279, 0, 1);
    z-index  : 99.15567;
  }

  41% {
    transform: matrix3d(0.6079, 0, 0, 0, 0, 0.6079, 0, 0, 0, 0, 1, 0, -130.07348, -87.63067, 0, 1);
    z-index  : 99.12369;
  }

  42% {
    transform: matrix3d(0.59839, 0, 0, 0, 0, 0.59839, 0, 0, 0, 0, 1, 0, -114.96039, -90.4827, 0, 1);
    z-index  : 99.09517;
  }

  43% {
    transform: matrix3d(0.59007, 0, 0, 0, 0, 0.59007, 0, 0, 0, 0, 1, 0, -99.39361, -92.97765, 0, 1);
    z-index  : 99.07022;
  }

  44% {
    transform: matrix3d(0.58298, 0, 0, 0, 0, 0.58298, 0, 0, 0, 0, 1, 0, -83.43456, -95.10565, 0, 1);
    z-index  : 99.04894;
  }

  45% {
    transform: matrix3d(0.57714, 0, 0, 0, 0, 0.57714, 0, 0, 0, 0, 1, 0, -67.14622, -96.85831, 0, 1);
    z-index  : 99.03142;
  }

  46% {
    transform: matrix3d(0.57257, 0, 0, 0, 0, 0.57257, 0, 0, 0, 0, 1, 0, -50.59289, -98.22872, 0, 1);
    z-index  : 99.01771;
  }

  47% {
    transform: matrix3d(0.5693, 0, 0, 0, 0, 0.5693, 0, 0, 0, 0, 1, 0, -33.83989, -99.21146, 0, 1);
    z-index  : 99.00789;
  }

  48% {
    transform: matrix3d(0.56732, 0, 0, 0, 0, 0.56732, 0, 0, 0, 0, 1, 0, -16.95333, -99.80266, 0, 1);
    z-index  : 99.00197;
  }

  49% {
    transform: matrix3d(0.56667, 0, 0, 0, 0, 0.56667, 0, 0, 0, 0, 1, 0, 0.00015, -99.99999, 0, 1);
    z-index  : 99;
  }

  50% {
    transform: matrix3d(0.56732, 0, 0, 0, 0, 0.56732, 0, 0, 0, 0, 1, 0, 16.95364, -99.80266, 0, 1);
    z-index  : 99.00197;
  }

  51% {
    transform: matrix3d(0.5693, 0, 0, 0, 0, 0.5693, 0, 0, 0, 0, 1, 0, 33.84024, -99.21145, 0, 1);
    z-index  : 99.00789;
  }

  52% {
    transform: matrix3d(0.57257, 0, 0, 0, 0, 0.57257, 0, 0, 0, 0, 1, 0, 50.59331, -98.2287, 0, 1);
    z-index  : 99.01771;
  }

  53% {
    transform: matrix3d(0.57714, 0, 0, 0, 0, 0.57714, 0, 0, 0, 0, 1, 0, 67.14674, -96.85828, 0, 1);
    z-index  : 99.03142;
  }

  54% {
    transform: matrix3d(0.58298, 0, 0, 0, 0, 0.58298, 0, 0, 0, 0, 1, 0, 83.4352, -95.1056, 0, 1);
    z-index  : 99.04894;
  }

  55% {
    transform: matrix3d(0.59007, 0, 0, 0, 0, 0.59007, 0, 0, 0, 0, 1, 0, 99.39444, -92.97758, 0, 1);
    z-index  : 99.07022;
  }

  56% {
    transform: matrix3d(0.59839, 0, 0, 0, 0, 0.59839, 0, 0, 0, 0, 1, 0, 114.96147, -90.48262, 0, 1);
    z-index  : 99.09517;
  }

  57% {
    transform: matrix3d(0.6079, 0, 0, 0, 0, 0.6079, 0, 0, 0, 0, 1, 0, 130.07487, -87.63055, 0, 1);
    z-index  : 99.12369;
  }

  58% {
    transform: matrix3d(0.61856, 0, 0, 0, 0, 0.61856, 0, 0, 0, 0, 1, 0, 144.67503, -84.43264, 0, 1);
    z-index  : 99.15567;
  }

  59% {
    transform: matrix3d(0.63033, 0, 0, 0, 0, 0.63033, 0, 0, 0, 0, 1, 0, 158.70434, -80.9015, 0, 1);
    z-index  : 99.19099;
  }

  60% {
    transform: matrix3d(0.64316, 0, 0, 0, 0, 0.64316, 0, 0, 0, 0, 1, 0, 172.10748, -77.05106, 0, 1);
    z-index  : 99.22949;
  }

  61% {
    transform: matrix3d(0.65701, 0, 0, 0, 0, 0.65701, 0, 0, 0, 0, 1, 0, 184.83158, -72.89652, 0, 1);
    z-index  : 99.27103;
  }

  62% {
    transform: matrix3d(0.67182, 0, 0, 0, 0, 0.67182, 0, 0, 0, 0, 1, 0, 196.82649, -68.45427, 0, 1);
    z-index  : 99.31546;
  }

  63% {
    transform: matrix3d(0.68753, 0, 0, 0, 0, 0.68753, 0, 0, 0, 0, 1, 0, 208.04493, -63.74182, 0, 1);
    z-index  : 99.36258;
  }

  64% {
    transform: matrix3d(0.70407, 0, 0, 0, 0, 0.70407, 0, 0, 0, 0, 1, 0, 218.4427, -58.77778, 0, 1);
    z-index  : 99.41222;
  }

  65% {
    transform: matrix3d(0.72139, 0, 0, 0, 0, 0.72139, 0, 0, 0, 0, 1, 0, 227.97887, -53.58172, 0, 1);
    z-index  : 99.46418;
  }

  66% {
    transform: matrix3d(0.73942, 0, 0, 0, 0, 0.73942, 0, 0, 0, 0, 1, 0, 236.61593, -48.17414, 0, 1);
    z-index  : 99.51826;
  }

  67% {
    transform: matrix3d(0.75808, 0, 0, 0, 0, 0.75808, 0, 0, 0, 0, 1, 0, 244.31993, -42.57636, 0, 1);
    z-index  : 99.57424;
  }

  68% {
    transform: matrix3d(0.7773, 0, 0, 0, 0, 0.7773, 0, 0, 0, 0, 1, 0, 251.06067, -36.81045, 0, 1);
    z-index  : 99.6319;
  }

  69% {
    transform: matrix3d(0.797, 0, 0, 0, 0, 0.797, 0, 0, 0, 0, 1, 0, 256.81175, -30.89914, 0, 1);
    z-index  : 99.69101;
  }

  70% {
    transform: matrix3d(0.81711, 0, 0, 0, 0, 0.81711, 0, 0, 0, 0, 1, 0, 261.55076, -24.86574, 0, 1);
    z-index  : 99.75134;
  }

  71% {
    transform: matrix3d(0.83755, 0, 0, 0, 0, 0.83755, 0, 0, 0, 0, 1, 0, 265.25934, -18.73401, 0, 1);
    z-index  : 99.81266;
  }

  72% {
    transform: matrix3d(0.85824, 0, 0, 0, 0, 0.85824, 0, 0, 0, 0, 1, 0, 267.92326, -12.52811, 0, 1);
    z-index  : 99.87472;
  }

  73% {
    transform: matrix3d(0.87909, 0, 0, 0, 0, 0.87909, 0, 0, 0, 0, 1, 0, 269.5325, -6.27248, 0, 1);
    z-index  : 99.93728;
  }

  74% {
    transform: matrix3d(0.90003, 0, 0, 0, 0, 0.90003, 0, 0, 0, 0, 1, 0, 270.08133, 0.00827, 0, 1);
    z-index  : 100.00008;
  }

  75% {
    transform: matrix3d(0.9, 0, 0, 0, 0, 0.9, 0, 0, 0, 0, 1, 0, 270, 0, 0, 1);
    z-index  : 100;
  }

  76% {
    transform: matrix3d(0.92093, 0, 0, 0, 0, 0.92093, 0, 0, 0, 0, 1, 0, 269.46722, 6.27905, 0, 1);
    z-index  : 100.06279;
  }

  77% {
    transform: matrix3d(0.94178, 0, 0, 0, 0, 0.94178, 0, 0, 0, 0, 1, 0, 267.87097, 12.53332, 0, 1);
    z-index  : 100.12533;
  }

  78% {
    transform: matrix3d(0.96246, 0, 0, 0, 0, 0.96246, 0, 0, 0, 0, 1, 0, 265.21756, 18.73813, 0, 1);
    z-index  : 100.18738;
  }

  79% {
    transform: matrix3d(0.9829, 0, 0, 0, 0, 0.9829, 0, 0, 0, 0, 1, 0, 261.51745, 24.86899, 0, 1);
    z-index  : 100.24869;
  }

  80% {
    transform: matrix3d(1.00301, 0, 0, 0, 0, 1.00301, 0, 0, 0, 0, 1, 0, 256.78526, 30.9017, 0, 1);
    z-index  : 100.30902;
  }

  81% {
    transform: matrix3d(1.02271, 0, 0, 0, 0, 1.02271, 0, 0, 0, 0, 1, 0, 251.03965, 36.81246, 0, 1);
    z-index  : 100.36812;
  }

  82% {
    transform: matrix3d(1.04193, 0, 0, 0, 0, 1.04193, 0, 0, 0, 0, 1, 0, 244.3033, 42.57793, 0, 1);
    z-index  : 100.42578;
  }

  83% {
    transform: matrix3d(1.06058, 0, 0, 0, 0, 1.06058, 0, 0, 0, 0, 1, 0, 236.6028, 48.17537, 0, 1);
    z-index  : 100.48175;
  }

  84% {
    transform: matrix3d(1.07861, 0, 0, 0, 0, 1.07861, 0, 0, 0, 0, 1, 0, 227.96854, 53.58268, 0, 1);
    z-index  : 100.53583;
  }

  85% {
    transform: matrix3d(1.09593, 0, 0, 0, 0, 1.09593, 0, 0, 0, 0, 1, 0, 218.43459, 58.77853, 0, 1);
    z-index  : 100.58779;
  }

  86% {
    transform: matrix3d(1.11247, 0, 0, 0, 0, 1.11247, 0, 0, 0, 0, 1, 0, 208.03858, 63.7424, 0, 1);
    z-index  : 100.63742;
  }

  87% {
    transform: matrix3d(1.12818, 0, 0, 0, 0, 1.12818, 0, 0, 0, 0, 1, 0, 196.82153, 68.45471, 0, 1);
    z-index  : 100.68455;
  }

  88% {
    transform: matrix3d(1.14299, 0, 0, 0, 0, 1.14299, 0, 0, 0, 0, 1, 0, 184.82772, 72.89686, 0, 1);
    z-index  : 100.72897;
  }

  89% {
    transform: matrix3d(1.15684, 0, 0, 0, 0, 1.15684, 0, 0, 0, 0, 1, 0, 172.10448, 77.05132, 0, 1);
    z-index  : 100.77051;
  }

  90% {
    transform: matrix3d(1.16967, 0, 0, 0, 0, 1.16967, 0, 0, 0, 0, 1, 0, 158.70202, 80.9017, 0, 1);
    z-index  : 100.80902;
  }

  91% {
    transform: matrix3d(1.18144, 0, 0, 0, 0, 1.18144, 0, 0, 0, 0, 1, 0, 144.67323, 84.43279, 0, 1);
    z-index  : 100.84433;
  }

  92% {
    transform: matrix3d(1.1921, 0, 0, 0, 0, 1.1921, 0, 0, 0, 0, 1, 0, 130.07349, 87.63067, 0, 1);
    z-index  : 100.87631;
  }

  93% {
    transform: matrix3d(1.20161, 0, 0, 0, 0, 1.20161, 0, 0, 0, 0, 1, 0, 114.96041, 90.48271, 0, 1);
    z-index  : 100.90483;
  }

  94% {
    transform: matrix3d(1.20993, 0, 0, 0, 0, 1.20993, 0, 0, 0, 0, 1, 0, 99.39363, 92.97765, 0, 1);
    z-index  : 100.92978;
  }

  95% {
    transform: matrix3d(1.21702, 0, 0, 0, 0, 1.21702, 0, 0, 0, 0, 1, 0, 83.43459, 95.10565, 0, 1);
    z-index  : 100.95106;
  }

  96% {
    transform: matrix3d(1.22286, 0, 0, 0, 0, 1.22286, 0, 0, 0, 0, 1, 0, 67.14627, 96.85832, 0, 1);
    z-index  : 100.96858;
  }

  97% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0, 50.59295, 98.22873, 0, 1);
    z-index  : 100.98229;
  }

  98% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0, 33.83997, 99.21147, 0, 1);
    z-index  : 100.99211;
  }

  99% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0, 16.95344, 99.80267, 0, 1);
    z-index  : 100.99803;
  }

  100% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0, 0, 100, 0, 1);
    z-index  : 101;
  }
}
// 旋转动画7
@keyframes rotate7 {
  0% {
    transform: matrix3d(0.85822, 0, 0, 0, 0, 0.85822, 0, 0, 0, 0, 1, 0, -267.87097, -12.53332, 0, 1);
    z-index  : 99.87467;
  }

  1% {
    transform: matrix3d(0.83754, 0, 0, 0, 0, 0.83754, 0, 0, 0, 0, 1, 0, -265.21756, -18.73813, 0, 1);
    z-index  : 99.81262;
  }

  2% {
    transform: matrix3d(0.8171, 0, 0, 0, 0, 0.8171, 0, 0, 0, 0, 1, 0, -261.51745, -24.86899, 0, 1);
    z-index  : 99.75131;
  }

  3% {
    transform: matrix3d(0.79699, 0, 0, 0, 0, 0.79699, 0, 0, 0, 0, 1, 0, -256.78526, -30.9017, 0, 1);
    z-index  : 99.69098;
  }

  4% {
    transform: matrix3d(0.77729, 0, 0, 0, 0, 0.77729, 0, 0, 0, 0, 1, 0, -251.03965, -36.81246, 0, 1);
    z-index  : 99.63188;
  }

  5% {
    transform: matrix3d(0.75807, 0, 0, 0, 0, 0.75807, 0, 0, 0, 0, 1, 0, -244.3033, -42.57793, 0, 1);
    z-index  : 99.57422;
  }

  6% {
    transform: matrix3d(0.73942, 0, 0, 0, 0, 0.73942, 0, 0, 0, 0, 1, 0, -236.6028, -48.17537, 0, 1);
    z-index  : 99.51825;
  }

  7% {
    transform: matrix3d(0.72139, 0, 0, 0, 0, 0.72139, 0, 0, 0, 0, 1, 0, -227.96854, -53.58268, 0, 1);
    z-index  : 99.46417;
  }

  8% {
    transform: matrix3d(0.70407, 0, 0, 0, 0, 0.70407, 0, 0, 0, 0, 1, 0, -218.43459, -58.77853, 0, 1);
    z-index  : 99.41221;
  }

  9% {
    transform: matrix3d(0.68753, 0, 0, 0, 0, 0.68753, 0, 0, 0, 0, 1, 0, -208.03857, -63.7424, 0, 1);
    z-index  : 99.36258;
  }

  10% {
    transform: matrix3d(0.67182, 0, 0, 0, 0, 0.67182, 0, 0, 0, 0, 1, 0, -196.82153, -68.45471, 0, 1);
    z-index  : 99.31545;
  }

  11% {
    transform: matrix3d(0.65701, 0, 0, 0, 0, 0.65701, 0, 0, 0, 0, 1, 0, -184.82772, -72.89686, 0, 1);
    z-index  : 99.27103;
  }

  12% {
    transform: matrix3d(0.64316, 0, 0, 0, 0, 0.64316, 0, 0, 0, 0, 1, 0, -172.10447, -77.05132, 0, 1);
    z-index  : 99.22949;
  }

  13% {
    transform: matrix3d(0.63033, 0, 0, 0, 0, 0.63033, 0, 0, 0, 0, 1, 0, -158.70201, -80.9017, 0, 1);
    z-index  : 99.19098;
  }

  14% {
    transform: matrix3d(0.61856, 0, 0, 0, 0, 0.61856, 0, 0, 0, 0, 1, 0, -144.67323, -84.43279, 0, 1);
    z-index  : 99.15567;
  }

  15% {
    transform: matrix3d(0.6079, 0, 0, 0, 0, 0.6079, 0, 0, 0, 0, 1, 0, -130.07348, -87.63067, 0, 1);
    z-index  : 99.12369;
  }

  16% {
    transform: matrix3d(0.59839, 0, 0, 0, 0, 0.59839, 0, 0, 0, 0, 1, 0, -114.96039, -90.4827, 0, 1);
    z-index  : 99.09517;
  }

  17% {
    transform: matrix3d(0.59007, 0, 0, 0, 0, 0.59007, 0, 0, 0, 0, 1, 0, -99.39361, -92.97765, 0, 1);
    z-index  : 99.07022;
  }

  18% {
    transform: matrix3d(0.58298, 0, 0, 0, 0, 0.58298, 0, 0, 0, 0, 1, 0, -83.43456, -95.10565, 0, 1);
    z-index  : 99.04894;
  }

  19% {
    transform: matrix3d(0.57714, 0, 0, 0, 0, 0.57714, 0, 0, 0, 0, 1, 0, -67.14622, -96.85831, 0, 1);
    z-index  : 99.03142;
  }

  20% {
    transform: matrix3d(0.57257, 0, 0, 0, 0, 0.57257, 0, 0, 0, 0, 1, 0, -50.59289, -98.22872, 0, 1);
    z-index  : 99.01771;
  }

  21% {
    transform: matrix3d(0.5693, 0, 0, 0, 0, 0.5693, 0, 0, 0, 0, 1, 0, -33.83989, -99.21146, 0, 1);
    z-index  : 99.00789;
  }

  22% {
    transform: matrix3d(0.56732, 0, 0, 0, 0, 0.56732, 0, 0, 0, 0, 1, 0, -16.95333, -99.80266, 0, 1);
    z-index  : 99.00197;
  }

  23% {
    transform: matrix3d(0.56667, 0, 0, 0, 0, 0.56667, 0, 0, 0, 0, 1, 0, 0.00015, -99.99999, 0, 1);
    z-index  : 99;
  }

  24% {
    transform: matrix3d(0.56732, 0, 0, 0, 0, 0.56732, 0, 0, 0, 0, 1, 0, 16.95364, -99.80266, 0, 1);
    z-index  : 99.00197;
  }

  25% {
    transform: matrix3d(0.5693, 0, 0, 0, 0, 0.5693, 0, 0, 0, 0, 1, 0, 33.84024, -99.21145, 0, 1);
    z-index  : 99.00789;
  }

  26% {
    transform: matrix3d(0.57257, 0, 0, 0, 0, 0.57257, 0, 0, 0, 0, 1, 0, 50.59331, -98.2287, 0, 1);
    z-index  : 99.01771;
  }

  27% {
    transform: matrix3d(0.57714, 0, 0, 0, 0, 0.57714, 0, 0, 0, 0, 1, 0, 67.14674, -96.85828, 0, 1);
    z-index  : 99.03142;
  }

  28% {
    transform: matrix3d(0.58298, 0, 0, 0, 0, 0.58298, 0, 0, 0, 0, 1, 0, 83.4352, -95.1056, 0, 1);
    z-index  : 99.04894;
  }

  29% {
    transform: matrix3d(0.59007, 0, 0, 0, 0, 0.59007, 0, 0, 0, 0, 1, 0, 99.39444, -92.97758, 0, 1);
    z-index  : 99.07022;
  }

  30% {
    transform: matrix3d(0.59839, 0, 0, 0, 0, 0.59839, 0, 0, 0, 0, 1, 0, 114.96147, -90.48262, 0, 1);
    z-index  : 99.09517;
  }

  31% {
    transform: matrix3d(0.6079, 0, 0, 0, 0, 0.6079, 0, 0, 0, 0, 1, 0, 130.07487, -87.63055, 0, 1);
    z-index  : 99.12369;
  }

  32% {
    transform: matrix3d(0.61856, 0, 0, 0, 0, 0.61856, 0, 0, 0, 0, 1, 0, 144.67503, -84.43264, 0, 1);
    z-index  : 99.15567;
  }

  33% {
    transform: matrix3d(0.63033, 0, 0, 0, 0, 0.63033, 0, 0, 0, 0, 1, 0, 158.70434, -80.9015, 0, 1);
    z-index  : 99.19099;
  }

  34% {
    transform: matrix3d(0.64316, 0, 0, 0, 0, 0.64316, 0, 0, 0, 0, 1, 0, 172.10748, -77.05106, 0, 1);
    z-index  : 99.22949;
  }

  35% {
    transform: matrix3d(0.65701, 0, 0, 0, 0, 0.65701, 0, 0, 0, 0, 1, 0, 184.83158, -72.89652, 0, 1);
    z-index  : 99.27103;
  }

  36% {
    transform: matrix3d(0.67182, 0, 0, 0, 0, 0.67182, 0, 0, 0, 0, 1, 0, 196.82649, -68.45427, 0, 1);
    z-index  : 99.31546;
  }

  37% {
    transform: matrix3d(0.68753, 0, 0, 0, 0, 0.68753, 0, 0, 0, 0, 1, 0, 208.04493, -63.74182, 0, 1);
    z-index  : 99.36258;
  }

  38% {
    transform: matrix3d(0.70407, 0, 0, 0, 0, 0.70407, 0, 0, 0, 0, 1, 0, 218.4427, -58.77778, 0, 1);
    z-index  : 99.41222;
  }

  39% {
    transform: matrix3d(0.72139, 0, 0, 0, 0, 0.72139, 0, 0, 0, 0, 1, 0, 227.97887, -53.58172, 0, 1);
    z-index  : 99.46418;
  }

  40% {
    transform: matrix3d(0.73942, 0, 0, 0, 0, 0.73942, 0, 0, 0, 0, 1, 0, 236.61593, -48.17414, 0, 1);
    z-index  : 99.51826;
  }

  41% {
    transform: matrix3d(0.75808, 0, 0, 0, 0, 0.75808, 0, 0, 0, 0, 1, 0, 244.31993, -42.57636, 0, 1);
    z-index  : 99.57424;
  }

  42% {
    transform: matrix3d(0.7773, 0, 0, 0, 0, 0.7773, 0, 0, 0, 0, 1, 0, 251.06067, -36.81045, 0, 1);
    z-index  : 99.6319;
  }

  43% {
    transform: matrix3d(0.797, 0, 0, 0, 0, 0.797, 0, 0, 0, 0, 1, 0, 256.81175, -30.89914, 0, 1);
    z-index  : 99.69101;
  }

  44% {
    transform: matrix3d(0.81711, 0, 0, 0, 0, 0.81711, 0, 0, 0, 0, 1, 0, 261.55076, -24.86574, 0, 1);
    z-index  : 99.75134;
  }

  45% {
    transform: matrix3d(0.83755, 0, 0, 0, 0, 0.83755, 0, 0, 0, 0, 1, 0, 265.25934, -18.73401, 0, 1);
    z-index  : 99.81266;
  }

  46% {
    transform: matrix3d(0.85824, 0, 0, 0, 0, 0.85824, 0, 0, 0, 0, 1, 0, 267.92326, -12.52811, 0, 1);
    z-index  : 99.87472;
  }

  47% {
    transform: matrix3d(0.87909, 0, 0, 0, 0, 0.87909, 0, 0, 0, 0, 1, 0, 269.5325, -6.27248, 0, 1);
    z-index  : 99.93728;
  }

  48% {
    transform: matrix3d(0.90003, 0, 0, 0, 0, 0.90003, 0, 0, 0, 0, 1, 0, 270.08133, 0.00827, 0, 1);
    z-index  : 100.00008;
  }

  49% {
    transform: matrix3d(0.9, 0, 0, 0, 0, 0.9, 0, 0, 0, 0, 1, 0, 270, 0, 0, 1);
    z-index  : 100;
  }

  50% {
    transform: matrix3d(0.92093, 0, 0, 0, 0, 0.92093, 0, 0, 0, 0, 1, 0, 269.46722, 6.27905, 0, 1);
    z-index  : 100.06279;
  }

  51% {
    transform: matrix3d(0.94178, 0, 0, 0, 0, 0.94178, 0, 0, 0, 0, 1, 0, 267.87097, 12.53332, 0, 1);
    z-index  : 100.12533;
  }

  52% {
    transform: matrix3d(0.96246, 0, 0, 0, 0, 0.96246, 0, 0, 0, 0, 1, 0, 265.21756, 18.73813, 0, 1);
    z-index  : 100.18738;
  }

  53% {
    transform: matrix3d(0.9829, 0, 0, 0, 0, 0.9829, 0, 0, 0, 0, 1, 0, 261.51745, 24.86899, 0, 1);
    z-index  : 100.24869;
  }

  54% {
    transform: matrix3d(1.00301, 0, 0, 0, 0, 1.00301, 0, 0, 0, 0, 1, 0, 256.78526, 30.9017, 0, 1);
    z-index  : 100.30902;
  }

  55% {
    transform: matrix3d(1.02271, 0, 0, 0, 0, 1.02271, 0, 0, 0, 0, 1, 0, 251.03965, 36.81246, 0, 1);
    z-index  : 100.36812;
  }

  56% {
    transform: matrix3d(1.04193, 0, 0, 0, 0, 1.04193, 0, 0, 0, 0, 1, 0, 244.3033, 42.57793, 0, 1);
    z-index  : 100.42578;
  }

  57% {
    transform: matrix3d(1.06058, 0, 0, 0, 0, 1.06058, 0, 0, 0, 0, 1, 0, 236.6028, 48.17537, 0, 1);
    z-index  : 100.48175;
  }

  58% {
    transform: matrix3d(1.07861, 0, 0, 0, 0, 1.07861, 0, 0, 0, 0, 1, 0, 227.96854, 53.58268, 0, 1);
    z-index  : 100.53583;
  }

  59% {
    transform: matrix3d(1.09593, 0, 0, 0, 0, 1.09593, 0, 0, 0, 0, 1, 0, 218.43459, 58.77853, 0, 1);
    z-index  : 100.58779;
  }

  60% {
    transform: matrix3d(1.11247, 0, 0, 0, 0, 1.11247, 0, 0, 0, 0, 1, 0, 208.03858, 63.7424, 0, 1);
    z-index  : 100.63742;
  }

  61% {
    transform: matrix3d(1.12818, 0, 0, 0, 0, 1.12818, 0, 0, 0, 0, 1, 0, 196.82153, 68.45471, 0, 1);
    z-index  : 100.68455;
  }

  62% {
    transform: matrix3d(1.14299, 0, 0, 0, 0, 1.14299, 0, 0, 0, 0, 1, 0, 184.82772, 72.89686, 0, 1);
    z-index  : 100.72897;
  }

  63% {
    transform: matrix3d(1.15684, 0, 0, 0, 0, 1.15684, 0, 0, 0, 0, 1, 0, 172.10448, 77.05132, 0, 1);
    z-index  : 100.77051;
  }

  64% {
    transform: matrix3d(1.16967, 0, 0, 0, 0, 1.16967, 0, 0, 0, 0, 1, 0, 158.70202, 80.9017, 0, 1);
    z-index  : 100.80902;
  }

  65% {
    transform: matrix3d(1.18144, 0, 0, 0, 0, 1.18144, 0, 0, 0, 0, 1, 0, 144.67323, 84.43279, 0, 1);
    z-index  : 100.84433;
  }

  66% {
    transform: matrix3d(1.1921, 0, 0, 0, 0, 1.1921, 0, 0, 0, 0, 1, 0, 130.07349, 87.63067, 0, 1);
    z-index  : 100.87631;
  }

  67% {
    transform: matrix3d(1.20161, 0, 0, 0, 0, 1.20161, 0, 0, 0, 0, 1, 0, 114.96041, 90.48271, 0, 1);
    z-index  : 100.90483;
  }

  68% {
    transform: matrix3d(1.20993, 0, 0, 0, 0, 1.20993, 0, 0, 0, 0, 1, 0, 99.39363, 92.97765, 0, 1);
    z-index  : 100.92978;
  }

  69% {
    transform: matrix3d(1.21702, 0, 0, 0, 0, 1.21702, 0, 0, 0, 0, 1, 0, 83.43459, 95.10565, 0, 1);
    z-index  : 100.95106;
  }

  70% {
    transform: matrix3d(1.22286, 0, 0, 0, 0, 1.22286, 0, 0, 0, 0, 1, 0, 67.14627, 96.85832, 0, 1);
    z-index  : 100.96858;
  }

  71% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0, 50.59295, 98.22873, 0, 1);
    z-index  : 100.98229;
  }

  72% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0, 33.83997, 99.21147, 0, 1);
    z-index  : 100.99211;
  }

  73% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0, 16.95344, 99.80267, 0, 1);
    z-index  : 100.99803;
  }

  74% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0, 0, 100, 0, 1);
    z-index  : 101;
  }
  75% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0, -16.95344, 99.80267, 0, 1);
    z-index  : 100.99803;
  }

  76% {
    transform: matrix3d(1.2307, 0, 0, 0, 0, 1.2307, 0, 0, 0, 0, 1, 0, -33.83997, 99.21147, 0, 1);
    z-index  : 100.99211;
  }

  77% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0, -50.59295, 98.22873, 0, 1);
    z-index  : 100.98229;
  }

  78% {
    transform: matrix3d(1.22286, 0, 0, 0, 0, 1.22286, 0, 0, 0, 0, 1, 0, -67.14627, 96.85832, 0, 1);
    z-index  : 100.96858;
  }

  79% {
    transform: matrix3d(1.21702, 0, 0, 0, 0, 1.21702, 0, 0, 0, 0, 1, 0, -83.43459, 95.10565, 0, 1);
    z-index  : 100.95106;
  }

  80% {
    transform: matrix3d(1.20993, 0, 0, 0, 0, 1.20993, 0, 0, 0, 0, 1, 0, -99.39363, 92.97765, 0, 1);
    z-index  : 100.92978;
  }

  81% {
    transform: matrix3d(1.20161, 0, 0, 0, 0, 1.20161, 0, 0, 0, 0, 1, 0, -114.96041, 90.48271, 0, 1);
    z-index  : 100.90483;
  }

  82% {
    transform: matrix3d(1.1921, 0, 0, 0, 0, 1.1921, 0, 0, 0, 0, 1, 0, -130.07349, 87.63067, 0, 1);
    z-index  : 100.87631;
  }

  83% {
    transform: matrix3d(1.18144, 0, 0, 0, 0, 1.18144, 0, 0, 0, 0, 1, 0, -144.67323, 84.43279, 0, 1);
    z-index  : 100.84433;
  }

  84% {
    transform: matrix3d(1.16967, 0, 0, 0, 0, 1.16967, 0, 0, 0, 0, 1, 0, -158.70202, 80.9017, 0, 1);
    z-index  : 100.80902;
  }

  85% {
    transform: matrix3d(1.15684, 0, 0, 0, 0, 1.15684, 0, 0, 0, 0, 1, 0, -172.10448, 77.05132, 0, 1);
    z-index  : 100.77051;
  }

  86% {
    transform: matrix3d(1.14299, 0, 0, 0, 0, 1.14299, 0, 0, 0, 0, 1, 0, -184.82772, 72.89686, 0, 1);
    z-index  : 100.72897;
  }

  87% {
    transform: matrix3d(1.12818, 0, 0, 0, 0, 1.12818, 0, 0, 0, 0, 1, 0, -196.82153, 68.45471, 0, 1);
    z-index  : 100.68455;
  }

  88% {
    transform: matrix3d(1.11247, 0, 0, 0, 0, 1.11247, 0, 0, 0, 0, 1, 0, -208.03858, 63.7424, 0, 1);
    z-index  : 100.63742;
  }

  89% {
    transform: matrix3d(1.09593, 0, 0, 0, 0, 1.09593, 0, 0, 0, 0, 1, 0, -218.43459, 58.77853, 0, 1);
    z-index  : 100.58779;
  }

  90% {
    transform: matrix3d(1.07861, 0, 0, 0, 0, 1.07861, 0, 0, 0, 0, 1, 0, -227.96854, 53.58268, 0, 1);
    z-index  : 100.53583;
  }

  91% {
    transform: matrix3d(1.06058, 0, 0, 0, 0, 1.06058, 0, 0, 0, 0, 1, 0, -236.6028, 48.17537, 0, 1);
    z-index  : 100.48175;
  }

  92% {
    transform: matrix3d(1.04193, 0, 0, 0, 0, 1.04193, 0, 0, 0, 0, 1, 0, -244.3033, 42.57793, 0, 1);
    z-index  : 100.42578;
  }

  93% {
    transform: matrix3d(1.02271, 0, 0, 0, 0, 1.02271, 0, 0, 0, 0, 1, 0, -251.03965, 36.81246, 0, 1);
    z-index  : 100.36812;
  }

  94% {
    transform: matrix3d(1.00301, 0, 0, 0, 0, 1.00301, 0, 0, 0, 0, 1, 0, -256.78526, 30.9017, 0, 1);
    z-index  : 100.30902;
  }

  95% {
    transform: matrix3d(0.9829, 0, 0, 0, 0, 0.9829, 0, 0, 0, 0, 1, 0, -261.51745, 24.86899, 0, 1);
    z-index  : 100.24869;
  }

  96% {
    transform: matrix3d(0.96246, 0, 0, 0, 0, 0.96246, 0, 0, 0, 0, 1, 0, -265.21756, 18.73813, 0, 1);
    z-index  : 100.18738;
  }

  97% {
    transform: matrix3d(0.94178, 0, 0, 0, 0, 0.94178, 0, 0, 0, 0, 1, 0, -267.87097, 12.53332, 0, 1);
    z-index  : 100.12533;
  }

  98% {
    transform: matrix3d(0.92093, 0, 0, 0, 0, 0.92093, 0, 0, 0, 0, 1, 0, -269.46722, 6.27905, 0, 1);
    z-index  : 100.06279;
  }

  99% {
    transform: matrix3d(0.9, 0, 0, 0, 0, 0.9, 0, 0, 0, 0, 1, 0, -270, 0, 0, 1);
    z-index  : 100;
  }

  100% {
    transform: matrix3d(0.87907, 0, 0, 0, 0, 0.87907, 0, 0, 0, 0, 1, 0, -269.46722, -6.27905, 0, 1);
    z-index  : 99.93721;
  }

}
// 旋转动画8
@keyframes rotate8 {
  0% {
    transform: matrix3d(0.57257, 0, 0, 0, 0, 0.57257, 0, 0, 0, 0, 1, 0, 50.59331, -98.2287, 0, 1);
    z-index  : 99.01771;
  }

  1% {
    transform: matrix3d(0.57714, 0, 0, 0, 0, 0.57714, 0, 0, 0, 0, 1, 0, 67.14674, -96.85828, 0, 1);
    z-index  : 99.03142;
  }

  2% {
    transform: matrix3d(0.58298, 0, 0, 0, 0, 0.58298, 0, 0, 0, 0, 1, 0, 83.4352, -95.1056, 0, 1);
    z-index  : 99.04894;
  }

  3% {
    transform: matrix3d(0.59007, 0, 0, 0, 0, 0.59007, 0, 0, 0, 0, 1, 0, 99.39444, -92.97758, 0, 1);
    z-index  : 99.07022;
  }

  4% {
    transform: matrix3d(0.59839, 0, 0, 0, 0, 0.59839, 0, 0, 0, 0, 1, 0, 114.96147, -90.48262, 0, 1);
    z-index  : 99.09517;
  }

  5% {
    transform: matrix3d(0.6079, 0, 0, 0, 0, 0.6079, 0, 0, 0, 0, 1, 0, 130.07487, -87.63055, 0, 1);
    z-index  : 99.12369;
  }

  6% {
    transform: matrix3d(0.61856, 0, 0, 0, 0, 0.61856, 0, 0, 0, 0, 1, 0, 144.67503, -84.43264, 0, 1);
    z-index  : 99.15567;
  }

  7% {
    transform: matrix3d(0.63033, 0, 0, 0, 0, 0.63033, 0, 0, 0, 0, 1, 0, 158.70434, -80.9015, 0, 1);
    z-index  : 99.19099;
  }

  8% {
    transform: matrix3d(0.64316, 0, 0, 0, 0, 0.64316, 0, 0, 0, 0, 1, 0, 172.10748, -77.05106, 0, 1);
    z-index  : 99.22949;
  }

  9% {
    transform: matrix3d(0.65701, 0, 0, 0, 0, 0.65701, 0, 0, 0, 0, 1, 0, 184.83158, -72.89652, 0, 1);
    z-index  : 99.27103;
  }

  10% {
    transform: matrix3d(0.67182, 0, 0, 0, 0, 0.67182, 0, 0, 0, 0, 1, 0, 196.82649, -68.45427, 0, 1);
    z-index  : 99.31546;
  }

  11% {
    transform: matrix3d(0.68753, 0, 0, 0, 0, 0.68753, 0, 0, 0, 0, 1, 0, 208.04493, -63.74182, 0, 1);
    z-index  : 99.36258;
  }

  12% {
    transform: matrix3d(0.70407, 0, 0, 0, 0, 0.70407, 0, 0, 0, 0, 1, 0, 218.4427, -58.77778, 0, 1);
    z-index  : 99.41222;
  }

  13% {
    transform: matrix3d(0.72139, 0, 0, 0, 0, 0.72139, 0, 0, 0, 0, 1, 0, 227.97887, -53.58172, 0, 1);
    z-index  : 99.46418;
  }

  14% {
    transform: matrix3d(0.73942, 0, 0, 0, 0, 0.73942, 0, 0, 0, 0, 1, 0, 236.61593, -48.17414, 0, 1);
    z-index  : 99.51826;
  }

  15% {
    transform: matrix3d(0.75808, 0, 0, 0, 0, 0.75808, 0, 0, 0, 0, 1, 0, 244.31993, -42.57636, 0, 1);
    z-index  : 99.57424;
  }

  16% {
    transform: matrix3d(0.7773, 0, 0, 0, 0, 0.7773, 0, 0, 0, 0, 1, 0, 251.06067, -36.81045, 0, 1);
    z-index  : 99.6319;
  }

  17% {
    transform: matrix3d(0.797, 0, 0, 0, 0, 0.797, 0, 0, 0, 0, 1, 0, 256.81175, -30.89914, 0, 1);
    z-index  : 99.69101;
  }

  18% {
    transform: matrix3d(0.81711, 0, 0, 0, 0, 0.81711, 0, 0, 0, 0, 1, 0, 261.55076, -24.86574, 0, 1);
    z-index  : 99.75134;
  }

  19% {
    transform: matrix3d(0.83755, 0, 0, 0, 0, 0.83755, 0, 0, 0, 0, 1, 0, 265.25934, -18.73401, 0, 1);
    z-index  : 99.81266;
  }

  20% {
    transform: matrix3d(0.85824, 0, 0, 0, 0, 0.85824, 0, 0, 0, 0, 1, 0, 267.92326, -12.52811, 0, 1);
    z-index  : 99.87472;
  }

  21% {
    transform: matrix3d(0.87909, 0, 0, 0, 0, 0.87909, 0, 0, 0, 0, 1, 0, 269.5325, -6.27248, 0, 1);
    z-index  : 99.93728;
  }

  22% {
    transform: matrix3d(0.90003, 0, 0, 0, 0, 0.90003, 0, 0, 0, 0, 1, 0, 270.08133, 0.00827, 0, 1);
    z-index  : 100.00008;
  }

  23% {
    transform: matrix3d(0.9, 0, 0, 0, 0, 0.9, 0, 0, 0, 0, 1, 0, 270, 0, 0, 1);
    z-index  : 100;
  }

  24% {
    transform: matrix3d(0.92093, 0, 0, 0, 0, 0.92093, 0, 0, 0, 0, 1, 0, 269.46722, 6.27905, 0, 1);
    z-index  : 100.06279;
  }

  25% {
    transform: matrix3d(0.94178, 0, 0, 0, 0, 0.94178, 0, 0, 0, 0, 1, 0, 267.87097, 12.53332, 0, 1);
    z-index  : 100.12533;
  }

  26% {
    transform: matrix3d(0.96246, 0, 0, 0, 0, 0.96246, 0, 0, 0, 0, 1, 0, 265.21756, 18.73813, 0, 1);
    z-index  : 100.18738;
  }

  27% {
    transform: matrix3d(0.9829, 0, 0, 0, 0, 0.9829, 0, 0, 0, 0, 1, 0, 261.51745, 24.86899, 0, 1);
    z-index  : 100.24869;
  }

  28% {
    transform: matrix3d(1.00301, 0, 0, 0, 0, 1.00301, 0, 0, 0, 0, 1, 0, 256.78526, 30.9017, 0, 1);
    z-index  : 100.30902;
  }

  29% {
    transform: matrix3d(1.02271, 0, 0, 0, 0, 1.02271, 0, 0, 0, 0, 1, 0, 251.03965, 36.81246, 0, 1);
    z-index  : 100.36812;
  }

  30% {
    transform: matrix3d(1.04193, 0, 0, 0, 0, 1.04193, 0, 0, 0, 0, 1, 0, 244.3033, 42.57793, 0, 1);
    z-index  : 100.42578;
  }

  31% {
    transform: matrix3d(1.06058, 0, 0, 0, 0, 1.06058, 0, 0, 0, 0, 1, 0, 236.6028, 48.17537, 0, 1);
    z-index  : 100.48175;
  }

  32% {
    transform: matrix3d(1.07861, 0, 0, 0, 0, 1.07861, 0, 0, 0, 0, 1, 0, 227.96854, 53.58268, 0, 1);
    z-index  : 100.53583;
  }

  33% {
    transform: matrix3d(1.09593, 0, 0, 0, 0, 1.09593, 0, 0, 0, 0, 1, 0, 218.43459, 58.77853, 0, 1);
    z-index  : 100.58779;
  }

  34% {
    transform: matrix3d(1.11247, 0, 0, 0, 0, 1.11247, 0, 0, 0, 0, 1, 0, 208.03858, 63.7424, 0, 1);
    z-index  : 100.63742;
  }

  35% {
    transform: matrix3d(1.12818, 0, 0, 0, 0, 1.12818, 0, 0, 0, 0, 1, 0, 196.82153, 68.45471, 0, 1);
    z-index  : 100.68455;
  }

  36% {
    transform: matrix3d(1.14299, 0, 0, 0, 0, 1.14299, 0, 0, 0, 0, 1, 0, 184.82772, 72.89686, 0, 1);
    z-index  : 100.72897;
  }

  37% {
    transform: matrix3d(1.15684, 0, 0, 0, 0, 1.15684, 0, 0, 0, 0, 1, 0, 172.10448, 77.05132, 0, 1);
    z-index  : 100.77051;
  }

  38% {
    transform: matrix3d(1.16967, 0, 0, 0, 0, 1.16967, 0, 0, 0, 0, 1, 0, 158.70202, 80.9017, 0, 1);
    z-index  : 100.80902;
  }

  39% {
    transform: matrix3d(1.18144, 0, 0, 0, 0, 1.18144, 0, 0, 0, 0, 1, 0, 144.67323, 84.43279, 0, 1);
    z-index  : 100.84433;
  }

  40% {
    transform: matrix3d(1.1921, 0, 0, 0, 0, 1.1921, 0, 0, 0, 0, 1, 0, 130.07349, 87.63067, 0, 1);
    z-index  : 100.87631;
  }

  41% {
    transform: matrix3d(1.20161, 0, 0, 0, 0, 1.20161, 0, 0, 0, 0, 1, 0, 114.96041, 90.48271, 0, 1);
    z-index  : 100.90483;
  }

  42% {
    transform: matrix3d(1.20993, 0, 0, 0, 0, 1.20993, 0, 0, 0, 0, 1, 0, 99.39363, 92.97765, 0, 1);
    z-index  : 100.92978;
  }

  43% {
    transform: matrix3d(1.21702, 0, 0, 0, 0, 1.21702, 0, 0, 0, 0, 1, 0, 83.43459, 95.10565, 0, 1);
    z-index  : 100.95106;
  }

  44% {
    transform: matrix3d(1.22286, 0, 0, 0, 0, 1.22286, 0, 0, 0, 0, 1, 0, 67.14627, 96.85832, 0, 1);
    z-index  : 100.96858;
  }

  45% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0, 50.59295, 98.22873, 0, 1);
    z-index  : 100.98229;
  }

  46% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0, 33.83997, 99.21147, 0, 1);
    z-index  : 100.99211;
  }

  47% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0, 16.95344, 99.80267, 0, 1);
    z-index  : 100.99803;
  }

  48% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0, 0, 100, 0, 1);
    z-index  : 101;
  }
  49% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0, -16.95344, 99.80267, 0, 1);
    z-index  : 100.99803;
  }

  50% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0, -33.83997, 99.21147, 0, 1);
    z-index  : 100.99211;
  }

  51% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0, -50.59295, 98.22873, 0, 1);
    z-index  : 100.98229;
  }

  52% {
    transform: matrix3d(1.22286, 0, 0, 0, 0, 1.22286, 0, 0, 0, 0, 1, 0, -67.14627, 96.85832, 0, 1);
    z-index  : 100.96858;
  }

  53% {
    transform: matrix3d(1.21702, 0, 0, 0, 0, 1.21702, 0, 0, 0, 0, 1, 0, -83.43459, 95.10565, 0, 1);
    z-index  : 100.95106;
  }

  54% {
    transform: matrix3d(1.20993, 0, 0, 0, 0, 1.20993, 0, 0, 0, 0, 1, 0, -99.39363, 92.97765, 0, 1);
    z-index  : 100.92978;
  }

  55% {
    transform: matrix3d(1.20161, 0, 0, 0, 0, 1.20161, 0, 0, 0, 0, 1, 0, -114.96041, 90.48271, 0, 1);
    z-index  : 100.90483;
  }

  56% {
    transform: matrix3d(1.1921, 0, 0, 0, 0, 1.1921, 0, 0, 0, 0, 1, 0, -130.07349, 87.63067, 0, 1);
    z-index  : 100.87631;
  }

  57% {
    transform: matrix3d(1.18144, 0, 0, 0, 0, 1.18144, 0, 0, 0, 0, 1, 0, -144.67323, 84.43279, 0, 1);
    z-index  : 100.84433;
  }

  58% {
    transform: matrix3d(1.16967, 0, 0, 0, 0, 1.16967, 0, 0, 0, 0, 1, 0, -158.70202, 80.9017, 0, 1);
    z-index  : 100.80902;
  }

  59% {
    transform: matrix3d(1.15684, 0, 0, 0, 0, 1.15684, 0, 0, 0, 0, 1, 0, -172.10448, 77.05132, 0, 1);
    z-index  : 100.77051;
  }

  60% {
    transform: matrix3d(1.14299, 0, 0, 0, 0, 1.14299, 0, 0, 0, 0, 1, 0, -184.82772, 72.89686, 0, 1);
    z-index  : 100.72897;
  }

  61% {
    transform: matrix3d(1.12818, 0, 0, 0, 0, 1.12818, 0, 0, 0, 0, 1, 0, -196.82153, 68.45471, 0, 1);
    z-index  : 100.68455;
  }

  62% {
    transform: matrix3d(1.11247, 0, 0, 0, 0, 1.11247, 0, 0, 0, 0, 1, 0, -208.03858, 63.7424, 0, 1);
    z-index  : 100.63742;
  }

  63% {
    transform: matrix3d(1.09593, 0, 0, 0, 0, 1.09593, 0, 0, 0, 0, 1, 0, -218.43459, 58.77853, 0, 1);
    z-index  : 100.58779;
  }

  64% {
    transform: matrix3d(1.07861, 0, 0, 0, 0, 1.07861, 0, 0, 0, 0, 1, 0, -227.96854, 53.58268, 0, 1);
    z-index  : 100.53583;
  }

  65% {
    transform: matrix3d(1.06058, 0, 0, 0, 0, 1.06058, 0, 0, 0, 0, 1, 0, -236.6028, 48.17537, 0, 1);
    z-index  : 100.48175;
  }

  66% {
    transform: matrix3d(1.04193, 0, 0, 0, 0, 1.04193, 0, 0, 0, 0, 1, 0, -244.3033, 42.57793, 0, 1);
    z-index  : 100.42578;
  }

  67% {
    transform: matrix3d(1.02271, 0, 0, 0, 0, 1.02271, 0, 0, 0, 0, 1, 0, -251.03965, 36.81246, 0, 1);
    z-index  : 100.36812;
  }

  68% {
    transform: matrix3d(1.00301, 0, 0, 0, 0, 1.00301, 0, 0, 0, 0, 1, 0, -256.78526, 30.9017, 0, 1);
    z-index  : 100.30902;
  }

  69% {
    transform: matrix3d(0.9829, 0, 0, 0, 0, 0.9829, 0, 0, 0, 0, 1, 0, -261.51745, 24.86899, 0, 1);
    z-index  : 100.24869;
  }

  70% {
    transform: matrix3d(0.96246, 0, 0, 0, 0, 0.96246, 0, 0, 0, 0, 1, 0, -265.21756, 18.73813, 0, 1);
    z-index  : 100.18738;
  }

  71% {
    transform: matrix3d(0.94178, 0, 0, 0, 0, 0.94178, 0, 0, 0, 0, 1, 0, -267.87097, 12.53332, 0, 1);
    z-index  : 100.12533;
  }

  72% {
    transform: matrix3d(0.92093, 0, 0, 0, 0, 0.92093, 0, 0, 0, 0, 1, 0, -269.46722, 6.27905, 0, 1);
    z-index  : 100.06279;
  }

  73% {
    transform: matrix3d(0.9, 0, 0, 0, 0, 0.9, 0, 0, 0, 0, 1, 0, -270, 0, 0, 1);
    z-index  : 100;
  }

  74% {
    transform: matrix3d(0.87907, 0, 0, 0, 0, 0.87907, 0, 0, 0, 0, 1, 0, -269.46722, -6.27905, 0, 1);
    z-index  : 99.93721;
  }
  75% {
    transform: matrix3d(0.85822, 0, 0, 0, 0, 0.85822, 0, 0, 0, 0, 1, 0, -267.87097, -12.53332, 0, 1);
    z-index  : 99.87467;
  }

  76% {
    transform: matrix3d(0.83754, 0, 0, 0, 0, 0.83754, 0, 0, 0, 0, 1, 0, -265.21756, -18.73813, 0, 1);
    z-index  : 99.81262;
  }

  77% {
    transform: matrix3d(0.8171, 0, 0, 0, 0, 0.8171, 0, 0, 0, 0, 1, 0, -261.51745, -24.86899, 0, 1);
    z-index  : 99.75131;
  }

  78% {
    transform: matrix3d(0.79699, 0, 0, 0, 0, 0.79699, 0, 0, 0, 0, 1, 0, -256.78526, -30.9017, 0, 1);
    z-index  : 99.69098;
  }

  79% {
    transform: matrix3d(0.77729, 0, 0, 0, 0, 0.77729, 0, 0, 0, 0, 1, 0, -251.03965, -36.81246, 0, 1);
    z-index  : 99.63188;
  }

  80% {
    transform: matrix3d(0.75807, 0, 0, 0, 0, 0.75807, 0, 0, 0, 0, 1, 0, -244.3033, -42.57793, 0, 1);
    z-index  : 99.57422;
  }

  81% {
    transform: matrix3d(0.73942, 0, 0, 0, 0, 0.73942, 0, 0, 0, 0, 1, 0, -236.6028, -48.17537, 0, 1);
    z-index  : 99.51825;
  }

  82% {
    transform: matrix3d(0.72139, 0, 0, 0, 0, 0.72139, 0, 0, 0, 0, 1, 0, -227.96854, -53.58268, 0, 1);
    z-index  : 99.46417;
  }

  83% {
    transform: matrix3d(0.70407, 0, 0, 0, 0, 0.70407, 0, 0, 0, 0, 1, 0, -218.43459, -58.77853, 0, 1);
    z-index  : 99.41221;
  }

  84% {
    transform: matrix3d(0.68753, 0, 0, 0, 0, 0.68753, 0, 0, 0, 0, 1, 0, -208.03857, -63.7424, 0, 1);
    z-index  : 99.36258;
  }

  85% {
    transform: matrix3d(0.67182, 0, 0, 0, 0, 0.67182, 0, 0, 0, 0, 1, 0, -196.82153, -68.45471, 0, 1);
    z-index  : 99.31545;
  }

  86% {
    transform: matrix3d(0.65701, 0, 0, 0, 0, 0.65701, 0, 0, 0, 0, 1, 0, -184.82772, -72.89686, 0, 1);
    z-index  : 99.27103;
  }

  87% {
    transform: matrix3d(0.64316, 0, 0, 0, 0, 0.64316, 0, 0, 0, 0, 1, 0, -172.10447, -77.05132, 0, 1);
    z-index  : 99.22949;
  }

  88% {
    transform: matrix3d(0.63033, 0, 0, 0, 0, 0.63033, 0, 0, 0, 0, 1, 0, -158.70201, -80.9017, 0, 1);
    z-index  : 99.19098;
  }

  89% {
    transform: matrix3d(0.61856, 0, 0, 0, 0, 0.61856, 0, 0, 0, 0, 1, 0, -144.67323, -84.43279, 0, 1);
    z-index  : 99.15567;
  }

  90% {
    transform: matrix3d(0.6079, 0, 0, 0, 0, 0.6079, 0, 0, 0, 0, 1, 0, -130.07348, -87.63067, 0, 1);
    z-index  : 99.12369;
  }

  91% {
    transform: matrix3d(0.59839, 0, 0, 0, 0, 0.59839, 0, 0, 0, 0, 1, 0, -114.96039, -90.4827, 0, 1);
    z-index  : 99.09517;
  }

  92% {
    transform: matrix3d(0.59007, 0, 0, 0, 0, 0.59007, 0, 0, 0, 0, 1, 0, -99.39361, -92.97765, 0, 1);
    z-index  : 99.07022;
  }

  93% {
    transform: matrix3d(0.58298, 0, 0, 0, 0, 0.58298, 0, 0, 0, 0, 1, 0, -83.43456, -95.10565, 0, 1);
    z-index  : 99.04894;
  }

  94% {
    transform: matrix3d(0.57714, 0, 0, 0, 0, 0.57714, 0, 0, 0, 0, 1, 0, -67.14622, -96.85831, 0, 1);
    z-index  : 99.03142;
  }

  95% {
    transform: matrix3d(0.57257, 0, 0, 0, 0, 0.57257, 0, 0, 0, 0, 1, 0, -50.59289, -98.22872, 0, 1);
    z-index  : 99.01771;
  }

  96% {
    transform: matrix3d(0.5693, 0, 0, 0, 0, 0.5693, 0, 0, 0, 0, 1, 0, -33.83989, -99.21146, 0, 1);
    z-index  : 99.00789;
  }

  97% {
    transform: matrix3d(0.56732, 0, 0, 0, 0, 0.56732, 0, 0, 0, 0, 1, 0, -16.95333, -99.80266, 0, 1);
    z-index  : 99.00197;
  }

  98% {
    transform: matrix3d(0.56667, 0, 0, 0, 0, 0.56667, 0, 0, 0, 0, 1, 0, 0.00015, -99.99999, 0, 1);
    z-index  : 99;
  }

  99% {
    transform: matrix3d(0.56732, 0, 0, 0, 0, 0.56732, 0, 0, 0, 0, 1, 0, 16.95364, -99.80266, 0, 1);
    z-index  : 99.00197;
  }

  100% {
    transform: matrix3d(0.5693, 0, 0, 0, 0, 0.5693, 0, 0, 0, 0, 1, 0, 33.84024, -99.21145, 0, 1);
    z-index  : 99.00789;
  }
}

@keyframes rotate9 {
  0% {
    transform: matrix3d(0.65, 0, 0, 0, 0, 0.65, 0, 0, 0, 0, 1, 0, -134.3242, -60, 0, 1);
    z-index  : 99.01771;
  }

  1% {
    transform: matrix3d(0.57714, 0, 0, 0, 0, 0.57714, 0, 0, 0, 0, 1, 0,-133.4242, -61.3424, 0, 1);
    z-index  : 99.03142;
  }

  2% {
    transform: matrix3d(0.58298, 0, 0, 0, 0, 0.58298, 0, 0, 0, 0, 1, 0, -130.4234, -62.342, 0, 1);
    z-index  : 99.04894;
  }

  3% {
    transform: matrix3d(0.59007, 0, 0, 0, 0, 0.59007, 0, 0, 0, 0, 1, 0, -125.4342, -68.3422, 0, 1);
    z-index  : 99.07022;
  }

  4% {
    transform: matrix3d(0.59839, 0, 0, 0, 0, 0.59839, 0, 0, 0, 0, 1, 0, -120.2343, -74.2342, 0, 1);
    z-index  : 99.09517;
  }

  5% {
    transform: matrix3d(0.6079, 0, 0, 0, 0, 0.6079, 0, 0, 0, 0, 1, 0, -113.3244, -80.63055, 0, 1);
    z-index  : 99.12369;
  }

  6% {
    transform: matrix3d(0.61856, 0, 0, 0, 0, 0.61856, 0, 0, 0, 0, 1, 0, -105.3432, -86.43264, 0, 1);
    z-index  : 99.15567;
  }

  7% {
    transform: matrix3d(0.63033, 0, 0, 0, 0, 0.63033, 0, 0, 0, 0, 1, 0, -96.2342, -90.9015, 0, 1);
    z-index  : 99.19099;
  }

  8% {
    transform: matrix3d(0.64316, 0, 0, 0, 0, 0.64316, 0, 0, 0, 0, 1, 0, -87.3242, -96.05106, 0, 1);
    z-index  : 99.22949;
  }

  9% {
    transform: matrix3d(0.65701, 0, 0, 0, 0, 0.65701, 0, 0, 0, 0, 1, 0, -77.3454, -99.89652, 0, 1);
    z-index  : 99.27103;
  }

  10% {
    transform: matrix3d(0.67182, 0, 0, 0, 0, 0.67182, 0, 0, 0, 0, 1, 0,-65.2342, -95.45427, 0, 1);
    z-index  : 99.31546;
  }

  11% {
    transform: matrix3d(0.68753, 0, 0, 0, 0, 0.68753, 0, 0, 0, 0, 1, 0, -53.3234, -90.74182, 0, 1);
    z-index  : 99.36258;
  }

  12% {
    transform: matrix3d(0.70407, 0, 0, 0, 0, 0.70407, 0, 0, 0, 0, 1, 0, -41.2342, -84.77778, 0, 1);
    z-index  : 99.41222;
  }

  13% {
    transform: matrix3d(0.72139, 0, 0, 0, 0, 0.72139, 0, 0, 0, 0, 1, 0, -28.2344, -78.58172, 0, 1);
    z-index  : 99.46418;
  }

  14% {
    transform: matrix3d(0.73942, 0, 0, 0, 0, 0.73942, 0, 0, 0, 0, 1, 0, -14.3433, -72.17414, 0, 1);
    z-index  : 99.51826;
  }

  15% {
    transform: matrix3d(0.75808, 0, 0, 0, 0, 0.75808, 0, 0, 0, 0, 1, 0, -0, -68.57636, 0, 1);
    z-index  : 99.57424;
  }

  16% {
    transform: matrix3d(0.7773, 0, 0, 0, 0, 0.7773, 0, 0, 0, 0, 1, 0, 16.3423, -64.81045, 0, 1);
    z-index  : 99.6319;
  }

  17% {
    transform: matrix3d(0.797, 0, 0, 0, 0, 0.797, 0, 0, 0, 0, 1, 0, 32.2423, -60.89914, 0, 1);
    z-index  : 99.69101;
  }

  18% {
    transform: matrix3d(0.81711, 0, 0, 0, 0, 0.81711, 0, 0, 0, 0, 1, 0, 44.3543, -58.86574, 0, 1);
    z-index  : 99.75134;
  }

  19% {
    transform: matrix3d(0.83755, 0, 0, 0, 0, 0.83755, 0, 0, 0, 0, 1, 0, 60.2342, -56.73401, 0, 1);
    z-index  : 99.81266;
  }

  20% {
    transform: matrix3d(0.85824, 0, 0, 0, 0, 0.85824, 0, 0, 0, 0, 1, 0, 76.5345, -54.52811, 0, 1);
    z-index  : 99.87472;
  }

  21% {
    transform: matrix3d(0.87909, 0, 0, 0, 0, 0.87909, 0, 0, 0, 0, 1, 0, 92.2343, -53.27248, 0, 1);
    z-index  : 99.93728;
  }

  22% {
    transform: matrix3d(0.90003, 0, 0, 0, 0, 0.90003, 0, 0, 0, 0, 1, 0, 108.4324, -52.8834, 0, 1);
    z-index  : 100.00008;
  }

  23% {
    transform: matrix3d(0.9, 0, 0, 0, 0, 0.9, 0, 0, 0, 0, 1, 0, 124.23423, -51.45435,0, 1);
    z-index  : 100;
  }

  24% {
    transform: matrix3d(0.92093, 0, 0, 0, 0, 0.92093, 0, 0, 0, 0, 1, 0,134.3433, -50, 0, 1);
    z-index  : 100.06279;
  }

  25% {
    transform: matrix3d(0.94178, 0, 0, 0, 0, 0.94178, 0, 0, 0, 0, 1, 0, 149.3432, -48.3243, 0, 1);
    z-index  : 100.12533;
  }

  26% {
    transform: matrix3d(0.96246, 0, 0, 0, 0, 0.96246, 0, 0, 0, 0, 1, 0,165.3423, -46.73813, 0, 1);
    z-index  : 100.18738;
  }

  27% {
    transform: matrix3d(0.9829, 0, 0, 0, 0, 0.9829, 0, 0, 0, 0, 1, 0, 181.3423, -43.86899, 0, 1);
    z-index  : 100.24869;
  }

  28% {
    transform: matrix3d(1.00301, 0, 0, 0, 0, 1.00301, 0, 0, 0, 0, 1, 0, 197.3243, -40.9017, 0, 1);
    z-index  : 100.30902;
  }

  29% {
    transform: matrix3d(1.02271, 0, 0, 0, 0, 1.02271, 0, 0, 0, 0, 1, 0, 213.2342, -36.81246, 0, 1);
    z-index  : 100.36812;
  }

  30% {
    transform: matrix3d(1.04193, 0, 0, 0, 0, 1.04193, 0, 0, 0, 0, 1, 0, 229.32432, -32.57793, 0, 1);
    z-index  : 100.42578;
  }

  31% {
    transform: matrix3d(1.06058, 0, 0, 0, 0, 1.06058, 0, 0, 0, 0, 1, 0, 245.3432, -28.17537, 0, 1);
    z-index  : 100.48175;
  }

  32% {
    transform: matrix3d(1.07861, 0, 0, 0, 0, 1.07861, 0, 0, 0, 0, 1, 0, 261.3242, -24.58268, 0, 1);
    z-index  : 100.53583;
  }

  33% {
    transform: matrix3d(1.09593, 0, 0, 0, 0, 1.09593, 0, 0, 0, 0, 1, 0, 269.2342, -20.77853, 0, 1);
    z-index  : 100.58779;
  }

  34% {
    transform: matrix3d(1.11247, 0, 0, 0, 0, 1.11247, 0, 0, 0, 0, 1, 0, 255.3434, -14.7424, 0, 1);
    z-index  : 100.63742;
  }

  35% {
    transform: matrix3d(1.12818, 0, 0, 0, 0, 1.12818, 0, 0, 0, 0, 1, 0, 243.42343, -8.45471, 0, 1);
    z-index  : 100.68455;
  }

  36% {
    transform: matrix3d(1.14299, 0, 0, 0, 0, 1.14299, 0, 0, 0, 0, 1, 0, 231.3423, -2.89686, 0, 1);
    z-index  : 100.72897;
  }

  37% {
    transform: matrix3d(1.15684, 0, 0, 0, 0, 1.15684, 0, 0, 0, 0, 1, 0, 217.3432, 4.05132, 0, 1);
    z-index  : 100.77051;
  }

  38% {
    transform: matrix3d(1.16967, 0, 0, 0, 0, 1.16967, 0, 0, 0, 0, 1, 0, 207.3242, 10.9017, 0, 1);
    z-index  : 100.80902;
  }

  39% {
    transform: matrix3d(1.18144, 0, 0, 0, 0, 1.18144, 0, 0, 0, 0, 1, 0,195.3423, 16.43279, 0, 1);
    z-index  : 100.84433;
  }

  40% {
    transform: matrix3d(1.1921, 0, 0, 0, 0, 1.1921, 0, 0, 0, 0, 1, 0, 183.2343, 22.63067, 0, 1);
    z-index  : 100.87631;
  }

  41% {
    transform: matrix3d(1.20161, 0, 0, 0, 0, 1.20161, 0, 0, 0, 0, 1, 0, 172.23432, 28.48271, 0, 1);
    z-index  : 100.90483;
  }

  42% {
    transform: matrix3d(1.20993, 0, 0, 0, 0, 1.20993, 0, 0, 0, 0, 1, 0, 166.32432, 34.97765, 0, 1);
    z-index  : 100.92978;
  }

  43% {
    transform: matrix3d(1.21702, 0, 0, 0, 0, 1.21702, 0, 0, 0, 0, 1, 0, 158.3242, 36.10565, 0, 1);
    z-index  : 100.95106;
  }

  44% {
    transform: matrix3d(1.22286, 0, 0, 0, 0, 1.22286, 0, 0, 0, 0, 1, 0, 151.2342, 38.85832, 0, 1);
    z-index  : 100.96858;
  }

  45% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0, 145.3422, 40.22873, 0, 1);
    z-index  : 100.98229;
  }

  46% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0, 140.3232, 42.21147, 0, 1);
    z-index  : 100.99211;
  }

  47% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0, 138.3222, 45.80267, 0, 1);
    z-index  : 100.99803;
  }

  48% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0,136.2342, 47.242, 0, 1);
    z-index  : 101;
  }
  49% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0,135 , 49.9453, 0, 1);
    z-index  : 100.99803;
  }

  50% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0, 134.2334, 55.21147, 0, 1);
    z-index  : 100.99211;
  }

  51% {
    transform: matrix3d(1.22743, 0, 0, 0, 0, 1.22743, 0, 0, 0, 0, 1, 0, 132.2342, 61.22873, 0, 1);
    z-index  : 100.98229;
  }

  52% {
    transform: matrix3d(1.22286, 0, 0, 0, 0, 1.22286, 0, 0, 0, 0, 1, 0, 129.4324, 66.85832, 0, 1);
    z-index  : 100.96858;
  }

  53% {
    transform: matrix3d(1.21702, 0, 0, 0, 0, 1.21702, 0, 0, 0, 0, 1, 0,125.3454, 72.10565, 0, 1);
    z-index  : 100.95106;
  }

  54% {
    transform: matrix3d(1.20993, 0, 0, 0, 0, 1.20993, 0, 0, 0, 0, 1, 0, 120.2342, 78.97765, 0, 1);
    z-index  : 100.92978;
  }

  55% {
    transform: matrix3d(1.20161, 0, 0, 0, 0, 1.20161, 0, 0, 0, 0, 1, 0, 115.5344, 84.48271, 0, 1);
    z-index  : 100.90483;
  }

  56% {
    transform: matrix3d(1.1921, 0, 0, 0, 0, 1.1921, 0, 0, 0, 0, 1, 0, 109.2423, 90.63067, 0, 1);
    z-index  : 100.87631;
  }

  57% {
    transform: matrix3d(1.18144, 0, 0, 0, 0, 1.18144, 0, 0, 0, 0, 1, 0, 101.2343, 94.43279, 0, 1);
    z-index  : 100.84433;
  }

  58% {
    transform: matrix3d(1.16967, 0, 0, 0, 0, 1.16967, 0, 0, 0, 0, 1, 0, 92.2423, 99.9017, 0, 1);
    z-index  : 100.80902;
  }

  59% {
    transform: matrix3d(1.15684, 0, 0, 0, 0, 1.15684, 0, 0, 0, 0, 1, 0, 83.3242, 93.05132, 0, 1);
    z-index  : 100.77051;
  }

  60% {
    transform: matrix3d(1.14299, 0, 0, 0, 0, 1.14299, 0, 0, 0, 0, 1, 0, 73.2423, 87.89686, 0, 1);
    z-index  : 100.72897;
  }

  61% {
    transform: matrix3d(1.12818, 0, 0, 0, 0, 1.12818, 0, 0, 0, 0, 1, 0, 61.2324, 81.45471, 0, 1);
    z-index  : 100.68455;
  }

  62% {
    transform: matrix3d(1.11247, 0, 0, 0, 0, 1.11247, 0, 0, 0, 0, 1, 0, 49.3242, 76.7424, 0, 1);
    z-index  : 100.63742;
  }

  63% {
    transform: matrix3d(1.09593, 0, 0, 0, 0, 1.09593, 0, 0, 0, 0, 1, 0, 35.2342, 71.77853, 0, 1);
    z-index  : 100.58779;
  }

  64% {
    transform: matrix3d(1.07861, 0, 0, 0, 0, 1.07861, 0, 0, 0, 0, 1, 0, 21.2343, 68.58268, 0, 1);
    z-index  : 100.53583;
  }

  65% {
    transform: matrix3d(1.06058, 0, 0, 0, 0, 1.06058, 0, 0, 0, 0, 1, 0, 7.3442, 66.17537, 0, 1);
    z-index  : 100.48175;
  }

  66% {
    transform: matrix3d(1.04193, 0, 0, 0, 0, 1.04193, 0, 0, 0, 0, 1, 0, -7.2342, 64.57793, 0, 1);
    z-index  : 100.42578;
  }

  67% {
    transform: matrix3d(1.02271, 0, 0, 0, 0, 1.02271, 0, 0, 0, 0, 1, 0, -23.3242, 62.81246, 0, 1);
    z-index  : 100.36812;
  }

  68% {
    transform: matrix3d(1.00301, 0, 0, 0, 0, 1.00301, 0, 0, 0, 0, 1, 0, -38.4243, 60.9017, 0, 1);
    z-index  : 100.30902;
  }

  69% {
    transform: matrix3d(0.9829, 0, 0, 0, 0, 0.9829, 0, 0, 0, 0, 1, 0, -52.4223, 58.86899, 0, 1);
    z-index  : 100.24869;
  }

  70% {
    transform: matrix3d(0.96246, 0, 0, 0, 0, 0.96246, 0, 0, 0, 0, 1, 0, -69.3242, 56.73813, 0, 1);
    z-index  : 100.18738;
  }

  71% {
    transform: matrix3d(0.94178, 0, 0, 0, 0, 0.94178, 0, 0, 0, 0, 1, 0,-86.2342, 54.53332, 0, 1);
    z-index  : 100.12533;
  }

  72% {
    transform: matrix3d(0.92093, 0, 0, 0, 0, 0.92093, 0, 0, 0, 0, 1, 0, -103.43243, 52.27905, 0, 1);
    z-index  : 100.06279;
  }

  73% {
    transform: matrix3d(0.9, 0, 0, 0, 0, 0.9, 0, 0, 0, 0, 1, 0, -120.43232, 51.4354, 0, 1);
    z-index  : 100;
  }

  74% {
    transform: matrix3d(0.87907, 0, 0, 0, 0, 0.87907, 0, 0, 0, 0, 1, 0, -135, 50, 0, 1);
    z-index  : 99.93721;
  }
  75% {
    transform: matrix3d(0.85822, 0, 0, 0, 0, 0.85822, 0, 0, 0, 0, 1, 0, -151.332,0, 49.3244, 1);
    z-index  : 99.87467;
  }

  76% {
    transform: matrix3d(0.83754, 0, 0, 0, 0, 0.83754, 0, 0, 0, 0, 1, 0, -167.3242, 44.3532, 0, 1);
    z-index  : 99.81262;
  }

  77% {
    transform: matrix3d(0.8171, 0, 0, 0, 0, 0.8171, 0, 0, 0, 0, 1, 0, -184.2343, 39.86899, 0, 1);
    z-index  : 99.75131;
  }

  78% {
    transform: matrix3d(0.79699, 0, 0, 0, 0, 0.79699, 0, 0, 0, 0, 1, 0, -201.2311, 33.9017, 0, 1);
    z-index  : 99.69098;
  }

  79% {
    transform: matrix3d(0.77729, 0, 0, 0, 0, 0.77729, 0, 0, 0, 0, 1, 0, -217.3432, 27.81246, 0, 1);
    z-index  : 99.63188;
  }

  80% {
    transform: matrix3d(0.75807, 0, 0, 0, 0, 0.75807, 0, 0, 0, 0, 1, 0, -233.1321, 21.57793, 0, 1);
    z-index  : 99.57422;
  }

  81% {
    transform: matrix3d(0.73942, 0, 0, 0, 0, 0.73942, 0, 0, 0, 0, 1, 0, -248.4234, 15.17537, 0, 1);
    z-index  : 99.51825;
  }

  82% {
    transform: matrix3d(0.72139, 0, 0, 0, 0, 0.72139, 0, 0, 0, 0, 1, 0, -264.4324, 9.58268, 0, 1);
    z-index  : 99.46417;
  }

  83% {
    transform: matrix3d(0.70407, 0, 0, 0, 0, 0.70407, 0, 0, 0, 0, 1, 0, -262.3242, 3.77853, 0, 1);
    z-index  : 99.41221;
  }

  84% {
    transform: matrix3d(0.68753, 0, 0, 0, 0, 0.68753, 0, 0, 0, 0, 1, 0, -248.3243, -3.7424, 0, 1);
    z-index  : 99.36258;
  }

  85% {
    transform: matrix3d(0.67182, 0, 0, 0, 0, 0.67182, 0, 0, 0, 0, 1, 0, -234.424, -9.45471, 0, 1);
    z-index  : 99.31545;
  }

  86% {
    transform: matrix3d(0.65701, 0, 0, 0, 0, 0.65701, 0, 0, 0, 0, 1, 0, -222.4324, -15.89686, 0, 1);
    z-index  : 99.27103;
  }

  87% {
    transform: matrix3d(0.64316, 0, 0, 0, 0, 0.64316, 0, 0, 0, 0, 1, 0, -210.2343, -21.05132, 0, 1);
    z-index  : 99.22949;
  }

  88% {
    transform: matrix3d(0.63033, 0, 0, 0, 0, 0.63033, 0, 0, 0, 0, 1, 0, -198.2432, -26.9017, 0, 1);
    z-index  : 99.19098;
  }

  89% {
    transform: matrix3d(0.61856, 0, 0, 0, 0, 0.61856, 0, 0, 0, 0, 1, 0, -188.2342, -30.43279, 0, 1);
    z-index  : 99.15567;
  }

  90% {
    transform: matrix3d(0.6079, 0, 0, 0, 0, 0.6079, 0, 0, 0, 0, 1, 0, -179.4322, -34.63067, 0, 1);
    z-index  : 99.12369;
  }

  91% {
    transform: matrix3d(0.59839, 0, 0, 0, 0, 0.59839, 0, 0, 0, 0, 1, 0, -170.3242, -38.4827, 0, 1);
    z-index  : 99.09517;
  }

  92% {
    transform: matrix3d(0.59007, 0, 0, 0, 0, 0.59007, 0, 0, 0, 0, 1, 0, -162.2422, -40.97765, 0, 1);
    z-index  : 99.07022;
  }

  93% {
    transform: matrix3d(0.58298, 0, 0, 0, 0, 0.58298, 0, 0, 0, 0, 1, 0, -155.4322, -41.10565, 0, 1);
    z-index  : 99.04894;
  }

  94% {
    transform: matrix3d(0.57714, 0, 0, 0, 0, 0.57714, 0, 0, 0, 0, 1, 0, -149.2342, -43.85831, 0, 1);
    z-index  : 99.03142;
  }

  95% {
    transform: matrix3d(0.57257, 0, 0, 0, 0, 0.57257, 0, 0, 0, 0, 1, 0, -144.2422, -46.22872, 0, 1);
    z-index  : 99.01771;
  }

  96% {
    transform: matrix3d(0.5693, 0, 0, 0, 0, 0.5693, 0, 0, 0, 0, 1, 0, -142.4234, -48.21146, 0, 1);
    z-index  : 99.00789;
  }

  97% {
    transform: matrix3d(0.56732, 0, 0, 0, 0, 0.56732, 0, 0, 0, 0, 1, 0, -140.42342, -49.80266, 0, 1);
    z-index  : 99.00197;
  }

  98% {
    transform: matrix3d(0.56667, 0, 0, 0, 0, 0.56667, 0, 0, 0, 0, 1, 0, -138.34242, -49.99999, 0, 1);
    z-index  : 99;
  }

  99% {
    transform: matrix3d(0.56732, 0, 0, 0, 0, 0.56732, 0, 0, 0, 0, 1, 0, -136.234, -49.80266, 0, 1);
    z-index  : 99.00197;
  }

  100% {
    transform: matrix3d(0.5693, 0, 0, 0, 0, 0.5693, 0, 0, 0, 0, 1, 0, -135.2432, -49.21145, 0, 1);
    z-index  : 99.00789;
  }
}
</style>
