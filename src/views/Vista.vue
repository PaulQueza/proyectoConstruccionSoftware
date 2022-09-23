<template>
    <v-app>

        <v-spacer></v-spacer>

        <v-card class="ml-12 mr-12 mb-12">
            
            <v-container class="mx-12 mb-12">
                <h1>
                    Gestion de catálogo
                </h1>
                <h1>
                    Inventario
                </h1>
            </v-container>
            <v-spacer></v-spacer>
            <v-row>
                <v-card class="ml-12 mb-12 mr-5">
                    <v-simple-table height="300px" :single-select="singleSelect">
                        <thead>
                            <tr>
                                <th class="text-left">
                                    Nombre
                                </th>
                                <th class="text-left">
                                    Marca
                                </th>
                                <th class="text-left">
                                    Tallas
                                </th>
                                <th class="text-left">
                                    Tag's
                                </th>
                                <th class="text-left">
                                    Imagen
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="zapatilla in zapatillas" :key="zapatilla.id" >
                                <v-row class="ml-5">
                                <v-checkbox @click="seleccionarElementoTabla(zapatilla.id)"></v-checkbox>
                                <td class="mt-6 mr-6">
                                    {{zapatilla.nombre}}
                                </td>
                            </v-row>
                                <td>
                                    {{zapatilla.marca}}
                                </td>
                                <td>
                                    {{zapatilla.talla}}
                                </td>
                                <td>
                                    {{zapatilla.nombre}}
                                </td>
                                <td>
                                    {{zapatilla.imagen}}
                                </td>
                            </tr>
                        </tbody>

                    </v-simple-table>
                </v-card>
                <v-spacer></v-spacer>
                <v-col>
                    <v-btn class="mb-12 white--text" color="teal lighten-2">
                        Agregar
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn class="mb-12 white--text" color="teal lighten-2">
                        Editar
                    </v-btn>
                    <v-spacer></v-spacer>
                    <v-btn class="mb-12 white--text" color="teal lighten-2">
                        Eliminar
                    </v-btn>
                </v-col>
            </v-row>
            
        </v-card>
        <v-spacer></v-spacer>

    </v-app>
</template>
<script>
import { Icon } from "@iconify/vue2";
export default {
    data: () => ({
        name: null,
        descripcion: null,
        precio: null,
        imagen: null,
        drawer: false,
        singleSelect: null,
        zapatillas: [
            {
                id: 1,
                nombre: 'Jordan 1',
                marca: 'Nike',
                talla: '12 US',
<<<<<<< HEAD
<<<<<<< HEAD
                imagen: require("../assets/zapatillaDefault.png"),
=======
                imagen: require("../assets/zapatillas/zapatillaDefault.png"),
>>>>>>> PaulQuezada
=======
                imagen: require("../assets/zapatillaDefault.png"),
>>>>>>> AlvaroHerrera
                precio: '125.000',
                descripcion: 'Ta wena la jordan oe',
            },
            {
                id: 2,
                nombre: 'Jordan 2',
                talla: '11 US',
                marca: 'Adidas',
<<<<<<< HEAD
<<<<<<< HEAD
                imagen: require("../assets/zapatillaDefault.png"),
=======
                imagen: require("../assets/zapatillas/zapatillaDefault.png"),
>>>>>>> PaulQuezada
=======
                imagen: require("../assets/zapatillaDefault.png"),
>>>>>>> AlvaroHerrera
                precio: '200.000',
                descripcion: 'Si el 1 es weno, el 2 es mejor',
            },
            {
                id: 3,
                nombre: 'Jordan 3',
                talla: '23 EUR',
                marca: 'Adidas',
<<<<<<< HEAD
<<<<<<< HEAD
                imagen: require("../assets/zapatillaDefault.png"),
=======
                imagen: require("../assets/zapatillas/zapatillaDefault.png"),
>>>>>>> PaulQuezada
=======
                imagen: require("../assets/zapatillaDefault.png"),
>>>>>>> AlvaroHerrera
                precio: '250.000',
                descripcion: 'Es una breve descripcion de la zapatilla 3',
            },
            {
                id: 4,
                nombre: 'Jordan 4',
                talla: '24 EUR',
                marca: 'Lol',
<<<<<<< HEAD
<<<<<<< HEAD
                imagen: require("../assets/zapatillaDefault.png"),
=======
                imagen: require("../assets/zapatillas/zapatillaDefault.png"),
>>>>>>> PaulQuezada
=======
                imagen: require("../assets/zapatillaDefault.png"),
>>>>>>> AlvaroHerrera
                precio: '1.000.000',
                descripcion: 'Descripcion zapatilla 4',
            },
        ],
        rules: [
            value => !value || value.size < 2000000 || '¡La imagen no puede pesar mas de 2MB!',
        ],
    }),
    components: {
        Icon,
    },
    methods: {
        agregarProducto() {
            if (this.name === '' || this.descripcion === '' || this.precio === '' || this.imagen === '') {
                console.log("Datos vacios")
            } else {
                this.zapatillas.push({
                    id: Date.now(),
                    nombre: this.name,
                    descripcion: this.descripcion,
                    precio: this.precio,
                })
                this.name = null
                this.descripcion = null
                this.precio = null
            }
        },
        eliminarProducto(id) {
            console.log(id)
            this.zapatillas = this.zapatillas.filter(e => e.id != id)
        },
        seleccionarElementoTabla(id){
            console.log(id)
        },
    }
}
</script>