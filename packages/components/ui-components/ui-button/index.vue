<!--
 * @Author: your name
 * @Date: 2021-03-04 11:23:35
 * @LastEditTime: 2021-04-01 15:34:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \madp-2c-h5\10000002\src\views\uiDropdownMenu.vue
-->
<template>
    <van-button
        :disabled="disabled"
        :loading="loading"
        :loading-text="loadingText"
        :loading-type="loadingType"
        :icon="icon"
        :class="[
            `madp_${type}_button`,
            classSize(size),
            classRound(round),
            classDisabled(disabled),
            classPlain(plain),
            classCircle(circle),
            classBlock(block),
        ]"
        @touchstart="handleTouchstart"
        @click="handleClick"
    >
        <template v-if="text && !circle">{{ text }}</template>
        <template v-else-if="!circle">
            <slot #default></slot>
        </template>
    </van-button>
</template>

<script>
export default {
    name: "ui-button",
    props: {
        // 类型：default，primary，文字按钮：text
        type: {
            type: String,
            default: "default",
        },
        // 是否禁用
        disabled: {
            type: Boolean,
            default: false,
        },
        // 大小：large，normal，small，mini
        size: {
            type: String,
            default: "normal",
        },
        // 圆角
        round: {
            type: Boolean,
            default: false,
        },
        // 是否朴素按钮（有边框）
        plain: {
            type: Boolean,
            default: false,
        },
        // 是否原型按钮
        circle: {
            type: Boolean,
            default: false,
        },
        // 图标类名
        icon: {
            type: String,
            default: "",
        },
        // 块级按钮
        block: {
            type: Boolean,
            default: false,
        },
        // 加载状态
        loading: {
            type: Boolean,
            default: false,
        },
        // 加载图标类型，可选值：spinner
        loadingType: {
            type: String,
            default: "circular",
        },
        // 加载状态提示文字
        loadingText: {
            type: String,
            default: "",
        },
        // 按钮文字
        text: {
            type: String,
            default: "",
        },
    },
    data() {
        return {};
    },
    methods: {
        classSize(size) {
            if (!this.circle && this.type !== "text" && !this.loading) {
                return `madp_${size}_button`;
            } else {
                return "madp_small_button";
            }
        },
        // 禁用
        classDisabled(disabled) {
            return disabled ? "madp_button--disabled" : "";
        },
        // 圆角
        classRound(round) {
            return round ? "madp_button--round" : "";
        },
        // 边框
        classPlain(plain) {
            return plain ? "madp_button--plain" : "";
        },
        // 圆形
        classCircle(circle) {
            return circle ? "madp_button--circle" : "";
        },
        // 块级
        classBlock(block) {
            return block ? "madp_button--block" : "";
        },
        // 点击按钮，且按钮状态不为加载或禁用时触发
        handleClick(event) {
            this.$emit("click", event);
        },
        // 开始触摸按钮时触发
        handleTouchstart(event) {
            this.$emit("touchstart", event);
        },
    },
};
</script>

<style lang="scss" scoped>
.van-button {
    letter-spacing: 0;
    font-weight: normal;
    font-family: PingFangSC-Medium;
}

/*type类型*/
/*default*/
.madp_default_button {
    color: #222222;
    border: 2px solid #999999;
    background-color: #ffffff;
}

.madp_default_button:active {
    background-color: #ffffff;
}

/*primary*/
.madp_primary_button {
    color: #ffffff;
    border: 1px solid #1d70f5;
    background-color: #1d70f5;
}

.madp_primary_button:active {
    background-color: #1962d1;
}

/*大小size*/
/*normal*/
.madp_normal_button {
    min-width: 375px;
    max-width: 750px;
    font-size: 32px;
    border-radius: 10px;
}

/*large*/
.madp_large_button {
    width: 750px;
    font-size: 32px;
    border-radius: 0;
}

/*small*/
.madp_small_button {
    box-sizing: border-box;
    padding: 0 22px;
    min-width: 160px;
    height: 72px;
    font-size: 30px;
    border-radius: 6px;
}

/*mini*/
.madp_mini_button {
    box-sizing: border-box;
    padding: 0 22px;
    min-width: 100px;
    height: 48px;
    font-size: 28px;
    border-radius: 6px;
}

/*圆角*/
.madp_button--round {
    border-radius: 999px;
}

/*边框*/
.madp_button--plain.madp_primary_button {
    color: #1d70f5;
    background-color: transparent;
}

.madp_button--plain.madp_primary_button:active {
    background-color: #e1ecfd;
}

/*圆形*/
.madp_button--circle {
    min-width: 110px;
    width: 110px;
    height: 110px;
    border-radius: 50%;
}

/*文字按钮*/
.madp_text_button {
    min-width: 0;
    padding: 0;
    color: #1d70f5;
    font-size: 28px;
    border: none;
    vertical-align: super;
}

.madp_text_button:active {
    background-color: transparent;
}

.madp_text_button.van-button::before {
    background-color: transparent;
}

/*块级（吸底）*/
.madp_button--block {
    display: block;
    width: 100%;
    letter-spacing: 10px;
    border-radius: 0;
}

/*是否禁用disabled*/
.van-button--disabled.madp_primary_button {
    background-color: #b7d7ff;
}

.van-button--disabled.madp_primary_button:active {
    background-color: #b7d7ff;
}

.van-button--disabled.madp_default_button {
    color: #cccccc;
    border: none;
    background-color: #eeeeee;
}

.van-button--disabled.madp_default_button:active {
    color: #cccccc;
    background-color: #eeeeee;
}

.van-button--disabled.madp_text_button {
    color: #999999;
    border: none;
    background-color: transparent;
}

.van-button--disabled.madp_text_button:active {
    color: #999999;
    background-color: transparent;
}

.van-button--disabled.madp_button--plain {
    color: #999999;
    border: 1px solid #999999;
    background-color: transparent;
}

.van-button--disabled.madp_button--plain:active {
    background-color: transparent;
}
</style>
