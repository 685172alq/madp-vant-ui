import Vue from "vue";
import "amfe-flexible"; //能够动态设置rem基准值，即根据手机屏幕大小更改html的font-size
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./utils/vant";
import "@/assets/style/common.scss";
// import VConsole from "vconsole";
import "./utils/madp";
import { rpc } from "./utils/rpc.js";

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
Vue.prototype.$rpc = rpc;

window.clientMode = false;
// 初始化
// var vConsole = new VConsole();
