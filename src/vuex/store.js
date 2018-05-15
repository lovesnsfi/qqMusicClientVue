import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
import singer from "../assets/singer.png";
import axios from "axios";
import getters from "./getters";
import actions from "./actions";
import state from "./state";
import mutations from "./mutations";
//这一个地方的store就是全局状态的存储区域
export default new Vuex.Store({
    //全局状态
    state,
    //专门用来去改变我们的全局状态
    mutations,
    actions,
    getters
});