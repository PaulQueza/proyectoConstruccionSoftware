import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/VistaCatalogoM.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue')
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
    path: '/inventario/admin ',
    name: 'adminPrueba',
    component: () => import('../views/VistaAdmin.vue')
  },
  {
    path: '/catalogoMarca',
    name: 'catalogomarca',
    component: () => import('../views/VistaMarca.vue')
  },
  {
    path: '/login/admin',
    name: 'admin',
    component: () => import('../views/Vista.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
