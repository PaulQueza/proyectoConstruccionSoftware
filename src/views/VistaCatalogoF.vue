<script setup>
import { ref } from 'vue'
const cambiarNombre = ref('')
const zapatillasF = [
    {
        nombre: 'Fila Oakmont Tr ',
        marca: 'Fila',
        tipo: 'Urbana',
        imagen: require("../assets/Fila1.jpg"),
        precio: '69.990',
        color: 'Rosado',
        talla: '36',
        sexo: "F",
    },
    {
        nombre: 'Puma R78 Voyage Better',
        marca: 'Puma',
        tipo: 'Deportiva',
        imagen: require("../assets/Puma1.jpg"),
        precio: '69.990',
        color: 'Negro',
        talla: '35 36 37',
        sexo: "F",
    },
    {
        nombre: 'Nike Air Max Systm',
        marca: 'Nike',
        tipo: 'Urbana',
        imagen: require("../assets/Nike6.jpg"),
        precio: '99.990',
        color: 'Rosado',
        talla: '35',
        sexo: "F",
    },
    {
        nombre: 'Fila Sandenal',
        marca: 'Fila',
        tipo: 'Urbana',
        imagen: require("../assets/Fila2.jpg"),
        precio: '66.990',
        color: 'Rosado',
        talla: '35 36 38',
        sexo: "F",
    },
    {
        nombre: 'Fila EURO JOGGER',
        marca: 'Fila',
        tipo: 'Deportiva',
        imagen: require("../assets/Fila3.jpg"),
        precio: '59.990',
        color: 'Negro',
        talla: '36 37 38',
        sexo: "F",
    },
    {
        nombre: 'Puma XX NITRO',
        marca: 'Puma',
        tipo: 'Deportiva',
        imagen: require("../assets/Puma2.jpg"),
        precio: '119.990',
        color: 'Morado',
        talla: '35 36 39',
        sexo: "F",
    },
    {
        nombre: 'Puma MAYZE STACK',
        marca: 'Puma',
        tipo: 'Casual',
        imagen: require("../assets/Puma3.jpg"),
        precio: '94.990',
        color: 'Negro',
        talla: '35 36',
        sexo: "F",
    },
    {
        nombre: 'Nike Air Jordan 1 Low SE',
        marca: 'Nike',
        tipo: 'Casual',
        imagen: require("../assets/Nike7.jpg"),
        precio: '119.990',
        color: 'Blanco',
        talla: '35 36 37',
        sexo: "F",
    },
    {
        nombre: 'Adidas Strutter',
        marca: 'Adidas',
        tipo: 'Urbana',
        imagen: require("../assets/Adidas4.jpg"),
        precio: '52.990',
        color: 'Rosado',
        talla: '36 37 38',
        sexo: "F",
    },
    {
        nombre: 'Under Armour Flow Velociti Wind 2',
        marca: 'Under Armour',
        tipo: 'Deportiva',
        imagen: require("../assets/UnderArmour4a.jpg"),
        precio: '124.990.',
        color: 'Rosado',
        talla: '37 38 39',
        sexo: "F",
    },
    {
        nombre: 'On Cloud 5',
        marca: 'On Cloud',
        tipo: 'Deportiva',
        imagen: require("../assets/OnCloud3.jpg"),
        precio: '139.990',
        color: 'Rosado',
        talla: '35 36 37',
        sexo: "F",
    },
    {
        nombre: 'Puma KOSMO RIDER DC5',
        marca: 'Puma',
        tipo: 'Deportiva',
        imagen: require("../assets/Puma4.jpg"),
        precio: '79.990',
        color: 'Negro',
        talla: '36 38',
        sexo: "F",
    },
]

</script>
<template>
    <v-main>
        <v-container>
            <v-row>

                <v-col v-for="ArrayZapatillas in zapatillasF" :key="ArrayZapatillas.nombre" cols="3">
                    <v-card height="500" width="500" outlined center>
                        <v-img height="200" width="300" :src="ArrayZapatillas.imagen">
                        </v-img>
                        <h3>
                            {{ArrayZapatillas.nombre}}
                        </h3>
                        <p>
                            {{ArrayZapatillas.tipo}}
                        </p>
                        <p>
                            {{ArrayZapatillas.talla}}
                        </p>
                        <span>
                            Precio: ${{ArrayZapatillas.precio}} CLP
                        </span>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-main>
</template>