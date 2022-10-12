<template>
     <v-app>
        <v-container>
            <v-btn @click="drawer = true" rounded fab color="teal lighten-2">
                <Icon icon="bi:filter" color="white" width="40" height="40"/>
            </v-btn>
        </v-container>
        <div align="center" >
            <v-navigation-drawer
                v-model="drawer"
                absolute
                temporary
            >
            <v-container centered justify="center">    
                <h1>Filtros</h1>
                <h3 align="left" >Tipos</h3>
                <v-container class="center">
                    <v-checkbox 
                        v-model="Deportiva"
                        label="Deportiva"
                        hide-details
                    ></v-checkbox>
                    <v-checkbox
                        v-model="Casual"
                        label="Casual"
                        hide-details
                    ></v-checkbox>
                    <v-checkbox
                        v-model="Urbana"
                        label="Urbana"
                        hide-details
                    ></v-checkbox>
                    <v-checkbox
                        v-model="Preciocheck"
                        label="Precio"
                        hide-details
                    ></v-checkbox>
                    <v-flex
                        xs12
                        md
                    >
                    <v-slider
                        v-model="Precio"
                        label="Precio"
                        min="50"
                        max="500"
                        step="5"
                        thumb-label
                    ></v-slider>
                    </v-flex>
                    <div align="center"> 
                        <v-btn> Filtrar</v-btn>
                    </div>
                </v-container>
            </v-container>
            </v-navigation-drawer>
            <v-container>
                <v-row>
                    <v-col v-for="ArrayZapatillas in zapatillas" :key="ArrayZapatillas.__id" cols="3">
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
                                {{ArrayZapatillas.nombre}}
                            </h3>
                            <p>
                                Marca: {{ArrayZapatillas.marca}}
                            </p>
                            <p>
                                Tipo: {{ArrayZapatillas.tipo}}
                            </p>
                            <p>
                                Sexo: {{ArrayZapatillas.sexo}}
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
export default {
    data() {
        return {
            hidden: null,
            nombre: null,
            zapatillas: [],
            drawer: false,
            group: null,
            Deportiva:null,
            Casual:null,
            Urbana:null,
            Preciocheck: null,
            Precio: null
        };
    },
    created() {
        this.listarZapatillas();
    },
    components: {
        Icon,
    },
    methods: {
        listarZapatillas() {
            this.axios.get("Productos-F")
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