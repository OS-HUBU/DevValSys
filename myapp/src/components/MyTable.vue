<template>
    <table ref="table">
    <thead>
    <tr>
      <th v-if="index">序号</th>
      <th v-for="(item, i) in header" :key="i" :width="columnWidth[i]">{{ item }}</th>
    </tr>
    </thead>
    <tr class="fixed_row">
      <td v-if="index"></td>
      <td v-for="(item, i) in header" :key="i">{{ fixedRow[i] }}</td>
    </tr>
    <tbody slot="tbody">
    <tr v-for="(row, i) in $props.data.value.slice(scrollIndex.value, scrollIndex.value + rowNum)"
        key="row.id"
        @click="handleownertData(scrollIndex.value + i),handleClick(row)"
        @mouseover="hoverRow(i)" @mouseout="leaveRow(i)" :width="columnWidth[i]">
      <td v-if="index" >{{ scrollIndex.value + i + 1 }}</td>
      <td v-for="(cell, j) in row" :key="cell.id" :align="align[j]" :class="['col' + (j + 1)]" >{{ cell }}</td>
    </tr>
    </tbody>
    </table>
</template>
<script>
import { reactive, ref, onMounted, onBeforeUnmount, inject, watchEffect,defineComponent} from "vue";
import axios from "axios"
export default defineComponent({
  props: {
    data: {
      type: Array,
      default: () => []
    },
    header: {
      type: Array,
      default: () => ['用户名','GitHub活跃年限','价值得分','排名']
    },
    index: {
      type: Boolean,
      default: true
    },
    columnWidth: {
      type: Array,
      default: () => ['35%','20%','20%','20%']
    },
    align: {
      type: Array,
      default: () => []
    },
    rowNum: {
      type: Number,
      default: 10
    },
    scroll: {
      type: Boolean,
      default: true
    },
    waitTime: {
      type: Number,
      default: 1000
    },
    hoverPause: {
      type: Boolean,
      default: true
    },
    loop: {
      type: Boolean,
      default: true
    },
  },
  setup(props,context) {
    const scrollIndex = reactive({ value: 0 });
    const timer = reactive({ value: null});
    const table = ref(null);
    const hoveredIndex = ref(null);
    let $echarts=inject("echarts");
    let $http=inject("axios");
    const Data = ref({});
    const { emit,$refs, } = context;
    const fixedRow=ref(['DanySK','11','84.1080','1']);
    let debouncedStartScroll = debounce(startScroll, 100);
    let debouncedStopScroll = debounce(stopScroll, 100);
    function debounce(func, delay) {
      // 定义一个变量来存储定时器的ID
      let timer = null;
      // 返回一个新的函数
      return function() {
        // 获取当前的this和arguments
        let context = this;
        let args = arguments;
        // 如果已经有定时器，就清除它
        if (timer) {
          clearTimeout(timer);
        }
        // 设置一个新的定时器，在延迟时间后执行func函数
        timer = setTimeout(() => {
          func.apply(context, args);
        }, delay);
      };
    }
    function handleownertData(type) {
      // 获取该元素对应的用户数据
      let owner_login = props.data.value[type].ownerinfo_login;
      //.log("传递到后端的数据",owner_login);
      context.emit('handleownertData',owner_login)
    }
    function handleClick (row) { // 点击行的事件处理函数
      fixedRow.value = Object.values(row)
      //console.log("固定的数据",fixedRow.value);
    }
    function hoverRow(i) {
      // 设置被悬停的行的索引
      hoveredIndex.value = i;
      window.addEventListener('wheel',onWheel)
    }
    function leaveRow(i) {
      // 清除被悬停的行的索引
      hoveredIndex.value = null;
      window.removeEventListener('wheel',onWheel)
    }
    function onWheel(e)
    {
      if(e.deltaY<0){
        if(scrollIndex.value>0){
          scrollIndex.value--
        }
      }
      else if(e.deltaY>0){
        if(scrollIndex.value+ props.rowNum<props.data.value.length)
        {
          scrollIndex.value++
        }
      }
    }
    function startScroll () {
      clearInterval(timer.value);
      timer.value = setInterval(() => {
        nextScroll();
      }, props.waitTime);
      if (props.hoverPause) {
        table.value.addEventListener("mouseenter", debouncedStopScroll);
        table.value.addEventListener("mouseleave", debouncedStartScroll);
      }
    }
    function stopScroll(){
      clearInterval(timer.value);
      timer.value = null;
    };
    function nextScroll () {
      if (scrollIndex.value + props.rowNum < props.data.value.length) {
        scrollIndex.value++;
      } else {
        if (props.loop) {
          scrollIndex.value = 0;
        } else {
          stopScroll();
        }
      }
    };
    async function getState(){
      try{
        Data.value = await $http({url:"three/data2"});
      }catch(error){
        console.error(error);
      }
    };
    onMounted(() => {
      getState().then(() => {
        watchEffect(()=>{
          const dataValue = Data.value.data.userData;
          // 使用 emit 函数来触发 dataChange 事件，并传递 Data 的值
          emit("dataChange", dataValue);
          // console.log("用户数据2", dataValue);
        })
      });
      if (props.scroll) {
        startScroll();
      }
      // table.value = $refs.table;
    });
    onBeforeUnmount(() => {
      if (timer.value) {
        stopScroll();
      }
    });
    return{
      scrollIndex,
      timer,
      table,
      startScroll,
      stopScroll,
      nextScroll,
      Data,
      getState,
      debounce,
      debouncedStartScroll,
      debouncedStopScroll,
      handleownertData,
      hoveredIndex,
      hoverRow,
      leaveRow,
      fixedRow,
      handleClick,
      onWheel
    };
  }
});
</script>
<style lang="less">
  table {
    position: center;
    border-collapse: collapse;
    width: 12rem;
    height: 90%;
    overflow-y: auto;
    .fixed_row {
      font-size: 0.35rem;
      background-color: rgba(61, 107, 194, 0.85); /* 设置背景颜色为黄色 */
    }

    th, td {
      /*border: 1px solid #ccc;*/
      padding: 5px;
      font-family: "Times New Roman";
      color: white;
      text-align: center;
    }
    tr:hover {
      background-color: #002681;
    }

    th {
      background-color: rgba(24, 81, 194, 0.97);
    }
  }
</style>
