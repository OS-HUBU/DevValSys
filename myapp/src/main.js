import { createApp } from 'vue';
// import DataV, { setClassNamePrefix } from '@dataview/datav-vue3';
import App from './App.vue';
import router from './router';
import store from './store';
import dataV from '@jiaminghi/data-view' // 导入dataV库，用来创建数据可视化组件
import "lib-flexible/flexible.js";
import 'vuetify/dist/vuetify.min.css'
import { createVuetify } from 'vuetify'
import VueScrollingTable from "vue-scrolling-table"
const vuetify = createVuetify({
    // 你可以在这里配置Vuetify的选项
})
const app = createApp(App)
// 给app变量添加一个全局属性$ownerLogin，赋值为'seratch'
// app.config.globalProperties.$ownerLogin = 'seratch'
// 使用store, router, dataV, vuetify等插件
app.use(store).use(router).use(dataV).use(vuetify).use(VueScrollingTable.name, VueScrollingTable)
// 挂载app变量到id为'app'的DOM元素上
app.mount('#app')
