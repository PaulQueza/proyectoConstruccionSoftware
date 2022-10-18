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
    Urbana:false,
    Casual:false,
    Deportiva:false,
    PrecioCheck:false,
    ingresoUsuario: false,
    ingresoAdmin: false,
    visibleInicio:true,
    visibleMarca: true,
    visibleHombre: true,
    visibleMujer: true,
    visibleInventario: false,
    UsuarioConectadoNombre:null,
    UsuarioConectadoMail: null,
    UsuarioMode:null,
    carroCompras:[],
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
