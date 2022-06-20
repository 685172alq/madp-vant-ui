/*
 * @Description:
 * @Author:
 * @Date: 2020-06-16 10:09:23
 * @LastEditTime: 2021-05-26 12:18:13
 * @LastEditors: Please set LastEditors
 */

// const url = 'http://10.10.106.16:9488'//晓伟本地
// const url = 'http://172.30.197.1:8239'//准生产
const url = "http://172.30.197.21:9239"; //测试
const path = require("path");
const IS_PROD = ["production", "prod"].includes(process.env.NODE_ENV);
const CompressionPlugin = require("compression-webpack-plugin"); //gzip 压缩
const BundleAnalyzerPlugin =
    require("webpack-bundle-analyzer").BundleAnalyzerPlugin; //配置打包分析
// let projectName = process.env.PROJECT_NAME || "10000001";
module.exports = {
    pages: {
        index: {
            // page 的入口
            entry: "examples/main.js",
            // 模板来源
            template: "public/index.html",
            // 在 dist/index.html 的输出
            filename: "index.html",
            // 当使用 title 选项时，
            // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
            // title: '',
        },
    },
    lintOnSave: true, //关闭 eslint 语法检测
    publicPath: "./", // hash 模式使用
    // outputDir: "dist/" + projectName + "/", //打包后的项目目录名称
    productionSourceMap: false, //打包取消多余map文件
    //   publicPath: '/', // history模式使用
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true, //解决less版本兼容问题
            },
            postcss: {
                plugins: [
                    require("autoprefixer")({
                        // 配置使用 autoprefixer
                        overrideBrowserslist: ["last 15 versions"],
                    }),
                    require("postcss-pxtorem")({
                        rootValue: 75, // 换算的基数 37.5
                        // 忽略转换正则匹配项。插件会转化所有的样式的px。比如引入了三方UI，也会被转化。目前我使用 selectorBlackList字段，来过滤
                        //如果个别地方不想转化px。可以简单的使用大写的 PX 或 Px 。
                        selectorBlackList: ["ig"], // 转换正则匹配项
                        propList: ["*"],
                        exclude: /node_modules/,
                    }),
                ],
            },
        },
    },
    devServer: {
        proxy: {
            //配置跨域
            "/": {
                target: url, // 接口的域名
                ws: false, // 是否启用websockets
                // changOrigin: true, // 开启代理，在本地创建一个虚拟服务端
                pathRewrite: {
                    "^/": "/",
                },
            },
        },
    },
    chainWebpack: (config) => {
        // 设置环境变量
        config.plugin("define").tap((args) => {
            args[0]["process.env"].PROJECT_NAME = JSON.stringify(
                process.env.PROJECT_NAME
            );
            return args;
        });
        // 打包分析
        if (IS_PROD) {
            config.plugin("webpack-report").use(BundleAnalyzerPlugin, [
                {
                    analyzerMode: "static",
                },
            ]);
            // config.optimization.minimize(true);
            // config.optimization.splitChunks({
            //   chunks: 'all'
            // })
        }
        const oneOfsMap = config.module.rule("scss").oneOfs.store;
        oneOfsMap.forEach((item) => {
            item.use("sass-resources-loader")
                .loader("sass-resources-loader")
                .options({
                    // 要公用的scss的路径
                    resources: "examples/assets/style/common.scss",
                })
                .end();
        });
        // 移除prefetch插件，避免加载多余的资源
        config.plugins.delete("prefetch");

        // 压缩图片
        const imagesRule = config.module.rule("images");
        imagesRule.uses.clear();
        imagesRule
            .use("file-loader")
            .loader("url-loader")
            .options({
                limit: 10240,
                fallback: {
                    loader: "file-loader",
                    options: {
                        outputPath: "static/images",
                    },
                },
            });
        //扩展配置 packages加入编译
        config.module
            .rule("js")
            .include.add(
                path.resolve(__dirname, "packages/components/js-components/index.js")
            )
            .end()
            .use("babel")
            .loader("babel-loader")
            .tap((Options) => {
                // 修改它的选项
                return Options;
            });
    },
    // configureWebpack: (config) => {
    //     if (process.env.NODE_ENV === 'production') {
    //         // 为生产环境修改配置
    //         config.mode = 'production';
    //         config.optimization.minimizer = [
    //             // new UglifyJsPlugin({
    //             //     uglifyOptions: {
    //             //         compress: {
    //             //             warnings: false,
    //             //             drop_console: true, //console
    //             //             drop_debugger: true,
    //             //             pure_funcs: ['console.log'], //移除console
    //             //         },
    //             //     },
    //             // }),
    //         ];
    //         return {
    //             plugins: [
    //                 new CompressionPlugin({
    //                     test: /\.js$|\.html$|\.css$|\.jpg$|\.jpeg$|\.png/, // 需要压缩的文件类型
    //                     threshold: 10240, // 归档需要进行压缩的文件大小最小值，我这个是10K以上的进行压缩
    //                     deleteOriginalAssets: false, // 是否删除原文件
    //                 }),
    //             ],
    //         };
    //     } else {
    //         // 为开发环境修改配置
    //         config.mode = 'development';
    //     }
    // },
    //webpack配置
    configureWebpack: {
        //关闭 webpack 的性能提示
        // performance: {
        //   hints:false
        // }
        //警告 webpack 的性能提示

        performance: {
            //关闭 webpack 的性能提示
            // performance: {
            //   hints:false
            // },

            //或者

            hints: "warning",
            //入口起点的最大体积
            maxEntrypointSize: 50000000,
            //生成文件的最大体积
            maxAssetSize: 30000000,
            //只给出 js 文件的性能提示
            assetFilter: function (assetFilename) {
                return assetFilename.endsWith(".js");
            },
        },
        plugins: [
            new CompressionPlugin({
                test: /\.js$|\.html$|\.css$|\.jpg$|\.jpeg$|\.png/, // 需要压缩的文件类型
                threshold: 10240, // 归档需要进行压缩的文件大小最小值，我这个是10K以上的进行压缩
                deleteOriginalAssets: false, // 是否删除原文件
            }),
        ],
    },
};
