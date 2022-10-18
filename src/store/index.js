import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    vistaMarcaAdidas:false,
    vistaMarcaFila:false,
    vistaMarcaPuma: false,
    vistaMarcaNike:false,
    busqueda: "",
    tags:false,
    precio:false,
    precioMax:null,
    precioMin:null,
    talla:false,
    tallaFiltrar:null,
    Urbana:false,
    Casual:false,
    Deportiva:false,
    ingresoUsuario: false,
    ingresoAdmin: false,
    visibleInicio:true,
    visibleMarca: true,
    visibleHombre: true,
    visibleMujer: true,
    visibleInventario: false,
    visibleBusqueda: true,
    UsuarioConectadoNombre:null,
    UsuarioConectadoMail: null,
    UsuarioMode:null,
    carroCompras:[]
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
