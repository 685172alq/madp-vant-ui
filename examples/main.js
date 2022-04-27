import Vue from "vue";
import "amfe-flexible"; //能够动态设置rem基准值，即根据手机屏幕大小更改html的font-size
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./utils/vant";
import {UiCol,UiRow} from "./components/js-components/index.js";
import "./assets/style/common.scss";
// import VConsole from "vconsole";
import "./utils/madp";
import { rpc } from "./utils/rpc.js";
// import madpVantUi from "madp-vant-ui"
Vue.config.productionTip = false;
Vue.use(UiCol);
Vue.use(UiRow);


new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
Vue.prototype.$rpc = rpc;

window.clientMode = false;
// 初始化
// var vConsole = new VConsole();
