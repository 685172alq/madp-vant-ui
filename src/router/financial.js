export default [
    //理财开始
    {
        path: "/",
        name: "homeIndex",
        component: (resolve) => require(["@/views/index"], resolve),
        meta: {
            title: "首页", // 页面标题
            keepAlive: false, // keep-alive 标识
        },
    },
];
