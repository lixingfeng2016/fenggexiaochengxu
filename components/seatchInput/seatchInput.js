// components/seatchInput/seatchInput.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    numbersss: {
      type: String,
      value: ''
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    headltap(e){
      console.log('我被点击 了')
      this.triggerEvent('mytap','哈哈')
    }
  }
})
