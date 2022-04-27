<!--
 * @Author: your name
 * @Date: 2021-03-04 11:23:35
 * @LastEditTime: 2021-04-01 15:34:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \madp-2c-h5\10000002\src\views\uiDropdownMenu.vue
-->
<template>
    <div class="madp-components">
        <p>时间选择</p>
        <ui-button type="primary" size="small" @click="dateShow = true">
            时间选择
        </ui-button>
        <uiDatetimePicker
            v-model="dateShow"
            type="datehour"
            title="选择年月日"
            @confirm="confirmDatePicker"
        ></uiDatetimePicker>
        <p>选择弹出框（底部弹出）</p>
        <ui-button type="primary" size="small" @click="b = true">
            宫格选择
        </ui-button>
        <uiActionSheet
            v-model="b"
            title="标题"
            grid
            :options="options"
            @confirm="select"
        ></uiActionSheet>
        <ui-button type="primary" size="small" @click="a = true">
            动作面板
        </ui-button>
        <uiActionSheet
            v-model="a"
            title="标题"
            :options="options"
            @select="select"
        ></uiActionSheet>
        <p>弹出菜单（下拉框）</p>
        <uiDropdownMenu></uiDropdownMenu>
        <p>消息类提示弹框</p>
        <ui-button type="primary" size="small" @click="clickTipDialog">
            提示弹框
        </ui-button>
        <ui-button type="primary" size="small" @click="confirmDialog">
            确认弹框
        </ui-button>
        <ui-button type="primary" size="small" @click="show = true">
            确认弹框
        </ui-button>
        <ui-button type="primary" size="small" @click="show1 = true">
            结果弹框
        </ui-button>
        <ui-button type="primary" size="small" @click="show2 = true">
            文字输入
        </ui-button>
        <uiDialog
            :visible.sync="show2"
            title="标题文字"
            @closeDialog="cancelDialog"
        >
            <div>
                <van-field
                    v-model="message"
                    rows="3"
                    border
                    type="textarea"
                    maxlength="80"
                    placeholder="请输入正文内容"
                    show-word-limit
                />
            </div>
            <template #footer>
                <div @click="show2 = false">确 定</div>
            </template>
        </uiDialog>
        <uiDialog :visible="show1" @closeDialog="cancelDialog">
            <div>
                <div class="icon">图标</div>
                <div class="tip">操作成功</div>
                <div class="desc">
                    描述内容描述内容描述内容描述内容描述内容描述内容描述内容描述内容
                </div>
            </div>
            <template #footer>
                <div @click="show1 = false">我知道了</div>
            </template>
        </uiDialog>
        <uiDialog
            :visible="show"
            title="这里是标题"
            @closeDialog="cancelDialog"
        >
            <span>这里是内容这里是内容这里是内容</span>
            <template #footer>
                <div @click="show = false">我知道了</div>
            </template>
        </uiDialog>
        <p>按钮</p>
        <div v-for="(item, index) in homeCompoents" :key="index">
            <ui-button
                v-if="item.componentName === 'uiButton'"
                :type="item.propValues.type"
                :disabled="item.propValues.disabled"
                :size="item.propValues.size"
                :round="item.propValues.round"
                :plain="item.propValues.plain"
                @click="handleClick"
            >
                {{ item.name }}
            </ui-button>
        </div>
        <ui-button
            type="primary"
            circle
            icon="plus"
            @click="handleClick"
        ></ui-button>
        <div style="line-height: 30px">
            这是描述
            <ui-button type="text" @click="handleClick">文字按钮</ui-button>
            这是描述
        </div>
        吸底按钮
        <ui-button type="primary" block @click="handleClick">确定</ui-button>
        <br />
        <ui-button-group>
            <ui-button type="primary" @click="handleClick">重置</ui-button>
            <ui-button type="primary" @click="handleClick">确定</ui-button>
        </ui-button-group>
    </div>
</template>

<script>
import uiButton from "../components/ui-components/ui-button/index";
import uiButtonGroup from "../components/ui-components/ui-button/ButtonGroup";
import { homeCompoents } from "../components/json-components/mobile";

import uiDialog from "../components/ui-components/ui-dialog/index.vue";
import { Dialog } from "../components/ui-components/ui-dialog/index.js";

import uiDropdownMenu from "../components/ui-components/ui-dropdownMenu/index";

import uiActionSheet from "../components/ui-components/ui-actionSheet/index";

import uiDatetimePicker from "../components/ui-components/ui-datetimePicker/index";

export default {
    name: "uiComponrnts",
    components: {
        uiButton,
        uiButtonGroup,
        uiDialog,
        uiDropdownMenu,
        uiActionSheet,
        uiDatetimePicker,
    },
    data() {
        return {
            dateShow: false,
            minDate: new Date(2020, 0, 1),
            maxDate: new Date(2025, 10, 1),
            currentDate: new Date(2021, 0, 17),
            homeCompoents: null,
            show: false,
            show1: false,
            show2: false,
            message: "",
            a: false,
            b: false,
            options: [
                {
                    name: "选项一",
                    key: "1",
                },
                {
                    name: "选项二",
                    key: "2",
                },
                {
                    name: "选项三",
                    key: "3",
                    subname: "描述信息描述信息描述信息",
                },
                {
                    name: "选项三",
                    key: "3",
                    subname: "描述信息描述信息描述信息",
                },
                {
                    name: "选项三",
                    key: "3",
                    subname: "描述信息描述信息描述信息",
                },
                {
                    name: "选项三",
                    key: "3",
                    subname: "描述信息描述信息描述信息",
                },
                {
                    name: "选项三",
                    key: "3",
                    subname: "描述信息描述信息描述信息",
                },
                {
                    name: "选项三",
                    key: "3",
                    subname: "描述信息描述信息描述信息",
                },
            ],
        };
    },
    created() {},
    mounted() {
        this.homeCompoents = homeCompoents;
    },
    methods: {
        confirmDatePicker(val) {
            console.log(val);
            this.dateShow = false;
        },
        select(item, index) {
            // alert(item);
            console.log(item, index);
            this.b = false;
        },
        handleClick(e) {
            console.log(e);
        },
        // 提示弹框
        clickTipDialog() {
            Dialog.alert({
                title: "这是标题",
                content: "这是内容",
            }).then((res) => {
                console.log(res);
            });
        },
        // 确认弹框
        confirmDialog() {
            console.log(111);
            Dialog.confirm({
                title: "这是标题",
                content: "这是内容",
                // cancelText: "取消",
                // confirmText: "确定",
                // showCancelButton: false,
                showConfirmButton: true,
            }).then((res) => {
                console.log(res);
            });
        },
        cancelDialog() {
            console.log(112345678);
            this.show = false;
        },
    },
};
</script>

<style lang="scss" scoped>
.madp-components {
    padding: 10px 0;
    /*background-color: #ffffff;*/
}.icon {
    margin: 40px auto 20px;
    width: 80px;
    height: 80px;
}
.tip {
    line-height: 100px;
    font-size: 34px;
    font-family: PingFangSC-Medium;
    color: #222222;
}
.desc {
    line-height: 42px;
    font-size: 28px;
    font-family: PingFangSC-Regular;
    color: #555555;
}
.van-cell {
    font-size: 28px;
    color: #555555;
    background-color: #fafafa;
}
</style>
