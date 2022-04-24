let options = {
    routersName: [], //路由文件名列表
    menuFlag: "", //显示的功能列表标识
};
if (process.env.PROJECT_NAME == "ALL") {
    options.menuFlag = "ALL";
    options.routersName = [
        ...require("@/router/financial.js").default,
        ...require("@/router/transfer.js").default,
    ];
} else if (process.env.PROJECT_NAME == "financial") {
    options.menuFlag = "financial";
    options.routersName = [...require("@/router/financial.js").default];
} else if (process.env.PROJECT_NAME == "transfer") {
    options.menuFlag = "transfer";
    options.routersName = [...require("@/router/transfer.js").default];
} else if (process.env.PROJECT_NAME == "account") {
    options.menuFlag = "account";
    options.routersName = [...require("@/router/account.js").default];
} else if (process.env.PROJECT_NAME == "eAccount") {
    options.menuFlag = "eAccount";
    options.routersName = [...require("@/router/eAccount.js").default];
} else if (process.env.PROJECT_NAME == "other") {
    options.menuFlag = "other";
    options.routersName = [...require("@/router/other.js").default];
}
export default options;
