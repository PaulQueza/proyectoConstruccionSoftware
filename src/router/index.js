import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/VistaCatalogo.vue')
  },
  {
    path: '/catalogoHombre',
    name: 'catalogoHombre',
    component: () => import('../views/VistaCatalogoM.vue')
  },
  {
    path: '/catalogoMujer',
    name: 'catalogoMujer',
    component: () => import('../views/VistaCatalogoF.vue')
  },
  {
    path: '/login',
    name: 'login',
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
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
