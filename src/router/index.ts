import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import DashBoardView from '../views/DashBoardView.vue'

const routes: Array<RouteRecordRaw> = [
	{
		path: '/',
		name: 'dashboard',
		component: DashBoardView
	}
]

const router = createRouter({
	history: createWebHashHistory(),
	routes
})

export default router
