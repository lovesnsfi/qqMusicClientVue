// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import "animate.css/animate.min.css";
import axios from "axios";
import store from "./vuex/store.js";
// import VueJsonp from "vue-jsonp";
// Vue.use(VueJsonp);

//现在，我希望在整个app的程序里面，划分一块单独的区域，这个区域里面的数据在vue的任何地方，任何时候都可以去获取

//配置axios并将它挂载到vue的扩展属性上面
var instance = axios.create({
    baseURL: "http://api.softeem.xin/musicApi" //杨标的音乐接口
});
Vue.prototype.$http = instance;
Vue.config.productionTip = false;


//使用图片延迟加载
import imgLoading from "./assets/img-loading.gif";
import imgErr from "./assets/loadingErr.svg";
import VueLazyLoad from "vue-lazyload";
Vue.use(VueLazyLoad, {
    loading: imgLoading, //正在加载的图片
    error: imgErr //图片加载失败以后
});

import getData from "./utils/getData";

getData();


/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});