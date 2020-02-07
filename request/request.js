// 配置url
// 添加遮罩
// 使用promise进行封装

import {
  BASE_URL
} from './url.js'

export const request = (params) => {
  wx.showLoading({
    title: '正在加载中...',
    mask: true
  })


  return new Promise(function(resolve, reject) {
    wx.request({
      ...params,
      url: BASE_URL + params.url,
      success: (res) => {
        resolve(res)
      },
      fail: (err) => {
        reject(err)
      },
      complete: () => {
        wx.hideLoading()
      }
    })
  })
}