<template>
    <v-app>
        <v-spacer></v-spacer>
        <v-row justify="center" v-if="!this.$store.state.ingresoUsuario">
            <v-col cols="2" sm="10" md="8" lg="5">
                <div color="teal lighten-2">
                    <h1 color="teal lighten-2">
                        Inicio de sesión
                    </h1>
                </div>
                <v-card ref="form">
                    <v-card-text>
                        <v-container>
                            <h3> Nombre de usuario</h3>
                            <v-text-field ref="name" v-model="name"
                                :rules="[() => !!name || 'Este campo no puede quedar vacio']"
                                :error-messages="errorMessages" required>
                            </v-text-field>
                            <h3> Contraseña</h3>
                            <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" counter
                                @click:append="show1 = !show1" required></v-text-field>
                            <router-link to="/login/problems">¿Olvidaste tu Contraseña?</router-link>
                        </v-container>
                    </v-card-text>
                    <v-container>
                        <v-card-actions>
                            <v-btn color="teal lighten-2" to="/crearcuenta" class="white--text">
                                Crear Cuenta
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn color="teal lighten-2" class="white--text" :class="visibilidadBotonCrear"
                                :disabled="visivilidadBton" @click="verificarUsuario(name,password)">
                                Ingresar
                            </v-btn>
                        </v-card-actions>
                    </v-container>
                    <v-divider class="mt-11"></v-divider>
                </v-card>
            </v-col>
        </v-row>
        <v-container align="center" v-else>
            <v-spacer></v-spacer>
            <h1> No se encontró la página</h1>
            <v-spacer></v-spacer>
        </v-container>
        <v-spacer></v-spacer>
    </v-app>

</template>

<script>

import Swal from 'sweetalert2'

export default {
    data: () => ({
        errorMessages: '',
        name: null,
        show1: false,
        password: '',
        visivilidadBton: true,
        usuarios: [],
        admins: [],
        rules: {
            min: v => v.length >= 8 || 'Minimo 8 caracteres',

        },
    }),
    created() {
        this.listarCuentas();
    },
    computed: {
        visibilidadBotonCrear() {
            if (this.name == '' || this.email == '' || this.verifyemail == '' || this.password == '' || this.verifypassword == '') {
                this.visivilidadBton = true
            } else {
                this.visivilidadBton = false
            }
        },
    },
    watch: {
        name() {
            this.errorMessages = ''
        },
    },
    methods: {
        listarCuentas() {
            this.axios.get("EZ-Usuario")
                .then((response) => {
                    this.usuarios = response.data;
                })
                .catch((e) => {
                    console.log('error' + e);
                })
            this.axios.get("EZ-Admin")
                .then((response) => {
                    this.admins = response.data;
                })
                .catch((e) => {
                    console.log('error' + e);
                })
        },
        verificarUsuario(name, password) {
            var estadoUsuario = false
            var estadoAdmin = false
            var nombreUsuario = ""
            var nombreAdmin = ""
            if (password == '' || name == '') {
                console.log("error")
            } else {
                this.visivilidadBton = false
                for (var i = 0; i < this.usuarios.length; i++) {
                    if (name == this.usuarios[i].nombreUsuario && password == this.usuarios[i].contrasena) {
                        estadoUsuario = true
                        this.$store.state.UsuarioConectadoNombre=this.usuarios[i].nombreUsuario
                        this.$store.state.UsuarioConectadoMail=this.usuarios[i].correo
                        this.$store.state.UsuarioMode="user"
                        estadoAdmin = false
                        nombreUsuario = this.usuarios[i].nombreUsuario
                    }
                }
                for (var i = 0; i < this.admins.length; i++) {
                    if (name == this.admins[i].nombreUsuario && password == this.admins[i].contrasena) {
                        this.$store.state.UsuarioConectadoNombre=this.admins[i].nombreUsuario
                        this.$store.state.UsuarioConectadoMail=this.admins[i].correo
                        this.$store.state.UsuarioMode="admin"
                        estadoAdmin = true
                        estadoUsuario = false
                        nombreAdmin = this.admins[i].nombreUsuario
                    }
                }
                if (estadoUsuario) {
                    //localStorage.setItem(nombreUsuario, 'token_usuario')
                    this.$store.state.ingresoUsuario = true
                    this.$store.state.visibleInicio = true
                    this.$store.state.visibleMarca = true
                    this.$store.state.visibleMujer = true
                    this.$store.state.visibleHombre = true
                    this.$store.state.visibleInventario = false
                    Swal.fire(
                        'Ingreso Correcto!',
                        'Ingresaste de manera exitosa!',
                        'success'
                    )
                    this.$router.push({ path: "/" })
                } else if (estadoAdmin) {
                    //localStorage.setItem(nombreAdmin, 'token_admin')
                    this.$store.state.ingresoUsuario = true
                    this.$store.state.visibleInicio = false
                    this.$store.state.visibleMarca = false
                    this.$store.state.visibleMujer = false
                    this.$store.state.visibleHombre = false
                    this.$store.state.visibleInventario = true
                    Swal.fire(
                        'Ingreso Correcto!',
                        'Ingresaste de manera exitosa!',
                        'success'
                    )
                    this.$router.push({ path: "inventario/admin" })
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Ingreso fallido...',
                        text: 'Datos incorrectos!',
                    })
                }
            }
        }
    },
}
</script>