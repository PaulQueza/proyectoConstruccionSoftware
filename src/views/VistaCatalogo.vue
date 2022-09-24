<script setup>
import { ref } from 'vue'
const cambiarNombre = ref('')
const zapatillas = [
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
    </v-main>
</template>