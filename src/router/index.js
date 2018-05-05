import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/home/index.vue';
// import Show from '../components/home/show.vue';
Vue.use(Router);
export default new Router ({
	routes: [{
		path: '/',
		redirect: '/home'
	}, {
		path: '/home',
		name: 'home',
		component: Home
	}]
})
