<template>
    <v-app>
        <v-container>
            <h2> Resultado busqueda: {{this.$store.state.busqueda}}</h2>
            <v-text-field outlined v-model="buscar" prepend-inner-icon="mdi-magnify" dense flat hide-details solo
                label="Buscar" @keyup.enter="busqueda">
            </v-text-field>
        </v-container>
        <div>
            <v-container>
                <v-row>
                    <v-col v-for="ArrayZapatillas in zapatillasFinal" :key="ArrayZapatillas._id" cols="10">
                        <v-card height="300" width="700" outlined center class="mx-12"
                            @mouseover="mostrarBotonCompra(ArrayZapatillas.nombre)"
                            @mouseleave="ocultarBotonCompra(ArrayZapatillas.nombre)">
                            <v-container>
                                <v-row>
                                    <v-spacer></v-spacer>
                                    <v-fab-transition v-if="nombre == ArrayZapatillas.nombre">
                                        <v-btn v-show="hidden" color="teal lighten-2" dark absolute top right fab>
                                            <Icon icon="ep:shopping-trolley" width="20" height="20" />
                                        </v-btn>
                                    </v-fab-transition>
                                </v-row>
                            </v-container>
                            <v-row>
                                <v-img height="250px" width="250px" :src="ArrayZapatillas.imagen">
                                    <template v-slot:placeholder>
                                        <v-row class="fill-height ma-0" align="center" justify="center">
                                            <v-progress-circular indeterminate color="teal lighten-2">
                                            </v-progress-circular>
                                        </v-row>
                                    </template>
                                </v-img>
                                <v-col>
                                    <h2>
                                        Nombre: {{ArrayZapatillas.nombre}}
                                    </h2>
                                    <p>
                                        Marca: {{ArrayZapatillas.marca}}
                                    </p>
                                    <p>
                                        Tipo: {{ArrayZapatillas.tipo}}
                                    </p>
                                    <span>
                                        Precio: ${{ArrayZapatillas.precio}} USD
                                    </span>
                                </v-col>
                            </v-row>

                            <v-spacer></v-spacer>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </v-app>
</template>
<script>
import { Icon } from "@iconify/vue2";
import VistaMarca from '../views/VistaMarca.vue'
export default {
    data: () => ({
        hidden: null,
        nombre: null,
        zapatillas: [],
        zapatillasFinal: [],
        drawer: false,
        group: null,
        buscar: null,
    }),
    created() {
        this.listarZapatillas()
    },
    components: {
        Icon,
        VistaMarca
    },
    methods: {
        listarZapatillas() {
            this.axios.get('EZ-Producto')
                .then((response) => {
                    this.zapatillas = response.data;
                    this.$store.state.busqueda=this.$store.state.busqueda.toLowerCase()
                    this.zapatillasFinal=this.zapatillas.filter(zapatilla => zapatilla.nombre.toLowerCase().indexOf(this.$store.state.busqueda)!==-1)
                })
                .catch((e) => {
                    console.log('error' + e);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error en la busqueda...',
                        text: 'Error conexion con la red!',
                    })
                })
        },
        mostrarBotonCompra(nombre) {
            this.hidden = true
            this.nombre = nombre
        },
        ocultarBotonCompra(nombre) {
            this.hidden = false
            this.nombre = nombre
        },
        limpiarVentana() {
            console.log("LIMPIANDO VENTANA")
            this.hidden = null
            this.nombre = null
            this.zapatillas = []
            this.zapatillasFinal = []
            this.drawer = false
            this.group = null
        },
        busqueda() {
            var algo=[]
            if (this.$route.path !== `/busqueda/${this.buscar}`) {
                this.$router.push({ path: `/busqueda/${this.buscar}` })
            }
            this.limpiarVentana()
            this.axios.get('EZ-Producto')
                .then((response) => {
                    this.zapatillas = response.data;
                    this.buscar = this.buscar.toLowerCase()
                    this.zapatillasFinal=this.zapatillas.filter(zapatilla => zapatilla.nombre.toLowerCase().indexOf(this.buscar)!==-1)
                })
                .catch((e) => {
                    console.log('error' + e);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error en la busqueda...',
                        text: 'Error conexion con la red!',
                    })
                })
        }
    }
};
</script>