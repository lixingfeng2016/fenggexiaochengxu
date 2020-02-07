import {request} from '../../request/request.js'



/**
 * 页面的初始数据
 */



// components/seatchInput/seatchInput.js
Component({
  /**
   * 组件的属性列表
   */

  properties: {
    flies: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    particulars: [],
    showcolor: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setcolor(e) {
      // console.log(e)
      this.setData({
        showcolor: e.currentTarget.dataset.index,
        particulars: e.currentTarget.dataset.item.children
      })
    },
  }
})
