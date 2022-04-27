<template>
    <van-dropdown-menu>
        <van-dropdown-item v-model="value1" :options="option1" />
        <van-dropdown-item v-model="value2" :options="option2" />
    </van-dropdown-menu>
</template>

<script>
export default {
    name: "UiDropdownMenu",
    data() {
        return {
            value1: "",
            value2: "",
            option1: [],
            option2: [],
        };
    },
};
</script>

<style scoped></style>
