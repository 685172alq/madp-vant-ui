import Vue from "vue";
import VueRouter from "vue-router";
import Index from "../views/index.vue";
import config from "../config";
import store from "../store/index";
store.state.configData = config;
Vue.use(VueRouter);
// 解决同一路由报错
//push
const VueRouterPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(to) {
    return VueRouterPush.call(this, to).catch((err) => err);
};
let routes = [
    {
        path: "/",
        name: "Index",
        component: Index,
    },
];
//路由表合并
routes = [...routes, ...config.routersName];
const router = new VueRouter({
    // mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;
