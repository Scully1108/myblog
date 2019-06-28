// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
// import VueResource from 'vue-resource'
import axios from 'axios'
import VueRouter from 'vue-router'
import Routes from './routes'


Vue.config.productionTip = false
Vue.prototype.$axios=axios
// Vue.use(VueResource)
Vue.use(VueRouter)
// 自定义全局指令 随机色
// Vue.directive('rainbow',{
// 	bind(el,binding,vnode){
// 		el.style.color="#" + Math.random().toString(16).slice(2,8)
// 	}
// })
// 自定义全局过滤器 
// Vue.filter("to-uppercase",function(value){
// 	return value.toUpperCase()
// })
// Vue.filter('snippet',function(value){
// 	return value.slice(0,100) + '...'
// })

// 创建路由
const router = new VueRouter({
	routes:Routes,
	mode:"history"
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
	router:router
})
