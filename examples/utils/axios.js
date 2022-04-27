import axios from "axios";
import { Toast } from "vant";
let loading = null;
// // 请求加载效果
function startLoading() {
    loading = Toast.loading({
        forbidClick: true,
        className: "custom-toast",
        loadingType: "spinner",
        message: "加载中...",
        duration: 0
    });
}

// 关闭加载效果
function endLoading() {
    if (loading) loading.clear();
}
axios.defaults.timeout = 24000; // 请求超时时间
if (process.env.NODE_ENV === "production") {
    //axios.defaults.baseURL='http://10.114.14.100:9080'
}
// axios.defaults.headers.post['Content-Type'] =
//     'application/x-www-form-urlencoded;charset=UTF-8' // post请求头的设置
// axios 请求拦截器
axios.interceptors.request.use(
    (config) => {
        startLoading();
        // 可在此设置要发送的token
        return config;
    },
    (error) => {
        endLoading();
        return Promise.error(error);
    }
);

// axios respone拦截器
axios.interceptors.response.use(
    (response) => {
        endLoading();
        if (response.status === 200 && response.data.code == "000000") {
            return Promise.resolve(response.data);
        } else {
            endLoading();
            Toast.fail({
                className: "custom-toast",
                message: response.data.desc
            });
            return Promise.reject(response.data);
        }
    },
    (error) => {
        endLoading();
        const responseCode = error;
        switch (responseCode) {
        case 401:
            break;
            // 404请求不存在
        case 404:
            Toast.fail({
                className: "custom-toast",
                message: "网络请求超时"
            });
            break;
        default:
            Toast.fail({
                className: "custom-toast",
                message: error.response.data.msg
            });
        }

        // 断网 或者 请求超时 状态
        if (!error.message) {
            // 请求超时状态
            if (error.message.includes("timeout")) {
                Toast.fail({
                    className: "custom-toast",
                    message: "请求超时，请检查网络是否连接正常"
                });
            } else {
                // 可以展示断网组件
                Toast.fail({
                    className: "custom-toast",
                    message: "请求超时，请检查网络是否连接正常"
                });
            }
            return;
        }
        return Promise.reject(error.response);
    }
);
export default axios;
// export function getRequest(url, params = {}) {
//     let axiosData = {
//         method: "post",
//         url,
//         data:params
//     }
//     return new Promise((reslove, reject) => {
//         axios(axiosData)
//             .then(res => {
//                 reslove(res);
//             }).catch(err => {
//                 reject(err)
//             })
//     })
// }
