<template>
  <div>
    <div class="recentlyReportScollList">
    <h2>2020年GItHubTop100开发者个人信息</h2>
  </div>
  </div>
</template>


<script>
import {inject,onMounted,reactive,computed} from "vue";
import MyTable from "@/components/MyTable.vue";
export default {
  components: {
    MyTable
  },
  setup() {
    // 使用 reactive 函数来创建响应式对象 data
    const data = reactive({
      value: []
    });

    // 定义一个 handleDataChange 函数，接收 Data 的值，并赋值给 data
    const handleDataChange = (value) => {
      data.value = value;
    };
    // 返回一个对象，包含 data 和 handleDataChange
    return {
      data,
      handleDataChange
    };
  }
};
</script>

<style lang="less">
.recentlyReportScollList{
  h2{
  height: 0.6rem;
  color: #ffffff;
  line-height: 0.6rem;
  text-align: center;
  font-size: 0.35rem;
  font-family: 华文中宋;
}

}
.table{
  height: 8.5rem;

}

</style>
