<script setup>
import { ref } from 'vue'
const cambiarNombre = ref('')
const zapatillas = [
    {
        nombre: 'Jordan 1',
        tipo: 'Anashe',
        imagen: require("../assets/zapatillaDefault.png"),
        precio: '125.000',
        descripcion: 'Ta wena la jordan oe',
    },
    {
        nombre: 'Jordan 2',
        tipo: 'Anashe',
        imagen: require("../assets/zapatillaDefault.png"),
        precio: '200.000',
        descripcion: 'Si el 1 es weno, el 2 es mejor',
    },
    {
        nombre: 'Jordan 3',
        tipo: 'Anashe',
        imagen: require("../assets/zapatillaDefault.png"),
        precio: '250.000',
        descripcion: 'Es una breve descripcion de la zapatilla 3',
    },
    {
        nombre: 'Jordan 4',
        tipo: 'Anashe',
        imagen: require("../assets/zapatillaDefault.png"),
        precio: '1.000.000',
        descripcion: 'Descripcion zapatilla 4',
    },
]
</script>
<template>
    <v-main>
        <v-container>
            <v-row>

                <v-col v-for="ArrayZapatillas in zapatillas" :key="ArrayZapatillas.nombre" cols="3">
                    <v-card height="500" width="500" outlined center>
                        <v-img height="200" width="300" :src="ArrayZapatillas.imagen">
                        </v-img>
                        <h3>
                            Nombre: {{ArrayZapatillas.nombre}}
                        </h3>
                        <p>
                            descripcion: {{ArrayZapatillas.descripcion}}
                        </p>
                        <span>
                            Precio: ${{ArrayZapatillas.precio}} CLP
                        </span>                
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
       
        <v-container>
            <div class="text-center">
                <v-pagination :length="4" prev-icon="mdi-menu-left" next-icon="mdi-menu-right" circle></v-pagination>
            </div>
        </v-container>
    </v-main>
</template>