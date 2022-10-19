<template>
    <v-app>
        <!-- Editar datos cuenta cliente -->
        <v-container>
            <v-dialog v-model="drawerEditarDatosCliente" max-width="1000px">
                <v-card>
                    <v-card-title>
                        <span class="text-h5">Editar datos cuenta cliente</span>
                    </v-card-title>
                    <v-card-text>
                        <v-col>
                            <v-row class="text-center">
                                    <v-col>
                                        <v-select v-model="regionDespacho" :items="regiones" label="Regiones"></v-select>
                                    </v-col>
                                    <v-col>
                                        <v-select v-model="provinciaDespacho" v-if="this.regionDespacho === 'Región Metropolitana de Santiago'" :items= "provinciaMetropolitana" label="Provincias"></v-select>
                                        <v-select v-model="provinciaDespacho" v-if="this.regionDespacho === 'Región de O Higgins'" :items= "provinciaOhiggins" label="Provincias"></v-select>
                                        <v-select v-model="provinciaDespacho" v-if="this.regionDespacho === 'Región del Maule'" :items= "provinciaMaule" label="Provincias"></v-select>
                                    </v-col>
                                    <v-col>
                                        <v-select v-model="comunaDespacho" v-if="this.provinciaDespacho === 'Chacabuco'" :items= "comunaMetropolitanaChacabuco" label="comunas"></v-select>
                                        <v-select v-model="comunaDespacho" v-if="this.provinciaDespacho === 'Cordillera'" :items= "comunaMetropolitanaCordillera" label="comunas"></v-select>
                                        <v-select v-model="comunaDespacho" v-if="this.provinciaDespacho === 'Maipo'" :items= "comunaMetropolitanaMaipo" label="comunas"></v-select>
                                        <v-select v-model="comunaDespacho" v-if="this.provinciaDespacho === 'Melipilla'" :items= "comunaMetropolitanaMelipilla" label="comunas"></v-select>
                                        <v-select v-model="comunaDespacho" v-if="this.provinciaDespacho === 'Santiago'" :items= "comunaMetropolitanaSantiago" label="comunas"></v-select>
                                        <v-select v-model="comunaDespacho" v-if="this.provinciaDespacho === 'Talagante'" :items= "comunaMetropolitanTalagante" label="comunas"></v-select>

                                        <v-select v-model="comunaDespacho" v-if="this.provinciaDespacho === 'Cachapoal'" :items= "comunaOhigginsCachapoal" label="comunas"></v-select>
                                        <v-select v-model="comunaDespacho" v-if="this.provinciaDespacho === 'Cardenal Caro'" :items= "comunaOhigginsCardenal" label="comunas"></v-select>
                                        <v-select v-model="comunaDespacho" v-if="this.provinciaDespacho === 'Colchagua'" :items= "comunaOhigginsColchagua" label="comunas"></v-select>

                                        <v-select v-model="comunaDespacho" v-if="this.provinciaDespacho === 'Cauquenes'" :items= "comunaMauleCauquenes" label="comunas"></v-select>
                                        <v-select v-model="comunaDespacho" v-if="this.provinciaDespacho === 'Curicó'" :items= "comunaMauleCurico" label="comunas"></v-select>
                                        <v-select v-model="comunaDespacho" v-if="this.provinciaDespacho === 'Linares'" :items= "comunaMauleLinares" label="comunas"></v-select>
                                        <v-select v-model="comunaDespacho" v-if="this.provinciaDespacho === 'Talca'" :items= "comunaMauleTalca" label="comunas"></v-select>
                                    </v-col>
                                    <v-col>
                                        <v-text-field v-model="direccionDespacho"
                                        :rules="[() => !!direccionDespacho || 'Este campo no puede estar vacio']" label="Direccion despacho"
                                        required>
                                    </v-text-field>
                                    </v-col>
                                    <v-col>
                                        <v-text-field v-model="codigopostalDespacho"
                                        :rules="[() => !!codigopostalDespacho || 'Este campo no puede estar vacio']" label="Codigo postal despacho"
                                        required>
                                    </v-text-field>
                                    </v-col>
                                </v-row>
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
                            <v-text-field v-model="nombreUsuarioVerificar" class="ml-12 mr-12" label="Usuario"></v-text-field>
                            <v-text-field v-model="contrasenaVerificar" class="ml-12 mr-12" label="Contraseña"></v-text-field>
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
                            <v-text-field class="ml-12 mr-12" label="Correo Nuevo"></v-text-field>
                            <v-text-field class="ml-12 mr-12" label="Verificacion Correo"></v-text-field>
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
                            <h3> Inicio sesion</h3>
                            <v-text-field class="ml-12 mr-12" label="Contraseña"></v-text-field>
                            <v-text-field class="ml-12 mr-12" label="Verificacion Contraseña"></v-text-field>
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
                <v-col cols="12" md="8" lg="6">
                    <v-card>
                        <v-card-text>
                            <v-container>
                                <v-row>
                                    <v-col class="mr-12">
                                        <v-row>
                                            <v-spacer></v-spacer>
                                            <h2> Nombre</h2>
                                        </v-row>
                                        <v-row class="mt-8">
                                            <v-spacer></v-spacer>
                                            <h3 class="text-decoration-underline">{{this.$store.state.UsuarioConectadoNombre}}</h3>
                                        </v-row>
                                    </v-col>
                                    <v-col class="mr-12">
                                        <v-row>
                                            <v-spacer></v-spacer>
                                            <h2> Contraseña</h2>
                                            <v-btn fab width="20px" height="20px" color="teal lighten-2" @click="inicioSesion(true,'cambioContraseña')">
                                                <Icon icon="clarity:edit-line" color="white" />
                                            </v-btn>
                                        </v-row>
                                        <v-row class="mt-8">
                                            <v-spacer></v-spacer>
                                            <h3 class="text-decoration-underline" v-if="!vContrasena">XXXXXXXXXX</h3>
                                            <h3 class="text-decoration-underline" v-else>{{this.contrasenaUsuario}}</h3>
                                            <v-btn fab width="20px" height="20px" color="teal lighten-2" @click="inicioSesion(true,'visibilidadContraseña')">
                                                <Icon icon="akar-icons:eye-closed" color="white" v-if="!vContrasena"/>
                                                <Icon icon="akar-icons:eye" color="white" v-else/>
                                            </v-btn>
                                        </v-row>
                                    </v-col>
                                    <v-col class="mx-12">
                                        <v-row>
                                            <v-spacer></v-spacer>
                                            <h2> Correo</h2>
                                            <v-btn fab width="20px" height="20px" color="teal lighten-2" @click="inicioSesion(true,'cambioCorreo')">
                                                <Icon icon="clarity:edit-line" color="white" />
                                            </v-btn>
                                        </v-row>
                                        <v-row class="mt-8">
                                            <v-spacer></v-spacer>
                                            <h3 class="text-decoration-underline">{{this.$store.state.UsuarioConectadoMail}}</h3>
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
                                        <h3 class="text-decoration-underline" v-if="this.regionDespacho===null">No Ingresado</h3>
                                        <h3 class="text-decoration-underline" v-else>{{this.regionDespacho}}</h3>
                                    </v-col>
                                    <v-col>
                                        <h3 class="text-decoration-underline" v-if="this.provinciaDespacho===null">No Ingresado</h3>
                                        <h3 class="text-decoration-underline" v-else>{{this.provinciaDespacho}}</h3>
                                    </v-col>
                                    <v-col>
                                        <h3 class="text-decoration-underline" v-if="this.comunaDespacho===null">No Ingresado</h3>
                                        <h3 class="text-decoration-underline" v-else>{{this.comunaDespacho}}</h3>
                                    </v-col>
                                    <v-col>
                                        <h3 class="text-decoration-underline" v-if="this.direccionDespacho===null">No Ingresado</h3>
                                        <h3 class="text-decoration-underline">{{this.direccionDespacho}}</h3>
                                    </v-col>
                                    <v-col>
                                        <h3 class="text-decoration-underline" v-if="this.codigopostalDespacho===null">No Ingresado</h3>
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
        _id: null,
        regionDespacho: null,
        comunaDespacho: null,
        direccionDespacho: null,
        codigopostalDespacho:null,
        provinciaDespacho:null,
        contrasenaUsuario:null,
        drawerCliente: null,
        drawerVerificarUsuario:null,
        drawerContrasena:null,
        drawerCorreo:null,
        drawerEditarDatosCliente:null,
        vContrasena:null,
        accionRealizar:null,
        nombreUsuarioVerificar:null,
        contrasenaVerificar:null,
        regiones:['Región Metropolitana de Santiago','Región de O Higgins','Región del Maule'],
        
        provinciaMetropolitana:['Chacabuco','Cordillera','Maipo','Melipilla','Santiago','Talagante'],
        comunaMetropolitanaChacabuco:['Colina','Lampa','Tiltil'],
        comunaMetropolitanaCordillera:['Pirque','Puente Alto','San José de Maipo'],
        comunaMetropolitanaMaipo:['Buin','Calera de Tango','San Bernardo'],
        comunaMetropolitanaMelipilla:['Curacaví','Melipilla','San Pedro','María Pinto'],
        comunaMetropolitanaSantiago:['Cerrillos','Cerro Navia','La Cisterna','Independencia','La Florida','La Pintana','Las Condes','Lo Barnechea','Maipú','Ñuñoa','Providencia','Renca','San Joaquín','San Ramón','Santiago','Vitacura'],
        comunaMetropolitanTalagante:['Isla de Maipo','Peñaflor','Talagante','El Monte'],

        provinciaOhiggins:['Cachapoal','Cardenal Caro','Colchagua'],
        comunaOhigginsCachapoal:['Codegua','Coínco','Graneros','Machalí','Rancagua','Rengo','Requínoa','San Vicente'],
        comunaOhigginsCardenal:['La Estrella','Litueche','Marchihue','Navidad','Paredones','Pichilemu'],
        comunaOhigginsColchagua:['Chépica','Chimbarongo','Lolol','Nancagua','San Fernando','Santa Cruz','Pichilemu','Palmilla'],

        provinciaMaule:['Cauquenes','Curicó','Linares','Talca'],
        comunaMauleCauquenes:['Cauquenes','Chanco','Pelluhue'],
        comunaMauleCurico:['Curicó','Hualañé','Licantén','Molina','Romeral','Teno','Sagrada Familia'],
        comunaMauleLinares:['Colbún','Linares','Parral','San Javier','Villa Alegre','Yerbas Buenas'],
        comunaMauleTalca:['Constitución','Maule','Pelarco','Río Claro','San Rafael','Talca'],

    }),
    components: {
        Icon,
    },
    created() {
        this.$store.state.visibleBusqueda=true
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
                            break
                        }
                    }
                })
                .catch((e) => {
                    console.log('error' + e);
                })

        },
        visibilidadContrasena(){
            if(this.vContrasena){
                this.vContrasena=false
            }else{
                this.vContrasena=true
            }
        },
        cambiarContrasena(consulta){
            if(consulta){
                this.drawerContrasena=true
            }else{
                // Cambiar contraseña
                this.drawerContrasena=false
            }
        },
        cambiarCorreo(consulta){
            if(consulta){
                this.drawerCorreo=true
            }else{
                // Cambiar correo
                this.drawerCorreo=false
            }
        },
        inicioSesion(consulta,accion){
            // se inicia sesion (valida)
            if(consulta){
                if(accion==="visibilidadContraseña"){
                    if(this.vContrasena){
                        this.vContrasena=false
                    }else{
                        this.drawerVerificarUsuario=true
                        this.accionRealizar=accion
                    }
                }else{
                    this.drawerVerificarUsuario=true
                    this.accionRealizar=accion
                }
            }else{
                var estado = this.verificarUsuario(this.nombreUsuarioVerificar,this.contrasenaVerificar)
                if(estado){
                    // Inicio de sesion validada
                    if(this.accionRealizar==="visibilidadContraseña"){
                        this.drawerVerificarUsuario=false
                        this.visibilidadContrasena()
                    }else if(this.accionRealizar==="cambioContraseña"){
                        this.drawerVerificarUsuario=false
                        this.cambiarContrasena(true)
                    }else if(this.accionRealizar==="cambioCorreo"){
                        this.drawerVerificarUsuario=false
                        this.cambiarCorreo(true)
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
                    if (name == this.usuarios[i].nombreUsuario && password == this.usuarios[i].contrasena) {
                        estadoUsuario = true
                        estadoAdmin = false
                    }
                }
                for (var i = 0; i < this.admins.length; i++) {
                    if (name == this.admins[i].nombreUsuario && password == this.admins[i].contrasena) {
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
        editarDatosCliente(consulta){
            if(consulta){
                this.drawerEditarDatosCliente=true
            }else{
                this.axios.get("EZ-Usuario")
                .then((response) => {
                    this.usuarios = response.data;
                        for (var i = 0; i < this.usuarios.length; i++) {
                            if (this.usuarios[i].nombreUsuario === this.$store.state.UsuarioConectadoNombre) {
                                    this.usuarios[i].region = this.regionDespacho
                                    this.usuarios[i].provincia = this.provinciaDespacho
                                    this.usuarios[i].comuna = this.comunaDespacho
                                    this.usuarios[i].direccion = this.direccionDespacho
                                    this.usuarios[i].codigopostal = this.codigopostalDespacho
                                    this.axios.put(`Usuario-ac/${this.usuarios[i]._id}`, this.usuarios[i])
                                        .then(res => {
                                                const index = this.usuarios.findIndex(user => user._id === this.user._id);
                                                this.usuarios[index].region = this.regionDespacho
                                                this.usuarios[index].provincia = this.provinciaDespacho
                                                this.usuarios[index].comuna = this.comunaDespacho
                                                this.usuarios[index].direccion = this.direccionDespacho
                                                this.usuarios[index].codigopostal = this.codigopostalDespacho
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
                this.drawerEditarDatosCliente=false
            }
        },

    },
}
</script>