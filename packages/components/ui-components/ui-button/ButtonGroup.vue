<template>
    <div class="madp-button-group">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name: "UiButtonGroup",
};
</script>

<style scoped>
.madp-button-group {
    width: 100%;
}
.van-button {
    width: 375px;
    letter-spacing: 10px;
    border-radius: 0;
}
.van-button:nth-child(2n + 1) {
    color: #555555;
    background-color: transparent;
    border: 1px solid #eeeeee;
}
</style>
