<template>
    <transition name="van-fade">
        <div
            v-if="dialogVisible"
            class="madp-dialog-wrapper"
            @touchmove.prevent
            @click="dialogClose"
        >
            <div class="madp-dialog" @click="stopCloseDialog">
                <div class="madp-dialog-header">
                    <!--弹窗头部 title-->
                    <div class="madp-dialog-title">
                        <template v-if="dialogTitle">
                            {{ dialogTitle }}
                        </template>
                        <template v-else>
                            <slot name="header"></slot>
                        </template>
                    </div>
                </div>
                <div class="madp-dialog-body">
                    <!--弹窗的内容-->
                    <template v-if="dialogContent">
                        {{ dialogContent }}
                    </template>
                    <template v-else>
                        <slot name="default"></slot>
                    </template>
                </div>
                <!--弹窗关闭按钮-->
                <div class="madp-dialog-footer">
                    <div class="dialog-footer">
                        <template v-if="type === 'alert'">
                            <div @click="handelConfirm">我知道了</div>
                        </template>
                        <template v-else-if="type === 'confirm'">
                            <div class="btn">
                                <!--取消按钮-->
                                <div
                                    v-if="showCancelButton"
                                    class="left"
                                    @click="handelCancel"
                                >
                                    {{ cancelText }}
                                </div>
                                <!--确定按钮-->
                                <div
                                    v-if="showConfirmButton"
                                    class="right"
                                    @click="handelConfirm"
                                >
                                    {{ confirmText }}
                                </div>
                            </div>
                        </template>
                        <template v-else>
                            <slot name="footer" @click="closeDialog">
                                我知道了
                            </slot>
                        </template>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: "UiDialog",
    props: {
        /*标题*/
        title: {
            type: String,
            default: "",
        },
        content: {
            type: String,
            default: "",
        },
        /*是否显示弹框*/
        visible: {
            type: Boolean,
            default: true,
        },
        /*点击遮罩层是否可关闭弹框*/
        closeOnClickModal: {
            type: Boolean,
            default: true,
        },
    },
    data() {
        return {
            // 标题
            dialogTitle: "",
            // 内容
            dialogContent: "",
            promise: null,
            // 弹框显隐
            dialogVisible: false,
            // 取消按钮文字
            cancelText: "取消",
            // 确定按钮文字
            confirmText: "确定",
            // 函数式调用弹框控制弹框底部按钮类型
            type: "",
            // 是否显示取消按钮
            showCancelButton: true,
            // 是否显示确定按钮
            showConfirmButton: true,
        };
    },
    watch: {
        title: {
            handler(val) {
                if (val) {
                    this.dialogTitle = val;
                }
            },
            immediate: true,
        },
        visible: {
            handler(val) {
                this.dialogVisible = !!val;
            },
            immediate: true,
        },
        content: {
            handler(content) {
                if (content) {
                    this.dialogContent = content;
                }
            },
        },
        dialogVisible(val) {
            if (val) {
                this.stopScroll();
            } else {
                this.startScroll();
            }
        },
    },
    mounted() {},
    methods: {
        // 外部通过visible.sync 调用，点击遮罩层可关闭弹框
        dialogClose() {
            if (this.closeOnClickModal) {
                this.$emit("update:visible", false);
            }
        },
        // 阻止事件冒泡
        stopCloseDialog(e) {
            e.stopPropagation();
        },
        init() {
            // 初始化, 返回一个promise
            if (!this.visible) {
                this.dialogVisible = true;
            }
            return new Promise((resolve, reject) => {
                // 将resolve 、reject暂存起来,方便调用
                this.promise = { resolve, reject };
            });
        },
        handelCancel() {
            // 取消
            this.promise.reject();
            this.destroyVm();
        },
        handelConfirm() {
            // 确定
            this.promise.resolve();
            this.destroyVm();
        },
        destroyVm() {
            // 销毁
            this.dialogVisible = false;
            // 完全销毁一个实例。清理它与其它实例的连接，解绑它的全部指令及事件监听器
            this.$destroy(true);
            // 从dom节点删除
            this.$el && this.$el.parentNode.removeChild(this.$el);
        },
        // 头部关闭按钮事件（预留位，暂时未做）
        closeDialog() {
            this.$emit("closeDialog", false);
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
.madp-dialog-wrapper {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
}

.madp-dialog {
    z-index: 9999;
    position: fixed;
    top: 30%;
    transform: translateX(50px);
    width: 650px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #ffffff;
    border-radius: 20px;
}

.madp-dialog-header {
    box-sizing: border-box;
    padding: 0 50px;
    width: 100%;
    line-height: 100px;
    font-size: 34px;
    font-weight: 500;
    color: #222222;
}

.madp-dialog-body {
    box-sizing: border-box;
    padding: 20px 50px 50px;
    width: 100%;
    max-height: 600px;
    overflow: auto;
    line-height: 42px;
    font-size: 28px;
    color: #555555;
}

.madp-dialog-footer {
    width: 100%;
}

.dialog-footer {
    box-sizing: border-box;
    padding: 23px 50px 19px;
    line-height: 48px;
    font-size: 34px;
    color: #1d70f5;
    border-top: 1px solid #e6e6e6;
}

.btn {
    display: flex;
    justify-content: space-around;
}
.left,
.right {
    width: 50%;
}
.btn div:nth-child(2n) {
    position: relative;
}

.btn div:nth-child(2n):after {
    position: absolute;
    content: "";
    top: -23px;
    left: 0;
    width: 1px;
    height: 88px;
    border-right: 1px solid #e6e6e6;
}
</style>
