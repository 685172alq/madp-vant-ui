<template>
    <div
        v-if="show"
        class="madp-actionSheet-wrapper"
        @touchmove.prevent
        @click="dialogClose"
    >
        <div :class="actionClass" @click="stopCloseDialog">
            <!--标题-->
            <div class="madp-actionSheet-header">
                <div
                    class="madp-actionSheet-title"
                    :style="{ 'text-align': grid ? 'left' : 'center' }"
                >
                    <!--标题-->
                    <template v-if="title">
                        {{ title }}
                    </template>
                    <!--自定义标题预留位-->
                    <template v-else>
                        <slot name="header"></slot>
                    </template>
                </div>
            </div>
            <!--内容-->
            <div class="madp-actionSheet-body">
                <template
                    v-if="options && options.length && !$scopedSlots.default"
                >
                    <!--默认选项卡-->
                    <div v-if="!grid">
                        <div
                            v-for="(item, index) in options"
                            :key="index"
                            :class="[
                                'content-item',
                                index === current ? 'isSelected' : '',
                            ]"
                            @click="handleClickSelect(item, index)"
                        >
                            <div class="left">
                                <!--选项标题-->
                                <div class="name">
                                    {{ item.name }}
                                </div>
                                <!--辅助描述-->
                                <div class="subname">
                                    {{ item.subname }}
                                </div>
                            </div>
                            <!--选中状态图标-->
                            <div v-show="index === current" class="right">
                                <van-icon name="success" />
                            </div>
                        </div>
                    </div>
                    <!--宫格-->
                    <div v-else class="actionSheet-content">
                        <div
                            v-for="(item, index) in options"
                            :key="index"
                            :class="[
                                'content-list',
                                index === current ? 'isSelectedGrid' : '',
                            ]"
                            @click="handleClickSelectGrid(item, index)"
                        >
                            {{ item.name }}
                        </div>
                    </div>
                </template>
                <!--自定义预留位-->
                <template v-else>
                    <slot name="default"></slot>
                </template>
            </div>
            <div class="madp-actionSheet-footer">
                <!--底部按钮，默认为宫格情况下存在-->
                <template v-if="grid && !$scopedSlots.footer">
                    <ButtonGroup>
                        <ui-button
                            type="primary"
                            @click="handleClick('cancel')"
                        >
                            取消
                        </ui-button>
                        <ui-button
                            type="primary"
                            @click="handleClick('submit')"
                        >
                            确定
                        </ui-button>
                    </ButtonGroup>
                </template>
                <!--自定义预留位-->
                <template v-else>
                    <slot name="footer"></slot>
                </template>
            </div>
        </div>
    </div>
</template>

<script>
import ButtonGroup from "../ui-button/ButtonGroup";
import UiButton from "../ui-button/index";
export default {
    name: "UiActionSheet",
    components: { ButtonGroup, UiButton },
    props: {
        // 是否显示动作面板
        show: Boolean,
        // 顶部标题
        title: {
            type: String,
            default: "",
        },
        // 动作面板选项内容
        options: {
            type: Array,
            default: () => [],
        },
        // 是否宫格选项，默认false
        grid: {
            type: Boolean,
            default: false,
        },
    },
    watch: {
        show: {
            handler(val) {
                if (val) {
                    this.actionClass = "madp-actionSheet";
                    this.stopScroll();
                } else {
                    this.startScroll();
                }
            },
            immediate: true,
        },
    },
    data() {
        return {
            // 弹框class
            actionClass: "",
            // 当前选中项index
            current: -1,
            // 宫格选中项
            currentItem: {},
        };
    },
    model: {
        prop: "show",
        event: "change",
    },
    methods: {
        // 确定/取消
        handleClick(type) {
            if (type === "cancel") {
                this.$emit("cancel");
                this.dialogClose();
            } else {
                let index = this.current;
                this.current = -1;
                this.$emit("confirm", this.currentItem, index);
            }
        },
        // 宫格选择事件
        handleClickSelectGrid(item, index) {
            this.current = index;
            this.currentItem = item;
        },
        // 选项选择事件
        handleClickSelect(item, index) {
            this.current = index;
            this.$emit("select", item, index);
            this.dialogClose();
        },
        // 点击遮罩层可关闭弹框
        dialogClose() {
            this.actionClass = "madp-actionSheet_leave";
            setTimeout(() => {
                this.current = -1;
                this.$emit("change", false);
            }, 300);
        },
        // 阻止事件冒泡
        stopCloseDialog(e) {
            e.stopPropagation();
        },
        // 阻止默认事件
        bodyScroll(e) {
            e.preventDefault();
        },
        // 遮罩禁止滑动
        stopScroll() {
            document.body.style.overflow = "hidden";
            document.addEventListener("touchmove", this.bodyScroll, false);
        },
        startScroll() {
            document.body.style.overflow = "";
            document.removeEventListener("touchmove", this.bodyScroll, false);
        },
    },
};
</script>

<style scoped>
.madp-actionSheet-wrapper {
    position: fixed;
    z-index: 999;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
}
.madp-actionSheet {
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    z-index: 9999;
    position: fixed;
    bottom: -1300px;
    padding-bottom: 2px;
    max-height: 80%;
    overflow: hidden;
    width: 750px;
    background-color: #ffffff;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    animation: enter 0.5s linear forwards;
}
.madp-actionSheet_leave {
    z-index: 9999;
    position: fixed;
    bottom: 0;
    width: 750px;
    background-color: #ffffff;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
    animation: leave 0.5s linear forwards;
}
@keyframes enter {
    0% {
        bottom: -1300px;
    }
    100% {
        bottom: -2px;
    }
}
@keyframes leave {
    0% {
        bottom: -2px;
    }
    100% {
        bottom: -1300px;
    }
}

.madp-actionSheet-header {
    box-sizing: border-box;
    padding: 0 24px;
    width: 100%;
    height: 100px;
    line-height: 100px;
    font-size: 34px;
    font-weight: 500;
    color: #222222;
}

.madp-actionSheet-body {
    box-sizing: border-box;
    padding-left: 24px;
    overflow-y: scroll;
}

.content-item {
    box-sizing: border-box;
    padding-bottom: 26px;
    margin-top: 25px;
    display: flex;
    justify-content: space-between;

    align-items: center;
    line-height: 40px;
    border-bottom: 1px solid #e6e6e6;
}
.content-item:last-child {
    border: none;
}
.name {
    font-size: 28px;
    color: #222222;
}
.subname {
    font-size: 24px;
    color: #555555;
}

.right {
    margin-right: 24px;
    font-size: 24px;
}

.isSelected .name,
.isSelected .subname,
.isSelected .right {
    color: #1d70f5 !important;
}

.actionSheet-content {
    box-sizing: border-box;
    padding: 20px 24px 40px 0;
    display: flex;
    flex-wrap: wrap;
}
.content-list {
    margin: 15px 8px;
    min-width: 214px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 26px;
    color: #999999;
    border-radius: 4px;
    border: 1px solid #cccccc;
}

.isSelectedGrid {
    color: #ffffff;
    border-color: #1d70f5;
    background-color: #1d70f5;
}
</style>
