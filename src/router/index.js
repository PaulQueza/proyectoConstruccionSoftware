import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
<<<<<<< HEAD
<<<<<<< HEAD
    component: HomeView
=======
    component: () => import('../views/VistaCatalogo.vue')
>>>>>>> PaulQuezada
=======
    component: HomeView
>>>>>>> AlvaroHerrera
  },
  {
    path: '/about',
    name: 'about',
<<<<<<< HEAD
<<<<<<< HEAD
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
=======
    component: () => import('../views/AboutView.vue')
>>>>>>> PaulQuezada
=======

    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
>>>>>>> AlvaroHerrera
  },
  {
    path: '/catalogoHombre',
    name: 'catalogoHombre',
<<<<<<< HEAD
<<<<<<< HEAD
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VistaCatalogo.vue')
=======
    component: () => import('../views/VistaCatalogo.vue')
>>>>>>> PaulQuezada
=======
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VistaCatalogoM.vue')
  },
  {
    path: '/catalogoMujer',
    name: 'catalogoMujer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VistaCatalogoF.vue')
>>>>>>> AlvaroHerrera
  },
  {
    path: '/login',
    name: 'login',
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> AlvaroHerrera
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VistaLogin.vue')
<<<<<<< HEAD
=======
    component: () => import('../views/VistaLogin.vue')
>>>>>>> PaulQuezada
=======
>>>>>>> AlvaroHerrera
  },
  {
    path: '/crearcuenta',
    name: 'crearcuenta',
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> AlvaroHerrera
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VistaCrearCuenta.vue')
  },
  {
<<<<<<< HEAD
    path: '/viejoscachondosa2cuadras',
=======
    path: '/inventario/admin ',
>>>>>>> AlvaroHerrera
    name: 'adminPrueba',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/VistaAdmin.vue')
<<<<<<< HEAD
=======
    component: () => import('../views/VistaCrearCuenta.vue')
  },
  {
    path: '/catalogoMarca',
    name: 'catalogomarca',
    component: () => import('../views/VistaMarca.vue')
>>>>>>> PaulQuezada
=======
>>>>>>> AlvaroHerrera
  },
  {
    path: '/login/admin',
    name: 'admin',
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> AlvaroHerrera
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Vista.vue')
<<<<<<< HEAD
=======
    component: () => import('../views/Vista.vue')
>>>>>>> PaulQuezada
=======
>>>>>>> AlvaroHerrera
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
