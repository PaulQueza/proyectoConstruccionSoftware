<template>
    <v-app>

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
                            <v-btn @click="cambiarHiddens('hiddenF')" v-if="this.$store.state.UsuarioMode==='user'">
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
                                <v-row class="text-center">
                                    <v-col>
                                        <h2> Nombre</h2>
                                    </v-col>
                                    <v-col>
                                        <h2>Correo</h2>
                                    </v-col>
                                </v-row>
                            </v-container>

                            <v-container>
                                <v-row class="text-center">
                                    <v-col>
                                        <h3 class="text-decoration-underline">
                                            {{this.$store.state.UsuarioConectadoNombre}}</h3>
                                    </v-col>
                                    <v-col>
                                        <h3 class="text-decoration-underline">{{this.$store.state.UsuarioConectadoMail}}
                                        </h3>
                                    </v-col>
                                </v-row>
                            </v-container>


                            <v-row justify="center">
                                <v-col align="center">
                                    <v-dialog v-model="dialogD" persistent max-width="600px">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn color="teal lighten-2" v-bind="attrs" v-on="on">
                                                Editar datos
                                            </v-btn>
                                        </template>
                                        <v-card>
                                            <v-card-title>
                                                <span class="text-h5">Datos a modificar</span>
                                            </v-card-title>
                                            <v-card-text>
                                                <v-container>
                                                    <v-row>
                                                        <v-col cols="12">
                                                            <v-text-field label="Correo*" required></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12">
                                                            <v-text-field label="Contraseña*" type="password" required>
                                                            </v-text-field>
                                                        </v-col>
                                                    </v-row>
                                                </v-container>
                                                <small>*indica campo requerido</small>
                                            </v-card-text>
                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn color="blue darken-1" text @click="dialogD = false">
                                                    Cerrar
                                                </v-btn>
                                                <v-btn color="blue darken-1" text @click="dialogD = false">
                                                    Guardar
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </v-col>
                            </v-row>


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
                                        <h2> Region</h2>
                                    </v-col>
                                    <v-col>
                                        <h2> Ciudad</h2>
                                    </v-col>
                                    <v-col>
                                        <h2> Direccion</h2>
                                    </v-col>
                                </v-row>
                            </v-container>

                            <v-container>
                                <v-row class="text-center">
                                    <v-col>
                                        <h3 class="text-decoration-underline">{{this.regionDespacho}}</h3>
                                    </v-col>
                                    <v-col>
                                        <h3 class="text-decoration-underline">{{this.ciudadDespacho}}</h3>
                                    </v-col>
                                    <v-col>
                                        <h3 class="text-decoration-underline">{{this.direccionDespacho}}</h3>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <v-row justify="center">
                                <v-col align="center">
                                    <v-dialog v-model="dialogF" persistent max-width="600px">
                                        <template v-slot:activator="{ on, attrs }">
                                            <v-btn color="teal lighten-2" v-bind="attrs" v-on="on">
                                                Editar datos
                                            </v-btn>
                                        </template>
                                        <v-card>
                                            <v-card-title>
                                                <span class="text-h5">Datos a modificar</span>
                                            </v-card-title>
                                            <v-card-text>
                                                <v-container>
                                                    <v-row>
                                                        <v-col cols="12">
                                                            <v-text-field label="Nombre*" required></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12">
                                                            <v-text-field label="Telefono*" required></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12">
                                                            <v-text-field label="Calle*" required></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12">
                                                            <v-text-field label="Región*" required></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12">
                                                            <v-text-field label="Comuna*" required></v-text-field>
                                                        </v-col>

                                                    </v-row>
                                                </v-container>
                                                <small>*indica campo requerido</small>
                                            </v-card-text>
                                            <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn color="blue darken-1" text @click="dialogF = false">
                                                    Cerrar
                                                </v-btn>
                                                <v-btn color="blue darken-1" text @click="dialogF = false">
                                                    Guardar
                                                </v-btn>
                                            </v-card-actions>
                                        </v-card>
                                    </v-dialog>
                                </v-col>
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
        ciudadDespacho: null,
        direccionDespacho: null,
    }),
    created() {
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
                            this.ciudadDespacho = this.usuarios[i].ciudad
                            this.direccionDespacho = this.usuarios[i].direccion
                        }
                    }
                })
                .catch((e) => {
                    console.log('error' + e);
                })

        }
    },
}
</script>