<!--
 * @Author: your name
 * @Date: 2021-03-04 11:23:35
 * @LastEditTime: 2021-04-01 15:34:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \madp-2c-h5\10000002\src\views\index.vue
-->
<template>
    <div class="madp-components">
        <!--		<div v-for="(item, index) in homeCompoents" :key="index">-->
        <!--			<ui-button-->
        <!--                v-if="item.componentName === 'uiButton'"-->
        <!--                :componentData="item"-->
        <!--                :disabled="item.propValues.disabled"-->
        <!--                :type="item.propValues.type"-->
        <!--                :size="item.propValues.size"-->
        <!--            >{{ item.name }}</ui-button>-->
        <!--		</div>-->
        <div v-for="(item, index) in homeCompoents" :key="index">
            <div></div>
            <ui-button
                v-if="item.componentName === 'uiButton'"
                :type="item.propValues.type"
                :disabled="item.propValues.disabled"
                :size="item.propValues.size"
                @click="handleClick"
                >{{ item.name }}</ui-button
            >
        </div>
        <van-button plain hairline disabled type="info">细边框按钮</van-button>
    </div>
</template>

<script>
import uiButton from "@/components/ui-components/ui-button/index.vue";
import { homeCompoents } from "@/components/js-components/mobile.js";
export default {
    name: "uiComponrnts",
    components: { uiButton },
    data() {
        return {
            homeCompoents: null,
        };
    },
    created() {},
    mounted() {
        this.homeCompoents = homeCompoents;
    },
    methods: {
        handleClick() {
            console.log(11112222222222);
        },
    },
};
</script>

<style lang="scss" scoped>
.madp-components {
    padding: 10px 0;
    background-color: #ffffff;
}
</style>
