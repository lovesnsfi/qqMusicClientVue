import Vue from 'vue'
import Router from 'vue-router'
import index from "../views/index";
import home from "../views/home";
import rank from "../views/rank";
import search from "../views/search";
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/index',
        name: 'index',
        component: index,
        children: [{
            path: "home",
            name: "home",
            component: home
        }, {
            path: "rank",
            name: "rank",
            component: rank
        }]
    }, {
        path: "/search",
        name: "search",
        component: search
    }]
})