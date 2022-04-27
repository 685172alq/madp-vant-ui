import Vue from "vue";
import UiDialog from "./index.vue";

let DialogConstructor = Vue.extend(UiDialog);

const alert = function (options = {}) {
    let str_num = typeof options === "string" || typeof options === "number";
    let data = {
        type: "alert",
        dialogTitle: (options && options.title) || "提示",
        dialogContent: str_num ? options : (options && options.content) || "",
    };
    return createElement(data);
};
const confirm = function (options = {}) {
    let str_num = typeof options === "string" || typeof options === "number";
    let cancelButton =
        options.showCancelButton === undefined
            ? true
            : options.showCancelButton;
    let confirmButton =
        options.showConfirmButton === undefined
            ? true
            : options.showConfirmButton;
    let data = {
        type: "confirm",
        dialogTitle: (options && options.title) || "提示",
        dialogContent: str_num ? options : (options && options.content) || "",
        cancelText: (options && options.cancelText) || "取消",
        confirmText: (options && options.confirmText) || "确认",
        showCancelButton: cancelButton,
        showConfirmButton: confirmButton,
    };
    return createElement(data);
};
const createElement = (options) => {
    console.log(options);
    const Instance = new DialogConstructor({
        // 实例化组件
        data: options,
    });
    let vm = Instance.$mount(); // 挂载
    document.body.appendChild(vm.$el); // 插入body
    return vm.init(); // 执行初始化方法, 返回的是一个promise
};

const name = "Dialog";

export const Dialog = {
    name,
    alert,
    confirm,
};
