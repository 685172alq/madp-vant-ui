<template>
    <div class="madp-container">
        <div>栅格</div>
        <ui-row :gridHeight="100" :background="true">
            <ui-col :span="12"></ui-col>
        </ui-row>
        <ui-row :gridHeight="100" :background="true" :gutter="8">
            <ui-col :span="6"></ui-col>
            <ui-col :span="6"></ui-col>
        </ui-row>
        <ui-row :gridHeight="100" :background="true">
            <ui-col :span="4"></ui-col>
            <ui-col :span="4"></ui-col>
            <ui-col :span="4"></ui-col>
        </ui-row>
        <ui-row :gridHeight="100" :background="true">
            <ui-col :span="3"></ui-col>
            <ui-col :span="3"></ui-col>
            <ui-col :span="3"></ui-col>
            <ui-col :span="3"></ui-col>
        </ui-row>
        <ui-row :gridHeight="100" :background="true" :gutter="16">
            <ui-col :span="2"></ui-col>
            <ui-col :span="2"></ui-col>
            <ui-col :span="2"></ui-col>
            <ui-col :span="2"></ui-col>
            <ui-col :span="2"></ui-col>
            <ui-col :span="2"></ui-col>
        </ui-row>
        <!-- <div>其它规格</div>
        <ui-row :gridPadding="18" :gridHeight="200"></ui-row>
        <div>卡片圆角</div>
        <ui-row :gridPadding="20" :gridHeight="100" :mode="popup"></ui-row>
        <ui-row :gridPadding="20" :gridHeight="100" :mode="modular"></ui-row>
        <div>通栏卡片规格</div>
        <div>
            <ui-row :gridHeight="100"></ui-row>
            <ui-row :gridHeight="100"></ui-row>
        </div>
        <div>模块卡片规格</div>
        <div>
            <ui-row :gridHeight="100" :gridPadding="18"></ui-row>
            <ui-row :gridHeight="100" :gridPadding="18"></ui-row>
        </div> -->
    </div>
</template>

<script>
import UiCol from "../components/ui-components/ui-grid/index.vue";
import UiRow from "../components/ui-components/ui-grid/row.vue";
export default {
    name:"uiGrid",
    components: {
        UiRow,
        UiCol,
    },
    data() {
        return {
            modular: "modular",
            popup: "popup",
        };
    },
    methods: {},
    mounted() {},
};
</script>
<style lang="scss" scoped>
.madp-container {
    height: 999px;
}
.madp-bg {
    background: #ededed;
}
</style>
