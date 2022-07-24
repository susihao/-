import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'font-awesome/css/font-awesome.min.css'
import axios from 'axios'
import router from './router/index.js'
import service from '@/servivce.js'
import echarts from 'echarts'


// 路由导航守卫
router.beforeEach((to, from, next) => {
  if (!localStorage.getItem('userName')) {
    if (to.path !== '/login') {
      next('/login')
    } else next()
  } else next()
})

Vue.use(ElementUI)
Vue.prototype.$axios = axios
Vue.prototype.$service = service
Vue.prototype.$echarts = echarts


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
