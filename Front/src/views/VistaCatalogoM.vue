<script setup>
import { ref } from 'vue'
import { Icon } from "@iconify/vue2";

const cambiarNombre = ref('')
const hidden = ref(false)
const nombre = ref('')
const metodo1 = (parametro)=>{
    hidden.value=true
    nombre.value = parametro
}
const metodo2 = (parametro)=>{
    hidden.value=false
    nombre.value = parametro
}
const zapatillas = [
    {
        nombre: 'Adidas TRACEFINDER ',
        marca: 'Adidas',
        tipo: 'Deportiva',
        imagen: require("../assets/Adidas1.jpg"),
        precio: '56.990',
        color: 'Negro',
        talla: '38 40 42 43',
        sexo: "M",

    },
    {
        nombre: 'Under Armour Mojo 2',
        marca: 'Under Armour',
        tipo: 'Deportiva',
        imagen: require("../assets/UnderArmour1.jpg"),
        precio: '199.990',
        color: 'Negro',
        talla: '41 42 43 ',
        sexo: "M",
    },
    {
        nombre: 'Adidas Forum Low',
        marca: 'Adidas',
        tipo: 'Urbana',
        imagen: require("../assets/Adidas2.jpg"),
        precio: '84.990',
        color: 'Blanco',
        talla: '41 43 44 ',
        sexo: "M",
    },
    {
        nombre: 'Nike Blazer Mid 77',
        marca: 'Nike',
        tipo: 'Urbana',
        imagen: require("../assets/Nike1.jpg"),
        precio: '106.990',
        color: 'Blanco',
        talla: '42 43 44',
        sexo: "M",
    },
    {
        nombre: 'Nike Air Force 1 07',
        marca: 'Nike',
        tipo: 'Casual',
        imagen: require("../assets/Nike2.jpg"),
        precio: '109.990',
        color: 'Blanco',
        talla: '40 42 44 45',
        sexo: "M",
    },
    {
        nombre: 'Nike Air Jordan 1 Mid Blue White Red',
        marca: 'Nike',
        tipo: 'Urbana',
        imagen: require("../assets/Nike3.jpg"),
        precio: '139.990',
        color: 'Azul',
        talla: '40 41 43 44',
        sexo: "M",
    },
    {
        nombre: 'Nike Air Jordan 2 JDN x J-BALVIN',
        marca: 'Nike',
        tipo: 'Urbana',
        imagen: require("../assets/Nike4.jpg"),
        precio: '264.990',
        color: 'Azul',
        talla: '40 43',
        sexo: "M",
    },
    {
        nombre: 'Adidas ULTRABOOST 5 DNA',
        marca: 'Adidas',
        tipo: 'Deportiva',
        imagen: require("../assets/Adidas3.jpg"),
        precio: '119.990',
        color: 'Azul',
        talla: '41 42 43',
        sexo: "M",
    },
    {
        nombre: 'Nike Dunk Low Lottery',
        marca: 'Nike',
        tipo: 'Casual',
        imagen: require("../assets/Nike5.jpg"),
        precio: '117.990',
        color: 'Verde',
        talla: '40 41 42',
        sexo: "M",
    },
    {
        nombre: 'Under Armour Curry HOVR™ Splash',
        marca: 'Under Armour',
        tipo: 'Deportiva',
        imagen: require("../assets/UnderArmour2.jpg"),
        precio: '95.990.',
        color: 'Negro',
        talla: '41 43 44',
        sexo: "M",
    },
    {
        nombre: 'Under Armour Project Rock BSR 2 ',
        marca: 'Under Armour',
        tipo: 'Deportiva',
        imagen: require("../assets/UnderArmour3.jpg"),
        precio: '89.990',
        color: 'Blanco',
        talla: '42 43 44 45',
        sexo: "M",
    },
    {
        nombre: 'On Cloud X',
        marca: 'On Cloud',
        tipo: 'Deportiva',
        imagen: require("../assets/OnCloud2.jpg"),
        precio: '89.990',
        color: 'Blanco',
        talla: '42 43 44 45',
        sexo: "M",
    },
]
</script>
<template>
    <v-main>
        <v-container>
            <v-row>
                <v-col v-for="ArrayZapatillas in zapatillas" :key="ArrayZapatillas.nombre" cols="3">
                    <v-card height="400" width="500" outlined center @mouseover="metodo1(ArrayZapatillas.nombre)" @mouseleave="metodo2(ArrayZapatillas.nombre)">
                        <v-container>
                            <v-row>
                                <v-spacer></v-spacer>
                                <v-fab-transition v-if="nombre == ArrayZapatillas.nombre">
                                    <v-btn
                                    v-show="hidden"
                                    color="teal lighten-2"
                                    dark
                                    absolute
                                    top
                                    right
                                    fab
                                >
                                    <Icon icon="ep:shopping-trolley" width="20" height="20" />
                                </v-btn>
                                </v-fab-transition>
                            </v-row>
                        </v-container>
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
                        <v-spacer></v-spacer>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
        
    </v-main>
</template>