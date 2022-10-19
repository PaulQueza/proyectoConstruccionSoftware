<template>
    <v-app>
        <!-- Editar datos cuenta cliente -->
        <v-container>
            <v-dialog v-model="drawerEditarDatosCliente" max-width="700px">
                <v-card>
                    <v-card-title>
                        <span class="text-h5">Editar datos cuenta cliente</span>
                    </v-card-title>
                    <v-card-text>
                        <v-col>
                            <v-card-subtitle>asjdksa</v-card-subtitle>
                            <v-row>
                                <v-spacer></v-spacer>
                                <v-btn class="white--text" color="teal lighten-2" @click="editarDatosCliente(false)">
                                    Guardar Cambios</v-btn>
                                <v-spacer></v-spacer>
                            </v-row>
                        </v-col>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-container>
        <!-- Verificar usuario -->
        <v-container>
            <v-dialog v-model="drawerVerificarUsuario" max-width="700px">
                <v-card>
                    <v-card-title>
                        <span class="text-h5">Verificar usuario</span>
                    </v-card-title>
                    <v-card-text>
                        <v-col>
                            <h3> Inicio sesion</h3>
                            <v-text-field v-model="nombreUsuarioVerificar" class="ml-12 mr-12" label="Usuario">
                            </v-text-field>
                            <v-text-field v-model="contrasenaVerificar" class="ml-12 mr-12" label="Contraseña">
                            </v-text-field>
                            <v-row>
                                <v-spacer></v-spacer>
                                <v-btn class="white--text" color="teal lighten-2" @click="inicioSesion(false,'')">
                                    Ingresar</v-btn>
                                <v-spacer></v-spacer>
                            </v-row>
                        </v-col>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-container>
        <!-- Modificar correo-->
        <v-container>
            <v-dialog v-model="drawerCorreo" max-width="700px">
                <v-card>
                    <v-card-title>
                        <span class="text-h5">Cambio Correo</span>
                    </v-card-title>
                    <v-card-text>
                        <v-col>
                            <v-text-field v-model="verificarCorreo" class="ml-12 mr-12" label="Correo Nuevo">
                            </v-text-field>
                            <v-text-field v-model="verificarCorreoNuevamente" class="ml-12 mr-12"
                                label="Verificacion Correo"></v-text-field>
                            <v-row>
                                <v-spacer></v-spacer>
                                <v-btn class="white--text" color="teal lighten-2" @click="cambiarCorreo(false)">
                                    Guardar Cambios</v-btn>
                                <v-spacer></v-spacer>
                            </v-row>
                        </v-col>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-container>
        <!-- Modificar contraseña -->
        <v-container>
            <v-dialog v-model="drawerContrasena" max-width="700px">
                <v-card>
                    <v-card-title>
                        <span class="text-h5">Cambio Contraseña</span>
                    </v-card-title>
                    <v-card-text>
                        <v-col>
                            <v-text-field v-model="verificarContrasenaNueva" class="ml-12 mr-12" label="Contraseña">
                            </v-text-field>
                            <v-text-field v-model="verificarContrasenaNuevaNuevamente" class="ml-12 mr-12"
                                label="Verificacion Contraseña"></v-text-field>
                            <v-row>
                                <v-spacer></v-spacer>
                                <v-btn class="white--text" color="teal lighten-2" @click="cambiarContrasena(false)">
                                    Guardar Cambios</v-btn>
                                <v-spacer></v-spacer>
                            </v-row>
                        </v-col>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-container>

        <!-- Modificar nombre -->
        <v-container>
            <v-dialog v-model="drawerNombreCliente" max-width="700px">
                <v-card>
                    <v-card-title>
                        <span class="text-h5">Nombre del usuario</span>
                    </v-card-title>
                    <v-card-text>
                        <v-col>
                            <v-text-field v-model="nombreCambio" class="ml-12 mr-12" label="Nombre completo">
                            </v-text-field>
                            <v-row>
                                <v-spacer></v-spacer>
                                <v-btn class="white--text" color="teal lighten-2" @click="cambioNombre(false)">
                                    Guardar Cambios</v-btn>
                                <v-spacer></v-spacer>
                            </v-row>
                        </v-col>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-container>

        <!-- Modificar Telefono -->
        <v-container>
            <v-dialog v-model="drawerTelefono" max-width="700px">
                <v-card>
                    <v-card-title>
                        <span class="text-h5">Telefono</span>
                    </v-card-title>
                    <v-card-text>
                        <v-col>
                            <v-text-field v-model="telefonoCambio" class="ml-12 mr-12" label="Nombre completo">
                            </v-text-field>
                            <v-row>
                                <v-spacer></v-spacer>
                                <v-btn class="white--text" color="teal lighten-2" @click="cambioTelefono(false)">
                                    Guardar Cambios</v-btn>
                                <v-spacer></v-spacer>
                            </v-row>
                        </v-col>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-container>

        <v-container>
            <v-row justify="center">
                <v-col cols="12" sm="10" md="8" lg="6" align="center">
                    <v-avatar color="primary" size="72">
                        <span class="white--text">{{this.$store.state.UsuarioMode}}</span>
                    </v-avatar>
                </v-col>
            </v-row>
        </v-container>
        <v-container>
            <v-row justify="center">
                <v-col cols="12" md="8" lg="6">
                    <div>
                        <v-bottom-navigation color="teal" grow>
                            <v-btn @click="cambiarHiddens('hiddenD')">
                                <span>Datos</span>
                            </v-btn>
                            <v-btn @click="cambiarHiddens('hiddenF')">
                                <span>Despacho</span>
                            </v-btn>
                            <v-btn @click="cambiarHiddens('hiddenH')">
                                <span>Historial de compras</span>
                            </v-btn>
                        </v-bottom-navigation>
                    </div>
                </v-col>
            </v-row>
        </v-container>

        <v-container v-show="hiddenD">
            <v-row justify="center">
                <v-col cols="12" md="10" lg="8">
                    <v-card>
                        <v-card-text>
                            <v-container>
                                <v-row class="text-center">
                                    <v-col>
                                        <v-row>
                                            <v-spacer></v-spacer>
                                            <h2> Nombre</h2>
                                            <v-btn fab width="20px" height="20px" color="teal lighten-2"
                                                @click="inicioSesion(true,'cambioNombre')">
                                                <Icon icon="clarity:edit-line" color="white" />
                                            </v-btn>
                                        </v-row>
                                        <v-row>
                                            <v-spacer></v-spacer>
                                            <h3 class="text-decoration-underline">
                                                {{this.nombre}}</h3>
                                        </v-row>
                                    </v-col>
                                    <v-col>
                                        <v-row>
                                            <v-spacer></v-spacer>
                                            <h2> NombreUsuario</h2>
                                        </v-row>
                                        <v-row>
                                            <v-spacer></v-spacer>
                                            <h3 class="text-decoration-underline">
                                                {{this.$store.state.UsuarioConectadoNombre}}</h3>
                                        </v-row>
                                    </v-col>
                                    <v-col>
                                        <v-row>
                                            <v-spacer></v-spacer>
                                            <h2> Contraseña</h2>
                                            <v-btn fab width="20px" height="20px" color="teal lighten-2"
                                                @click="inicioSesion(true,'cambioContraseña')">
                                                <Icon icon="clarity:edit-line" color="white" />
                                            </v-btn>
                                        </v-row>
                                        <v-row>
                                            <v-spacer></v-spacer>
                                            <h3 class="text-decoration-underline" v-if="!vContrasena">XXXXXXXXXX</h3>
                                            <h3 class="text-decoration-underline" v-else>{{this.contrasenaUsuario}}</h3>
                                            <v-btn fab width="20px" height="20px" color="teal lighten-2"
                                                @click="inicioSesion(true,'visibilidadContraseña')">
                                                <Icon icon="akar-icons:eye-closed" color="white" v-if="!vContrasena" />
                                                <Icon icon="akar-icons:eye" color="white" v-else />
                                            </v-btn>
                                        </v-row>
                                    </v-col>
                                    <v-col>
                                        <v-row>
                                            <v-spacer></v-spacer>
                                            <h2> Correo</h2>
                                            <v-btn fab width="20px" height="20px" color="teal lighten-2"
                                                @click="inicioSesion(true,'cambioCorreo')">
                                                <Icon icon="clarity:edit-line" color="white" />
                                            </v-btn>
                                        </v-row>
                                        <v-row>
                                            <v-spacer></v-spacer>
                                            <h3 class="text-decoration-underline">
                                                {{this.$store.state.UsuarioConectadoMail}}</h3>
                                        </v-row>
                                    </v-col>
                                    <v-col>
                                        <v-row>
                                            <v-spacer></v-spacer>
                                            <h2> Telefono</h2>
                                            <v-btn fab width="20px" height="20px" color="teal lighten-2"
                                                @click="inicioSesion(true,'cambioTelefono')">
                                                <Icon icon="clarity:edit-line" color="white" />
                                            </v-btn>
                                        </v-row>
                                        <v-row>
                                            <v-spacer></v-spacer>
                                            <h3 class="text-decoration-underline">
                                                {{this.telefono}}</h3>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <v-container v-show="hiddenF">
            <v-row justify="center">
                <v-col cols="12" md="8" lg="6">
                    <v-card>
                        <v-card-text>
                            <v-container>
                                <v-row class="text-center">
                                    <v-col>
                                        <h2> Región</h2>
                                    </v-col>
                                    <v-col>
                                        <h2> Provincia</h2>
                                    </v-col>
                                    <v-col>
                                        <h2> Comuna</h2>
                                    </v-col>
                                    <v-col>
                                        <h2> Direccion</h2>
                                    </v-col>
                                    <v-col>
                                        <h2> Codigo Postal</h2>
                                    </v-col>
                                </v-row>
                            </v-container>

                            <v-container>
                                <v-row class="text-center">
                                    <v-col>
                                        <h3 class="text-decoration-underline" v-if="this.regionDespacho===null">No
                                            Ingresado</h3>
                                        <h3 class="text-decoration-underline" v-else>{{this.regionDespacho}}</h3>
                                    </v-col>
                                    <v-col>
                                        <h3 class="text-decoration-underline" v-if="this.provinciaDespacho===null">No
                                            Ingresado</h3>
                                        <h3 class="text-decoration-underline" v-else>{{this.provinciaDespacho}}</h3>
                                    </v-col>
                                    <v-col>
                                        <h3 class="text-decoration-underline" v-if="this.comunaDespacho===null">No
                                            Ingresado</h3>
                                        <h3 class="text-decoration-underline" v-else>{{this.comunaDespacho}}</h3>
                                    </v-col>
                                    <v-col>
                                        <h3 class="text-decoration-underline" v-if="this.direccionDespacho===null">No
                                            Ingresado</h3>
                                        <h3 class="text-decoration-underline">{{this.direccionDespacho}}</h3>
                                    </v-col>
                                    <v-col>
                                        <h3 class="text-decoration-underline" v-if="this.codigopostalDespacho===null">No
                                            Ingresado</h3>
                                        <h3 class="text-decoration-underline">{{this.codigopostalDespacho}}</h3>
                                    </v-col>
                                </v-row>
                            </v-container>

                            <v-row class="mt-6">
                                <v-spacer></v-spacer>
                                <v-btn color="teal lighten-2" class="white--text" @click="editarDatosCliente(true)">
                                    Editar datos
                                </v-btn>
                                <v-spacer></v-spacer>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <v-container v-show="hiddenH">
            <v-row justify="center">
                <v-col cols="12" md="8" lg="6">
                    <v-card align="end">
                        <v-row>
                            <v-col>

                            </v-col>
                            <v-col>

                            </v-col>
                            <v-col align="end">
                                <v-slider vertical></v-slider>
                            </v-col>
                        </v-row>

                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>


