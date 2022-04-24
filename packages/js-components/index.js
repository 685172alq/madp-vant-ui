import UiButton from "../ui-components/ui-button/index.vue";

const components = [UiButton];

//局部

export { UiButton };

const install = function (Vue) {
    // 全局注册所有组件
    components.forEach((item) => {
        Vue.component(item.name, item);
    });
};

//判断是否直接引入文件,如果是 就不调用Vue.use()
if (typeof window !== "undefined" && window.Vue) {
    install(window.Vue);
}

export default { install };
