import {createRouter, createWebHashHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Login from '@/components/Login.vue';
import GuardarVehiculo from '@/components/GuardarVehiculo.vue';

const routes = [{
		path: '/',
		name: 'home',
		component: Login
	},{
		path: '/guardarVehiculo',
		name: 'guardarVehiculo',
		component: GuardarVehiculo
	}
]

const router = createRouter({history: createWebHashHistory(), routes})

/*router.beforeEach((to, from, next) => {
	const isAuthenticated = localStorage.getItem('token') !== null;

	if (to.name !== 'home' && ! isAuthenticated) {
		next({name: 'home'});
	} else {
		next();
	}
});
*/
export default router
