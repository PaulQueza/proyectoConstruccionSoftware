<template>
  <v-app>
    <v-app-bar color="teal lighten-2" app height="100">
      <router-link to="/">
        <v-img @click=mostrarBuscador() class="mx-12" max-height="100" max-width="100" src="./assets/icono/logo.png">
        </v-img>
      </router-link>
      <v-tabs centered class="ml-n9" color="white" light>
        <v-tab to="/" v-if="this.$store.state.visibleInicio==true">
          Inicio
        </v-tab>
        <v-tab @click=mostrarBuscador() to="/catalogoHombre" v-if="this.$store.state.visibleMarca==true">
          Hombre
        </v-tab>
        <v-tab @click=mostrarBuscador() to="/catalogoMujer" v-if="this.$store.state.visibleMujer==true">
          Mujer
        </v-tab>
        <v-tab @click=mostrarBuscador() to="/catalogoMarca" v-if="this.$store.state.visibleMarca==true">
          Marca
        </v-tab>
        <v-tab @click=mostrarBuscador() to="/inventario/admin" v-if="this.$store.state.visibleInventario">
          Inventario
        </v-tab>
      </v-tabs>
      <v-container>
        <v-row justify="space-around">
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-text-field v-model="buscar" prepend-inner-icon="mdi-magnify" rounded dense flat hide-details solo
            label="Buscar" @keyup.enter="busqueda" v-if="visibleBusqueda===true">
          </v-text-field>
          <div>
            
            <v-btn color="teal lighten-5" rounded class="mx-1" to="/login" v-if="!this.$store.state.ingresoUsuario">
              <Icon icon="ant-design:user-outlined" />
            </v-btn>
            <v-menu v-else>
              <template v-slot:activator="{on}">
                <v-btn icon x-large v-on="on">
                  <v-avatar color="teal lighten-5" size="45">
                    <Icon icon="carbon:user-avatar-filled-alt" width="30" height="30" />
                  </v-avatar>
                </v-btn>
              </template>
              <v-card>
                <v-list-item-content class="justify-center">
                  <div class="mx-auto text-center">
                    <v-avatar color="brown" size="70">
                      <span class="white--text text-h5">{{this.$store.state.UsuarioMode}}</span>
                    </v-avatar>
                    <h3>{{this.$store.state.UsuarioConectadoNombre}}</h3>
                    <p class="text-caption mt-1">
                      {{this.$store.state.UsuarioConectadoMail}}
                    </p>
                    <v-divider class="my-3"></v-divider>
                    <v-btn depressed rounded text to="/editarDatos" v-if="this.$store.state.UsuarioMode==='user'">
                      Editar datos
                    </v-btn>
                    <v-divider class="my-3"></v-divider>
                    <v-btn depressed rounded text @click="cerrarSesion()">
                      Cerrar Sesion
                    </v-btn>
                  </div>
                </v-list-item-content>
              </v-card>
            </v-menu>
            <v-btn color="teal lighten-5" rounded class="mx-1" to="/carritocompras">
              <Icon icon="maki:shop" />
            </v-btn>
          </div>
        </v-row>
      </v-container>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>

    <v-footer color="grey" padless>
      <v-row justify="center" no-gutters>
        <v-btn v-for="icono in iconos" :key="icono" color="white" text rounded class="my-2" icon>
          <v-icon size="24px">{{icono}}</v-icon>
        </v-btn>
        <v-col class="grey py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Ez-Neackers</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import { Icon } from "@iconify/vue2";
import axios from "axios";
axios.defaults.baseURL = 'http://localhost:3000/api';
import Swal from 'sweetalert2'
export default {
  data: () => ({
    iconos: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
    buscar: null,
    visibleBusqueda: true,
    visibleMarca: true,
    visibleHombre: true,
    visibleMujer: true,
    visibleInventario: true,
    usuarios: [],
    admins: [],
    usuarioConectado: {
      nombreUsuario: "",
      correo: "",
    }
  }),
  components: {
    Icon
  },
  beforeMount: function () {
    axios.get("EZ-Usuario")
      .then((response) => {
        this.usuarios = response.data;
        for (var i = 0; i < this.usuarios.length; i++) {
          this.$store.state.ingresoUsuario = false
          if (localStorage.getItem(this.usuarios[i].nombreUsuario)) {
            this.$store.state.UsuarioConectadoNombre = this.usuarios[i].nombreUsuario
            this.$store.state.UsuarioConectadoMail = this.usuarios[i].correo
            this.$store.state.ingresoUsuario = true
            this.$store.state.UsuarioMode = "user"
            this.$store.state.visibleInicio = true
            this.$store.state.visibleMarca = true
            this.$store.state.visibleMujer = true
            this.$store.state.visibleHombre = true
            this.$store.state.visibleInventario = false
            console.log(this.usuarios[i].nombreUsuario + " || " + this.usuarios[i].correo + " || "+this.$store.state.ingresoUsuario)
            break
          }
        }
      })
      .catch((e) => {
        console.log('error' + e);
      })
    axios.get("EZ-Admin")
      .then((response) => {
        this.admins = response.data;
        for (var i = 0; i < this.admins.length; i++) {
          this.$store.state.ingresoUsuario = false
          if (localStorage.getItem(this.admins[i].nombreUsuario)) {
            this.$store.state.UsuarioConectadoNombre = this.admins[i].nombreUsuario
            this.$store.state.UsuarioConectadoMail = this.admins[i].correo
            this.$store.state.UsuarioMode = "admin"
            this.$store.state.ingresoUsuario = true
            this.$store.state.visibleInicio = false
            this.$store.state.visibleMarca = false
            this.$store.state.visibleMujer = false
            this.$store.state.visibleHombre = false
            this.$store.state.visibleInventario = true
            break
          }
        }
      })
      .catch((e) => {
        console.log('error' + e);
      })
  },
  methods: {
    mostrarBuscador() {
      this.visibleBusqueda = true
    },
    busqueda() {
      if (this.buscar === "") {
        // No se busca nada
      } else {
        this.$store.state.busqueda = this.buscar
        if (this.$route.path !== `/busqueda/${this.buscar}`) {
          this.visibleBusqueda = false
          this.$router.push({ path: `/busqueda/${this.buscar}` })
          this.buscar = ""
        }
      }
    },
    cerrarSesion() {
      var estado = false
      for (var i = 0; i < this.usuarios.length; i++) {
        if (localStorage.getItem(this.usuarios[i].nombreUsuario)) {
          localStorage.removeItem(this.usuarios[i].nombreUsuario)
          estado = true
        }
      }
      for (var i = 0; i < this.admins.length; i++) {
        if (localStorage.getItem(this.admins[i].nombreUsuario)) {
          localStorage.removeItem(this.admins[i].nombreUsuario)
          estado = true
        }
      }
      if (estado) {
        Swal.fire(
          'Saliste de tu cuenta!',
        )
        this.$store.state.ingresoUsuario = false
        if (this.$route.path !== `/`) {
          this.$router.push({ path: "/" })
        }
      } else {
        this.$store.state.ingresoUsuario = true
      }
      this.$store.state.visibleInicio = true
      this.$store.state.visibleMarca = true
      this.$store.state.visibleMujer = true
      this.$store.state.visibleHombre = true
      this.$store.state.visibleInventario = false
    },
  },
}
</script>