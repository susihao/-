// 数据接口封装

import service from "../servivce.js";
import qs from 'qs'

// 登录接口
export function loginApi(data) {
  return service({
    method: 'post',
    url: '/login',
    data
  })
}

// 学生列表接口
export function StudentsApi(params) {
  return service({
    method: 'get',
    url: '/students',
    params
  })
}
export function DelStuApi(id) {
  return service({
    method: "delete",
    url: '/students/' + id,
  })
}

// 学生信息列表接口

export function InfoApi(data, text) {
  data = qs.stringify(data)
  return service({
    method: text,
    url: '/info',
    data
  })
}
// export function postInfoApi(data) {
//   data = qs.stringify(data)
//   return service({
//     method: 'post',
//     url: '/info',
//     data
//   })
// }
// export function modInfoApi(data) {
//   data = qs.stringify(data)
//   return service({
//     method: 'put',
//     url: '/info/',
//     data
//   })
// }
export function delInfoApi(id) {
  return service({
    method: 'delete',
    url: '/info/' + id
  })
}

// 数据概览
export function dataViewApi() {
  return service({
    method: 'get',
    url: '/dataview'
  })
}

// 旅游地图
export function travel() {
  return service({
    method: 'get',
    url: '/travel'
  })
}