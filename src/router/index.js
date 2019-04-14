import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
	{
		path: "/",
		redirect: "index"
	},
	{
		path: "/index",
		name: "index",
		component: () => import('@/views/index')
	},
	{
		path: "/redpacket",
		name: "redpacket",
		component: () => import('@/views/red-packet')
	},
	{
		path: "/memberpay",
		name: "memberpay",
		component: () => import('@/views/member-pay')
	},
	{
		path: "/successbuy",
		name: "successbuy",
		component: () => import('@/views/success-buy')
	},
	{
		path: "/tgplan",
		name: "tgplan",
		component: () => import('@/views/tg-plan')
	},
	{
		path: "/withdrawaapply",
		name: "withdrawaapply",
		component: () => import('@/views/withdrawa-apply')
	},
	{
		path: "/share",
		name: "share",
		component: () => import('@/views/share')
	},
	{
		path: "/card",
		name: "card",
		component: () => import('@/views/card')
	}
]

var router = new VueRouter({
	mode: 'history',
	routes
})
export default router;