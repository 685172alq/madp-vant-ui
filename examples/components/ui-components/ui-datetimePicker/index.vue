<template>
    <div
        v-if="show"
        class="madp-actionSheet-wrapper"
        @touchmove.prevent
        @click="dialogClose"
    >
        <div :class="actionClass" @click="stopCloseDialog">
            <van-datetime-picker
                v-model="currentDatetime"
                :type="type"
                :min-date="minDate"
                :formatter="formatter"
                :max-date="maxDate"
                :minHour="minHour"
                :maxHour="maxHour"
                :minMinute="minMinute"
                :maxMinute="maxMinute"
                :swipeDuration="swipeDuration"
                :columnsOrder="columnsOrder"
                :itemHeight="itemHeight"
                :visibleItemCount="visibleItemCount"
            >
                <template #default>
                    <div class="cancel top-text" @click="cancel">取消</div>
                    <div class="title top-text">
                        <template v-if="title">{{ title }}</template>
                        <template v-else>
                            <slot name="title"></slot>
                        </template>
                    </div>
                    <div class="confirm top-text" @click="submit">确定</div>
                </template>
            </van-datetime-picker>
        </div>
    </div>
</template>

<script>
export default {
    name: "uiDatetimePicker",
    props: {
        // 是否显示动作面板
        show: Boolean,
        // 当前选择的日期， Date，如果type为time类型，则传值为String类型，例如：12：00
        currentDate: {
            type: [Date, String],
        },
        // 最小日期 Date 默认值：10年前
        minDate: {
            type: Date,
            default: () => {
                return new Date(new Date().getFullYear() - 10, 0, 1);
            },
        },
        // 最大日期 Date 默认值：10年后
        maxDate: {
            type: Date,
            default: () => {
                return new Date(new Date().getFullYear() + 10, 11, 31);
            },
        },
        // 标题 String
        title: {
            type: String,
            default: "",
        },
        // 选项格式化函数
        formatter: {
            type: Function,
            default: function (type, val) {
                let obj = {
                    year: "年",
                    month: "月",
                    day: "日",
                    hour: "时",
                    minute: "分",
                };
                return val + obj[type];
            },
        },
        // 时间类型，可选值为 date, time, year-month, month-day, datehour
        type: {
            type: String,
            default: "date",
        },
        // 可选的最小小时	number | string	默认值：0
        minHour: {
            type: [Number, String],
        },
        // 可选的最大小时	number | string	默认值：23
        maxHour: {
            type: [Number, String],
        },
        // 可选的最小分钟	number | string	默认值：0
        minMinute: {
            type: [Number, String],
        },
        // 可选的最大分钟	number | string	默认值：59
        maxMinute: {
            type: [Number, String],
        },
        // 快速滑动时惯性滚动的时长，单位ms	number | string	默认值：1000
        swipeDuration: {
            type: [Number, String],
        },
        // v2.9.2	自定义列排序数组, 子项可选值为 year、month、day、hour、minute	string[]
        columnsOrder: {
            type: Array,
        },
        //  v2.8.6	选项高度，支持 px vw vh rem 单位，默认 px	number | string	默认值：44
        itemHeight: {
            type: [Number, String],
        },
        // 可见的选项个数	number | string	默认值：6
        visibleItemCount: {
            type: [Number, String],
        },
    },
    model: {
        prop: "show",
        event: "change",
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
    computed: {
        // 处理默认值
        currentDatetime: {
            get() {
                if (this.type === "time") {
                    let time = new Date();
                    return (
                        time.getHours().toString() +
                        ":" +
                        time.getMinutes().toString()
                    );
                }
                if (!this.currentDate) {
                    return new Date();
                }
                return this.currentDate;
            },
            set() {},
        },
    },
    data() {
        return {
            // 遮罩class
            actionClass: "",
        };
    },
    methods: {
        // 取消按钮
        cancel() {
            this.dialogClose();
        },
        // 确定事件 返回 当前选中的值
        submit() {
            this.$emit("confirm", this.currentDatetime);
            // this.dialogClose();
        },
        // 点击遮罩层可关闭弹框
        dialogClose() {
            this.actionClass = "madp-actionSheet_leave";
            setTimeout(() => {
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

.top-text {
    font-size: 30px;
}
.cancel {
    box-sizing: border-box;
    padding-left: 24px;
    color: #999999 !important;
}
.confirm {
    box-sizing: border-box;
    padding-right: 24px;
    color: #1d70f5 !important;
}
</style>
