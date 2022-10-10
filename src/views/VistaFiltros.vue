<template>
    <v-app>
        <v-container>
            <v-btn @click="drawer = true" rounded fab color="teal lighten-2">
                <Icon icon="bi:filter" color="white" width="40" height="40" />
            </v-btn>
        </v-container>
        <div align="center">
            <v-navigation-drawer v-model="drawer" absolute temporary>
                <v-container centered justify="center">
                    <h1>Filtros</h1>
                    <h3 align="left">Tipos</h3>
                    <v-container class="center">
                        <v-checkbox v-model="Deportiva" label="Deportiva" hide-details></v-checkbox>
                        <v-checkbox v-model="Casual" label="Casual" hide-details></v-checkbox>
                        <v-checkbox v-model="Urbana" label="Urbana" hide-details></v-checkbox>
                        <v-checkbox v-model="Preciocheck" label="Precio" hide-details></v-checkbox>
                        <v-flex xs12 md>
                            <v-slider v-model="Precio" label="Precio" min="50" max="500" step="5" thumb-label>
                            </v-slider>
                        </v-flex>
                        <div align="center">
                            <v-btn @click="filtroZapatilllas()"> Filtrar</v-btn>
                        </div>
                    </v-container>
                </v-container>
            </v-navigation-drawer>
            <v-container>
                <v-row>
                    <v-col v-for="ArrayZapatillas in zapatillas" :key="ArrayZapatillas._id" cols="3">
                        <v-card height="400" width="500" outlined center
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
                            <v-img height="150" width="250" :src="ArrayZapatillas.imagen">
                                <template v-slot:placeholder>
                                    <v-row class="fill-height ma-0" align="center" justify="center">
                                        <v-progress-circular indeterminate color="teal lighten-2"></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>
                            <h3>
                                Nombre: {{ArrayZapatillas.nombre}}
                            </h3>
                            <p>
                                Marca: {{ArrayZapatillas.marca}}
                            </p>
                            <p>
                                Tipo: {{ArrayZapatillas.tipo}}
                            </p>
                            <span>
                                Precio: ${{ArrayZapatillas.precio}} USD
                            </span>
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
    props: {
    },
    data() {
        return {
            hidden: null,
            nombre: null,
            zapatillas: [],
            zapatillasFinal: [],
            drawer: false,
            group: null,
            Deportiva: null,
            Casual: null,
            Urbana: null,
            Preciocheck: null,
            Precio: null
        };
    },
    created() {
        this.drawer=true
        this.Urbana = this.$store.state.Urbana
        this.Casual = this.$store.state.Casual
        this.Deportiva = this.$store.state.Deportiva
        this.Preciocheck = this.$store.state.Preciocheck
        this.listarZapatillas();
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
                })
                .catch((e) => {
                    console.log('error' + e);
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
        filtroZapatilllas() {
            this.zapatillasFinal = []
            var zapatillasUrbanas = []
            var zapatillasCasual = []
            var zapatillasDeportivas = []
            var zapatillasPrecio = []
            var zapatilla = []
            if (this.Urbana) {
                this.axios.get('Productos-FilterTipo/Urbana')
                    .then((response) => {
                        zapatillasUrbanas = response.data;
                        for (var i = 0; i < zapatillasUrbanas.length; i++) {
                            zapatilla = this.zapatillasFinal.filter(zapatilla => zapatilla._id === zapatillasUrbanas[i]._id)
                            if (zapatilla.length === 0) {
                                this.zapatillasFinal.push({
                                    _id: zapatillasUrbanas[i]._id,
                                    nombre: zapatillasUrbanas[i].nombre,
                                    marca: zapatillasUrbanas[i].marca,
                                    tipo: zapatillasUrbanas[i].tipo,
                                    imagen: zapatillasUrbanas[i].imagen,
                                    precio: zapatillasUrbanas[i].precio,
                                    sexo: zapatillasUrbanas[i].sexo,
                                    color: zapatillasUrbanas[i].color,
                                })
                            }
                        }
                    })
                    .catch((e) => {
                        console.log('error' + e);
                    })
                this.zapatillas = this.zapatillasFinal

            }
            if (this.Casual) {
                this.axios.get('Productos-FilterTipo/Casual')
                    .then((response) => {
                        zapatillasCasual = response.data;
                        for (var i = 0; i < zapatillasCasual.length; i++) {
                            zapatilla = this.zapatillasFinal.filter(zapatilla => zapatilla._id === zapatillasCasual[i]._id)
                            if (zapatilla.length === 0) {
                                this.zapatillasFinal.push({
                                    _id: zapatillasCasual[i]._id,
                                    nombre: zapatillasCasual[i].nombre,
                                    marca: zapatillasCasual[i].marca,
                                    tipo: zapatillasCasual[i].tipo,
                                    imagen: zapatillasCasual[i].imagen,
                                    precio: zapatillasCasual[i].precio,
                                    sexo: zapatillasCasual[i].sexo,
                                    color: zapatillasCasual[i].color,
                                })
                            }
                        }
                    })
                    .catch((e) => {
                        console.log('error' + e);
                    })
                this.zapatillas = this.zapatillasFinal
            }
            if (this.Deportiva) {
                this.axios.get('Productos-FilterTipo/Deportiva')
                    .then((response) => {
                        zapatillasDeportivas = response.data;
                        for (var i = 0; i < zapatillasDeportivas.length; i++) {
                            zapatilla = this.zapatillasFinal.filter(zapatilla => zapatilla._id === zapatillasDeportivas[i]._id)
                            if (zapatilla.length === 0) {
                                this.zapatillasFinal.push({
                                    _id: zapatillasDeportivas[i]._id,
                                    nombre: zapatillasDeportivas[i].nombre,
                                    marca: zapatillasDeportivas[i].marca,
                                    tipo: zapatillasDeportivas[i].tipo,
                                    imagen: zapatillasDeportivas[i].imagen,
                                    precio: zapatillasDeportivas[i].precio,
                                    sexo: zapatillasDeportivas[i].sexo,
                                    color: zapatillasDeportivas[i].color,
                                })
                            }
                        }
                    })
                    .catch((e) => {
                        console.log('error' + e);
                    })
                this.zapatillas = this.zapatillasFinal
            }
            if (this.Preciocheck) {
                this.Deportiva = false
                this.Casual = false
                this.Urbana = false
                this.axios.get(`/Productos-FilterPrecio/${this.Precio}`)
                    .then((response) => {
                        zapatillasPrecio = response.data;
                        this.zapatillas = zapatillasPrecio
                    })
                    .catch((e) => {
                        console.log('error' + e);
                    })
            }
        },
    }
};
</script>