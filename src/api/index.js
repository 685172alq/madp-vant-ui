// /*
//  * @Author: your name
//  * @Date: 2021-05-26 09:40:19
//  * @LastEditTime: 2021-05-29 10:40:43
//  * @LastEditors: Please set LastEditors
//  * @Description: In User Settings Edit
//  * @FilePath: \madp-2c-h5\10000002\src\api\index.js
//  */
// import request from "@/utils/axios";
// import { rpc } from "@/utils/rpc.js";
// // 测试数据
// export function test(params) {
//   if (clientMode) {
//     let requestData = {
//       api_id: "aa.bb",
//       data: params,
//       method: "get",
//     };
//     return rpc("/cgs/consumer/page", requestData);
//   } else {
//     return request({
//       url: "/cgs/consumer/page",
//       method: "get",
//       params: params,
//     });
//   }
// }
// // 登录
// export function login(params) {
//   if (clientMode) {
//     let requestData = {
//       api_id: "aa.bb",
//       data: params,
//       method: "post",
//     };
//     return rpc("/cgs/consumer/page", requestData);
//   } else {
//     return request({
//       url: "/wms_app_c/app/login.do",
//       method: "post",
//       params: params,
//       headers: {
//         "Content-Type": "application/json;charset=UTF-8",
//       },
//     });
//   }
// }