</template>

<script>
import { Icon } from '@iconify/vue2';
import Swal from 'sweetalert2'
export default {
    data: () => ({
        dialogD: false,
        dialogF: false,
        hiddenD: true,
        hiddenF: false,
        hiddenH: false,
        admins: [],
        usuarios: [],
        regionDespacho: null,
        comunaDespacho: null,
        direccionDespacho: null,
        codigopostalDespacho: null,
        provinciaDespacho: null,
        contrasenaUsuario: null,
        drawerCliente: null,
        drawerVerificarUsuario: null,
        drawerContrasena: null,
        drawerCorreo: null,
        drawerEditarDatosCliente: null,
        drawerTelefono: null,
        drawerNombreCliente: null,
        vContrasena: null,
        accionRealizar: null,
        nombreUsuarioVerificar: null,
        contrasenaVerificar: null,
        verificarCorreo: null,
        verificarCorreoNuevamente: null,
        verificarContrasenaNueva: null,
        verificarContrasenaNuevaNuevamente: null,
        nombre: null,
        telefono: null,
        nombreCambio: null,
        telefonoCambio: null,
    }),
    components: {
        Icon,
    },
    created() {
        this.$store.state.visibleBusqueda = true
        this.datosDespacho()
    },
    computed: {
    },
    watch: {
        name() {
            this.errorMessages = ''
        },
    },
    methods: {
        cambiarHiddens(hidden) {
            if (hidden === "hiddenD") {
                this.hiddenD = true
                this.hiddenF = false
                this.hiddenH = false
            } else if (hidden === "hiddenF") {
                this.hiddenD = false
                this.hiddenF = true
                this.hiddenH = false
            } else if (hidden === "hiddenH") {
                this.hiddenD = false
                this.hiddenF = false
                this.hiddenH = true
            }
        },
        datosDespacho() {
            this.axios.get("EZ-Usuario")
                .then((response) => {
                    this.usuarios = response.data;
                    for (var i = 0; i < this.usuarios.length; i++) {
                        if (this.usuarios[i].nombreUsuario === this.$store.state.UsuarioConectadoNombre) {
                            this.regionDespacho = this.usuarios[i].region
                            this.comunaDespacho = this.usuarios[i].comuna
                            this.provinciaDespacho = this.usuarios[i].provincia
                            this.direccionDespacho = this.usuarios[i].direccion
                            this.codigopostalDespacho = this.usuarios[i].codigopostal
                            this.contrasenaUsuario = this.usuarios[i].contrasena
                            this.nombre = this.usuarios[i].nombre
                            this.telefono = this.usuarios[i].telefono
                            break
                        }
                    }
                })
                .catch((e) => {
                    console.log('error' + e);
                })

        },
        visibilidadContrasena() {
            if (this.vContrasena) {
                this.vContrasena = false
            } else {
                this.vContrasena = true
            }
        },
        cambiarContrasena(consulta) {
            if (consulta) {
                this.verificarContrasenaNueva = null
                this.verificarContrasenaNuevaNuevamente = null
                this.drawerContrasena = true

            } else {
                // Cambiar contraseña
                var estado = false
                if (this.verificarContrasenaNueva.length >= 6 && this.verificarContrasenaNuevaNuevamente.length >= 6 && this.verificarContrasenaNueva === this.verificarContrasenaNuevaNuevamente) {
                    estado = true
                }
                if (estado) {
                    this.axios.get("EZ-Usuario")
                        .then((response) => {
                            this.usuarios = response.data;
                            for (var i = 0; i < this.usuarios.length; i++) {
                                if (this.usuarios[i].nombreUsuario === this.$store.state.UsuarioConectadoNombre) {
                                    this.usuarios[i].contrasena = this.verificarContrasenaNueva
                                    this.axios.put(`Usuario-ac/${this.usuarios[i]._id}`, this.usuarios[i])
                                        .then(res => {
                                            const index = this.usuarios.findIndex(user => user._id === this.user._id);
                                            this.usuarios[index].contrasena = this.verificarContrasenaNueva
                                        })
                                        .catch(e => {
                                            console.log(e);
                                        })

                                }
                            }
                        })
                        .catch((e) => {
                            console.log('error' + e);
                        })
                    this.contrasenaUsuario = this.verificarContrasenaNueva
                    Swal.fire({
                        icon: 'success',
                        title: 'Se cambio la contraseña correctamente...',
                        text: 'Contraseña  Cambiado!',
                    })

                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Datos incorrectos...',
                        text: 'Verifique el correo!',
                    })
                }
                this.drawerContrasena = false
            }
        },
        cambiarCorreo(consulta) {
            if (consulta) {
                this.verificarCorreo = null
                this.verificarCorreoNuevamente = null
                this.drawerCorreo = true
            } else {
                // Cambiar correo
                var erCorreo = /^[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
                var estado = false
                if (erCorreo.test(this.verificarCorreo) && erCorreo.test(this.verificarCorreoNuevamente) && this.verificarCorreo === this.verificarCorreoNuevamente) {
                    estado = true
                }
                if (estado) {
                    this.axios.get("EZ-Usuario")
                        .then((response) => {
                            this.usuarios = response.data;
                            for (var i = 0; i < this.usuarios.length; i++) {
                                if (this.usuarios[i].nombreUsuario === this.$store.state.UsuarioConectadoNombre) {
                                    this.usuarios[i].correo = this.verificarCorreo
                                    this.axios.put(`Usuario-ac/${this.usuarios[i]._id}`, this.usuarios[i])
                                        .then(res => {
                                            const index = this.usuarios.findIndex(user => user._id === this.user._id);
                                            this.usuarios[index].correo = this.verificarCorreo
                                        })
                                        .catch(e => {
                                            console.log(e);
                                        })

                                }
                            }
                        })
                        .catch((e) => {
                            console.log('error' + e);
                        })
                    this.$store.state.UsuarioConectadoMail = this.verificarCorreo
                    Swal.fire({
                        icon: 'success',
                        title: 'Se cambio el correo correctamente...',
                        text: 'Correo Cambiado!',
                    })

                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Datos incorrectos...',
                        text: 'Verifique el correo!',
                    })
                }
                this.drawerCorreo = false
            }
        },
        inicioSesion(consulta, accion) {
            // se inicia sesion (valida)
            if (consulta) {
                this.nombreUsuarioVerificar = null
                this.contrasenaVerificar = null
                if (accion === "visibilidadContraseña") {
                    if (this.vContrasena) {
                        this.vContrasena = false
                    } else {
                        this.drawerVerificarUsuario = true
                        this.accionRealizar = accion
                    }
                } else {
                    this.drawerVerificarUsuario = true
                    this.accionRealizar = accion
                }
            } else {
                var estado = this.verificarUsuario(this.nombreUsuarioVerificar, this.contrasenaVerificar)
                if (estado) {
                    // Inicio de sesion validada
                    if (this.accionRealizar === "visibilidadContraseña") {
                        this.drawerVerificarUsuario = false
                        this.visibilidadContrasena()
                    } else if (this.accionRealizar === "cambioContraseña") {
                        this.drawerVerificarUsuario = false
                        this.cambiarContrasena(true)
                    } else if (this.accionRealizar === "cambioCorreo") {
                        this.drawerVerificarUsuario = false
                        this.cambiarCorreo(true)
                    } else if(this.accionRealizar === "cambioTelefono"){
                        this.drawerVerificarUsuario = false
                        this.cambioTelefono(true)
                    } else if(this.accionRealizar === "cambioNombre"){
                        this.drawerVerificarUsuario = false
                        this.cambioNombre(true)
                    }
                }
            }
        },
        verificarUsuario(name, password) {
            var estadoUsuario = false
            var estadoAdmin = false
            if (password == '' || name == '') {
                console.log("error")
            } else {
                this.visivilidadBton = false
                for (var i = 0; i < this.usuarios.length; i++) {
                    if (name == this.usuarios[i].nombreUsuario && password == this.usuarios[i].contrasena && this.usuarios[i].nombreUsuario === this.$store.state.UsuarioConectadoNombre) {
                        estadoUsuario = true
                        estadoAdmin = false
                    }
                }
                for (var i = 0; i < this.admins.length; i++) {
                    if (name == this.admins[i].nombreUsuario && password == this.admins[i].contrasena && this.usuarios[i].nombreUsuario === this.$store.state.UsuarioConectadoNombre) {
                        estadoAdmin = true
                        estadoUsuario = false
                    }
                }
                if (estadoUsuario) {
                    Swal.fire(
                        'Ingreso Correcto!',
                        'Ingresaste de manera exitosa!',
                        'success'
                    )
                    return true
                } else if (estadoAdmin) {
                    Swal.fire(
                        'No puedes cambiar tus datos!',
                        'Recuerda que eres administrador!',
                        'error'
                    )
                    return false
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Ingreso fallido...',
                        text: 'Datos incorrectos!',
                    })
                    return false
                }
            }
        },
        editarDatosCliente(consulta) {
            if (consulta) {
                this.drawerEditarDatosCliente = true
            } else {
                this.drawerEditarDatosCliente = false
            }
        },
        cambioTelefono(consulta) {
            if (consulta) {
                this.telefonoCambio=null
                this.drawerTelefono = true
            } else {
                var ErTelefono=/^\x2b569[0-9]{8}$/i
                var estado=false
                if(ErTelefono.test(this.telefonoCambio)){
                    estado=true
                }
                if(estado){
                    this.axios.get("EZ-Usuario")
                    .then((response) => {
                        this.usuarios = response.data;
                        for (var i = 0; i < this.usuarios.length; i++) {
                            if (this.usuarios[i].nombreUsuario === this.$store.state.UsuarioConectadoNombre) {
                                this.usuarios[i].telefono = this.telefonoCambio
                                this.axios.put(`Usuario-ac/${this.usuarios[i]._id}`, this.usuarios[i])
                                .then(res => {
                                    const index = this.usuarios.findIndex(user => user._id === this.user._id);
                                    this.usuarios[index].telefono = this.telefonoCambio
                                })
                                .catch(e => {
                                    console.log(e);
                                })
                            }
                        }
                    })
                    .catch((e) => {
                        console.log('error' + e);
                    })
                    this.telefono = this.telefonoCambio
                    Swal.fire({
                        icon: 'success',
                        title: 'Se cambio el telefono correctamente...',
                        text: 'Telefono Cambiado!',
                    })
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Telefono invalido...',
                        text: 'El telefono no pudo ser cambiado!',
                    })
                }
                this.drawerTelefono = false
            }
        },
        cambioNombre(consulta) {
            if (consulta) {
                this.nombreCambio=null
                this.drawerNombreCliente = true
            } else {
                this.drawerNombreCliente = false
                var estado=false
                if(this.nombreCambio.length>=3){
                    estado=true
                }
                if(estado){
                    this.axios.get("EZ-Usuario")
                            .then((response) => {
                                this.usuarios = response.data;
                                for (var i = 0; i < this.usuarios.length; i++) {
                                    if (this.usuarios[i].nombreUsuario === this.$store.state.UsuarioConectadoNombre) {
                                        this.usuarios[i].nombre = this.nombreCambio
                                        this.axios.put(`Usuario-ac/${this.usuarios[i]._id}`, this.usuarios[i])
                                            .then(res => {
                                                const index = this.usuarios.findIndex(user => user._id === this.user._id);
                                                this.usuarios[index].nombre = this.nombreCambio
                                            })
                                            .catch(e => {
                                                console.log(e);
                                        })
                                    }
                                }
                            })
                            .catch((e) => {
                                console.log('error' + e);
                            })
                        this.nombre= this.nombreCambio
                        Swal.fire({
                            icon: 'success',
                            title: 'Se cambio el nombre correctamente...',
                            text: 'Nombre Cambiado!',
                        })
                }else{
                    Swal.fire({
                        icon: 'error',
                        title: 'Nombre invalido...',
                        text: 'El nombre no pudo ser cambiado!',
                    })
                }
            }
        }
    },
}
</script>