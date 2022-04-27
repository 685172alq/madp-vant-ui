export const homeCompoents = [
    {
        name: "按钮",
        id: 1,
        componentName: "uiButton",
        propValues: {
            showType: "text",
            struct: {
                label: "展示类型",
                key: "showType",
                type: "select",
                chooseValue: "text",
                flex: 2,
                options: [
                    {
                        value: "text",
                        label: "文字",
                    },
                    {
                        value: "icon",
                        label: "图标",
                    },
                    {
                        value: "textAndIcon",
                        label: "文字加图标",
                    },
                    {
                        value: "userDefined",
                        label: "自定义",
                    },
                ],
            },
        },
    },
    //方便查看
    {
        name: "扫一扫头部模板",
        id: 2,
        componentName: "VanHomePage",
        mStyle: {
            left: 0,
            top: 0,
            width: 375,
            height: 44,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            zIndex: 0,
        },
        mClass: [],
        propValues: [
            {
                label: "是否编辑左侧内容",
                key: "isShowLeft",
                type: "switch",
                value: true,
            },
            {
                label: "左侧数据列表",
                key: "leftIconAndText",
                type: "tableNavLeft",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "展示类型",
                            key: "showType",
                            type: "select",
                            chooseValue: "text",
                            flex: 2,
                            options: [
                                {
                                    value: "text",
                                    label: "文字",
                                },
                                {
                                    value: "icon",
                                    label: "图标",
                                },
                                {
                                    value: "textAndIcon",
                                    label: "文字加图标",
                                },
                                {
                                    value: "userDefined",
                                    label: "自定义",
                                },
                            ],
                        },
                        {
                            label: "文字内容",
                            key: "textContent",
                            type: "text",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "text",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "图标",
                            key: "image",
                            type: "imageStore",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "icon",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "是否有徽标",
                            key: "ifBadge",
                            type: "switch",
                            flex: 1,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "icon",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "徽标内容",
                            key: "badgeContent",
                            type: "text",
                            flex: 1,
                            mutiOption: {
                                index: 3,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                        {
                            label: "是否下拉菜单",
                            key: "ifPopover",
                            type: "switch",
                            flex: 1,
                        },
                        {
                            label: "主题风格",
                            key: "themeType",
                            type: "select",
                            flex: 1,
                            options: [
                                {
                                    value: "light",
                                    label: "浅色",
                                },
                                {
                                    value: "dark",
                                    label: "深色",
                                },
                            ],
                            mutiOption: {
                                index: 5,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                        {
                            label: "下拉菜单内容",
                            key: "popoverList",
                            type: "menuTable",
                            flex: 2,
                            optionsTrans: [
                                {
                                    value: "link",
                                    label: "链接",
                                },
                                {
                                    value: "application",
                                    label: "应用",
                                },
                            ],
                            mutiOption: {
                                index: 5,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                    ],
                    data: [
                        {
                            showType: "icon",
                            textContent: "",
                            image: "root://assets/images/dragComponents/scan.png",
                            ifBadge: false,
                            badgeContent: "1",
                            ifPopover: true,
                            themeType: "",
                            popoverList: [
                                {
                                    transfer: "dark",
                                    text: "气泡1",
                                    icon: "root://assets/images/dragComponents/scan.png",
                                },
                                {
                                    transfer: "dark",
                                    text: "气泡2",
                                    icon: "root://assets/images/dragComponents/scan.png",
                                },
                            ],
                        },
                    ],
                },
                mutiOption: {
                    index: 0,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "是否显示搜索框",
                key: "isShowSearch",
                type: "switch",
                value: true,
            },
            {
                label: "搜索框形状",
                key: "shape",
                type: "select",
                chooseValue: "round",
                value: {
                    data: [
                        {
                            value: "round",
                            label: "圆角",
                        },
                        {
                            value: "square",
                            label: "方形",
                        },
                    ],
                },
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "输入的最大字符数",
                key: "maxlength",
                value: 20,
                type: "num",
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "搜索框提示文字",
                key: "placeholder",
                type: "text",
                value: "招银理财丰和短债14天持...",
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "提示文字颜色",
                key: "tipColor",
                value: "#fff",
                type: "color",
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                    color: "#fff",
                },

                isRelevance: true,
            },
            {
                label: "搜索框背景是否透明",
                key: "transColor",
                type: "switch",
                value: true,
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                    color: "#E7CE96",
                },
                isRelevance: true,
            },
            {
                label: "搜索框背景色",
                key: "bgColor",
                value: "#CCC",
                type: "color",
                mutiOption: {
                    index: 7,
                    key: "value",
                    showValueList: [false],
                    color: "#E7CE96",
                },
                isRelevance: false,
            },
            {
                label: "搜索框文字颜色",
                key: "txtColor",
                value: "#ffffff",
                type: "color",
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                    color: "#fff",
                },
                isRelevance: true,
            },
            {
                label: "搜索框图标颜色",
                key: "iconColor",
                value: "#ffffff",
                type: "color",
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "是否编辑右侧内容",
                key: "isShowRight",
                type: "switch",
                value: true,
            },
            {
                label: "右侧数据列表",
                key: "rightIconAndText",
                type: "tableNavRight",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "展示类型",
                            key: "showType",
                            type: "select",
                            chooseValue: "text",
                            flex: 2,
                            options: [
                                {
                                    value: "text",
                                    label: "文字",
                                },
                                {
                                    value: "icon",
                                    label: "图标",
                                },
                                {
                                    value: "textAndIcon",
                                    label: "文字加图标",
                                },
                            ],
                        },
                        {
                            label: "文字内容",
                            key: "textContent",
                            type: "text",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: ["text"],
                            },
                        },
                        {
                            label: "图标",
                            key: "image",
                            type: "imageStore",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "icon",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "是否有徽标",
                            key: "ifBadge",
                            type: "switch",
                            flex: 1,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "icon",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "徽标内容",
                            key: "badgeContent",
                            type: "text",
                            flex: 1,
                            mutiOption: {
                                index: 3,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                        {
                            label: "是否下拉菜单",
                            key: "ifPopover",
                            type: "switch",
                            flex: 1,
                        },
                        {
                            label: "主题风格",
                            key: "themeType",
                            type: "select",
                            flex: 1,
                            options: [
                                {
                                    value: "light",
                                    label: "浅色",
                                },
                                {
                                    value: "dark",
                                    label: "深色",
                                },
                            ],
                            mutiOption: {
                                index: 5,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                        {
                            label: "下拉菜单内容",
                            key: "popoverList",
                            type: "menuTable",
                            flex: 2,
                            optionsTrans: [
                                {
                                    value: "link",
                                    label: "链接",
                                },
                                {
                                    value: "application",
                                    label: "应用",
                                },
                            ],
                            mutiOption: {
                                index: 5,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                    ],
                    data: [
                        {
                            showType: "icon",
                            textContent: "",
                            image: "root://assets/images/dragComponents/customer_Service.png",
                            ifBadge: false,
                            badgeContent: "22",
                            ifPopover: true,
                            isShow: false,
                            themeType: "dark",
                            popoverList: [
                                {
                                    transfer: "link",
                                    text: "我的",
                                    icon: "",
                                },
                            ],
                        },
                        {
                            showType: "icon",
                            textContent: "",
                            image: "root://assets/images/dragComponents/news.png",
                            ifBadge: true,
                            badgeContent: "22",
                            ifPopover: true,
                            isShow: false,
                            themeType: "dark",
                            popoverList: [
                                {
                                    transfer: "link",
                                    text: "我的",
                                    icon: "",
                                },
                            ],
                        },
                    ],
                },
                mutiOption: {
                    index: 11,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "是否设置背景",
                key: "isSetNavBack",
                type: "switch",
                value: false,
            },
            {
                label: "设置背景类别",
                key: "bgType",
                type: "select",
                chooseValue: "color",
                value: {
                    data: [
                        {
                            value: "picture",
                            label: "图片",
                        },
                        {
                            value: "color",
                            label: "颜色",
                        },
                    ],
                },
                mutiOption: {
                    index: 13,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "导航背景色",
                key: "background",
                type: "color",
                value: "#E7CE96",
                mutiOption: [
                    {
                        index: 13,
                        key: "value",
                        showValueList: [true],
                        color: "#E7CE96",
                    },
                    {
                        index: 14,
                        key: "chooseValue",
                        showValueList: ["color"],
                    },
                ],
                isRelevance: true,
            },
            {
                label: "图片",
                key: "image",
                value: "root://assets/images/dragComponents/navbar_bg_red.png",
                type: "imageStore",
                mutiOption: [
                    {
                        index: 13,
                        key: "value",
                        showValueList: [true],
                    },
                    {
                        index: 14,
                        key: "chooseValue",
                        showValueList: ["picture"],
                    },
                ],
                isRelevance: false,
            },
            {
                label: "",
                key: "searchContent",
                type: "hide",
                value: "",
                isModel: true,
            },
        ],
        classValues: [
            {
                label: "自定义样式表",
                key: "title",
                type: "textarea",
                name: "van-navBarTemp",
                value: "{\n        }",
            },
        ],
        methodValues: [],
        actionValues: [
            {
                label: "触发事件",
                key: "clickAction",
                vmodel: "",
                type: "clickAction",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
            },
            {
                label: "是否使用埋点",
                key: "type",
                type: "switch",
                value: false,
            },
            {
                label: "点击埋点",
                key: "track",
                vmodel: "",
                type: "track",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
                mutiOption: {
                    index: 1,
                    key: "value",
                    showValueList: [true],
                },
            },
        ],
        mode: "h5",
    },
    {
        name: "扫一扫头部模板",
        id: 2,
        componentName: "VanHomePage",
        mStyle: {
            left: 0,
            top: 0,
            width: 375,
            height: 44,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            zIndex: 0,
        },
        mClass: [],
        propValues: [
            {
                label: "是否编辑左侧内容",
                key: "isShowLeft",
                type: "switch",
                value: true,
            },
            {
                label: "左侧数据列表",
                key: "leftIconAndText",
                type: "tableNavLeft",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "展示类型",
                            key: "showType",
                            type: "select",
                            chooseValue: "text",
                            flex: 2,
                            options: [
                                {
                                    value: "text",
                                    label: "文字",
                                },
                                {
                                    value: "icon",
                                    label: "图标",
                                },
                                {
                                    value: "textAndIcon",
                                    label: "文字加图标",
                                },
                                {
                                    value: "userDefined",
                                    label: "自定义",
                                },
                            ],
                        },
                        {
                            label: "文字内容",
                            key: "textContent",
                            type: "text",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "text",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "图标",
                            key: "image",
                            type: "imageStore",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "icon",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "是否有徽标",
                            key: "ifBadge",
                            type: "switch",
                            flex: 1,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "icon",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "徽标内容",
                            key: "badgeContent",
                            type: "text",
                            flex: 1,
                            mutiOption: {
                                index: 3,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                        {
                            label: "是否下拉菜单",
                            key: "ifPopover",
                            type: "switch",
                            flex: 1,
                        },
                        {
                            label: "主题风格",
                            key: "themeType",
                            type: "select",
                            flex: 1,
                            options: [
                                {
                                    value: "light",
                                    label: "浅色",
                                },
                                {
                                    value: "dark",
                                    label: "深色",
                                },
                            ],
                            mutiOption: {
                                index: 5,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                        {
                            label: "下拉菜单内容",
                            key: "popoverList",
                            type: "menuTable",
                            flex: 2,
                            optionsTrans: [
                                {
                                    value: "link",
                                    label: "链接",
                                },
                                {
                                    value: "application",
                                    label: "应用",
                                },
                            ],
                            mutiOption: {
                                index: 5,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                    ],
                    data: [
                        {
                            showType: "icon",
                            textContent: "",
                            image: "root://assets/images/dragComponents/cat.png",
                            ifBadge: false,
                            badgeContent: "1",
                            ifPopover: false,
                            themeType: "",
                            popoverList: [],
                        },
                    ],
                },
                mutiOption: {
                    index: 0,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "是否显示搜索框",
                key: "isShowSearch",
                type: "switch",
                value: true,
            },
            {
                label: "搜索框形状",
                key: "shape",
                type: "select",
                chooseValue: "round",
                value: {
                    data: [
                        {
                            value: "round",
                            label: "圆角",
                        },
                        {
                            value: "square",
                            label: "方形",
                        },
                    ],
                },
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "输入的最大字符数",
                key: "maxlength",
                value: 20,
                type: "num",
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "搜索框提示文字",
                key: "placeholder",
                type: "text",
                value: "市场持续震荡，我们该如何应对？",
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "提示文字颜色",
                key: "tipColor",
                value: "#fff",
                type: "color",
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                    color: "#FFFFFF",
                },
                isRelevance: true,
            },
            {
                label: "搜索框背景是否透明",
                key: "transColor",
                type: "switch",
                value: true,
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "搜索框背景色",
                key: "bgColor",
                value: "#E7CE96",
                type: "color",
                mutiOption: {
                    index: 7,
                    key: "value",
                    showValueList: [false],
                    color: "#E7CE96",
                },
                isRelevance: false,
            },
            {
                label: "搜索框文字颜色",
                key: "txtColor",
                value: "#FFFFFF",
                type: "color",
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                    color: "#FFFFFF",
                },
                isRelevance: true,
            },
            {
                label: "搜索框图标颜色",
                key: "iconColor",
                value: "#ffffff",
                type: "color",
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "是否编辑右侧内容",
                key: "isShowRight",
                type: "switch",
                value: true,
            },
            {
                label: "右侧数据列表",
                key: "rightIconAndText",
                type: "tableNavRight",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "展示类型",
                            key: "showType",
                            type: "select",
                            chooseValue: "text",
                            flex: 2,
                            options: [
                                {
                                    value: "text",
                                    label: "文字",
                                },
                                {
                                    value: "icon",
                                    label: "图标",
                                },
                                {
                                    value: "textAndIcon",
                                    label: "文字加图标",
                                },
                            ],
                        },
                        {
                            label: "文字内容",
                            key: "textContent",
                            type: "text",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: ["text"],
                            },
                        },
                        {
                            label: "图标",
                            key: "image",
                            type: "imageStore",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "icon",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "是否有徽标",
                            key: "ifBadge",
                            type: "switch",
                            flex: 1,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "icon",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "徽标内容",
                            key: "badgeContent",
                            type: "text",
                            flex: 1,
                            mutiOption: {
                                index: 3,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                        {
                            label: "是否下拉菜单",
                            key: "ifPopover",
                            type: "switch",
                            flex: 1,
                        },
                        {
                            label: "主题风格",
                            key: "themeType",
                            type: "select",
                            flex: 1,
                            options: [
                                {
                                    value: "light",
                                    label: "浅色",
                                },
                                {
                                    value: "dark",
                                    label: "深色",
                                },
                            ],
                            mutiOption: {
                                index: 5,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                        {
                            label: "下拉菜单内容",
                            key: "popoverList",
                            type: "menuTable",
                            flex: 2,
                            optionsTrans: [
                                {
                                    value: "link",
                                    label: "链接",
                                },
                                {
                                    value: "application",
                                    label: "应用",
                                },
                            ],
                            mutiOption: {
                                index: 5,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                    ],
                    data: [
                        {
                            showType: "icon",
                            textContent: "",
                            image: "root://assets/images/dragComponents/search2x.png",
                            ifBadge: false,
                            badgeContent: "22",
                            ifPopover: true,
                            isShow: false,
                            themeType: "dark",
                            popoverList: [
                                {
                                    transfer: "link",
                                    text: "我的",
                                    icon: "",
                                },
                            ],
                        },
                        {
                            showType: "icon",
                            textContent: "",
                            image: "root://assets/images/dragComponents/news.png",
                            ifBadge: false,
                            badgeContent: "22",
                            ifPopover: true,
                            isShow: false,
                            themeType: "dark",
                            popoverList: [
                                {
                                    transfer: "link",
                                    text: "我的",
                                    icon: "",
                                },
                            ],
                        },
                    ],
                },
                mutiOption: {
                    index: 11,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "是否设置背景",
                key: "isSetNavBack",
                type: "switch",
                value: true,
            },
            {
                label: "设置背景类别",
                key: "bgType",
                type: "select",
                chooseValue: "picture",
                value: {
                    data: [
                        {
                            value: "picture",
                            label: "图片",
                        },
                        {
                            value: "color",
                            label: "颜色",
                        },
                    ],
                },
                mutiOption: {
                    index: 13,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "导航背景色",
                key: "background",
                type: "color",
                value: "#E7CE96",
                mutiOption: [
                    {
                        index: 13,
                        key: "value",
                        showValueList: [true],
                        color: "#E7CE96",
                    },
                    {
                        index: 14,
                        key: "chooseValue",
                        showValueList: ["color"],
                    },
                ],
                isRelevance: true,
            },
            {
                label: "图片",
                key: "image",
                value: "root://assets/images/dragComponents/navbar_bg_red.png",
                type: "imageStore",
                mutiOption: [
                    {
                        index: 13,
                        key: "value",
                        showValueList: [true],
                    },
                    {
                        index: 14,
                        key: "chooseValue",
                        showValueList: ["picture"],
                    },
                ],
                isRelevance: false,
            },
            {
                label: "",
                key: "searchContent",
                type: "hide",
                value: "",
                isModel: true,
            },
        ],
        classValues: [
            {
                label: "自定义样式表",
                key: "title",
                type: "textarea",
                name: "van-navBarTemp",
                value: "{\n        }",
            },
        ],
        methodValues: [],
        actionValues: [
            {
                label: "触发事件",
                key: "clickAction",
                vmodel: "",
                type: "clickAction",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
            },
            {
                label: "是否使用埋点",
                key: "type",
                type: "switch",
                value: false,
            },
            {
                label: "点击埋点",
                key: "track",
                vmodel: "",
                type: "track",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
                mutiOption: {
                    index: 1,
                    key: "value",
                    showValueList: [true],
                },
            },
        ],
        mode: "h5",
    },
    {
        name: "扫一扫头部模板",
        id: 2,
        componentName: "VanHomePage",
        mStyle: {
            left: 0,
            top: 0,
            width: 375,
            height: 44,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            zIndex: 0,
        },
        mClass: [],
        propValues: [
            {
                label: "是否编辑左侧内容",
                key: "isShowLeft",
                type: "switch",
                value: true,
            },
            {
                label: "左侧数据列表",
                key: "leftIconAndText",
                type: "tableNavLeft",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "展示类型",
                            key: "showType",
                            type: "select",
                            chooseValue: "text",
                            flex: 2,
                            options: [
                                {
                                    value: "text",
                                    label: "文字",
                                },
                                {
                                    value: "icon",
                                    label: "图标",
                                },
                                {
                                    value: "textAndIcon",
                                    label: "文字加图标",
                                },
                                {
                                    value: "userDefined",
                                    label: "自定义",
                                },
                            ],
                        },
                        {
                            label: "文字内容",
                            key: "textContent",
                            type: "text",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "text",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "图标",
                            key: "image",
                            type: "imageStore",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "icon",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "是否有徽标",
                            key: "ifBadge",
                            type: "switch",
                            flex: 1,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "icon",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "徽标内容",
                            key: "badgeContent",
                            type: "text",
                            flex: 1,
                            mutiOption: {
                                index: 3,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                        {
                            label: "是否下拉菜单",
                            key: "ifPopover",
                            type: "switch",
                            flex: 1,
                        },
                        {
                            label: "主题风格",
                            key: "themeType",
                            type: "select",
                            flex: 1,
                            options: [
                                {
                                    value: "light",
                                    label: "浅色",
                                },
                                {
                                    value: "dark",
                                    label: "深色",
                                },
                            ],
                            mutiOption: {
                                index: 5,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                        {
                            label: "下拉菜单内容",
                            key: "popoverList",
                            type: "menuTable",
                            flex: 2,
                            optionsTrans: [
                                {
                                    value: "link",
                                    label: "链接",
                                },
                                {
                                    value: "application",
                                    label: "应用",
                                },
                            ],
                            mutiOption: {
                                index: 5,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                    ],
                    data: [
                        {
                            showType: "textAndIcon",
                            textContent: "签到",
                            image: "root://assets/images/dragComponents/gift.png",
                            ifBadge: false,
                            badgeContent: "徽标",
                            ifPopover: true,
                            isShow: false,
                            themeType: "light",
                            popoverList: [
                                {
                                    transfer: "",
                                    text: "111",
                                    icon: "static/home/banner_lb@2x.png",
                                },
                                {
                                    transfer: "",
                                    content: "",
                                    icon: "static/home/banner_lb@2x.png",
                                    text: "1111",
                                },
                            ],
                        },
                    ],
                },
                mutiOption: {
                    index: 0,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "是否显示搜索框",
                key: "isShowSearch",
                type: "switch",
                value: true,
            },
            {
                label: "搜索框形状",
                key: "shape",
                type: "select",
                chooseValue: "round",
                value: {
                    data: [
                        {
                            value: "round",
                            label: "圆角",
                        },
                        {
                            value: "square",
                            label: "方形",
                        },
                    ],
                },
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "输入的最大字符数",
                key: "maxlength",
                value: 20,
                type: "num",
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "搜索框提示文字",
                key: "placeholder",
                type: "text",
                value: "视听会员折扣",
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "提示文字颜色",
                key: "tipColor",
                value: "#fff",
                type: "color",
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                    color: "#FFFFFF",
                },
                isRelevance: true,
            },
            {
                label: "搜索框背景是否透明",
                key: "transColor",
                type: "switch",
                value: false,
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "搜索框背景色",
                key: "bgColor",
                value: "#95c2b9",
                type: "color",
                mutiOption: {
                    index: 7,
                    key: "value",
                    showValueList: [false],
                    color: "#E7CE96",
                },
                isRelevance: false,
            },
            {
                label: "搜索框文字颜色",
                key: "txtColor",
                value: "#ffffff",
                type: "color",
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                    color: "#fff",
                },
                isRelevance: true,
            },
            {
                label: "搜索框图标颜色",
                key: "iconColor",
                value: "#f0f6f5",
                type: "color",
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "是否编辑右侧内容",
                key: "isShowRight",
                type: "switch",
                value: true,
            },
            {
                label: "右侧数据列表",
                key: "rightIconAndText",
                type: "tableNavRight",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "展示类型",
                            key: "showType",
                            type: "select",
                            chooseValue: "text",
                            flex: 2,
                            options: [
                                {
                                    value: "text",
                                    label: "文字",
                                },
                                {
                                    value: "icon",
                                    label: "图标",
                                },
                                {
                                    value: "textAndIcon",
                                    label: "文字加图标",
                                },
                            ],
                        },
                        {
                            label: "文字内容",
                            key: "textContent",
                            type: "text",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: ["text"],
                            },
                        },
                        {
                            label: "图标",
                            key: "image",
                            type: "imageStore",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "icon",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "是否有徽标",
                            key: "ifBadge",
                            type: "switch",
                            flex: 1,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "icon",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "徽标内容",
                            key: "badgeContent",
                            type: "text",
                            flex: 1,
                            mutiOption: {
                                index: 3,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                        {
                            label: "是否下拉菜单",
                            key: "ifPopover",
                            type: "switch",
                            flex: 1,
                        },
                        {
                            label: "主题风格",
                            key: "themeType",
                            type: "select",
                            flex: 1,
                            options: [
                                {
                                    value: "light",
                                    label: "浅色",
                                },
                                {
                                    value: "dark",
                                    label: "深色",
                                },
                            ],
                            mutiOption: {
                                index: 5,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                        {
                            label: "下拉菜单内容",
                            key: "popoverList",
                            type: "menuTable",
                            flex: 2,
                            optionsTrans: [
                                {
                                    value: "link",
                                    label: "链接",
                                },
                                {
                                    value: "application",
                                    label: "应用",
                                },
                            ],
                            mutiOption: {
                                index: 5,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                    ],
                    data: [
                        {
                            showType: "textAndIcon",
                            textContent: "版本",
                            image: "root://assets/images/dragComponents/edition.png",
                            ifBadge: false,
                            badgeContent: "",
                            ifPopover: true,
                            themeType: "light",
                            popoverList: [
                                {
                                    transfer: "",
                                    text: "",
                                    icon: "static/home/banner_lb@2x.png",
                                },
                            ],
                            isShow: false,
                        },
                        {
                            showType: "textAndIcon",
                            textContent: "客服",
                            image: "root://assets/images/dragComponents/customer_Service.png",
                            ifBadge: false,
                            badgeContent: "",
                            ifPopover: true,
                            themeType: "light",
                            popoverList: [
                                {
                                    transfer: "",
                                    text: "",
                                    icon: "static/home/banner_lb@2x.png",
                                },
                            ],
                            isShow: false,
                        },
                        {
                            showType: "textAndIcon",
                            textContent: "消息",
                            image: "root://assets/images/dragComponents/xinxiang.png",
                            ifBadge: false,
                            badgeContent: "",
                            ifPopover: true,
                            themeType: "light",
                            popoverList: [
                                {
                                    transfer: "",
                                    text: "",
                                    icon: "static/home/banner_lb@2x.png",
                                },
                            ],
                            isShow: false,
                        },
                    ],
                },
                mutiOption: {
                    index: 11,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "是否设置背景",
                key: "isSetNavBack",
                type: "switch",
                value: true,
            },
            {
                label: "设置背景类别",
                key: "bgType",
                type: "select",
                chooseValue: "color",
                value: {
                    data: [
                        {
                            value: "picture",
                            label: "图片",
                        },
                        {
                            value: "color",
                            label: "颜色",
                        },
                    ],
                },
                mutiOption: {
                    index: 13,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "导航背景色",
                key: "background",
                type: "color",
                value: "#8fcdbf",
                mutiOption: [
                    {
                        index: 13,
                        key: "value",
                        showValueList: [true],
                        color: "#e94a55",
                    },
                    {
                        index: 14,
                        key: "chooseValue",
                        showValueList: ["color"],
                    },
                ],
                isRelevance: true,
            },
            {
                label: "图片",
                key: "image",
                value: "",
                type: "imageStore",
                mutiOption: [
                    {
                        index: 13,
                        key: "value",
                        showValueList: [true],
                    },
                    {
                        index: 14,
                        key: "chooseValue",
                        showValueList: ["picture"],
                    },
                ],
                isRelevance: false,
            },
            {
                label: "",
                key: "searchContent",
                type: "hide",
                value: "",
                isModel: true,
            },
        ],
        classValues: [
            {
                label: "自定义样式表",
                key: "title",
                type: "textarea",
                name: "van-navBarTemp",
                value: "{\n        }",
            },
        ],
        methodValues: [],
        actionValues: [
            {
                label: "触发事件",
                key: "clickAction",
                vmodel: "",
                type: "clickAction",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
            },
            {
                label: "是否使用埋点",
                key: "type",
                type: "switch",
                value: false,
            },
            {
                label: "点击埋点",
                key: "track",
                vmodel: "",
                type: "track",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
                mutiOption: {
                    index: 1,
                    key: "value",
                    showValueList: [true],
                },
            },
        ],
        mode: "h5",
    },
    {
        name: "扫一扫头部模板",
        id: 2,
        componentName: "VanHomePage",
        mStyle: {
            left: 0,
            top: 0,
            width: 375,
            height: 44,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            zIndex: 0,
        },
        mClass: [],
        propValues: [
            {
                label: "是否编辑左侧内容",
                key: "isShowLeft",
                type: "switch",
                value: true,
            },
            {
                label: "左侧数据列表",
                key: "leftIconAndText",
                type: "tableNavLeft",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "展示类型",
                            key: "showType",
                            type: "select",
                            chooseValue: "text",
                            flex: 2,
                            options: [
                                {
                                    value: "text",
                                    label: "文字",
                                },
                                {
                                    value: "icon",
                                    label: "图标",
                                },
                                {
                                    value: "textAndIcon",
                                    label: "文字加图标",
                                },
                                {
                                    value: "userDefined",
                                    label: "自定义",
                                },
                            ],
                        },
                        {
                            label: "文字内容",
                            key: "textContent",
                            type: "text",
                            flex: 2,
                        },
                        {
                            label: "图标",
                            key: "image",
                            type: "imageStore",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "icon",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "是否有徽标",
                            key: "ifBadge",
                            type: "switch",
                            flex: 1,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "icon",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "徽标内容",
                            key: "badgeContent",
                            type: "text",
                            flex: 1,
                            mutiOption: {
                                index: 3,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                        {
                            label: "是否下拉菜单",
                            key: "ifPopover",
                            type: "switch",
                            flex: 1,
                        },
                        {
                            label: "主题风格",
                            key: "themeType",
                            type: "select",
                            flex: 1,
                            options: [
                                {
                                    value: "light",
                                    label: "浅色",
                                },
                                {
                                    value: "dark",
                                    label: "深色",
                                },
                            ],
                            mutiOption: {
                                index: 5,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                        {
                            label: "下拉菜单内容",
                            key: "popoverList",
                            type: "menuTable",
                            flex: 2,
                            optionsTrans: [
                                {
                                    value: "link",
                                    label: "链接",
                                },
                                {
                                    value: "application",
                                    label: "应用",
                                },
                            ],
                            mutiOption: {
                                index: 5,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                    ],
                    data: [
                        {
                            showType: "textAndIcon",
                            textContent: "登录",
                            image: "root://assets/images/dragComponents/login.png",
                            ifBadge: false,
                            badgeContent: "",
                            ifPopover: false,
                            isShow: false,
                            themeType: "light",
                            popoverList: [],
                        },
                    ],
                },
                mutiOption: {
                    index: 0,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "是否显示搜索框",
                key: "isShowSearch",
                type: "switch",
                value: false,
            },
            {
                label: "搜索框形状",
                key: "shape",
                type: "select",
                chooseValue: "round",
                value: {
                    data: [
                        {
                            value: "round",
                            label: "圆角",
                        },
                        {
                            value: "square",
                            label: "方形",
                        },
                    ],
                },
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: false,
            },
            {
                label: "输入的最大字符数",
                key: "maxlength",
                value: 20,
                type: "num",
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: false,
            },
            {
                label: "搜索框提示文字",
                key: "placeholder",
                type: "text",
                value: "招银理财丰合短债14天",
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: false,
            },
            {
                label: "提示文字颜色",
                key: "tipColor",
                value: "#fff",
                type: "color",
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                    color: "#FFFFFF",
                },
                isRelevance: false,
            },
            {
                label: "搜索框背景是否透明",
                key: "transColor",
                type: "switch",
                value: true,
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: false,
            },
            {
                label: "搜索框背景色",
                key: "bgColor",
                value: "#E7CE96",
                type: "color",
                mutiOption: {
                    index: 7,
                    key: "value",
                    showValueList: [false],
                    color: "#E7CE96",
                },
                isRelevance: false,
            },
            {
                label: "搜索框文字颜色",
                key: "txtColor",
                value: "#ccc",
                type: "color",
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                    color: "#fff",
                },
                isRelevance: false,
            },
            {
                label: "搜索框图标颜色",
                key: "iconColor",
                value: "#ccc",
                type: "color",
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: false,
            },
            {
                label: "是否编辑右侧内容",
                key: "isShowRight",
                type: "switch",
                value: true,
            },
            {
                label: "右侧数据列表",
                key: "rightIconAndText",
                type: "tableNavRight",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "展示类型",
                            key: "showType",
                            type: "select",
                            chooseValue: "text",
                            flex: 2,
                            options: [
                                {
                                    value: "text",
                                    label: "文字",
                                },
                                {
                                    value: "icon",
                                    label: "图标",
                                },
                                {
                                    value: "textAndIcon",
                                    label: "文字加图标",
                                },
                            ],
                        },
                        {
                            label: "文字内容",
                            key: "textContent",
                            type: "text",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: ["text"],
                            },
                        },
                        {
                            label: "图标",
                            key: "image",
                            type: "imageStore",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "icon",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "是否有徽标",
                            key: "ifBadge",
                            type: "switch",
                            flex: 1,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "icon",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "徽标内容",
                            key: "badgeContent",
                            type: "text",
                            flex: 1,
                            mutiOption: {
                                index: 3,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                        {
                            label: "是否下拉菜单",
                            key: "ifPopover",
                            type: "switch",
                            flex: 1,
                        },
                        {
                            label: "主题风格",
                            key: "themeType",
                            type: "select",
                            flex: 1,
                            options: [
                                {
                                    value: "light",
                                    label: "浅色",
                                },
                                {
                                    value: "dark",
                                    label: "深色",
                                },
                            ],
                            mutiOption: {
                                index: 5,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                        {
                            label: "下拉菜单内容",
                            key: "popoverList",
                            type: "menuTable",
                            flex: 2,
                            optionsTrans: [
                                {
                                    value: "link",
                                    label: "链接",
                                },
                                {
                                    value: "application",
                                    label: "应用",
                                },
                            ],
                            mutiOption: {
                                index: 5,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                    ],
                    data: [
                        {
                            showType: "textAndIcon",
                            textContent: "版本",
                            image: "root://assets/images/dragComponents/edition_block.png",
                            ifBadge: false,
                            badgeContent: "",
                            ifPopover: true,
                            themeType: "dark",
                            popoverList: [
                                {
                                    transfer: "",
                                    text: "",
                                    icon: "static/home/banner_lb@2x.png",
                                },
                            ],
                            isShow: false,
                        },
                        {
                            showType: "textAndIcon",
                            textContent: "客服",
                            image: "root://assets/images/dragComponents/customer_Service_block.png",
                            ifBadge: false,
                            badgeContent: "",
                            ifPopover: true,
                            themeType: "dark",
                            popoverList: [
                                {
                                    transfer: "",
                                    text: "",
                                    icon: "static/home/banner_lb@2x.png",
                                },
                            ],
                            isShow: false,
                        },
                        {
                            showType: "textAndIcon",
                            textContent: "消息",
                            image: "root://assets/images/dragComponents/xinxiang_block.png",
                            ifBadge: true,
                            badgeContent: "80",
                            ifPopover: true,
                            themeType: "dark",
                            popoverList: [
                                {
                                    transfer: "",
                                    text: "",
                                    icon: "static/home/banner_lb@2x.png",
                                },
                            ],
                            isShow: false,
                        },
                        {
                            showType: "textAndIcon",
                            textContent: "设置",
                            image: "root://assets/images/dragComponents/setting_block.png",
                            ifBadge: false,
                            badgeContent: "",
                            ifPopover: true,
                            themeType: "dark",
                            popoverList: [
                                {
                                    transfer: "",
                                    text: "",
                                    icon: "static/home/banner_lb@2x.png",
                                },
                            ],
                            isShow: false,
                        },
                    ],
                },
                mutiOption: {
                    index: 11,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "是否设置背景",
                key: "isSetNavBack",
                type: "switch",
                value: true,
            },
            {
                label: "设置背景类别",
                key: "bgType",
                type: "select",
                chooseValue: "color",
                value: {
                    data: [
                        {
                            value: "picture",
                            label: "图片",
                        },
                        {
                            value: "color",
                            label: "颜色",
                        },
                    ],
                },
                mutiOption: {
                    index: 13,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "导航背景色",
                key: "background",
                type: "color",
                value: "#C1932B",
                mutiOption: [
                    {
                        index: 13,
                        key: "value",
                        showValueList: [true],
                        color: "#C1932B",
                    },
                    {
                        index: 14,
                        key: "chooseValue",
                        showValueList: ["color"],
                    },
                ],
                isRelevance: true,
            },
            {
                label: "图片",
                key: "image",
                value: "",
                type: "imageStore",
                mutiOption: [
                    {
                        index: 13,
                        key: "value",
                        showValueList: [true],
                    },
                    {
                        index: 14,
                        key: "chooseValue",
                        showValueList: ["picture"],
                    },
                ],
                isRelevance: false,
            },
            {
                label: "",
                key: "searchContent",
                type: "hide",
                value: "",
                isModel: true,
            },
        ],
        classValues: [
            {
                label: "自定义样式表",
                key: "title",
                type: "textarea",
                name: "van-navBarTemp",
                value: "{\n        }",
            },
        ],
        methodValues: [],
        actionValues: [
            {
                label: "触发事件",
                key: "clickAction",
                vmodel: "",
                type: "clickAction",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
            },
            {
                label: "是否使用埋点",
                key: "type",
                type: "switch",
                value: false,
            },
            {
                label: "点击埋点",
                key: "track",
                vmodel: "",
                type: "track",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
                mutiOption: {
                    index: 1,
                    key: "value",
                    showValueList: [true],
                },
            },
        ],
        mode: "h5",
    },
    {
        name: "扫一扫头部模板",
        id: 2,
        componentName: "VanHomePage",
        mStyle: {
            left: 0,
            top: 0,
            width: 375,
            height: 44,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            zIndex: 0,
        },
        mClass: [],
        propValues: [
            {
                label: "是否编辑左侧内容",
                key: "isShowLeft",
                type: "switch",
                value: true,
            },
            {
                label: "左侧数据列表",
                key: "leftIconAndText",
                type: "tableNavLeft",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "展示类型",
                            key: "showType",
                            type: "select",
                            chooseValue: "text",
                            flex: 2,
                            options: [
                                {
                                    value: "text",
                                    label: "文字",
                                },
                                {
                                    value: "icon",
                                    label: "图标",
                                },
                                {
                                    value: "textAndIcon",
                                    label: "文字加图标",
                                },
                                {
                                    value: "userDefined",
                                    label: "自定义",
                                },
                            ],
                        },
                        {
                            label: "文字内容",
                            key: "textContent",
                            type: "text",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "text",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "图标",
                            key: "image",
                            type: "imageStore",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "icon",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "是否有徽标",
                            key: "ifBadge",
                            type: "switch",
                            flex: 1,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "icon",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "徽标内容",
                            key: "badgeContent",
                            type: "text",
                            flex: 1,
                            mutiOption: {
                                index: 3,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                        {
                            label: "是否下拉菜单",
                            key: "ifPopover",
                            type: "switch",
                            flex: 1,
                        },
                        {
                            label: "主题风格",
                            key: "themeType",
                            type: "select",
                            flex: 1,
                            options: [
                                {
                                    value: "light",
                                    label: "浅色",
                                },
                                {
                                    value: "dark",
                                    label: "深色",
                                },
                            ],
                            mutiOption: {
                                index: 5,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                        {
                            label: "下拉菜单内容",
                            key: "popoverList",
                            type: "menuTable",
                            flex: 2,
                            optionsTrans: [
                                {
                                    value: "link",
                                    label: "链接",
                                },
                                {
                                    value: "application",
                                    label: "应用",
                                },
                            ],
                            mutiOption: {
                                index: 5,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                    ],
                    data: [
                        {
                            showType: "text",
                            textContent: "北京",
                            image: "root://assets/images/dragComponents/scan.png",
                            ifBadge: false,
                            badgeContent: "徽标",
                            ifPopover: true,
                            isShow: false,
                            themeType: "light",
                            popoverList: [
                                {
                                    transfer: "",
                                    text: "111",
                                    icon: "static/home/banner_lb@2x.png",
                                },
                                {
                                    transfer: "",
                                    content: "",
                                    icon: "static/home/banner_lb@2x.png",
                                    text: "1111",
                                },
                            ],
                        },
                    ],
                },
                mutiOption: {
                    index: 0,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "是否显示搜索框",
                key: "isShowSearch",
                type: "switch",
                value: true,
            },
            {
                label: "搜索框形状",
                key: "shape",
                type: "select",
                chooseValue: "square",
                value: {
                    data: [
                        {
                            value: "round",
                            label: "圆角",
                        },
                        {
                            value: "square",
                            label: "方形",
                        },
                    ],
                },
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "输入的最大字符数",
                key: "maxlength",
                value: 20,
                type: "num",
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "搜索框提示文字",
                key: "placeholder",
                type: "text",
                value: "查社保卡",
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "提示文字颜色",
                key: "tipColor",
                value: "#626262",
                type: "color",
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                    color: "#FFFFFF",
                },
                isRelevance: true,
            },
            {
                label: "搜索框背景是否透明",
                key: "transColor",
                type: "switch",
                value: false,
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "搜索框背景色",
                key: "bgColor",
                value: "#FEFEFE",
                type: "color",
                mutiOption: {
                    index: 7,
                    key: "value",
                    showValueList: [false],
                    color: "#E7CE96",
                },
                isRelevance: false,
            },
            {
                label: "搜索框文字颜色",
                key: "txtColor",
                value: "#626262",
                type: "color",
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                    color: "#fff",
                },
                isRelevance: true,
            },
            {
                label: "搜索框图标颜色",
                key: "iconColor",
                value: "#aeaeae",
                type: "color",
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "是否编辑右侧内容",
                key: "isShowRight",
                type: "switch",
                value: true,
            },
            {
                label: "右侧数据列表",
                key: "rightIconAndText",
                type: "tableNavRight",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "展示类型",
                            key: "showType",
                            type: "select",
                            chooseValue: "text",
                            flex: 2,
                            options: [
                                {
                                    value: "text",
                                    label: "文字",
                                },
                                {
                                    value: "icon",
                                    label: "图标",
                                },
                                {
                                    value: "textAndIcon",
                                    label: "文字加图标",
                                },
                            ],
                        },
                        {
                            label: "文字内容",
                            key: "textContent",
                            type: "text",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: ["text"],
                            },
                        },
                        {
                            label: "图标",
                            key: "image",
                            type: "imageStore",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "icon",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "是否有徽标",
                            key: "ifBadge",
                            type: "switch",
                            flex: 1,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "icon",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "徽标内容",
                            key: "badgeContent",
                            type: "text",
                            flex: 1,
                            mutiOption: {
                                index: 3,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                        {
                            label: "是否下拉菜单",
                            key: "ifPopover",
                            type: "switch",
                            flex: 1,
                        },
                        {
                            label: "主题风格",
                            key: "themeType",
                            type: "select",
                            flex: 1,
                            options: [
                                {
                                    value: "light",
                                    label: "浅色",
                                },
                                {
                                    value: "dark",
                                    label: "深色",
                                },
                            ],
                            mutiOption: {
                                index: 5,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                        {
                            label: "下拉菜单内容",
                            key: "popoverList",
                            type: "menuTable",
                            flex: 2,
                            optionsTrans: [
                                {
                                    value: "link",
                                    label: "链接",
                                },
                                {
                                    value: "application",
                                    label: "应用",
                                },
                            ],
                            mutiOption: {
                                index: 5,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                    ],
                    data: [
                        {
                            showType: "icon",
                            textContent: "",
                            image: "root://assets/images/dragComponents/news.png",
                            ifBadge: false,
                            badgeContent: "22",
                            ifPopover: true,
                            isShow: false,
                            themeType: "dark",
                            popoverList: [
                                {
                                    transfer: "link",
                                    text: "我的",
                                    icon: "",
                                },
                            ],
                        },
                        {
                            showType: "icon",
                            textContent: "",
                            image: "root://assets/images/dragComponents/add.png",
                            ifBadge: true,
                            badgeContent: "1",
                            ifPopover: true,
                            isShow: false,
                            themeType: "dark",
                            popoverList: [
                                {
                                    transfer: "link",
                                    text: "我的",
                                    icon: "",
                                },
                            ],
                        },
                    ],
                },
                mutiOption: {
                    index: 11,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "是否设置背景",
                key: "isSetNavBack",
                type: "switch",
                value: true,
            },
            {
                label: "设置背景类别",
                key: "bgType",
                type: "select",
                chooseValue: "color",
                value: {
                    data: [
                        {
                            value: "picture",
                            label: "图片",
                        },
                        {
                            value: "color",
                            label: "颜色",
                        },
                    ],
                },
                mutiOption: {
                    index: 13,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "导航背景色",
                key: "background",
                type: "color",
                value: "#d30257",
                mutiOption: [
                    {
                        index: 13,
                        key: "value",
                        showValueList: [true],
                        color: "#d30257",
                    },
                    {
                        index: 14,
                        key: "chooseValue",
                        showValueList: ["color"],
                    },
                ],
                isRelevance: true,
            },
            {
                label: "图片",
                key: "image",
                value: "",
                type: "imageStore",
                mutiOption: [
                    {
                        index: 13,
                        key: "value",
                        showValueList: [true],
                    },
                    {
                        index: 14,
                        key: "chooseValue",
                        showValueList: ["picture"],
                    },
                ],
                isRelevance: false,
            },
            {
                label: "",
                key: "searchContent",
                type: "hide",
                value: "",
                isModel: true,
            },
        ],
        classValues: [
            {
                label: "自定义样式表",
                key: "title",
                type: "textarea",
                name: "van-navBarTemp",
                value: "{\n        }",
            },
        ],
        methodValues: [],
        actionValues: [
            {
                label: "触发事件",
                key: "clickAction",
                vmodel: "",
                type: "clickAction",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
            },
            {
                label: "是否使用埋点",
                key: "type",
                type: "switch",
                value: false,
            },
            {
                label: "点击埋点",
                key: "track",
                vmodel: "",
                type: "track",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
                mutiOption: {
                    index: 1,
                    key: "value",
                    showValueList: [true],
                },
            },
        ],
        mode: "h5",
    },
    {
        name: "扫一扫头部模板",
        id: 2,
        componentName: "VanHomePage",
        mStyle: {
            left: 0,
            top: 0,
            width: 375,
            height: 44,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            zIndex: 0,
        },
        mClass: [],
        propValues: [
            {
                label: "是否编辑左侧内容",
                key: "isShowLeft",
                type: "switch",
                value: true,
            },
            {
                label: "左侧数据列表",
                key: "leftIconAndText",
                type: "tableNavLeft",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "展示类型",
                            key: "showType",
                            type: "select",
                            chooseValue: "text",
                            flex: 2,
                            options: [
                                {
                                    value: "text",
                                    label: "文字",
                                },
                                {
                                    value: "icon",
                                    label: "图标",
                                },
                                {
                                    value: "textAndIcon",
                                    label: "文字加图标",
                                },
                                {
                                    value: "userDefined",
                                    label: "自定义",
                                },
                            ],
                        },
                        {
                            label: "文字内容",
                            key: "textContent",
                            type: "text",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "text",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "图标",
                            key: "image",
                            type: "imageStore",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "icon",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "是否有徽标",
                            key: "ifBadge",
                            type: "switch",
                            flex: 1,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "icon",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "徽标内容",
                            key: "badgeContent",
                            type: "text",
                            flex: 1,
                            mutiOption: {
                                index: 3,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                        {
                            label: "是否下拉菜单",
                            key: "ifPopover",
                            type: "switch",
                            flex: 1,
                        },
                        {
                            label: "主题风格",
                            key: "themeType",
                            type: "select",
                            flex: 1,
                            options: [
                                {
                                    value: "light",
                                    label: "浅色",
                                },
                                {
                                    value: "dark",
                                    label: "深色",
                                },
                            ],
                            mutiOption: {
                                index: 5,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                        {
                            label: "下拉菜单内容",
                            key: "popoverList",
                            type: "menuTable",
                            flex: 2,
                            optionsTrans: [
                                {
                                    value: "link",
                                    label: "链接",
                                },
                                {
                                    value: "application",
                                    label: "应用",
                                },
                            ],
                            mutiOption: {
                                index: 5,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                    ],
                    data: [
                        {
                            showType: "textAndIcon",
                            textContent: "登录",
                            image: "root://assets/images/dragComponents/scan.png",
                            ifBadge: true,
                            badgeContent: "徽标",
                            ifPopover: true,
                            isShow: false,
                            themeType: "light",
                            popoverList: [
                                {
                                    transfer: "",
                                    text: "111",
                                    icon: "static/home/banner_lb@2x.png",
                                },
                                {
                                    transfer: "",
                                    content: "",
                                    icon: "static/home/banner_lb@2x.png",
                                    text: "1111",
                                },
                            ],
                        },
                        {
                            showType: "icon",
                            textContent: "",
                            image: "root://assets/images/dragComponents/scan.png",
                            ifBadge: true,
                            badgeContent: "1",
                            ifPopover: false,
                            themeType: "",
                            popoverList: [],
                        },
                        {
                            showType: "userDefined",
                            textContent: "自定义",
                            image: "root://assets/images/dragComponents/scan.png",
                            ifBadge: false,
                            badgeContent: "4",
                            ifPopover: true,
                            themeType: "light",
                            popoverList: [
                                {
                                    transfer: "",
                                    text: "111",
                                    icon: "static/home/banner_lb@2x.png",
                                },
                            ],
                        },
                    ],
                },
                mutiOption: {
                    index: 0,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "是否显示搜索框",
                key: "isShowSearch",
                type: "switch",
                value: true,
            },
            {
                label: "搜索框形状",
                key: "shape",
                type: "select",
                chooseValue: "round",
                value: {
                    data: [
                        {
                            value: "round",
                            label: "圆角",
                        },
                        {
                            value: "square",
                            label: "方形",
                        },
                    ],
                },
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "输入的最大字符数",
                key: "maxlength",
                value: 20,
                type: "num",
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "搜索框提示文字",
                key: "placeholder",
                type: "text",
                value: "招银理财丰合短债14天",
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "提示文字颜色",
                key: "tipColor",
                value: "#fff",
                type: "color",
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                    color: "#FFFFFF",
                },
                isRelevance: true,
            },
            {
                label: "搜索框背景是否透明",
                key: "transColor",
                type: "switch",
                value: true,
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "搜索框背景色",
                key: "bgColor",
                value: "#E7CE96",
                type: "color",
                mutiOption: {
                    index: 7,
                    key: "value",
                    showValueList: [false],
                    color: "#E7CE96",
                },
                isRelevance: false,
            },
            {
                label: "搜索框文字颜色",
                key: "txtColor",
                value: "#ffffff",
                type: "color",
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                    color: "#fff",
                },
                isRelevance: true,
            },
            {
                label: "搜索框图标颜色",
                key: "iconColor",
                value: "#ffffff",
                type: "color",
                mutiOption: {
                    index: 2,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "是否编辑右侧内容",
                key: "isShowRight",
                type: "switch",
                value: true,
            },
            {
                label: "右侧数据列表",
                key: "rightIconAndText",
                type: "tableNavRight",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "展示类型",
                            key: "showType",
                            type: "select",
                            chooseValue: "text",
                            flex: 2,
                            options: [
                                {
                                    value: "text",
                                    label: "文字",
                                },
                                {
                                    value: "icon",
                                    label: "图标",
                                },
                                {
                                    value: "textAndIcon",
                                    label: "文字加图标",
                                },
                            ],
                        },
                        {
                            label: "文字内容",
                            key: "textContent",
                            type: "text",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: ["text"],
                            },
                        },
                        {
                            label: "图标",
                            key: "image",
                            type: "imageStore",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "icon",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "是否有徽标",
                            key: "ifBadge",
                            type: "switch",
                            flex: 1,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "icon",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "徽标内容",
                            key: "badgeContent",
                            type: "text",
                            flex: 1,
                            mutiOption: {
                                index: 3,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                        {
                            label: "是否下拉菜单",
                            key: "ifPopover",
                            type: "switch",
                            flex: 1,
                        },
                        {
                            label: "主题风格",
                            key: "themeType",
                            type: "select",
                            flex: 1,
                            options: [
                                {
                                    value: "light",
                                    label: "浅色",
                                },
                                {
                                    value: "dark",
                                    label: "深色",
                                },
                            ],
                            mutiOption: {
                                index: 5,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                        {
                            label: "下拉菜单内容",
                            key: "popoverList",
                            type: "menuTable",
                            flex: 2,
                            optionsTrans: [
                                {
                                    value: "link",
                                    label: "链接",
                                },
                                {
                                    value: "application",
                                    label: "应用",
                                },
                            ],
                            mutiOption: {
                                index: 5,
                                key: "value",
                                showValueList: [true],
                            },
                        },
                    ],
                    data: [
                        {
                            showType: "icon",
                            textContent: "",
                            image: "root://assets/images/dragComponents/scan.png",
                            ifBadge: false,
                            badgeContent: "22",
                            ifPopover: true,
                            isShow: false,
                            themeType: "dark",
                            popoverList: [
                                {
                                    transfer: "link",
                                    text: "我的",
                                    icon: "",
                                },
                            ],
                        },
                        {
                            showType: "text",
                            textContent: "更多",
                            image: "root://assets/images/dragComponents/scan.png",
                            ifBadge: false,
                            badgeContent: "",
                            ifPopover: true,
                            isShow: false,
                            themeType: "light",
                            popoverList: [
                                {
                                    transfer: "link",
                                    text: "首页",
                                    icon: "static/home/scan.png",
                                },
                                {
                                    transfer: "link",
                                    text: "首页",
                                    icon: "",
                                },
                            ],
                        },
                        {
                            showType: "textAndIcon",
                            textContent: "登录",
                            image: "root://assets/images/dragComponents/scan.png",
                            ifBadge: false,
                            badgeContent: "",
                            ifPopover: true,
                            themeType: "light",
                            popoverList: [
                                {
                                    transfer: "",
                                    text: "",
                                    icon: "static/home/banner_lb@2x.png",
                                },
                            ],
                            isShow: false,
                        },
                    ],
                },
                mutiOption: {
                    index: 11,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "是否设置背景",
                key: "isSetNavBack",
                type: "switch",
                value: true,
            },
            {
                label: "设置背景类别",
                key: "bgType",
                type: "select",
                chooseValue: "color",
                value: {
                    data: [
                        {
                            value: "picture",
                            label: "图片",
                        },
                        {
                            value: "color",
                            label: "颜色",
                        },
                    ],
                },
                mutiOption: {
                    index: 13,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "导航背景色",
                key: "background",
                type: "color",
                value: "#E7CE96",
                mutiOption: [
                    {
                        index: 13,
                        key: "value",
                        showValueList: [true],
                        color: "#E7CE96",
                    },
                    {
                        index: 14,
                        key: "chooseValue",
                        showValueList: ["color"],
                    },
                ],
                isRelevance: true,
            },
            {
                label: "图片",
                key: "image",
                value: "",
                type: "imageStore",
                mutiOption: [
                    {
                        index: 13,
                        key: "value",
                        showValueList: [true],
                    },
                    {
                        index: 14,
                        key: "chooseValue",
                        showValueList: ["picture"],
                    },
                ],
                isRelevance: false,
            },
            {
                label: "",
                key: "searchContent",
                type: "hide",
                value: "",
                isModel: true,
            },
        ],
        classValues: [
            {
                label: "自定义样式表",
                key: "title",
                type: "textarea",
                name: "van-navBarTemp",
                value: "{\n        }",
            },
        ],
        methodValues: [],
        actionValues: [
            {
                label: "触发事件",
                key: "clickAction",
                vmodel: "",
                type: "clickAction",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
            },
            {
                label: "是否使用埋点",
                key: "type",
                type: "switch",
                value: false,
            },
            {
                label: "点击埋点",
                key: "track",
                vmodel: "",
                type: "track",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
                mutiOption: {
                    index: 1,
                    key: "value",
                    showValueList: [true],
                },
            },
        ],
        mode: "h5",
    },
    // 功能列表组件1
    {
        name: "功能列表组件",
        id: 7,
        componentName: "VanFunList",
        mStyle: {
            left: 0,
            top: 0,
            width: 375,
            height: 150,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 20,
            zIndex: 0,
        },
        mClass: [],
        propValues: [
            {
                label: "数据列表",
                key: "listBarData",
                type: "table",
                isModel: true,
                value: {
                    struct: [
                        //0
                        {
                            label: "选项文字描述",
                            key: "name",
                            type: "text",
                        },
                        //1
                        {
                            label: "左侧图标",
                            key: "icon",
                            type: "iconList",
                        },
                        //2
                        {
                            label: "次要文字描述",
                            key: "content",
                            type: "text",
                        },
                        //3
                        {
                            label: "次要文字颜色",
                            key: "color",
                            value: "#fff",
                            type: "color",
                        },
                        //4
                        {
                            label: "是否展示红点",
                            key: "badge",
                            value: false,
                            type: "badegSwitch",
                        },
                        {
                            label: "右侧侧图标",
                            key: "iconR",
                            type: "iconList",
                        },
                        {
                            label: "跳转内容",
                            key: "transfer",
                            type: "select",
                            chooseValue: "link",
                            options: [
                                {
                                    value: "link",
                                    label: "链接",
                                },
                                {
                                    value: "application",
                                    label: "应用",
                                },
                            ],
                        },
                    ],
                    data: [
                        {
                            name: "支付宝会员",
                            icon: "root://assets/images/dragComponents/zfb.png",
                            content: "15积分待领取",
                            color: "#949292",
                            isBadge: false,
                            iconR: "root://assets/images/dragComponents/gnyj.png",
                        },
                        {
                            name: "用户保护中心",
                            icon: "root://assets/images/dragComponents/bhzx.png",
                            content: "",
                            color: "",
                            isBadge: false,
                            iconR: "root://assets/images/dragComponents/gnyj.png",
                        },
                        {
                            name: "商家服务",
                            icon: "root://assets/images/dragComponents/wsj.png",
                            content: "",
                            color: "",
                            isBadge: false,
                            iconR: "root://assets/images/dragComponents/gnyj.png",
                        },
                    ],
                },
            },
        ],
        classValues: [
            {
                label: "自定义样式表",
                key: "title",
                type: "textarea",
                name: "van-listBar-other",
                value: `{}`,
            },
        ],
        methodValues: [],
        actionValues: [
            // 0
            {
                label: "触发事件",
                key: "clickAction",
                vmodel: "",
                type: "clickAction",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
            },
            // 1
            {
                label: "是否使用埋点",
                key: "type",
                type: "switch",
                value: false,
            },
            // 2
            {
                label: "点击埋点",
                key: "track",
                vmodel: "",
                type: "track",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
                mutiOption: {
                    index: 1,
                    key: "value",
                    showValueList: [true],
                },
            },
        ],
    },
    // 功能列表组件2
    {
        name: "功能列表组件",
        id: 7,
        componentName: "VanFunList",
        mStyle: {
            left: 0,
            top: 0,
            width: 375,
            height: 150,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 20,
            zIndex: 0,
        },
        mClass: [],
        propValues: [
            {
                label: "数据列表",
                key: "listBarData",
                type: "table",
                isModel: true,
                value: {
                    struct: [
                        //0
                        {
                            label: "选项文字描述",
                            key: "name",
                            type: "text",
                        },
                        //1
                        {
                            label: "左侧图标",
                            key: "icon",
                            type: "iconList",
                        },
                        //2
                        {
                            label: "次要文字描述",
                            key: "content",
                            type: "text",
                        },
                        //3
                        {
                            label: "次要文字颜色",
                            key: "color",
                            value: "#fff",
                            type: "color",
                        },
                        //4
                        {
                            label: "是否展示红点",
                            key: "badge",
                            value: false,
                            type: "badegSwitch",
                        },
                        {
                            label: "右侧侧图标",
                            key: "iconR",
                            type: "iconList",
                        },
                        {
                            label: "跳转内容",
                            key: "transfer",
                            type: "select",
                            chooseValue: "link",
                            options: [
                                {
                                    value: "link",
                                    label: "链接",
                                },
                                {
                                    value: "application",
                                    label: "应用",
                                },
                            ],
                        },
                    ],
                    data: [
                        {
                            name: "账单",
                            icon: "root://assets/images/dragComponents/zd.png",
                            content: "",
                            color: "",
                            isBadge: false,
                            iconR: "root://assets/images/dragComponents/gnyj.png",
                        },
                        {
                            name: "总资产",
                            icon: "root://assets/images/dragComponents/zzc.png",
                            content: "免费领取账户保障",
                            color: "#F89D00",
                            isBadge: false,
                            iconR: "root://assets/images/dragComponents/gnyj.png",
                        },
                        {
                            name: "余额",
                            icon: "root://assets/images/dragComponents/yezf.png",
                            content: "0.51",
                            color: "#949292",
                            isBadge: false,
                            iconR: "root://assets/images/dragComponents/gnyj.png",
                        },
                        {
                            name: "余额宝",
                            icon: "root://assets/images/dragComponents/yeb.png",
                            content: "你有一个红包待领取",
                            color: "#949292",
                            isBadge: true,
                            iconR: "root://assets/images/dragComponents/gnyj.png",
                        },
                        {
                            name: "花呗",
                            icon: "root://assets/images/dragComponents/hb.png",
                            content: "",
                            color: "",
                            isBadge: false,
                            iconR: "root://assets/images/dragComponents/gnyj.png",
                        },
                        {
                            name: "余利宝",
                            icon: "root://assets/images/dragComponents/ylb.png",
                            content: "",
                            color: "",
                            isBadge: false,
                            iconR: "root://assets/images/dragComponents/gnyj.png",
                        },
                        {
                            name: "银行卡",
                            icon: "root://assets/images/dragComponents/yhk.png",
                            content: "",
                            color: "",
                            isBadge: false,
                            iconR: "root://assets/images/dragComponents/gnyj.png",
                        },
                    ],
                },
            },
        ],
        classValues: [
            {
                label: "自定义样式表",
                key: "title",
                type: "textarea",
                name: "van-listBar-other",
                value: `{
}`,
            },
        ],
        methodValues: [],
        actionValues: [
            // 0
            {
                label: "触发事件",
                key: "clickAction",
                vmodel: "",
                type: "clickAction",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
            },
            // 1
            {
                label: "是否使用埋点",
                key: "type",
                type: "switch",
                value: false,
            },
            // 2
            {
                label: "点击埋点",
                key: "track",
                vmodel: "",
                type: "track",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
                mutiOption: {
                    index: 1,
                    key: "value",
                    showValueList: [true],
                },
            },
        ],
    },
    // 理财列表模板1-1
    {
        name: "理财列表模板1",
        id: 2,
        componentName: "VanFinanceList1",
        mStyle: {
            left: 0,
            top: 0,
            width: 375,
            height: 200,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            zIndex: 0,
        },
        mClass: [],
        propValues: [
            {
                label: "是否显示标题",
                key: "isShowSTitle",
                type: "switch",
                value: true,
            },
            {
                label: "标题",
                key: "title",
                value: "财富精选示例1",
                type: "text",
                mutiOption: {
                    index: 0,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "右侧数据",
                key: "IconText",
                type: "more",
                isModel: true,
                value: {
                    // 数据结构 (结构中第一个元素为该table组件列表中显示的名称)
                    struct: [
                        {
                            label: "展示类型",
                            key: "showType",
                            type: "select",
                            chooseValue: "text",
                            flex: 2,
                            options: [
                                {
                                    value: "text",
                                    label: "文字",
                                },
                                {
                                    value: "icon",
                                    label: "图标",
                                },
                                {
                                    value: "textAndIcon",
                                    label: "文字加图标",
                                },
                            ],
                        },
                        {
                            label: "文字内容",
                            key: "textContent",
                            type: "text",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "text",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "图标",
                            key: "image",
                            type: "imageStore",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "icon",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "跳转内容",
                            key: "transfer",
                            type: "select",
                            options: [
                                {
                                    value: "link",
                                    label: "链接",
                                },
                                {
                                    value: "application",
                                    label: "应用",
                                },
                            ],
                        },
                    ],
                    //数据
                    data: [
                        {
                            showType: "text",
                            textContent: "更多",
                            ifBadge: true,
                            ifPopover: false,
                            isShow: false,
                            transfer: "link",
                            image: "root://assets/images/dragComponents/lcyj.png",
                        },
                    ],
                },
                mutiOption: {
                    index: 0,
                    key: "value",
                    showValueList: [true],
                },
            },
            {
                label: "卡片列表",
                key: "data",
                type: "cards",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "标题描述",
                            key: "title",
                            type: "tagTxt",
                        },
                        {
                            label: "文字内容",
                            key: "textContent",
                            type: "tagTxt",
                        },
                        {
                            label: "小图标描述",
                            key: "icontext",
                            type: "tagTxt",
                        },
                        {
                            label: "利率",
                            key: "rate",
                            type: "tagTxt",
                        },
                        {
                            label: "收益方式",
                            key: "way",
                            type: "tagTxt",
                        },
                        {
                            label: "跳转内容",
                            key: "transfer",
                            type: "select",
                            options: [
                                {
                                    value: "link",
                                    label: "链接",
                                },
                                {
                                    value: "application",
                                    label: "应用",
                                },
                            ],
                        },
                    ],
                    data: [
                        {
                            showType: "text",
                            textContent: "中电理财帮您安心理财",
                            title: "活期理财",
                            icontext: "代销",
                            rate: "3.11",
                            way: "七日年化",
                            transfer: "",
                        },
                        {
                            showType: "text",
                            textContent: "安心理财",
                            title: "安心稳投",
                            icontext: "",
                            rate: "3.98",
                            way: "近1年收益率",
                            transfer: "",
                        },
                        {
                            showType: "text",
                            textContent: "享定存2号获利",
                            title: "保本利息",
                            icontext: "",
                            rate: "3.50",
                            way: "年利率",
                            transfer: "link",
                        },
                    ],
                },
            },
            {
                label: "是否设置背景",
                key: "isSetNavBack",
                type: "switch",
                value: false,
            },
            {
                label: "卡片背景色",
                key: "background",
                type: "color",
                value: "#FFFFFF",
                mutiOption: [
                    {
                        index: 4,
                        key: "value",
                        showValueList: [true],
                    },
                ],
            },
            {
                label: "",
                key: "searchContent",
                type: "hide",
                value: "",
                isModel: true,
            },
        ],
        classValues: [
            {
                label: "自定义样式表",
                key: "title",
                type: "textarea",
                name: "van-financeList1",
                value: `{
        }`,
            },
        ],
        methodValues: [],
        actionValues: [
            // 0
            {
                label: "触发事件",
                key: "clickAction",
                vmodel: "",
                type: "clickAction",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
            },
            // 1
            {
                label: "是否使用埋点",
                key: "type",
                type: "switch",
                value: false,
            },
            // 2
            {
                label: "点击埋点",
                key: "track",
                vmodel: "",
                type: "track",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
                mutiOption: {
                    index: 1,
                    key: "value",
                    showValueList: [true],
                },
            },
        ],
    },
    // 理财列表模板1-2
    {
        name: "理财列表模板1",
        id: 2,
        componentName: "VanFinanceList1",
        mStyle: {
            left: 0,
            top: 0,
            width: 375,
            height: 200,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            zIndex: 0,
        },
        mClass: [],
        propValues: [
            {
                label: "是否显示标题",
                key: "isShowSTitle",
                type: "switch",
                value: true,
            },
            {
                label: "标题",
                key: "title",
                value: "财富精选示例2",
                type: "text",
                mutiOption: {
                    index: 0,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "右侧数据",
                key: "IconText",
                type: "more",
                isModel: true,
                value: {
                    // 数据结构 (结构中第一个元素为该table组件列表中显示的名称)
                    struct: [
                        {
                            label: "展示类型",
                            key: "showType",
                            type: "select",
                            chooseValue: "text",
                            flex: 2,
                            options: [
                                {
                                    value: "text",
                                    label: "文字",
                                },
                                {
                                    value: "icon",
                                    label: "图标",
                                },
                                {
                                    value: "textAndIcon",
                                    label: "文字加图标",
                                },
                            ],
                        },
                        {
                            label: "文字内容",
                            key: "textContent",
                            type: "text",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "text",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "图标",
                            key: "image",
                            type: "imageStore",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "icon",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "跳转内容",
                            key: "transfer",
                            type: "select",
                            options: [
                                {
                                    value: "link",
                                    label: "链接",
                                },
                                {
                                    value: "application",
                                    label: "应用",
                                },
                            ],
                        },
                    ],
                    //数据
                    data: [
                        {
                            showType: "text",
                            textContent: "更多",
                            ifBadge: true,
                            ifPopover: false,
                            isShow: false,
                            transfer: "link",
                            image: "root://assets/images/dragComponents/lcyj.png",
                        },
                    ],
                },
                mutiOption: {
                    index: 0,
                    key: "value",
                    showValueList: [true],
                },
            },
            {
                label: "卡片列表",
                key: "data",
                type: "cards",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "标题描述",
                            key: "title",
                            type: "tagTxt",
                        },
                        {
                            label: "文字内容",
                            key: "textContent",
                            type: "tagTxt",
                        },
                        {
                            label: "小图标描述",
                            key: "icontext",
                            type: "tagTxt",
                        },
                        {
                            label: "利率",
                            key: "rate",
                            type: "tagTxt",
                        },
                        {
                            label: "收益方式",
                            key: "way",
                            type: "tagTxt",
                        },
                        {
                            label: "跳转内容",
                            key: "transfer",
                            type: "select",
                            options: [
                                {
                                    value: "link",
                                    label: "链接",
                                },
                                {
                                    value: "application",
                                    label: "应用",
                                },
                            ],
                        },
                    ],
                    data: [
                        {
                            showType: "text",
                            textContent: "中电理财帮您安心理财",
                            title: "活期理财",
                            icontext: "代销",
                            rate: "3.11",
                            way: "七日年化",
                            transfer: "",
                        },
                        {
                            showType: "text",
                            textContent: "安心理财",
                            title: "安心稳投",
                            icontext: "",
                            rate: "3.98",
                            way: "近1年收益率",
                            transfer: "",
                        },
                        {
                            showType: "text",
                            textContent: "享定存2号获利",
                            title: "保本利息",
                            icontext: "",
                            rate: "3.50",
                            way: "年利率",
                            transfer: "",
                        },
                        {
                            showType: "text",
                            textContent: "安心理财",
                            title: "安心稳投",
                            icontext: "",
                            rate: "3.98",
                            way: "近1年收益率",
                            transfer: "",
                        },
                        {
                            showType: "text",
                            textContent: "享定存2号获利",
                            title: "保本利息",
                            icontext: "",
                            rate: "3.50",
                            way: "年利率",
                            transfer: "",
                        },
                    ],
                },
            },
            {
                label: "是否设置背景",
                key: "isSetNavBack",
                type: "switch",
                value: false,
            },
            {
                label: "卡片背景色",
                key: "background",
                type: "color",
                value: "#FFFFFF",
                mutiOption: [
                    {
                        index: 4,
                        key: "value",
                        showValueList: [true],
                    },
                ],
            },
            {
                label: "",
                key: "searchContent",
                type: "hide",
                value: "",
                isModel: true,
            },
        ],
        classValues: [
            {
                label: "自定义样式表",
                key: "title",
                type: "textarea",
                name: "van-financeList1",
                value: `{
        }`,
            },
        ],
        methodValues: [],
        actionValues: [
            // 0
            {
                label: "触发事件",
                key: "clickAction",
                vmodel: "",
                type: "clickAction",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
            },
            // 1
            {
                label: "是否使用埋点",
                key: "type",
                type: "switch",
                value: false,
            },
            // 2
            {
                label: "点击埋点",
                key: "track",
                vmodel: "",
                type: "track",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
                mutiOption: {
                    index: 1,
                    key: "value",
                    showValueList: [true],
                },
            },
        ],
    },
    // 理财列表模板2-1
    {
        name: "理财列表模板2",
        id: 4,
        componentName: "VanFinanceList2",
        mStyle: {
            left: 0,
            top: 0,
            width: 375,
            height: 327,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            zIndex: 0,
        },
        mClass: [],
        propValues: [
            {
                label: "是否显示标题",
                key: "isShowSTitle",
                type: "switch",
                value: true,
            },
            {
                label: "标题",
                key: "title",
                value: "基金榜单",
                type: "text",
                mutiOption: {
                    index: 0,
                    key: "value",
                    showValueList: [true],
                },
            },
            {
                label: "右侧数据",
                key: "IconText",
                type: "more",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "展示类型",
                            key: "showType",
                            type: "select",
                            chooseValue: "text",
                            flex: 2,
                            options: [
                                {
                                    value: "text",
                                    label: "文字",
                                },
                                {
                                    value: "icon",
                                    label: "图标",
                                },
                                {
                                    value: "textAndIcon",
                                    label: "文字加图标",
                                },
                            ],
                        },
                        {
                            label: "文字内容",
                            key: "textContent",
                            type: "text",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "text",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "图标",
                            key: "image",
                            type: "imageStore",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "icon",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "跳转内容",
                            key: "transfer",
                            type: "select",
                            options: [
                                {
                                    value: "link",
                                    label: "链接",
                                },
                                {
                                    value: "application",
                                    label: "应用",
                                },
                            ],
                        },
                    ],
                    data: [
                        {
                            showType: "icon",
                            textContent: "更多",
                            ifBadge: true,
                            ifPopover: false,
                            isShow: false,
                            transfer: "link",
                            image: "root://assets/images/dragComponents/lcyj.png",
                        },
                    ],
                },
                mutiOption: {
                    index: 0,
                    key: "value",
                    showValueList: [true],
                },
            },
            {
                label: "卡片内容",
                key: "data",
                type: "cards",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "标题描述",
                            key: "title",
                            type: "tagTxt",
                        },
                        {
                            label: "小图标描述",
                            key: "icontext",
                            type: "tagTxt",
                        },
                        {
                            label: "利率",
                            key: "rate",
                            type: "tagTxt",
                        },
                        {
                            label: "收益方式",
                            key: "way",
                            type: "tagTxt",
                        },
                        {
                            label: "图片链接",
                            key: "image",
                            type: "imageStore",
                        },
                        {
                            label: "跳转内容",
                            key: "transfer",
                            type: "select",
                            options: [
                                {
                                    value: "link",
                                    label: "链接",
                                },
                                {
                                    value: "application",
                                    label: "应用",
                                },
                            ],
                        },
                        {
                            label: "卡片样式",
                            key: "style",
                            type: "select",
                            options: [
                                {
                                    value: "border",
                                    label: "样式一",
                                },
                                {
                                    value: "noborder",
                                    label: "样式二",
                                },
                            ],
                        },
                    ],
                    data: [
                        {
                            showType: "text",
                            title: "农银红利日结A",
                            image: "root://assets/images/dragComponents/sorting1.png",
                            icontext: "50万+人已购买",
                            rate: "1.94",
                            way: "七日年化收益率",
                            transfer: "link",
                            style: "border",
                        },
                        {
                            showType: "text",
                            title: "农银研究精选混合",
                            image: "root://assets/images/dragComponents/sorting2.png",
                            icontext: "4万+人已买",
                            rate: "17.76",
                            way: "近一年涨幅",
                            transfer: "",
                            style: "border",
                        },
                        {
                            showType: "text",
                            title: "交银施罗德行业",
                            image: "root://assets/images/dragComponents/sorting3.png",
                            icontext: "3万+人已买",
                            rate: "3.12",
                            way: "近一年涨幅",
                            transfer: "",
                            style: "border",
                        },
                    ],
                },
            },
            {
                label: "是否设置背景",
                key: "isSetNavBack",
                type: "switch",
                value: false,
            },
            {
                label: "卡片背景色",
                key: "background",
                type: "color",
                value: "#FFFFFF",
                mutiOption: [
                    {
                        index: 4,
                        key: "value",
                        showValueList: [true],
                    },
                ],
            },
            {
                label: "",
                key: "searchContent",
                type: "hide",
                value: "",
                isModel: true,
            },
        ],
        classValues: [
            {
                label: "自定义样式表",
                key: "title",
                type: "textarea",
                name: "van-financeList2",
                value: `{
        }`,
            },
        ],
        methodValues: [],
        actionValues: [
            // 0
            {
                label: "触发事件",
                key: "clickAction",
                vmodel: "",
                type: "clickAction",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
            },
            // 1
            {
                label: "是否使用埋点",
                key: "type",
                type: "switch",
                value: false,
            },
            // 2
            {
                label: "点击埋点",
                key: "track",
                vmodel: "",
                type: "track",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
                mutiOption: {
                    index: 1,
                    key: "value",
                    showValueList: [true],
                },
            },
        ],
    },
    // 理财列表模板2-2
    {
        name: "理财列表模板2",
        id: 4,
        componentName: "VanFinanceList2",
        mStyle: {
            left: 0,
            top: 0,
            width: 375,
            height: 327,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            zIndex: 0,
        },
        mClass: [],
        propValues: [
            {
                label: "是否显示标题",
                key: "isShowSTitle",
                type: "switch",
                value: false,
            },
            {
                label: "标题",
                key: "title",
                value: "基金榜单",
                type: "text",
                mutiOption: {
                    index: 0,
                    key: "value",
                    showValueList: [true],
                },
            },
            {
                label: "右侧数据",
                key: "IconText",
                type: "more",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "展示类型",
                            key: "showType",
                            type: "select",
                            chooseValue: "text",
                            flex: 2,
                            options: [
                                {
                                    value: "text",
                                    label: "文字",
                                },
                                {
                                    value: "icon",
                                    label: "图标",
                                },
                                {
                                    value: "textAndIcon",
                                    label: "文字加图标",
                                },
                            ],
                        },
                        {
                            label: "文字内容",
                            key: "textContent",
                            type: "text",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "text",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "图标",
                            key: "image",
                            type: "imageStore",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "icon",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "跳转内容",
                            key: "transfer",
                            type: "select",
                            options: [
                                {
                                    value: "link",
                                    label: "链接",
                                },
                                {
                                    value: "application",
                                    label: "应用",
                                },
                            ],
                        },
                    ],
                    data: [
                        {
                            showType: "textAndIcon",
                            textContent: "更多",
                            ifBadge: true,
                            ifPopover: false,
                            isShow: false,
                            transfer: "link",
                            image: "root://assets/images/dragComponents/lcyj.png",
                        },
                    ],
                },
                mutiOption: {
                    index: 0,
                    key: "value",
                    showValueList: [true],
                },
            },
            {
                label: "卡片内容",
                key: "data",
                type: "cards",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "标题描述",
                            key: "title",
                            type: "tagTxt",
                        },
                        {
                            label: "小图标描述",
                            key: "icontext",
                            type: "tagTxt",
                        },
                        {
                            label: "利率",
                            key: "rate",
                            type: "tagTxt",
                        },
                        {
                            label: "收益方式",
                            key: "way",
                            type: "tagTxt",
                        },
                        {
                            label: "图片链接",
                            key: "image",
                            type: "imageStore",
                        },
                        {
                            label: "跳转内容",
                            key: "transfer",
                            type: "select",
                            options: [
                                {
                                    value: "link",
                                    label: "链接",
                                },
                                {
                                    value: "application",
                                    label: "应用",
                                },
                            ],
                        },
                        {
                            label: "卡片样式",
                            key: "style",
                            type: "select",
                            options: [
                                {
                                    value: "border",
                                    label: "样式一",
                                },
                                {
                                    value: "noborder",
                                    label: "样式二",
                                },
                            ],
                        },
                    ],
                    data: [
                        {
                            showType: "text",
                            title: "万家制造优势混合A",
                            image: "root://assets/images/dragComponents/sorting1.png",
                            icontext: "进可攻退可守的成长型选手",
                            rate: "22.71",
                            way: "近一年增长率",
                            transfer: "link",
                            style: "noborder",
                        },
                        {
                            showType: "text",
                            title: "农银研究精选混合",
                            image: "root://assets/images/dragComponents/sorting2.png",
                            icontext: "聚焦制造业，长期业绩稳定",
                            rate: "17.76",
                            way: "近一年增长率",
                            transfer: "",
                            style: "noborder",
                        },
                        {
                            showType: "text",
                            title: "财通资管价值发现混合A",
                            image: "root://assets/images/dragComponents/sorting3.png",
                            icontext: "聚焦科技+新兴消费",
                            rate: "14.87",
                            way: "近一年增长率",
                            transfer: "",
                            style: "noborder",
                        },
                    ],
                },
            },
            {
                label: "是否设置背景",
                key: "isSetNavBack",
                type: "switch",
                value: false,
            },
            {
                label: "卡片背景色",
                key: "background",
                type: "color",
                value: "#FFFFFF",
                mutiOption: [
                    {
                        index: 4,
                        key: "value",
                        showValueList: [true],
                    },
                ],
            },
            {
                label: "",
                key: "searchContent",
                type: "hide",
                value: "",
                isModel: true,
            },
        ],
        classValues: [
            {
                label: "自定义样式表",
                key: "title",
                type: "textarea",
                name: "van-financeList2",
                value: `{
        }`,
            },
        ],
        methodValues: [],
        actionValues: [
            // 0
            {
                label: "触发事件",
                key: "clickAction",
                vmodel: "",
                type: "clickAction",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
            },
            // 1
            {
                label: "是否使用埋点",
                key: "type",
                type: "switch",
                value: false,
            },
            // 2
            {
                label: "点击埋点",
                key: "track",
                vmodel: "",
                type: "track",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
                mutiOption: {
                    index: 1,
                    key: "value",
                    showValueList: [true],
                },
            },
        ],
    },
    // 理财列表模板3
    {
        name: "理财列表模板3",
        id: 3,
        componentName: "VanFinanceList3",
        mStyle: {
            left: 0,
            top: 0,
            width: 375,
            height: 140,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            zIndex: 0,
        },
        mClass: [],
        propValues: [
            //0
            {
                label: "标签内容",
                key: "title",
                type: "text",
                value: "余额理财",
            },
            // 1
            {
                label: "小标签内容",
                key: "class",
                type: "litleTitle",
                isModel: true,
                value: {
                    // 数据结构 (结构中第一个元素为该table组件列表中显示的名称)
                    struct: [
                        {
                            label: "标题描述",
                            key: "title",
                            type: "tagTxt",
                        },
                    ],
                    //数据
                    data: [
                        {
                            title: "收益稳健",
                        },
                        {
                            title: "随时支取",
                        },
                    ],
                },
            },
            //2
            {
                label: "基金名称",
                key: "nikename",
                type: "text",
                value: "工银瑞信添益快线货币",
            },
            //3
            {
                label: "参照值",
                key: "valTitle",
                type: "tableval",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "数值",
                            key: "val",
                            type: "text",
                        },
                        {
                            label: "描述",
                            key: "describe",
                            type: "text",
                        },
                        {
                            label: "单位",
                            key: "unit",
                            type: "text",
                        },
                    ],
                    data: [
                        {
                            showType: "text",
                            val: "1.94",
                            describe: "七日年化",
                            unit: "%",
                        },
                        {
                            showType: "text",
                            val: "0.5158",
                            describe: "万份收益",
                            unit: "元",
                        },
                    ],
                },
            },
            // 4
            {
                label: "按钮内容",
                key: "buttontext",
                type: "text",
                value: "立即购买",
            },
            // 5
            {
                label: "是否设置背景",
                key: "isSetNavBack",
                type: "switch",
                value: true,
            },
            //6
            {
                label: "设置背景类别",
                key: "bgType",
                type: "select",
                chooseValue: "picture",
                value: {
                    data: [
                        {
                            value: "picture",
                            label: "图片",
                        },
                        {
                            value: "color",
                            label: "颜色",
                        },
                    ],
                },
                mutiOption: {
                    index: 5,
                    key: "value",
                    showValueList: [true],
                },
            },
            //7
            {
                label: "导航背景色",
                key: "background",
                type: "color",
                value: "#E7CE96",
                mutiOption: [
                    {
                        index: 5,
                        key: "value",
                        showValueList: [true],
                    },
                    {
                        index: 6,
                        key: "chooseValue",
                        showValueList: ["color"],
                    },
                ],
                // mutiOption:
                //   {
                //     index: 13,
                //     key: "value",
                //     showValueList: [true]
                //   },
            },
            //8
            {
                label: "图片",
                key: "image",
                value: "root://assets/images/dragComponents/bg.png",
                type: "imageStore",
                mutiOption: [
                    {
                        index: 5,
                        key: "value",
                        showValueList: [true],
                    },
                    {
                        index: 6,
                        key: "chooseValue",
                        showValueList: ["picture"],
                    },
                ],
                // mutiOption:
                //   {
                //     index: 14,
                //     key: "chooseValue",
                //     showValueList: ['picture']
                //   }
            },
            //9
            {
                label: "",
                key: "searchContent",
                type: "hide",
                value: "",
                // isModel代表属性为v-model的属性
                isModel: true,
            },
        ],
        classValues: [
            {
                label: "自定义样式表",
                key: "title",
                type: "textarea",
                name: "van-financeList3",
                value: `{
        }`,
            },
        ],
        methodValues: [],
        actionValues: [
            // 0
            {
                label: "触发事件",
                key: "clickAction",
                vmodel: "",
                type: "clickAction",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
            },
            // 1
            {
                label: "是否使用埋点",
                key: "type",
                type: "switch",
                value: false,
            },
            // 2
            {
                label: "点击埋点",
                key: "track",
                vmodel: "",
                type: "track",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
                mutiOption: {
                    index: 1,
                    key: "value",
                    showValueList: [true],
                },
            },
        ],
    },
    // 理财列表模板4
    {
        name: "理财列表模板4",
        id: "唯一值",
        componentName: "VanFinanceList4",
        mStyle: {
            left: 0,
            top: 0,
            width: 375,
            height: 471,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            zIndex: 0,
        },
        mClass: [],
        propValues: [
            //0
            {
                label: "是否显示头部",
                key: "isShowRight",
                type: "switch",
                value: true,
            },
            {
                label: "标题",
                key: "title",
                value: "稳健投资",
                type: "text",
                mutiOption: {
                    index: 0,
                    key: "value",
                    showValueList: [true],
                },
            },
            // 1
            {
                label: "是否编辑右侧内容",
                key: "isShowRight",
                type: "switch",
                value: true,
            },
            {
                label: "右侧数据",
                key: "IconText",
                type: "more",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "展示类型",
                            key: "showType",
                            type: "select",
                            chooseValue: "text",
                            flex: 2,
                            options: [
                                {
                                    value: "text",
                                    label: "文字",
                                },
                                {
                                    value: "icon",
                                    label: "图标",
                                },
                                {
                                    value: "textAndIcon",
                                    label: "文字加图标",
                                },
                            ],
                        },
                        {
                            label: "文字内容",
                            key: "textContent",
                            type: "text",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "text",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "图标",
                            key: "image",
                            type: "imageStore",
                            flex: 2,
                            mutiOption: {
                                index: 0,
                                key: "chooseValue",
                                showValueList: [
                                    "icon",
                                    "textAndIcon",
                                    "userDefined",
                                ],
                            },
                        },
                        {
                            label: "跳转内容",
                            key: "transfer",
                            type: "select",
                            options: [
                                {
                                    value: "link",
                                    label: "链接",
                                },
                                {
                                    value: "application",
                                    label: "应用",
                                },
                            ],
                        },
                    ],
                    data: [
                        {
                            showType: "text",
                            textContent: "更多",
                            ifBadge: true,
                            ifPopover: false,
                            isShow: false,
                            transfer: "link",
                            image: "root://assets/images/dragComponents/lcyj.png",
                        },
                    ],
                },
                mutiOption: {
                    index: 1,
                    key: "value",
                    showValueList: [true],
                },
            },
            {
                label: "卡片内容",
                key: "recClass",
                type: "table",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "标题描述",
                            key: "title",
                            type: "text",
                        },
                        {
                            label: "小图标描述",
                            key: "icontext",
                            type: "text",
                        },
                        {
                            label: "利率",
                            key: "rate",
                            type: "text",
                        },
                        {
                            label: "收益方式",
                            key: "way",
                            type: "text",
                        },
                        {
                            label: "名称",
                            key: "handline",
                            type: "text",
                        },
                        {
                            label: "优惠",
                            key: "preferential",
                            type: "text",
                        },
                        {
                            label: "代销",
                            key: "commission",
                            type: "text",
                        },
                        {
                            label: "风险",
                            key: "risk",
                            type: "text",
                        },
                    ],
                    data: [
                        {
                            showType: "text",
                            title: "农银活利日结A",
                            icontext: "5万+人已买",
                            rate: "2.33",
                            way: "七日年化收益率",
                            handline: "华安安康灵活配置C",
                            preferential: "0申购费",
                            risk: "1元起购",
                            commission: "代销",
                        },
                        {
                            showType: "text",
                            title: "安心稳投",
                            icontext: "4万+人已买",
                            rate: "3.11",
                            way: "近一年收益率",
                            handline: "华安安康灵活配置C",
                            preferential: "0申购费",
                            risk: "10元起购",
                        },
                        {
                            showType: "text",
                            title: "保本利息",
                            icontext: "3万+人已买",
                            rate: "2.33",
                            way: "年利率",
                            handline: "华安安康灵活配置C",
                            preferential: "0申购费",
                            risk: "0.01元起购",
                        },
                    ],
                },
            },
            {
                label: "是否设置背景",
                key: "isSetNavBack",
                type: "switch",
                value: true,
            },
            {
                label: "卡片背景色",
                key: "background",
                type: "color",
                value: "#FFFFFF",
                mutiOption: [
                    {
                        index: 4,
                        key: "value",
                        showValueList: [true],
                    },
                ],
            },
            {
                label: "",
                key: "searchContent",
                type: "hide",
                value: "",
                isModel: true,
            },
            {
                label: "底部注释1",
                key: "title",
                value: "业绩比较基准为：70%x货基指数（CN6112.CNI）收益率",
                type: "text",
            },
        ],
        classValues: [
            {
                label: "自定义样式表",
                key: "title",
                type: "textarea",
                name: "van-financeList4",
                value: `{
        }`,
            },
        ],
        methodValues: [],
        actionValues: [
            // 0
            {
                label: "触发事件",
                key: "clickAction",
                vmodel: "",
                type: "clickAction",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
            },
            // 1
            {
                label: "是否使用埋点",
                key: "type",
                type: "switch",
                value: false,
            },
            // 2
            {
                label: "点击埋点",
                key: "track",
                vmodel: "",
                type: "track",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
                mutiOption: {
                    index: 1,
                    key: "value",
                    showValueList: [true],
                },
            },
        ],
    },
    // 账户总览
    {
        name: "账户总览",
        id: 10,
        componentName: "VanAccountOverview",
        mStyle: {
            left: 0,
            top: 0,
            width: 375,
            height: 122,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            zIndex: 0,
        },
        mClass: [],
        propValues: [
            {
                label: "头部标题",
                key: "navTitle",
                type: "text",
                value: "账户总览",
            },
            {
                label: "脱敏图标",
                key: "hideImage",
                value: "root://assets/images/dragComponents/texthide.png",
                type: "imageStore",
            },
            {
                label: "左侧标题",
                key: "leftTitle",
                type: "text",
                value: "总资产",
            },
            {
                label: "左侧副标题",
                key: "leftVerTitle",
                type: "text",
                value: "4321.32",
            },
            {
                label: "右侧标题",
                key: "label",
                type: "text",
                value: "昨日收益",
            },
            {
                label: "右侧副标题",
                key: "label",
                type: "text",
                value: "21.32",
            },
            {
                label: "是否设置背景",
                key: "isSetNavBack",
                type: "switch",
                value: true,
            },
            {
                label: "设置背景类别",
                key: "bgType",
                type: "select",
                chooseValue: "picture",
                value: {
                    data: [
                        {
                            value: "picture",
                            label: "图片",
                        },
                        {
                            value: "color",
                            label: "颜色",
                        },
                    ],
                },
                mutiOption: {
                    index: 5,
                    key: "value",
                    showValueList: [true],
                },
            },
            {
                label: "导航背景色",
                key: "background",
                type: "color",
                value: "#E7CE96",
                mutiOption: [
                    {
                        index: 5,
                        key: "value",
                        showValueList: [true],
                    },
                    {
                        index: 6,
                        key: "chooseValue",
                        showValueList: ["color"],
                    },
                ],
            },
            {
                label: "背景图片",
                key: "image",
                value: "root://assets/images/dragComponents/bg1.png",
                type: "imageStore",
                mutiOption: [
                    {
                        index: 5,
                        key: "value",
                        showValueList: [true],
                    },
                    {
                        index: 6,
                        key: "chooseValue",
                        showValueList: ["picture"],
                    },
                ],
            },
            {
                label: "显示图标",
                key: "openImage",
                value: "root://assets/images/dragComponents/eyeshow.png",
                type: "imageStore",
            },
            {
                label: "隐藏图标",
                key: "closeImage",
                value: "root://assets/images/dragComponents/eyehide.png",
                type: "imageStore",
            },
            {
                label: "",
                key: "isEye",
                type: "hide",
                value: "",
                isModel: true,
            },
            {
                label: "",
                key: "isShow",
                type: "hide",
                value: "",
                isModel: true,
            },
        ],
        classValues: [
            {
                label: "自定义样式表",
                key: "title",
                type: "textarea",
                name: "van-tabbar-other",
                value: "{\n}",
            },
        ],
        methodValues: [],
        actionValues: [
            {
                label: "触发事件",
                key: "clickAction",
                vmodel: "",
                type: "clickAction",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
            },
            {
                label: "是否使用埋点",
                key: "type",
                type: "switch",
                value: false,
            },
            {
                label: "点击埋点",
                key: "track",
                vmodel: "",
                type: "track",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
                mutiOption: {
                    index: 1,
                    key: "value",
                    showValueList: [true],
                },
            },
        ],
        mode: "h5",
    },

    // 我的资产-资产负债
    {
        name: "我的资产",
        id: 6,
        componentName: "VanMyAssets",
        mStyle: {
            left: 40,
            top: -40,
            width: 375,
            height: 150,
            paddingLeft: 25,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            zIndex: 0,
        },
        mClass: [],
        propValues: [
            {
                label: "图表模板类型",
                key: "chartType",
                type: "select",
                chooseValue: "option1",
                value: {
                    data: [
                        {
                            value: "option1",
                            label: "饼状图",
                        },
                        {
                            value: "option3",
                            label: "图片",
                        },
                    ],
                },
            },
            {
                label: "图表JSON代码",
                key: "pieChart",
                type: "textarea",
                value: '{"title":{"left":"center","top":"center"},"tooltip":{"trigger":"item"},"color":["#E7735D","#F8A36C","#FDD4AB","#FEBE72","#F8DD85"],"series":[{"type":"pie","data":[{"value":40,"name":"其它"},{"value":25,"name":"贵金属"},{"value":15,"name":"存款"},{"value":15,"name":"债券"},{"value":5,"name":"基金"}],"radius":["40%","70%"],"label":{"formatter":"{name|{b}}","minMargin":0,"lineHeight":15,"fontSize":10,"rich":{"time":{"fontSize":10,"color":"#999"}}},"labelLine":{"smooth":0.2,"length":10,"length2":6}}]}',
                mutiOption: {
                    index: 0,
                    key: "chooseValue",
                    showValueList: ["option1"],
                },
                isRelevance: false,
            },
            {
                label: "图片",
                key: "image",
                value: "root://assets/images/dragComponents/assets.png",
                type: "imageStore",
                mutiOption: [
                    {
                        index: 0,
                        key: "chooseValue",
                        showValueList: ["option3"],
                    },
                ],
                isRelevance: true,
            },
            {
                label: "标题名称",
                type: "text",
                value: "资产负债",
            },
            {
                label: "按钮文字",
                type: "text",
                value: "立即查看",
            },
            {
                label: "选择跳转页面",
                key: "",
                type: "select",
                chooseValue: "type1",
                value: {
                    data: [
                        {
                            value: "type1",
                            label: "页面一",
                        },
                        {
                            value: "type2",
                            label: "页面二",
                        },
                        {
                            value: "type3",
                            label: "页面三",
                        },
                    ],
                },
            },
        ],
        classValues: [
            {
                label: "自定义样式表",
                key: "title",
                type: "textarea",
                name: "van-listBar-other",
                value: "{\n}",
            },
        ],
        methodValues: [],
        actionValues: [
            {
                label: "触发事件",
                key: "clickAction",
                vmodel: "",
                type: "clickAction",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
            },
            {
                label: "是否使用埋点",
                key: "type",
                type: "switch",
                value: false,
            },
            {
                label: "点击埋点",
                key: "track",
                vmodel: "",
                type: "track",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
                mutiOption: {
                    index: 1,
                    key: "value",
                    showValueList: [true],
                },
            },
        ],
    },
    // 我的资产-本月收支
    {
        name: "我的资产",
        id: 6,
        componentName: "VanMyAssets",
        mStyle: {
            left: 40,
            top: -40,
            width: 375,
            height: 150,
            paddingLeft: 25,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            zIndex: 0,
        },
        mClass: [],
        propValues: [
            {
                label: "图表模板类型",
                key: "chartType",
                type: "select",
                chooseValue: "option3",
                value: {
                    data: [
                        {
                            value: "option1",
                            label: "饼状图",
                        },
                        {
                            value: "option3",
                            label: "图片",
                        },
                    ],
                },
            },
            {
                label: "图表JSON代码",
                key: "pieChart",
                type: "textarea",
                value: "{ title: {left: 'center',  top: 'center'},   tooltip: {   trigger: 'item',},				color: ['#E7735D','#F8A36C','#FDD4AB','#FEBE72','#F8DD85',			],series: [{type: 'pie',data: [ {value: 40,name: '其它' },{value: 25,name: '贵金属'},{value: 15,name: '存款'},{value: 10,name: '债券'},{value: 10,name: '基金'}],radius: ['40%', '70%'],label: {formatter: '{name|{b}}',minMargin: 0,lineHeight: 15,fontSize: 10,rich: {time: {fontSize: 10,color: '#999',},},},labelLine: {smooth: 0.2,length: 10,length2: 6,},}]}",
                mutiOption: {
                    index: 0,
                    key: "chooseValue",
                    showValueList: ["option1"],
                },
                isRelevance: false,
            },
            {
                label: "图片",
                key: "image",
                value: "root://assets/images/dragComponents/assets.png",
                type: "imageStore",
                mutiOption: [
                    {
                        index: 0,
                        key: "chooseValue",
                        showValueList: ["option3"],
                    },
                ],
                isRelevance: true,
            },
            {
                label: "标题名称",
                type: "text",
                value: "本月收支",
            },
            {
                label: "按钮文字",
                type: "text",
                value: "立即查看",
            },
            {
                label: "选择跳转页面",
                key: "",
                type: "select",
                chooseValue: "type1",
                value: {
                    data: [
                        {
                            value: "type1",
                            label: "页面一",
                        },
                        {
                            value: "type2",
                            label: "页面二",
                        },
                        {
                            value: "type3",
                            label: "页面三",
                        },
                    ],
                },
            },
        ],
        classValues: [
            {
                label: "自定义样式表",
                key: "title",
                type: "textarea",
                name: "van-listBar-other",
                value: "{\n}",
            },
        ],
        methodValues: [],
        actionValues: [
            {
                label: "触发事件",
                key: "clickAction",
                vmodel: "",
                type: "clickAction",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
            },
            {
                label: "是否使用埋点",
                key: "type",
                type: "switch",
                value: false,
            },
            {
                label: "点击埋点",
                key: "track",
                vmodel: "",
                type: "track",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
                mutiOption: {
                    index: 1,
                    key: "value",
                    showValueList: [true],
                },
            },
        ],
    },
    // 菜单-1
    {
        name: "菜单",
        id: "唯一值",
        componentName: "VanMenu",
        mStyle: {
            left: 0,
            top: 0,
            width: 372,
            height: 186,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            zIndex: 0,
        },
        mClass: [],
        propValues: [
            // 0
            {
                label: "列数",
                key: "colNum",
                value: "5",
                type: "num",
            },
            // 1
            {
                label: "行数",
                key: "line",
                value: "2",
                type: "num",
            },
            // 2
            {
                label: "菜单列表",
                key: "data",
                type: "table",
                value: {
                    // 数据结构 (结构中第一个元素为该table组件列表中显示的名称)
                    struct: [
                        {
                            label: "名称",
                            key: "name",
                            type: "text",
                        },
                        {
                            label: "图标",
                            key: "icon",
                            type: "imageStore",
                        },
                        {
                            label: "是否展示徽标",
                            key: "ifBadge",
                            type: "switch",
                            value: false,
                        },
                        {
                            label: "徽标名称",
                            key: "badgename",
                            type: "badge",
                        },
                        {
                            label: "选择跳转页面",
                            key: "menuJump",
                            type: "select",
                            chooseValue: "type1",
                            value: {
                                data: [
                                    {
                                        value: "type1",
                                        label: "页面一",
                                    },
                                    {
                                        value: "type2",
                                        label: "页面二",
                                    },
                                    {
                                        value: "type3",
                                        label: "页面三",
                                    },
                                ],
                            },
                        },
                    ],
                    //数据
                    data: [
                        {
                            label: "账户总览",
                            value: "key1",
                            icon: "root://assets/images/dragComponents/menu/zhzl.png",
                            badge: "汇总",
                        },
                        {
                            label: "收支明细",
                            value: "key2",
                            icon: "root://assets/images/dragComponents/menu/lccp.png",
                            badge: "",
                        },
                        {
                            label: "我的账本",
                            value: "key3",
                            icon: "root://assets/images/dragComponents/menu/wdzb.png",
                            badge: "",
                        },
                        {
                            label: "交易查询",
                            value: "key4",
                            icon: "root://assets/images/dragComponents/menu/xft.png",
                            badge: "",
                        },
                        {
                            label: "朝朝宝",
                            value: "key1",
                            icon: "root://assets/images/dragComponents/menu/ck2.png",
                            badge: "高收益",
                        },
                        {
                            label: "朝朝盈2号",
                            value: "key2",
                            icon: "root://assets/images/dragComponents/menu/zzy2.png",
                            badge: "",
                        },
                        {
                            label: "朝朝盈",
                            value: "key3",
                            icon: "root://assets/images/dragComponents/menu/zzy.png",
                            badge: "",
                        },
                        {
                            label: "理财产品",
                            value: "key4",
                            icon: "root://assets/images/dragComponents/menu/xft.png",
                            badge: "",
                        },
                        {
                            label: "基金",
                            value: "key6",
                            icon: "root://assets/images/dragComponents/menu/xft.png",
                            badge: "",
                        },
                        {
                            label: "私募产品",
                            value: "key7",
                            icon: "root://assets/images/dragComponents/menu/xft.png",
                            badge: "",
                        },
                        {
                            label: "存款",
                            value: "key8",
                            icon: "root://assets/images/dragComponents/menu/ck.png",
                            badge: "",
                        },
                        {
                            label: "保险",
                            value: "key9",
                            icon: "root://assets/images/dragComponents/menu/bx.png",
                            badge: "",
                        },
                    ],
                },
            },
            // 3
            {
                label: "是否开启轮播",
                key: "isRotation",
                type: "switch",
                value: false,
            },
            //4
            {
                label: "是否开启分类导航",
                key: "classNcavigation",
                type: "switch",
                value: false,
            },
            //5
            {
                label: "菜单分类",
                key: "dataList",
                // type: "table",
                type: "tableNavRight",
                isModel: true,
                value: {
                    // 数据结构 (结构中第一个元素为该table组件列表中显示的名称)
                    struct: [
                        {
                            label: "菜单名称",
                            key: "menuName",
                            type: "text",
                        },
                        {
                            label: "菜单选项",
                            key: "menuMutilSelect",
                            type: "select",
                            chooseValue: "key1",
                            value: {
                                data: [
                                    {
                                        value: "key1",
                                        label: "选项1",
                                    },
                                    {
                                        value: "key2",
                                        label: "选项2",
                                    },
                                    {
                                        value: "key3",
                                        label: "选项3",
                                    },
                                    {
                                        value: "key4",
                                        label: "选项4",
                                    },
                                    {
                                        value: "key5",
                                        label: "选项5",
                                    },
                                    {
                                        value: "key6",
                                        label: "选项6",
                                    },
                                    {
                                        value: "key7",
                                        label: "选项7",
                                    },
                                    {
                                        value: "key8",
                                        label: "选项8",
                                    },
                                    {
                                        value: "key9",
                                        label: "选项9",
                                    },
                                    {
                                        value: "key10",
                                        label: "选项10",
                                    },
                                ],
                            },
                        },
                    ],
                    //数据
                    data: [
                        // 所有的数据
                        {
                            name: "查询",
                            key: "key1",
                            list: [
                                {
                                    label: "账户总览",
                                    value: "key1",
                                    icon: "root://assets/images/dragComponents/menu/zhzl.png",
                                    badge: "汇总",
                                },
                                {
                                    label: "收支明细",
                                    value: "key2",
                                    icon: "root://assets/images/dragComponents/menu/lccp.png",
                                    badge: "",
                                },
                                {
                                    label: "我的账本",
                                    value: "key3",
                                    icon: "root://assets/images/dragComponents/menu/wdzb.png",
                                    badge: "",
                                },
                                {
                                    label: "交易查询",
                                    value: "key4",
                                    icon: "root://assets/images/dragComponents/menu/xft.png",
                                    badge: "",
                                },
                            ],
                        },
                        {
                            name: "财富",
                            key: "key2",
                            list: [
                                {
                                    label: "朝朝宝",
                                    value: "key1",
                                    icon: "root://assets/images/dragComponents/menu/ck2.png",
                                    badge: "高收益",
                                },
                                {
                                    label: "朝朝盈2号",
                                    value: "key2",
                                    icon: "root://assets/images/dragComponents/menu/zzy2.png",
                                    badge: "",
                                },
                                {
                                    label: "朝朝盈",
                                    value: "key3",
                                    icon: "root://assets/images/dragComponents/menu/zzy.png",
                                    badge: "",
                                },
                                {
                                    label: "理财产品",
                                    value: "key4",
                                    icon: "root://assets/images/dragComponents/menu/xft.png",
                                    badge: "",
                                },
                                {
                                    label: "基金",
                                    value: "key6",
                                    icon: "root://assets/images/dragComponents/menu/xft.png",
                                    badge: "",
                                },
                                {
                                    label: "私募产品",
                                    value: "key7",
                                    icon: "root://assets/images/dragComponents/menu/xft.png",
                                    badge: "",
                                },
                                {
                                    label: "存款",
                                    value: "key8",
                                    icon: "root://assets/images/dragComponents/menu/ck.png",
                                    badge: "",
                                },
                                {
                                    label: "保险",
                                    value: "key9",
                                    icon: "root://assets/images/dragComponents/menu/bx.png",
                                    badge: "",
                                },
                            ],
                        },
                        {
                            name: "转账",
                            key: "key3",
                            list: [
                                {
                                    label: "账户总览",
                                    value: "key1",
                                    icon: "root://assets/images/dragComponents/menu/zhzl.png",
                                    badge: "汇总",
                                },
                                {
                                    label: "收支明细",
                                    value: "key2",
                                    icon: "root://assets/images/dragComponents/menu/lccp.png",
                                    badge: "",
                                },
                                {
                                    label: "我的账本",
                                    value: "key3",
                                    icon: "root://assets/images/dragComponents/menu/wdzb.png",
                                    badge: "",
                                },
                                {
                                    label: "交易查询",
                                    value: "key4",
                                    icon: "root://assets/images/dragComponents/menu/xft.png",
                                    badge: "",
                                },
                                {
                                    label: "存款",
                                    value: "key8",
                                    icon: "root://assets/images/dragComponents/menu/ck.png",
                                    badge: "",
                                },
                                {
                                    label: "保险",
                                    value: "key9",
                                    icon: "root://assets/images/dragComponents/menu/bx.png",
                                    badge: "",
                                },
                            ],
                        },
                        {
                            name: "贷款",
                            key: "key4",
                            list: [
                                {
                                    label: "存款",
                                    value: "key8",
                                    icon: "root://assets/images/dragComponents/menu/ck.png",
                                    badge: "",
                                },
                                {
                                    label: "保险",
                                    value: "key9",
                                    icon: "root://assets/images/dragComponents/menu/bx.png",
                                    badge: "",
                                },
                            ],
                        },
                        {
                            name: "跨境金融",
                            key: "key5",
                            list: [
                                {
                                    label: "存款",
                                    value: "key8",
                                    icon: "root://assets/images/dragComponents/menu/ck.png",
                                    badge: "",
                                },
                                {
                                    label: "保险",
                                    value: "key9",
                                    icon: "root://assets/images/dragComponents/menu/bx.png",
                                    badge: "",
                                },
                            ],
                        },
                    ],
                },
            },
        ],
        classValues: [
            {
                label: "自定义样式表",
                key: "title",
                type: "textarea",
                name: "van-grid-other",
                value: `{}`,
            },
        ],
        methodValues: [],
        actionValues: [
            // 0
            {
                label: "触发事件",
                key: "clickAction",
                vmodel: "",
                type: "clickAction",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
            },
            // 1
            {
                label: "是否使用埋点",
                key: "type",
                type: "switch",
                value: false,
            },
            // 2
            {
                label: "点击埋点",
                key: "track",
                vmodel: "",
                type: "track",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
                mutiOption: {
                    index: 1,
                    key: "value",
                    showValueList: [true],
                },
            },
        ],
    },
    // 菜单-轮播
    {
        name: "菜单",
        id: "唯一值",
        componentName: "VanMenu",
        mStyle: {
            left: 0,
            top: 0,
            width: 372,
            height: 186,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            zIndex: 0,
        },
        mClass: [],
        propValues: [
            // 0
            {
                label: "列数",
                key: "colNum",
                value: "4",
                type: "num",
            },
            // 1
            {
                label: "行数",
                key: "line",
                value: "2",
                type: "num",
            },
            // 2
            {
                label: "菜单列表",
                key: "data",
                type: "table",
                value: {
                    // 数据结构 (结构中第一个元素为该table组件列表中显示的名称)
                    struct: [
                        {
                            label: "名称",
                            key: "name",
                            type: "text",
                        },
                        {
                            label: "图标",
                            key: "icon",
                            type: "imageStore",
                        },
                        {
                            label: "是否展示徽标",
                            key: "ifBadge",
                            type: "switch",
                            value: false,
                        },
                        {
                            label: "徽标名称",
                            key: "badgename",
                            type: "badge",
                        },
                        {
                            label: "选择跳转页面",
                            key: "menuJump",
                            type: "select",
                            chooseValue: "type1",
                            value: {
                                data: [
                                    {
                                        value: "type1",
                                        label: "页面一",
                                    },
                                    {
                                        value: "type2",
                                        label: "页面二",
                                    },
                                    {
                                        value: "type3",
                                        label: "页面三",
                                    },
                                ],
                            },
                        },
                    ],
                    //数据
                    data: [
                        {
                            label: "账户总览",
                            value: "key1",
                            icon: "root://assets/images/dragComponents/menu/zhzl.png",
                            badge: "汇总",
                        },
                        {
                            label: "收支明细",
                            value: "key2",
                            icon: "root://assets/images/dragComponents/menu/lccp.png",
                            badge: "",
                        },
                        {
                            label: "我的账本",
                            value: "key3",
                            icon: "root://assets/images/dragComponents/menu/wdzb.png",
                            badge: "",
                        },
                        {
                            label: "交易查询",
                            value: "key4",
                            icon: "root://assets/images/dragComponents/menu/xft.png",
                            badge: "",
                        },
                        {
                            label: "朝朝宝",
                            value: "key1",
                            icon: "root://assets/images/dragComponents/menu/ck2.png",
                            badge: "高收益",
                        },
                        {
                            label: "朝朝盈2号",
                            value: "key2",
                            icon: "root://assets/images/dragComponents/menu/zzy2.png",
                            badge: "",
                        },
                        {
                            label: "朝朝盈",
                            value: "key3",
                            icon: "root://assets/images/dragComponents/menu/zzy.png",
                            badge: "",
                        },
                        {
                            label: "理财产品",
                            value: "key4",
                            icon: "root://assets/images/dragComponents/menu/xft.png",
                            badge: "",
                        },
                        {
                            label: "基金",
                            value: "key6",
                            icon: "root://assets/images/dragComponents/menu/xft.png",
                            badge: "",
                        },
                        {
                            label: "私募产品",
                            value: "key7",
                            icon: "root://assets/images/dragComponents/menu/xft.png",
                            badge: "",
                        },
                        {
                            label: "存款",
                            value: "key8",
                            icon: "root://assets/images/dragComponents/menu/ck.png",
                            badge: "",
                        },
                        {
                            label: "保险",
                            value: "key9",
                            icon: "root://assets/images/dragComponents/menu/bx.png",
                            badge: "",
                        },
                    ],
                },
            },
            // 3
            {
                label: "是否开启轮播",
                key: "isRotation",
                type: "switch",
                value: true,
            },
            //4
            {
                label: "是否开启分类导航",
                key: "classNcavigation",
                type: "switch",
                value: false,
            },
            //5
            {
                label: "菜单分类",
                key: "dataList",
                // type: "table",
                type: "tableNavRight",
                isModel: true,
                value: {
                    // 数据结构 (结构中第一个元素为该table组件列表中显示的名称)
                    struct: [
                        {
                            label: "菜单名称",
                            key: "menuName",
                            type: "text",
                        },
                        {
                            label: "菜单选项",
                            key: "menuMutilSelect",
                            type: "select",
                            chooseValue: "key1",
                            value: {
                                data: [
                                    {
                                        value: "key1",
                                        label: "选项1",
                                    },
                                    {
                                        value: "key2",
                                        label: "选项2",
                                    },
                                    {
                                        value: "key3",
                                        label: "选项3",
                                    },
                                    {
                                        value: "key4",
                                        label: "选项4",
                                    },
                                    {
                                        value: "key5",
                                        label: "选项5",
                                    },
                                    {
                                        value: "key6",
                                        label: "选项6",
                                    },
                                    {
                                        value: "key7",
                                        label: "选项7",
                                    },
                                    {
                                        value: "key8",
                                        label: "选项8",
                                    },
                                    {
                                        value: "key9",
                                        label: "选项9",
                                    },
                                    {
                                        value: "key10",
                                        label: "选项10",
                                    },
                                ],
                            },
                        },
                    ],
                    //数据
                    data: [
                        // 所有的数据
                        {
                            name: "查询",
                            key: "key1",
                            list: [
                                {
                                    label: "账户总览",
                                    value: "key1",
                                    icon: "root://assets/images/dragComponents/menu/zhzl.png",
                                    badge: "汇总",
                                },
                                {
                                    label: "收支明细",
                                    value: "key2",
                                    icon: "root://assets/images/dragComponents/menu/lccp.png",
                                    badge: "",
                                },
                                {
                                    label: "我的账本",
                                    value: "key3",
                                    icon: "root://assets/images/dragComponents/menu/wdzb.png",
                                    badge: "",
                                },
                                {
                                    label: "交易查询",
                                    value: "key4",
                                    icon: "root://assets/images/dragComponents/menu/xft.png",
                                    badge: "",
                                },
                            ],
                        },
                        {
                            name: "财富",
                            key: "key2",
                            list: [
                                {
                                    label: "朝朝宝",
                                    value: "key1",
                                    icon: "root://assets/images/dragComponents/menu/ck2.png",
                                    badge: "高收益",
                                },
                                {
                                    label: "朝朝盈2号",
                                    value: "key2",
                                    icon: "root://assets/images/dragComponents/menu/zzy2.png",
                                    badge: "",
                                },
                                {
                                    label: "朝朝盈",
                                    value: "key3",
                                    icon: "root://assets/images/dragComponents/menu/zzy.png",
                                    badge: "",
                                },
                                {
                                    label: "理财产品",
                                    value: "key4",
                                    icon: "root://assets/images/dragComponents/menu/xft.png",
                                    badge: "",
                                },
                                {
                                    label: "基金",
                                    value: "key6",
                                    icon: "root://assets/images/dragComponents/menu/xft.png",
                                    badge: "",
                                },
                                {
                                    label: "私募产品",
                                    value: "key7",
                                    icon: "root://assets/images/dragComponents/menu/xft.png",
                                    badge: "",
                                },
                                {
                                    label: "存款",
                                    value: "key8",
                                    icon: "root://assets/images/dragComponents/menu/ck.png",
                                    badge: "",
                                },
                                {
                                    label: "保险",
                                    value: "key9",
                                    icon: "root://assets/images/dragComponents/menu/bx.png",
                                    badge: "",
                                },
                            ],
                        },
                        {
                            name: "转账",
                            key: "key3",
                            list: [
                                {
                                    label: "账户总览",
                                    value: "key1",
                                    icon: "root://assets/images/dragComponents/menu/zhzl.png",
                                    badge: "汇总",
                                },
                                {
                                    label: "收支明细",
                                    value: "key2",
                                    icon: "root://assets/images/dragComponents/menu/lccp.png",
                                    badge: "",
                                },
                                {
                                    label: "我的账本",
                                    value: "key3",
                                    icon: "root://assets/images/dragComponents/menu/wdzb.png",
                                    badge: "",
                                },
                                {
                                    label: "交易查询",
                                    value: "key4",
                                    icon: "root://assets/images/dragComponents/menu/xft.png",
                                    badge: "",
                                },
                                {
                                    label: "存款",
                                    value: "key8",
                                    icon: "root://assets/images/dragComponents/menu/ck.png",
                                    badge: "",
                                },
                                {
                                    label: "保险",
                                    value: "key9",
                                    icon: "root://assets/images/dragComponents/menu/bx.png",
                                    badge: "",
                                },
                            ],
                        },
                        {
                            name: "贷款",
                            key: "key4",
                            list: [
                                {
                                    label: "存款",
                                    value: "key8",
                                    icon: "root://assets/images/dragComponents/menu/ck.png",
                                    badge: "",
                                },
                                {
                                    label: "保险",
                                    value: "key9",
                                    icon: "root://assets/images/dragComponents/menu/bx.png",
                                    badge: "",
                                },
                            ],
                        },
                        {
                            name: "跨境金融",
                            key: "key5",
                            list: [
                                {
                                    label: "存款",
                                    value: "key8",
                                    icon: "root://assets/images/dragComponents/menu/ck.png",
                                    badge: "",
                                },
                                {
                                    label: "保险",
                                    value: "key9",
                                    icon: "root://assets/images/dragComponents/menu/bx.png",
                                    badge: "",
                                },
                            ],
                        },
                    ],
                },
            },
        ],
        classValues: [
            {
                label: "自定义样式表",
                key: "title",
                type: "textarea",
                name: "van-grid-other",
                value: `{}`,
            },
        ],
        methodValues: [],
        actionValues: [
            // 0
            {
                label: "触发事件",
                key: "clickAction",
                vmodel: "",
                type: "clickAction",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
            },
            // 1
            {
                label: "是否使用埋点",
                key: "type",
                type: "switch",
                value: false,
            },
            // 2
            {
                label: "点击埋点",
                key: "track",
                vmodel: "",
                type: "track",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
                mutiOption: {
                    index: 1,
                    key: "value",
                    showValueList: [true],
                },
            },
        ],
    },
    // 菜单-分类（行列暂时与分类导航无关）
    {
        name: "菜单",
        id: "唯一值",
        componentName: "VanMenu",
        mStyle: {
            left: 0,
            top: 0,
            width: 372,
            height: 186,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            zIndex: 0,
        },
        mClass: [],
        propValues: [
            // 0
            {
                label: "列数",
                key: "colNum",
                value: "4",
                type: "num",
            },
            // 1
            {
                label: "行数",
                key: "line",
                value: "2",
                type: "num",
            },
            // 2
            {
                label: "菜单列表",
                key: "data",
                type: "table",
                value: {
                    // 数据结构 (结构中第一个元素为该table组件列表中显示的名称)
                    struct: [
                        {
                            label: "名称",
                            key: "name",
                            type: "text",
                        },
                        {
                            label: "图标",
                            key: "icon",
                            type: "imageStore",
                        },
                        {
                            label: "是否展示徽标",
                            key: "ifBadge",
                            type: "switch",
                            value: false,
                        },
                        {
                            label: "徽标名称",
                            key: "badgename",
                            type: "badge",
                        },
                        {
                            label: "选择跳转页面",
                            key: "menuJump",
                            type: "select",
                            chooseValue: "type1",
                            value: {
                                data: [
                                    {
                                        value: "type1",
                                        label: "页面一",
                                    },
                                    {
                                        value: "type2",
                                        label: "页面二",
                                    },
                                    {
                                        value: "type3",
                                        label: "页面三",
                                    },
                                ],
                            },
                        },
                    ],
                    //数据
                    data: [
                        {
                            label: "账户总览",
                            value: "key1",
                            icon: "root://assets/images/dragComponents/menu/zhzl.png",
                            badge: "汇总",
                        },
                        {
                            label: "收支明细",
                            value: "key2",
                            icon: "root://assets/images/dragComponents/menu/lccp.png",
                            badge: "",
                        },
                        {
                            label: "我的账本",
                            value: "key3",
                            icon: "root://assets/images/dragComponents/menu/wdzb.png",
                            badge: "",
                        },
                        {
                            label: "交易查询",
                            value: "key4",
                            icon: "root://assets/images/dragComponents/menu/xft.png",
                            badge: "",
                        },
                        {
                            label: "朝朝宝",
                            value: "key1",
                            icon: "root://assets/images/dragComponents/menu/ck2.png",
                            badge: "高收益",
                        },
                        {
                            label: "朝朝盈2号",
                            value: "key2",
                            icon: "root://assets/images/dragComponents/menu/zzy2.png",
                            badge: "",
                        },
                        {
                            label: "朝朝盈",
                            value: "key3",
                            icon: "root://assets/images/dragComponents/menu/zzy.png",
                            badge: "",
                        },
                        {
                            label: "理财产品",
                            value: "key4",
                            icon: "root://assets/images/dragComponents/menu/xft.png",
                            badge: "",
                        },
                        {
                            label: "基金",
                            value: "key6",
                            icon: "root://assets/images/dragComponents/menu/xft.png",
                            badge: "",
                        },
                        {
                            label: "私募产品",
                            value: "key7",
                            icon: "root://assets/images/dragComponents/menu/xft.png",
                            badge: "",
                        },
                        {
                            label: "存款",
                            value: "key8",
                            icon: "root://assets/images/dragComponents/menu/ck.png",
                            badge: "",
                        },
                        {
                            label: "保险",
                            value: "key9",
                            icon: "root://assets/images/dragComponents/menu/bx.png",
                            badge: "",
                        },
                    ],
                },
            },
            // 3
            {
                label: "是否开启轮播",
                key: "isRotation",
                type: "switch",
                value: false,
            },
            //4
            {
                label: "是否开启分类导航",
                key: "classNcavigation",
                type: "switch",
                value: true,
            },
            //5
            {
                label: "菜单分类",
                key: "dataList",
                // type: "table",
                type: "tableNavRight",
                isModel: true,
                value: {
                    // 数据结构 (结构中第一个元素为该table组件列表中显示的名称)
                    struct: [
                        {
                            label: "菜单名称",
                            key: "menuName",
                            type: "text",
                        },
                        {
                            label: "菜单选项",
                            key: "menuMutilSelect",
                            type: "select",
                            chooseValue: "key1",
                            value: {
                                data: [
                                    {
                                        value: "key1",
                                        label: "选项1",
                                    },
                                    {
                                        value: "key2",
                                        label: "选项2",
                                    },
                                    {
                                        value: "key3",
                                        label: "选项3",
                                    },
                                    {
                                        value: "key4",
                                        label: "选项4",
                                    },
                                    {
                                        value: "key5",
                                        label: "选项5",
                                    },
                                    {
                                        value: "key6",
                                        label: "选项6",
                                    },
                                    {
                                        value: "key7",
                                        label: "选项7",
                                    },
                                    {
                                        value: "key8",
                                        label: "选项8",
                                    },
                                    {
                                        value: "key9",
                                        label: "选项9",
                                    },
                                    {
                                        value: "key10",
                                        label: "选项10",
                                    },
                                ],
                            },
                        },
                    ],
                    //数据
                    data: [
                        // 所有的数据
                        {
                            name: "查询",
                            key: "key1",
                            list: [
                                {
                                    label: "账户总览",
                                    value: "key1",
                                    icon: "root://assets/images/dragComponents/menu/zhzl.png",
                                    badge: "汇总",
                                },
                                {
                                    label: "收支明细",
                                    value: "key2",
                                    icon: "root://assets/images/dragComponents/menu/lccp.png",
                                    badge: "",
                                },
                                {
                                    label: "我的账本",
                                    value: "key3",
                                    icon: "root://assets/images/dragComponents/menu/wdzb.png",
                                    badge: "",
                                },
                                {
                                    label: "交易查询",
                                    value: "key4",
                                    icon: "root://assets/images/dragComponents/menu/xft.png",
                                    badge: "",
                                },
                            ],
                        },
                        {
                            name: "财富",
                            key: "key2",
                            list: [
                                {
                                    label: "朝朝宝",
                                    value: "key1",
                                    icon: "root://assets/images/dragComponents/menu/ck2.png",
                                    badge: "高收益",
                                },
                                {
                                    label: "朝朝盈2号",
                                    value: "key2",
                                    icon: "root://assets/images/dragComponents/menu/zzy2.png",
                                    badge: "",
                                },
                                {
                                    label: "朝朝盈",
                                    value: "key3",
                                    icon: "root://assets/images/dragComponents/menu/zzy.png",
                                    badge: "",
                                },
                                {
                                    label: "理财产品",
                                    value: "key4",
                                    icon: "root://assets/images/dragComponents/menu/xft.png",
                                    badge: "",
                                },
                                {
                                    label: "基金",
                                    value: "key6",
                                    icon: "root://assets/images/dragComponents/menu/xft.png",
                                    badge: "",
                                },
                                {
                                    label: "私募产品",
                                    value: "key7",
                                    icon: "root://assets/images/dragComponents/menu/xft.png",
                                    badge: "",
                                },
                                {
                                    label: "存款",
                                    value: "key8",
                                    icon: "root://assets/images/dragComponents/menu/ck.png",
                                    badge: "",
                                },
                                {
                                    label: "保险",
                                    value: "key9",
                                    icon: "root://assets/images/dragComponents/menu/bx.png",
                                    badge: "",
                                },
                            ],
                        },
                        {
                            name: "转账",
                            key: "key3",
                            list: [
                                {
                                    label: "账户总览",
                                    value: "key1",
                                    icon: "root://assets/images/dragComponents/menu/zhzl.png",
                                    badge: "汇总",
                                },
                                {
                                    label: "收支明细",
                                    value: "key2",
                                    icon: "root://assets/images/dragComponents/menu/lccp.png",
                                    badge: "",
                                },
                                {
                                    label: "我的账本",
                                    value: "key3",
                                    icon: "root://assets/images/dragComponents/menu/wdzb.png",
                                    badge: "",
                                },
                                {
                                    label: "交易查询",
                                    value: "key4",
                                    icon: "root://assets/images/dragComponents/menu/xft.png",
                                    badge: "",
                                },
                                {
                                    label: "存款",
                                    value: "key8",
                                    icon: "root://assets/images/dragComponents/menu/ck.png",
                                    badge: "",
                                },
                                {
                                    label: "保险",
                                    value: "key9",
                                    icon: "root://assets/images/dragComponents/menu/bx.png",
                                    badge: "",
                                },
                            ],
                        },
                        {
                            name: "贷款",
                            key: "key4",
                            list: [
                                {
                                    label: "存款",
                                    value: "key8",
                                    icon: "root://assets/images/dragComponents/menu/ck.png",
                                    badge: "",
                                },
                                {
                                    label: "保险",
                                    value: "key9",
                                    icon: "root://assets/images/dragComponents/menu/bx.png",
                                    badge: "",
                                },
                            ],
                        },
                        {
                            name: "跨境金融",
                            key: "key5",
                            list: [
                                {
                                    label: "存款",
                                    value: "key8",
                                    icon: "root://assets/images/dragComponents/menu/ck.png",
                                    badge: "",
                                },
                                {
                                    label: "保险",
                                    value: "key9",
                                    icon: "root://assets/images/dragComponents/menu/bx.png",
                                    badge: "",
                                },
                            ],
                        },
                    ],
                },
            },
        ],
        classValues: [
            {
                label: "自定义样式表",
                key: "title",
                type: "textarea",
                name: "van-grid-other",
                value: `{}`,
            },
        ],
        methodValues: [],
        actionValues: [
            // 0
            {
                label: "触发事件",
                key: "clickAction",
                vmodel: "",
                type: "clickAction",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
            },
            // 1
            {
                label: "是否使用埋点",
                key: "type",
                type: "switch",
                value: false,
            },
            // 2
            {
                label: "点击埋点",
                key: "track",
                vmodel: "",
                type: "track",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
                mutiOption: {
                    index: 1,
                    key: "value",
                    showValueList: [true],
                },
            },
        ],
    },
    {
        name: "公告组件",
        id: 4,
        componentName: "VanNoticePage",
        mStyle: {
            left: 0,
            top: 0,
            width: 375,
            height: 92,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            zIndex: 0,
        },
        mClass: [],
        propValues: [
            {
                label: "公告内容",
                key: "noticeContainer",
                type: "text",
                isModel: true,
                value: "您还没有收到消息，快来签约App动账通知吧！",
            },
            {
                label: "公告内容字体颜色",
                key: "color",
                type: "color",
                value: "#191919",
            },
            {
                label: "内容是否滚动",
                key: "isScroll",
                type: "switch",
                value: true,
            },
            {
                label: "公告组件类型",
                key: "noticeType",
                type: "select",
                chooseValue: "type1",
                value: {
                    data: [
                        {
                            value: "type1",
                            label: "样式1",
                        },
                        {
                            value: "type2",
                            label: "样式2",
                        },
                        {
                            value: "type3",
                            label: "样式3",
                        },
                    ],
                },
            },
            {
                label: "标题",
                key: "noticeTitle",
                type: "text",
                value: "亲爱的",
                isModel: true,
                mutiOption: [
                    {
                        index: 3,
                        key: "chooseValue",
                        showValueList: ["type1"],
                    },
                ],
                isRelevance: true,
            },
            {
                label: "标题2",
                key: "noticeTitle",
                type: "text",
                value: "上午好~",
                isModel: true,
                mutiOption: [
                    {
                        index: 3,
                        key: "chooseValue",
                        showValueList: ["type1"],
                    },
                ],
                isRelevance: true,
            },
            {
                label: "标题",
                key: "noticeTitle",
                isModel: true,
                type: "text",
                value: "头条",
                mutiOption: [
                    {
                        index: 3,
                        key: "chooseValue",
                        showValueList: ["type2"],
                    },
                ],
                isRelevance: false,
            },
            {
                label: "标题",
                key: "noticeTitle",
                isModel: true,
                type: "text",
                value: "头条",
                mutiOption: [
                    {
                        index: 3,
                        key: "chooseValue",
                        showValueList: ["type3"],
                    },
                ],
                isRelevance: false,
            },
        ],
        classValues: [
            {
                label: "自定义样式表",
                key: "title",
                type: "textarea",
                name: "van-sku-other",
                value: "{}",
            },
        ],
        mode: "h5",
    },
    {
        name: "公告组件",
        id: 4,
        componentName: "VanNoticePage",
        mStyle: {
            left: 0,
            top: 0,
            width: 375,
            height: 92,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            zIndex: 0,
        },
        mClass: [],
        propValues: [
            {
                label: "公告内容",
                key: "noticeContainer",
                type: "text",
                isModel: true,
                value: "7个社保问题，权威解答来啦！",
            },
            {
                label: "公告内容字体颜色",
                key: "color",
                type: "color",
                value: "#191919",
            },
            {
                label: "内容是否滚动",
                key: "isScroll",
                type: "switch",
                value: true,
            },
            {
                label: "公告组件类型",
                key: "noticeType",
                type: "select",
                chooseValue: "type2",
                value: {
                    data: [
                        {
                            value: "type1",
                            label: "样式1",
                        },
                        {
                            value: "type2",
                            label: "样式2",
                        },
                        {
                            value: "type3",
                            label: "样式3",
                        },
                    ],
                },
            },
            {
                label: "标题",
                key: "noticeTitle",
                type: "text",
                value: "亲爱的",
                isModel: true,
                mutiOption: [
                    {
                        index: 3,
                        key: "chooseValue",
                        showValueList: ["type1"],
                    },
                ],
                isRelevance: true,
            },
            {
                label: "标题2",
                key: "noticeTitle",
                type: "text",
                value: "下午好",
                isModel: true,
                mutiOption: [
                    {
                        index: 3,
                        key: "chooseValue",
                        showValueList: ["type1"],
                    },
                ],
                isRelevance: true,
            },
            {
                label: "标题",
                key: "noticeTitle",
                isModel: true,
                type: "text",
                value: "头条",
                mutiOption: [
                    {
                        index: 3,
                        key: "chooseValue",
                        showValueList: ["type2"],
                    },
                ],
                isRelevance: false,
            },
            {
                label: "标题",
                key: "noticeTitle",
                isModel: true,
                type: "text",
                value: "头条",
                mutiOption: [
                    {
                        index: 3,
                        key: "chooseValue",
                        showValueList: ["type3"],
                    },
                ],
                isRelevance: false,
            },
        ],
        classValues: [
            {
                label: "自定义样式表",
                key: "title",
                type: "textarea",
                name: "van-sku-other",
                value: "{}",
            },
        ],
        mode: "h5",
    },
    {
        name: "公告组件",
        id: 4,
        componentName: "VanNoticePage",
        mStyle: {
            left: 0,
            top: 0,
            width: 375,
            height: 92,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            zIndex: 0,
        },
        mClass: [],
        propValues: [
            {
                label: "公告内容",
                key: "noticeContainer",
                type: "text",
                isModel: true,
                value: "老艾侃股：大金针扎出虎年方向！",
            },
            {
                label: "公告内容字体颜色",
                key: "color",
                type: "color",
                value: "#191919",
            },
            {
                label: "内容是否滚动",
                key: "isScroll",
                type: "switch",
                value: true,
            },
            {
                label: "公告组件类型",
                key: "noticeType",
                type: "select",
                chooseValue: "type3",
                value: {
                    data: [
                        {
                            value: "type1",
                            label: "样式1",
                        },
                        {
                            value: "type2",
                            label: "样式2",
                        },
                        {
                            value: "type3",
                            label: "样式3",
                        },
                    ],
                },
            },
            {
                label: "标题",
                key: "noticeTitle",
                type: "text",
                value: "亲爱的",
                isModel: true,
                mutiOption: [
                    {
                        index: 3,
                        key: "chooseValue",
                        showValueList: ["type1"],
                    },
                ],
                isRelevance: false,
            },
            {
                label: "标题2",
                key: "noticeTitle",
                type: "text",
                value: "下午好",
                isModel: true,
                mutiOption: [
                    {
                        index: 3,
                        key: "chooseValue",
                        showValueList: ["type1"],
                    },
                ],
                isRelevance: false,
            },
            {
                label: "标题",
                key: "noticeTitle",
                isModel: true,
                type: "text",
                value: "头条",
                mutiOption: [
                    {
                        index: 3,
                        key: "chooseValue",
                        showValueList: ["type2"],
                    },
                ],
                isRelevance: true,
            },
            {
                label: "标题",
                key: "noticeTitle",
                isModel: true,
                type: "text",
                value: "头条",
                mutiOption: [
                    {
                        index: 3,
                        key: "chooseValue",
                        showValueList: ["type3"],
                    },
                ],
                isRelevance: false,
            },
        ],
        classValues: [
            {
                label: "自定义样式表",
                key: "title",
                type: "textarea",
                name: "van-sku-other",
                value: "{}",
            },
        ],
        mode: "h5",
    },
    {
        name: "展示广告组件",
        id: 4,
        componentName: "VanDisplayAdvPage",
        mStyle: {
            left: 0,
            top: 0,
            width: 375,
            height: 250,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            zIndex: 0,
        },
        mClass: [],
        propValues: [
            {
                label: "显示类型",
                key: "listType",
                type: "select",
                chooseValue: "singlePic",
                value: {
                    data: [
                        {
                            value: "leftBg",
                            label: "左一右二",
                        },
                        {
                            value: "doublePic",
                            label: "双图",
                        },
                        {
                            value: "singlePic",
                            label: "单图",
                        },
                    ],
                },
            },
            {
                label: "是否显示标题",
                key: "circleBar",
                type: "switch",
                value: true,
            },
            {
                label: "标题",
                key: "titleText",
                type: "text",
                value: "本地优惠",
                mutiOption: {
                    index: 1,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "数据列表",
                key: "dataList",
                type: "tableNavLeft",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "图片名称",
                            key: "url",
                            type: "imageStore",
                        },
                        {
                            label: "图片链接",
                            key: "linkAddress",
                            type: "select",
                            chooseValue: "address1",
                            value: {
                                data: [
                                    {
                                        value: "www.baidu.com",
                                        label: "address1",
                                    },
                                    {
                                        value: "www.qq.com",
                                        label: "address2",
                                    },
                                    {
                                        value: "www.hao123.com",
                                        label: "address3",
                                    },
                                ],
                            },
                        },
                    ],
                    data: [
                        {
                            name: "img1",
                            linkAddress: "www.baidu.com",
                            url: "root://assets/images/dragComponents/single1.png",
                        },
                        {
                            name: "img2",
                            linkAddress: "www.qq.com",
                            url: "root://assets/images/dragComponents/single2.png",
                        },
                        {
                            name: "img3",
                            linkAddress: "www.hao123.com",
                            url: "root://assets/images/dragComponents/banner_finance1.png",
                        },
                        {
                            name: "img2",
                            linkAddress: "www.qq.com",
                            url: "root://assets/images/dragComponents/banner_life1.png",
                        },
                    ],
                },
                mutiOption: {
                    index: 0,
                    key: "chooseValue",
                    showValueList: ["leftBg"],
                },
                isRelevance: false,
            },
            {
                label: "数据列表",
                key: "leftBg",
                type: "tableNavLeft",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "图片名称",
                            key: "url",
                            type: "imageStore",
                        },
                        {
                            label: "图片链接",
                            key: "linkAddress",
                            type: "select",
                            chooseValue: "link1",
                            isModel: true,
                            value: {
                                data: [
                                    {
                                        value: "www.baidu.com",
                                        label: "link1",
                                    },
                                    {
                                        value: "www.qq.com",
                                        label: "link2",
                                    },
                                ],
                            },
                        },
                    ],
                    data: [
                        {
                            name: "img1",
                            linkAddress: "www.baidu.com",
                            url: "root://assets/images/dragComponents/banner_finance1.png",
                        },
                        {
                            name: "img2",
                            linkAddress: "www.qq.com",
                            url: "root://assets/images/dragComponents/banner_life1.png",
                        },
                        {
                            name: "img3",
                            linkAddress: "www.hao123.com",
                            url: "root://assets/images/dragComponents/banner_finance1.png",
                        },
                        {
                            name: "img2",
                            linkAddress: "www.qq.com",
                            url: "root://assets/images/dragComponents/banner_life1.png",
                        },
                    ],
                },
                mutiOption: {
                    index: 0,
                    key: "chooseValue",
                    showValueList: ["doublePic"],
                },
                isRelevance: true,
            },
            {
                label: "数据列表",
                key: "singleImg",
                type: "tableNavLeft",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "图片名称",
                            key: "url",
                            type: "imageStore",
                        },
                        {
                            label: "图片链接",
                            key: "linkAddress",
                            type: "select",
                            chooseValue: "addr",
                            value: {
                                data: [
                                    {
                                        value: "www.baidu.com",
                                        label: "addr",
                                    },
                                ],
                            },
                        },
                    ],
                    data: [
                        {
                            name: "img2",
                            linkAddress: "www.baidu.com",
                            url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F041620104229%2F200416104229-2-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649493838&t=bd04f3a107068421af21d20642989af0",
                        },
                        {
                            url: "static/home/banner_lb@2x.png",
                            linkAddress: "",
                        },
                        {
                            url: "",
                            linkAddress: "",
                        },
                        {
                            url: "",
                            linkAddress: "",
                        },
                    ],
                },
                mutiOption: {
                    index: 0,
                    key: "chooseValue",
                    showValueList: ["singlePic"],
                },
                isRelevance: false,
            },
        ],
        classValues: [
            {
                label: "自定义样式表",
                key: "title",
                type: "textarea",
                name: "van-swiper-other",
                value: "{}",
            },
        ],
        methodValues: [],
        actionValues: [],
        mode: "h5",
    },
    {
        name: "展示广告组件",
        id: 4,
        componentName: "VanDisplayAdvPage",
        mStyle: {
            left: 0,
            top: 0,
            width: 375,
            height: 250,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            zIndex: 0,
        },
        mClass: [],
        propValues: [
            {
                label: "显示类型",
                key: "listType",
                type: "select",
                chooseValue: "doublePic",
                value: {
                    data: [
                        {
                            value: "leftBg",
                            label: "左一右二",
                        },
                        {
                            value: "doublePic",
                            label: "双图",
                        },
                        {
                            value: "singlePic",
                            label: "单图",
                        },
                    ],
                },
            },
            {
                label: "是否显示标题",
                key: "circleBar",
                type: "switch",
                value: true,
            },
            {
                label: "标题",
                key: "titleText",
                type: "text",
                value: "本地优惠",
                mutiOption: {
                    index: 1,
                    key: "value",
                    showValueList: [true],
                },
                isRelevance: true,
            },
            {
                label: "数据列表",
                key: "dataList",
                type: "tableNavLeft",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "图片名称",
                            key: "url",
                            type: "imageStore",
                        },
                        {
                            label: "图片链接",
                            key: "linkAddress",
                            type: "select",
                            chooseValue: "address1",
                            value: {
                                data: [
                                    {
                                        value: "www.baidu.com",
                                        label: "address1",
                                    },
                                    {
                                        value: "www.qq.com",
                                        label: "address2",
                                    },
                                    {
                                        value: "www.hao123.com",
                                        label: "address3",
                                    },
                                ],
                            },
                        },
                    ],
                    data: [
                        {
                            name: "img1",
                            linkAddress: "www.baidu.com",
                            url: "root://assets/images/dragComponents/banner_saving1.png",
                        },
                        {
                            name: "img2",
                            linkAddress: "www.qq.com",
                            url: "root://assets/images/dragComponents/banner_saving2.png",
                        },
                        {
                            name: "img3",
                            linkAddress: "www.hao123.com",
                            url: "root://assets/images/dragComponents/banner_saving1.png",
                        },
                        {
                            name: "img2",
                            linkAddress: "www.qq.com",
                            url: "root://assets/images/dragComponents/banner_saving2.png",
                        },
                    ],
                },
                mutiOption: {
                    index: 0,
                    key: "chooseValue",
                    showValueList: ["leftBg"],
                },
                isRelevance: true,
            },
            {
                label: "数据列表",
                key: "leftBg",
                type: "tableNavLeft",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "图片名称",
                            key: "url",
                            type: "imageStore",
                        },
                        {
                            label: "图片链接",
                            key: "linkAddress",
                            type: "select",
                            chooseValue: "link1",
                            isModel: true,
                            value: {
                                data: [
                                    {
                                        value: "www.baidu.com",
                                        label: "link1",
                                    },
                                    {
                                        value: "www.qq.com",
                                        label: "link2",
                                    },
                                ],
                            },
                        },
                    ],
                    data: [
                        {
                            name: "img2",
                            linkAddress: "www.baidu.com",
                            url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F041620104229%2F200416104229-2-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649493838&t=bd04f3a107068421af21d20642989af0",
                        },
                        {
                            name: "img3",
                            linkAddress: "www.qq.com",
                            url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F26%2Fc8%2F69%2F26c869bc8428113a454b0207e42f339f.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649493838&t=5fd62fe8091019d3aca94dd283787912",
                        },
                        {
                            url: "static/home/icon_code@2x.png",
                            linkAddress: "",
                        },
                        {
                            url: "static/home/icon_code@2x.png",
                            linkAddress: "",
                        },
                    ],
                },
                mutiOption: {
                    index: 0,
                    key: "chooseValue",
                    showValueList: ["doublePic"],
                },
                isRelevance: false,
            },
            {
                label: "数据列表",
                key: "singleImg",
                type: "tableNavLeft",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "图片名称",
                            key: "url",
                            type: "imageStore",
                        },
                        {
                            label: "图片链接",
                            key: "linkAddress",
                            type: "select",
                            chooseValue: "addr",
                            value: {
                                data: [
                                    {
                                        value: "www.baidu.com",
                                        label: "addr",
                                    },
                                ],
                            },
                        },
                    ],
                    data: [
                        {
                            name: "img2",
                            linkAddress: "www.baidu.com",
                            url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F041620104229%2F200416104229-2-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649493838&t=bd04f3a107068421af21d20642989af0",
                        },
                        {
                            url: "static/home/banner_lb@2x.png",
                            linkAddress: "",
                        },
                        {
                            url: "",
                            linkAddress: "",
                        },
                        {
                            url: "",
                            linkAddress: "",
                        },
                    ],
                },
                mutiOption: {
                    index: 0,
                    key: "chooseValue",
                    showValueList: ["singlePic"],
                },
                isRelevance: false,
            },
        ],
        classValues: [
            {
                label: "自定义样式表",
                key: "title",
                type: "textarea",
                name: "van-swiper-other",
                value: "{}",
            },
        ],
        methodValues: [],
        actionValues: [],
        mode: "h5",
    },
    {
        name: "展示广告组件",
        id: 2,
        componentName: "VanDisplayAdvPage",
        mStyle: {
            left: 0,
            top: 0,
            width: 375,
            height: 250,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            zIndex: 0,
        },
        mClass: [],
        propValues: [
            {
                label: "显示类型",
                key: "listType",
                type: "select",
                chooseValue: "leftBg",
                value: {
                    data: [
                        {
                            value: "leftBg",
                            label: "左一右二",
                        },
                        {
                            value: "doublePic",
                            label: "双图",
                        },
                        {
                            value: "singlePic",
                            label: "单图",
                        },
                    ],
                },
            },
            {
                label: "是否显示标题",
                key: "circleBar",
                type: "switch",
                value: true,
            },
            {
                label: "标题",
                key: "titleText",
                type: "text",
                value: "本地优惠",
                mutiOption: {
                    index: 1,
                    key: "value",
                    showValueList: [true],
                },
            },
            {
                label: "数据列表",
                key: "dataList",
                type: "tableNavLeft",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "图片名称",
                            key: "url",
                            type: "imageStore",
                        },
                        {
                            label: "图片链接",
                            key: "linkAddress",
                            type: "select",
                            chooseValue: "address1",
                            value: {
                                data: [
                                    {
                                        value: "www.baidu.com",
                                        label: "address1",
                                    },
                                    {
                                        value: "www.qq.com",
                                        label: "address2",
                                    },
                                    {
                                        value: "www.hao123.com",
                                        label: "address3",
                                    },
                                ],
                            },
                        },
                    ],
                    data: [
                        {
                            name: "img1",
                            linkAddress: "www.baidu.com",
                            url: "root://assets/images/dragComponents/leftBg1.png",
                        },
                        {
                            name: "img2",
                            linkAddress: "www.qq.com",
                            url: "root://assets/images/dragComponents/leftBg2.png",
                        },
                        {
                            name: "img3",
                            linkAddress: "www.hao123.com",
                            url: "root://assets/images/dragComponents/leftBg3.png",
                        },
                        {
                            name: "img2",
                            linkAddress: "www.qq.com",
                            url: "root://assets/images/dragComponents/banner_saving2.png",
                        },
                    ],
                },
                mutiOption: {
                    index: 0,
                    key: "chooseValue",
                    showValueList: ["leftBg"],
                },
            },
            {
                label: "数据列表",
                key: "leftBg",
                type: "tableNavLeft",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "图片名称",
                            key: "url",
                            type: "imageStore",
                        },
                        {
                            label: "图片链接",
                            key: "linkAddress",
                            type: "select",
                            chooseValue: "link1",
                            isModel: true,
                            value: {
                                data: [
                                    {
                                        value: "www.baidu.com",
                                        label: "link1",
                                    },
                                    {
                                        value: "www.qq.com",
                                        label: "link2",
                                    },
                                ],
                            },
                        },
                    ],
                    data: [
                        {
                            name: "img2",
                            linkAddress: "www.baidu.com",
                            url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F041620104229%2F200416104229-2-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649493838&t=bd04f3a107068421af21d20642989af0",
                        },
                        {
                            name: "img3",
                            linkAddress: "www.qq.com",
                            url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fup.enterdesk.com%2Fedpic%2F26%2Fc8%2F69%2F26c869bc8428113a454b0207e42f339f.jpg&refer=http%3A%2F%2Fup.enterdesk.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649493838&t=5fd62fe8091019d3aca94dd283787912",
                        },
                    ],
                },
                mutiOption: {
                    index: 0,
                    key: "chooseValue",
                    showValueList: ["doublePic"],
                },
            },
            {
                label: "数据列表",
                key: "singleImg",
                type: "tableNavLeft",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "图片名称",
                            key: "url",
                            type: "imageStore",
                        },
                        {
                            label: "图片链接",
                            key: "linkAddress",
                            type: "select",
                            chooseValue: "addr",
                            value: {
                                data: [
                                    {
                                        value: "www.baidu.com",
                                        label: "addr",
                                    },
                                ],
                            },
                        },
                    ],
                    data: [
                        {
                            name: "img2",
                            linkAddress: "www.baidu.com",
                            url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2F1113%2F041620104229%2F200416104229-2-1200.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649493838&t=bd04f3a107068421af21d20642989af0",
                        },
                    ],
                },
                mutiOption: {
                    index: 0,
                    key: "chooseValue",
                    showValueList: ["singlePic"],
                },
            },
        ],
        classValues: [
            {
                label: "自定义样式表",
                key: "title",
                type: "textarea",
                name: "van-swiper-other",
                value: "{}",
            },
        ],
        methodValues: [],
        actionValues: [],
        mode: "h5",
    },
    {
        name: "轮播广告组件",
        id: 2,
        componentName: "VanSwiperPage",
        mStyle: {
            left: 0,
            top: 0,
            width: 375,
            height: 250,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            zIndex: 0,
        },
        mClass: [],
        propValues: [
            {
                label: "显示类型",
                key: "listType",
                type: "select",
                chooseValue: "single",
                value: {
                    data: [
                        {
                            value: "single",
                            label: "单图",
                        },
                        {
                            value: "mutil",
                            label: "多图",
                        },
                    ],
                },
            },
            {
                label: "是否显示小圆点",
                key: "circleBar",
                type: "switch",
                value: true,
            },
            {
                label: "数据列表",
                key: "singleImageList",
                type: "tableNavLeft",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "图片",
                            key: "url",
                            type: "imageStore",
                        },
                        {
                            label: "跳转内容",
                            key: "linkAddress",
                            type: "select",
                            chooseValue: "address1",
                            value: {
                                data: [
                                    {
                                        value: "www.qq.com",
                                        label: "address1",
                                    },
                                    {
                                        value: "www.baidu.com",
                                        label: "address2",
                                    },
                                    {
                                        value: "www.hao123.com",
                                        label: "address3",
                                    },
                                ],
                            },
                        },
                    ],
                    data: [
                        {
                            name: "img1",
                            linkAddress: "www.hao123.com",
                            url: "root://assets/images/dragComponents/swiper1.png",
                        },
                        {
                            name: "img2",
                            linkAddress: "www.baidu.com",
                            url: "root://assets/images/dragComponents/swiper2.png",
                        },
                        {
                            name: "img3",
                            linkAddress: "www.qq.com",
                            url: "root://assets/images/dragComponents/banner_finance1.png",
                        },
                    ],
                },
                mutiOption: {
                    index: 0,
                    key: "chooseValue",
                    showValueList: ["single"],
                },
            },
            {
                label: "数据列表",
                key: "mutileImageList",
                type: "tableNavLeft",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "图片",
                            key: "url",
                            type: "imageStore",
                        },
                        {
                            label: "跳转内容",
                            key: "linkAddress",
                            type: "select",
                            chooseValue: "addre1",
                            value: {
                                data: [
                                    {
                                        value: "www.baidu.com",
                                        label: "addre1",
                                    },
                                    {
                                        value: "www.qq.com",
                                        label: "addre2",
                                    },
                                    {
                                        value: "www.hao123.com",
                                        label: "addre3",
                                    },
                                    {
                                        value: "www.duba.com",
                                        label: "addre4",
                                    },
                                    {
                                        value: "https://element.eleme.cn/#/zh-CN/component/installation",
                                        label: "addre5",
                                    },
                                ],
                            },
                        },
                    ],
                    data: [
                        {
                            name: "img1",
                            linkAddress: "www.baidu.com",
                            url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp06%2F20111116192A364-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649316201&t=f190e7a1230f97a29d7afbe5dfd77c9f",
                        },
                        {
                            name: "img2",
                            linkAddress: "www.hao123.com",
                            url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.jj20.com%2Fup%2Fallimg%2Ftp01%2F1ZZQ20QJS6-0-lp.jpg&refer=http%3A%2F%2Fimg.jj20.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649316201&t=914f39e2221938b0078ded27301f4082",
                        },
                        {
                            name: "img3",
                            linkAddress: "www.duba.com",
                            url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic9.nipic.com%2F20100914%2F2531170_171928949919_2.jpg&refer=http%3A%2F%2Fpic9.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649316201&t=c88f2559d3051c31ec5c4ebb14604041",
                        },
                        {
                            name: "img4",
                            linkAddress: "www.qq.com",
                            url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic16.nipic.com%2F20111009%2F7914770_092744452337_2.jpg&refer=http%3A%2F%2Fpic16.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649316201&t=2918eabebb24223a0f7ccc115c26e35d",
                        },
                        {
                            name: "img5",
                            linkAddress:
                                "https://element.eleme.cn/#/zh-CN/component/installation",
                            url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fpic137.nipic.com%2Ffile%2F20170802%2F6494043_210007752037_2.jpg&refer=http%3A%2F%2Fpic137.nipic.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649316201&t=60dbab13a4d0c14ffd30705a8c23bf2b",
                        },
                    ],
                },
                mutiOption: {
                    index: 0,
                    key: "chooseValue",
                    showValueList: ["mutil"],
                },
            },
        ],
        classValues: [
            {
                label: "自定义样式表",
                key: "title",
                type: "textarea",
                name: "van-swiper-other",
                value: "{}",
            },
        ],
        methodValues: [],
        actionValues: [],
        mode: "h5",
    },
    {
        name: "轮播广告组件",
        id: 2,
        componentName: "VanSwiperPage",
        mStyle: {
            left: 0,
            top: 0,
            width: 375,
            height: 250,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            zIndex: 0,
        },
        mClass: [],
        propValues: [
            {
                label: "显示类型",
                key: "listType",
                type: "select",
                chooseValue: "mutil",
                value: {
                    data: [
                        {
                            value: "single",
                            label: "单图",
                        },
                        {
                            value: "mutil",
                            label: "多图",
                        },
                    ],
                },
            },
            {
                label: "是否显示小圆点",
                key: "circleBar",
                type: "switch",
                value: true,
            },
            {
                label: "数据列表",
                key: "singleImageList",
                type: "tableNavLeft",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "图片",
                            key: "url",
                            type: "imageStore",
                        },
                        {
                            label: "跳转内容",
                            key: "linkAddress",
                            type: "select",
                            chooseValue: "address1",
                            value: {
                                data: [
                                    {
                                        value: "www.qq.com",
                                        label: "address1",
                                    },
                                    {
                                        value: "www.baidu.com",
                                        label: "address2",
                                    },
                                    {
                                        value: "www.hao123.com",
                                        label: "address3",
                                    },
                                ],
                            },
                        },
                    ],
                    data: [
                        {
                            name: "img1",
                            linkAddress: "www.hao123.com",
                            url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.jx.xinhuanet.com%2Ftitlepic%2F112621%2F1126210233_1594172980543_title0h.jpg&refer=http%3A%2F%2Fwww.jx.xinhuanet.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649581101&t=7aac88186f955ec3b943bf66f9a91f16",
                        },
                        {
                            name: "img2",
                            linkAddress: "www.baidu.com",
                            url: "https://t15.baidu.com/it/u=291458913,682479423&fm=224&app=112&f=JPEG?w=375&h=175",
                        },
                        {
                            name: "img3",
                            linkAddress: "www.qq.com",
                            url: "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwww.cnrr.cn%2Fimg%2F20049191813260.jpg&refer=http%3A%2F%2Fwww.cnrr.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1649581136&t=908b95e64a3be67f5d5a37b037bc6840",
                        },
                    ],
                },
                mutiOption: {
                    index: 0,
                    key: "chooseValue",
                    showValueList: ["single"],
                },
                isRelevance: true,
            },
            {
                label: "数据列表",
                key: "mutileImageList",
                type: "tableNavLeft",
                isModel: true,
                value: {
                    struct: [
                        {
                            label: "图片",
                            key: "url",
                            type: "imageStore",
                        },
                        {
                            label: "跳转内容",
                            key: "linkAddress",
                            type: "select",
                            chooseValue: "addre1",
                            value: {
                                data: [
                                    {
                                        value: "www.baidu.com",
                                        label: "addre1",
                                    },
                                    {
                                        value: "www.qq.com",
                                        label: "addre2",
                                    },
                                    {
                                        value: "www.hao123.com",
                                        label: "addre3",
                                    },
                                    {
                                        value: "www.duba.com",
                                        label: "addre4",
                                    },
                                    {
                                        value: "https://element.eleme.cn/#/zh-CN/component/installation",
                                        label: "addre5",
                                    },
                                ],
                            },
                        },
                    ],
                    data: [
                        {
                            name: "img1",
                            linkAddress: "www.baidu.com",
                            url: "root://assets/images/dragComponents/single3.png",
                        },
                        {
                            name: "img2",
                            linkAddress: "www.baidu.com",
                            url: "root://assets/images/dragComponents/single3.png",
                        },
                        {
                            name: "img3",
                            linkAddress: "www.baidu.com",
                            url: "root://assets/images/dragComponents/single3.png",
                        },
                        {
                            name: "img4",
                            linkAddress: "www.baidu.com",
                            url: "root://assets/images/dragComponents/single3.png",
                        },
                        {
                            name: "img5",
                            linkAddress: "www.baidu.com",
                            url: "root://assets/images/dragComponents/single2.png",
                        },
                        {
                            name: "img6",
                            linkAddress: "www.baidu.com",
                            url: "root://assets/images/dragComponents/banner_finance1.png",
                        },
                        {
                            name: "img7",
                            linkAddress: "www.baidu.com",
                            url: "root://assets/images/dragComponents/banner_life1.png",
                        },
                        {
                            name: "img8",
                            linkAddress: "www.baidu.com",
                            url: "root://assets/images/dragComponents/leftBg1.png",
                        },
                        {
                            name: "img9",
                            linkAddress: "www.baidu.com",
                            url: "root://assets/images/dragComponents/leftBg2.png",
                        },
                        {
                            name: "img10",
                            linkAddress: "www.baidu.com",
                            url: "root://assets/images/dragComponents/leftBg3.png",
                        },
                        {
                            name: "img11",
                            linkAddress: "www.baidu.com",
                            url: "root://assets/images/dragComponents/banner_saving2.png",
                        },
                    ],
                },
                mutiOption: {
                    index: 0,
                    key: "chooseValue",
                    showValueList: ["mutil"],
                },
                isRelevance: false,
            },
        ],
        classValues: [
            {
                label: "自定义样式表",
                key: "title",
                type: "textarea",
                name: "van-swiper-other",
                value: "{}",
            },
        ],
        methodValues: [],
        actionValues: [],
        mode: "h5",
    },
    {
        name: "金融日历",
        id: 2,
        componentName: "VabFinancialCalendar",
        mStyle: {
            left: 0,
            top: 0,
            width: 375,
            height: 105,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            zIndex: 0,
        },
        mClass: [],
        propValues: [
            {
                label: "默认选中日期",
                key: "currentDate",
                type: "date",
                value: 1649088000000,
                isModel: true,
            },
            {
                label: "选中日期背景色",
                key: "background",
                type: "color",
                value: "#EDF0F5",
            },
            {
                label: "节假日颜色",
                key: "holidayBackground",
                type: "color",
                value: "#3665ac",
            },
            {
                label: "将来日期颜色",
                key: "featureBackground",
                type: "color",
                value: "#373738",
            },
            {
                label: "过去日期颜色",
                key: "outdateBackground",
                type: "color",
                value: "#646e88",
            },
            {
                label: "跳转内容",
                key: "chooseValue",
                type: "select",
                chooseValue: "",
                options: [
                    {
                        value: "link",
                        label: "链接",
                    },
                    {
                        value: "application",
                        label: "应用",
                    },
                ],
            },
        ],
        classValues: [
            {
                label: "自定义样式表",
                key: "title",
                type: "textarea",
                name: "van-tabbar-other",
                value: "{\n}",
            },
        ],
        methodValues: [],
        actionValues: [
            {
                label: "触发事件",
                key: "clickAction",
                vmodel: "",
                type: "clickAction",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
            },
            {
                label: "是否使用埋点",
                key: "type",
                type: "switch",
                value: false,
            },
            {
                label: "点击埋点",
                key: "track",
                vmodel: "",
                type: "track",
                chooseValue: "click",
                value: {
                    data: [
                        {
                            value: "click",
                            label: "单击时触发",
                            action: "",
                        },
                        {
                            value: "focus",
                            label: "获取焦点时触发",
                        },
                        {
                            value: "blur",
                            label: "失去焦点时触发",
                        },
                    ],
                },
                mutiOption: {
                    index: 1,
                    key: "value",
                    showValueList: [true],
                },
            },
        ],
        mode: "h5",
    },
];
