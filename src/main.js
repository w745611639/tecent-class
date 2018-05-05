import Vue from 'vue'
import App from './App.vue'
import router from "./router";
import store from './store';
import './style/reset.scss';
import axios from 'axios';
Vue.config.productionTip = false;
// router.beforeEach((to, from, next) => {
// 	console.log(to, from);
// 	next();
// });
new Vue({
  el: '#app',
  router,
  store,
  components: {
  	App
  },
  template: '<App></App>',
  beforeCreate () {
  	// 在这里发送请求
  	axios.get('https://www.easy-mock.com/mock/5aebc5e579774c799ea2a587/course/getdata').then(res => {
  		this.$store.commit('addState', res.data.data);
  		console.log(res.data.data)
  	})
  	// console.log(this.$store)
  }
})
