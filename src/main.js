import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import mouse from './assets/js/mouseClick.js'

// import mouseMove from './assets/js/mousemove.js'
// import axios from 'axios'
// 请求地址
// vue.prototype.$http=axios;
// axios.defaults.baseURL='地址'


//通过directive下的index.js文件导入指令

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(mouse)
// Vue.use(mouseMove)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
