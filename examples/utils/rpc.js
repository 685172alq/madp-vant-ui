// /*
//  * @Author: your name
//  * @Date: 2021-03-19 10:15:32
//  * @LastEditTime: 2021-05-26 16:38:35
//  * @LastEditors: Please set LastEditors
//  * @Description: In User Settings Edit
//  * @FilePath: \madp-2c-h5\10000005\src\utils\rpc.js
//  */

// // import madp from '../../public/madp'
// // Vue.prototype.$madp=madp
// // import moment from "moment";
// import store from "@/store/index";
// import madp from "@/utils/madp";

// export function rpcFace(url, params) {
//   //个人信息
//   let shareStorageMsg = {};
//   if (store.state.shareStorageMsg) {
//     shareStorageMsg = store.state.shareStorageMsg;
//   }
//   // 异步
//   return new Promise((resolve, reject) => {
//     // debugger;
//     // if (!store.state.rpcStatus) {
//     //   // 当前未在请求中 无需添加弹窗
//     madp.ui.showWaiting({
//       message: "正在加载中...",
//       success: function () {
//         //   madp.ui.toast(JSON.stringify(result));
//       },
//       error: function () {
//         //   madp.ui.toast("失败:" + JSON.stringify(error));
//       },
//     });
//     //   store.commit("updateRpcStatus", true);
//     // }
//     // madp.ui.toast("开启");
//     //   http://10.114.14.60:8888/cis/dispatch/execute
//     madp.rpc.requestFace({
//       headers: {
//         // "Madp-TenantId": "74",
//         // "Madp-AppId": "4dce702cb6524413",
//         "Content-Type": "application/x-www-form-urlencoded",
//         "Api-Id": params.api_id,
//       },
//       gateway: "",
//       method: params.method || "POST",
//       path: url || "/madp/db" /* "/cis/dispatch/execute" */, //"/link/demo/login"
//       requestData: params.data || {},
//       success: function (result) {
//         console.log("success", result);
//         madp.ui.closeWaiting();
//         store.commit("updateRpcStatus", false);
//         // madp.ui.toast("res=" + JSON.stringify(result));
//         resolve(result);
//       },
//       error: function (error) {
//         console.error("error", error);
//         madp.ui.closeWaiting();
//         store.commit("updateRpcStatus", false);
//         // madp.ui.toast("失败:" + JSON.stringify(error));
//         reject(error);
//       },
//     });
//   });
// }

// export function rpc(url, params) {
//   //个人信息
//   let shareStorageMsg = {};
//   if (store.state.shareStorageMsg) {
//     shareStorageMsg = store.state.shareStorageMsg;
//   }
//   // 异步
//   return new Promise((resolve, reject) => {
//     // debugger;
//     // if (!store.state.rpcStatus) {
//     //   // 当前未在请求中 无需添加弹窗
//     // madp.ui.showWaiting({
//     //   message: "正在加载中...",
//     //   success: function (result) {
//     //     //   madp.ui.toast(JSON.stringify(result));
//     //   },
//     //   error: function (error) {
//     //     //   madp.ui.toast("失败:" + JSON.stringify(error));
//     //   }
//     // });
//     //   store.commit("updateRpcStatus", true);
//     // }
//     // madp.ui.toast("开启");
//     //   http://10.114.14.60:8888/cis/dispatch/execute
//     console.log("开启");
//     madp.rpc.request({
//       headers: {
//         // "Madp-TenantId": "74",
//         // "Madp-AppId": "4dce702cb6524413",
//         "Content-Type": "application/x-www-form-urlencoded",
//         "Api-Id": params.api_id,
//       },
//       gateway: "",
//       method: params.method || "POST",
//       path: url || "/madp/db" /* "/cis/dispatch/execute" */, //"/link/demo/login"
//       requestData: params.data || {},
//       success: function (result) {
//         console.log("success", result);
//         madp.ui.closeWaiting();
//         store.commit("updateRpcStatus", false);
//         // madp.ui.toast("res=" + JSON.stringify(result));
//         resolve(result);
//       },
//       error: function (error) {
//         console.error("error", error);
//         madp.ui.closeWaiting();
//         store.commit("updateRpcStatus", false);
//         // madp.ui.toast("失败:" + JSON.stringify(error));
//         reject(error);
//       },
//     });
//   });
// }
