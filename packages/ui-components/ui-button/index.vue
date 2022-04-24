<!--
 * @Author: your name
 * @Date: 2021-03-04 11:23:35
 * @LastEditTime: 2021-04-01 15:34:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \madp-2c-h5\10000002\src\views\index.vue
-->
<template>
    <div class="madp-button">
        <!--        <van-button-->
        <!--            :disabled="disabled"-->
        <!--            :class="`${type}_${size}_button`"-->
        <!--            @click="handleClick"-->
        <!--        >-->
        <!--            <slot></slot>-->
        <!--        </van-button>-->
        <van-button
            :disabled="disabled"
            :class="[classType(type), classSize(size), classDisabled(disabled)]"
            @click="handleClick"
        >
            <slot></slot>
        </van-button>
    </div>
</template>

<script>
export default {
    name: "UiButton",
    props: {
        componentData: {
            type: Object,
            default: () => {},
        },
        type: {
            type: String,
            default: "default",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        size: {
            type: String,
            default: "normal",
        },
    },
    data() {
        return {};
    },
    created() {},
    mounted() {},
    methods: {
        classType(type) {
            return `madp_${type}_button`;
        },
        classSize(size) {
            return `madp_${size}_button`;
        },
        classDisabled(disabled) {
            return disabled ? `madp_button--disabled` : "";
        },
        handleClick(event) {
            this.$emit("click", event);
        },
    },
};
</script>

<style lang="scss" scoped>
.madp-button {
    .van-button {
        letter-spacing: 0;
        font-weight: normal;
        font-family: PingFangSC-Medium;
    }
    /*type类型*/
    // default
    .madp_default_button {
        color: #222222;
        border: 2px solid #999999;
        background-color: #ffffff;

        &:active {
            background-color: #ffffff;
        }
    }
    // primary
    .madp_primary_button {
        color: #ffffff;
        background-color: #1d70f5;

        &:active {
            background-color: #1962d1;
        }
    }
    // secondary
    .madp_secondary_button {
        color: #1d70f5;
        border: 2px solid #1d70d5;

        &:active {
            background-color: #e1ecfd;
        }
    }

    /*大小size*/
    // normal
    .madp_normal_button {
        min-width: 375px;
        max-width: 750px;
        font-size: 32px;
        border-radius: 10px;
    }
    // large
    .madp_large_button {
        width: 750px;
        font-size: 32px;
        border-radius: 0;
    }
    // small
    .madp_small_button {
        min-width: 160px;
        height: 72px;
        font-size: 30px;
        border-radius: 6px;
    }
    // mini
    .madp_mini_button {
        min-width: 100px;
        height: 48px;
        font-size: 28px;
        border-radius: 6px;
    }

    /*是否禁用disabled*/
    .van-button--disabled.madp_secondary_button {
        background-color: #f2f2f2;
        color: #999999;
        border: 2px solid #999999;

        &:active {
            background-color: #f2f2f2;
            border: 2px solid #999999;
        }
    }
    .van-button--disabled.madp_primary_button {
        background-color: #b7d7ff;

        &:active {
            background-color: #b7d7ff;
        }
    }
    .van-button--disabled.madp_default_button {
        color: #cccccc;
        border: none;
        background-color: #eeeeee;

        &:active {
            color: #cccccc;
            background-color: #eeeeee;
        }
    }
}
</style>
