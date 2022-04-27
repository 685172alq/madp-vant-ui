<template>
    <div class="madp-ui-row-container">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props: {
        gutter: {
            type: Number,
            default: 0,
        },
    },
    data() {
        return {};
    },
    methods: {},
    mounted() {
        console.log("占比--", this.span, "--间距", this.gutter);
    },
};
</script>
<style lang="scss" scoped>
.madp-ui-row-container {
    width: 100%;
}
</style>
