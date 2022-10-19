import Vue from 'vue'
import VueRouter from 'vue-router'
<<<<<<< HEAD
import HomeView from '../views/HomeView.vue'
=======
>>>>>>> PaulQuezada

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
<<<<<<< HEAD
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
=======
    component: () => import('../views/VistaCatalogo.vue')
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
    component: () => import('../views/VistaCatalogoM.vue')
  },
  {
    path: '/catalogoMujer',
    name: 'catalogoMujer',
    component: () => import('../views/VistaCatalogoF.vue')
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
  },
  {
    path: '/crearcuenta',
    name: 'crearcuenta',
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
  },
  {
    path: '/login/admin',
    name: 'admin',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Vista.vue')
=======
    component: () => import('../views/VistaLogin.vue')
  },
  {
    path: '/crearcuenta',
    component: () => import('../views/VistaCrearCuenta.vue')
  },
  {
    path: '/inventario/admin',
    name: 'adminPrueba',
    component: () => import('../views/VistaAdmin.vue')
  },
  {
    path: '/catalogoMarca',
    name: 'catalogomarca',
    component: () => import('../views/VistaMarca.vue')
  },
  {
    path: '/filterMarca',
    name: 'filterMarca',
    component: () => import('../views/VistaCatalogoMarcas.vue')
  },
  {
    path: '/filterMarca',
    name: 'filterMarca',
    component: () => import('../views/VistaCatalogoMarcas.vue')
  },
  {
    path: '/busqueda/:name',
    name: 'busqueda',
    component: () => import('../views/VistaBusqueda.vue')
  },
  {
    path: '/filtros/:name',
    name: 'filtros',
    component: () => import('../views/VistaFiltros.vue')
  },
  {
    path: '/carritocompras',
    name: 'carritocompras',
    component: () => import('../views/VistaCarritodeCompras.vue')
  },
  {
    path: '/editarDatos',
    name: 'editarDatos',
    component: () => import('../views/VistaCuenta.vue')
>>>>>>> PaulQuezada
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
