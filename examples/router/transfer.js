export default [
    {
        path: "/homeIndex",
        name: "transferAccountsIndex",
        component: (resolve) => require(["../views/index"], resolve),
        meta: {
            title: "首页", // 转账首页
            keepAlive: true,
            isTab: false,
            isAuth: false,
        },
    },
];
