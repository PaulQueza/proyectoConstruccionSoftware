<template>
    <v-main>
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
                        <v-img height="150" width="250"
                            :src="ArrayZapatillas.imagen">
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

    </v-main>
</template>
<script>
import { Icon } from "@iconify/vue2";
import VistaMarca from '../views/VistaMarca.vue'
export default {
    props:{

    },
    data() {
        return {
            hidden: null,
            nombre: null,
            zapatillas: [],
        };
    },
    created() {
        
        console.log(this.$store.state.vistaMarcaAdidas);
        if(this.$store.state.vistaMarcaAdidas===true){
            console.log("ADIDAS")
            this.listarZapatillasAdidas();
        }else if(this.$store.state.vistaMarcaFila===true){
            console.log("FILA")
            this.listarZapatillasFila();
        }else if(this.$store.state.vistaMarcaPuma===true){
            console.log("PUMA")
            this.listarZapatillasPuma();
        }else if(this.$store.state.vistaMarcaNike===true){
            console.log("NIKE")
            this.listarZapatillasNike();
        }else{
            console.log("NO FILTER MARCA")
            this.listarZapatillas();
        }
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
        listarZapatillasNike() {
            this.axios.get('Productos-Nike')
                .then((response) => {
                    this.zapatillas = response.data;
                })
                .catch((e) => {
                    console.log('error' + e);
                })
        },
        listarZapatillasPuma() {
            this.axios.get('Productos-Puma')
                .then((response) => {
                    this.zapatillas = response.data;
                })
                .catch((e) => {
                    console.log('error' + e);
                })
        },
        listarZapatillasAdidas() {
            this.axios.get('Productos-Adidas')
                .then((response) => {
                    this.zapatillas = response.data;
                })
                .catch((e) => {
                    console.log('error' + e);
                })
        },
        listarZapatillasFila() {
            this.axios.get('Productos-Fila')
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
    }
};
</script>