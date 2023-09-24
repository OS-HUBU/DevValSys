<template>
<div>
  <header>
    <h1><span>GitHub开发者价值画像</span></h1>
  </header>

  <section class="container">
<!--左容器-->
    <section class="itemLeft">
      <ItemPage1>
        <ItemOne/>

      </ItemPage1>
      <ItemPage1>
        <ItemTwo/>

      </ItemPage1>
    </section>
<!--中容器-->
    <section class="itemCenter">
      <ItemPage2 v-bind="ownerData">


      </ItemPage2>
    </section>
<!--右容器-->
    <section class="itemRight">
      <ItemPage1>
        <ItemThree>
        </ItemThree>
        <MyTable :data="data" v-on:handleownertData="handleownertData" v-on:dataChange="handleDataChange" ></MyTable>
      </ItemPage1>

      <ItemPage1>
        <ItemFour :chart-data="ownerData">
        </ItemFour>
      </ItemPage1>
    </section>
  </section>


</div>
</template>

<script>
import ItemPage1 from "@/components/itemPage1.vue";
import ItemPage2 from "@/components/itemPage2.vue";
import ItemOne from "@/components/itemOne.vue";
import ItemTwo from "@/components/itemTwo.vue";
import ItemThree from "@/components/itemThree.vue";
import ItemFour from "@/components/itemFour.vue";
import MyTable from "@/components/MyTable.vue";
import {inject, onMounted, reactive} from "vue";


export default {
  components: {
    ItemPage1,ItemOne,ItemTwo,ItemThree,ItemFour,ItemPage2,MyTable
  },
  setup()
  {
    const ownerData=reactive({
        ownerinfo_login: null,
        value_score:null,
        value_score_lev:null,
        pm_score:null,
        pm_score_lev:null,
        code_score:null,
        code_score_lev:null,
        eng_score:null,
        eng_score_lev:null,
        learn_score:null,
        learn_score_lev:null,
        team_score:null,
        team_score_lev:null
    })
    const data = reactive({
      value: []
    });
    // 定义一个 handleDataChange 函数，接收 Data 的值，并赋值给 data
    const handleDataChange = (value) => {
      data.value = value;
    };
    const handleownertData = async (type) => {
      console.log('用户名',type)
      ownerData.data = await $http({url:"center/data2/"+ type});
      console.log(type+"开发者",ownerData.data);
      setData()
    }
    let $echarts = inject("echarts")
    let $http = inject("axios")
    let $dataV = inject("dataV")
    // console.log($echarts)
    // console.log($dataV)
    // console.log($http)
    let cicle8 = reactive({});
    let itemFour = reactive({});

    function setData(){
      //DanySK的数据
      ownerData.value_score=ownerData.data.data.chartcenter[0].value_score
      ownerData.value_score_lev=ownerData.data.data.chartcenter[0].value_score_level
      ownerData.pm_score = ownerData.data.data.chartcenter[0].pm_score
      ownerData.code_score = ownerData.data.data.chartcenter[0].coding_score
      ownerData.eng_score = ownerData.data.data.chartcenter[0].engagement_score
      ownerData.learn_score = ownerData.data.data.chartcenter[0].learn_score
      ownerData.team_score = ownerData.data.data.chartcenter[0].team_score
      ownerData.ownerinfo_login = ownerData.data.data.chartcenter[0].ownerinfo_login
      ownerData.pm_score_lev = ownerData.data.data.chartcenter[0].pm_score_level
      ownerData.code_score_lev = ownerData.data.data.chartcenter[0].coding_score_level
      ownerData.eng_score_lev = ownerData.data.data.chartcenter[0].engagement_score_level
      ownerData.learn_score_lev = ownerData.data.data.chartcenter[0].learn_score_level
      ownerData.team_score_lev = ownerData.data.data.chartcenter[0].team_score_level
    }
    const getState = async ()=>{
      ownerData.data = await $http({url:"center/data2/DanySK"});
      // console.log("DanySK", ownerData.data);
      setData();
    }
    onMounted(()=> {
      //调用请求
      getState().then(() => {
      })
    });
    return{
      ownerData,
      getState,
      setData,
      cicle8,
      itemFour,
      handleownertData,
      data,
      handleDataChange
    }
  }
}
</script>

<style lang="less">

header {
  height          : 12%;
  width           : 100%;
  background-color: #fff;
  background      : url("~@/images/53titlebg.png") no-repeat top center;
  background-size : 100%;
  text-align      : center;

  h1 {
    font-size              : 1rem;
    height                 : 50%;
    margin                 : auto;
    display                : table;
    font-weight            : 500;
    background-image       : -webkit-linear-gradient(bottom,#93c6de,#f39c12 );
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    span {
      display       : table-cell;
      vertical-align: middle;
    }
  }

  p {
    font-size              : 0.4rem;
    background-image       : -webkit-linear-gradient(bottom, #86919e, #fff);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}
.container{
  min-width: 1440px;
  max-width: 2048px;
  margin: 0 auto;
  padding: 0.125rem 0.125rem 0;
  display: flex;
  .itemLeft,.itemRight{
    flex: 3;
  }
  .itemCenter{
    flex: 5;
  }

}
</style>
