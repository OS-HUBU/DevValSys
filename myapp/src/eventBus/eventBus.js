// eventBus.js
import Vue from 'vue';
import {createeventBus} from "vue";

const bus = new Vue();
const Bus = createeventBus({
    bus
})
export default Bus

