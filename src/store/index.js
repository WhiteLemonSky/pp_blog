import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  //数据
  state: {
    testnum:1,

    scrolltopA: 0,//滚动之前的距离
    scrollStep:0,//滚动的距离
    windowWidth: document.documentElement.clientWidth, //实时屏幕宽度
  },
  //计算属性相当于
  getters:{
    
  },
  //方法
  mutations: {
    //获取屏幕的宽度
    getWindowWidth:state=>{
    console.log(state.windowWidth);
    },
    //设置屏幕的宽度
    setWindowWidth:(state,newWindowWidth)=>{
        state.windowWidth=newWindowWidth;
    },
    

  },
  //异步
  actions: {
  },
  //模块
  modules: {
  }
})
