<template>
    <v-main>
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
export default {
    data() {
        return {
            hidden: null,
            nombre: null,
            zapatillas: [],
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
            this.axios.get('Productos-M')
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