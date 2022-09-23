import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
<<<<<<< HEAD
    component: HomeView
=======
    component: () => import('../views/VistaCatalogo.vue')
>>>>>>> PaulQuezada
  },
  {
    path: '/about',
    name: 'about',
<<<<<<< HEAD
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
=======
    component: () => import('../views/AboutView.vue')
>>>>>>> PaulQuezada
  },
  {
    path: '/catalogoHombre',
    name: 'catalogoHombre',
<<<<<<< HEAD
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VistaCatalogo.vue')
=======
    component: () => import('../views/VistaCatalogo.vue')
>>>>>>> PaulQuezada
  },
  {
    path: '/login',
    name: 'login',
<<<<<<< HEAD
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VistaLogin.vue')
=======
    component: () => import('../views/VistaLogin.vue')
>>>>>>> PaulQuezada
  },
  {
    path: '/crearcuenta',
    name: 'crearcuenta',
<<<<<<< HEAD
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VistaCrearCuenta.vue')
  },
  {
    path: '/viejoscachondosa2cuadras',
    name: 'adminPrueba',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VistaAdmin.vue')
=======
    component: () => import('../views/VistaCrearCuenta.vue')
  },
  {
    path: '/catalogoMarca',
    name: 'catalogomarca',
    component: () => import('../views/VistaMarca.vue')
>>>>>>> PaulQuezada
  },
  {
    path: '/login/admin',
    name: 'admin',
<<<<<<< HEAD
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Vista.vue')
=======
    component: () => import('../views/Vista.vue')
>>>>>>> PaulQuezada
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
