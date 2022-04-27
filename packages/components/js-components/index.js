import UiButton from "../../components/ui-components/ui-button/index";
import UiButtonGroup from "../../components/ui-components/ui-button/ButtonGroup";
import UiDialog from "../../components/ui-components/ui-dialog/index.vue";
import { Dialog } from "../../components/ui-components/ui-dialog/index.js";
import UiDropdownMenu from "../../components/ui-components/ui-dropdownMenu/index";
import UiActionSheet from "../../components/ui-components/ui-actionSheet/index";
import UiDatetimePicker from "../../components/ui-components/ui-datetimePicker/index";

import UiCol from "../../components/ui-components/ui-grid/index.vue";
import UiRow from "../../components/ui-components/ui-grid/row.vue";

const components = [
    UiButton,
    UiButtonGroup,
    UiDialog,
    Dialog,
    UiDropdownMenu,
    UiActionSheet,
    UiDatetimePicker,
    UiCol,
    UiRow,
];

//局部
export {
    UiButton,
    UiButtonGroup,
    UiDialog,
    Dialog,
    UiDropdownMenu,
    UiActionSheet,
    UiDatetimePicker,
    UiRow,
    UiCol,
};

const install = function (Vue) {
    // 全局注册所有组件
    components.forEach((item) => {
        Vue.component(item.name, item);
    });
};

//判断是否直接引入文件,如果是 就不调用Vue.use()
if (typeof window !== `undefined` && window.Vue) {
    install(window.Vue);
}

export default { install };
