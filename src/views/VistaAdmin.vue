<template>
    <v-app>
        <v-row class="mx-2 mt-3">
            <v-navigation-drawer v-model="drawer" width="300">
                
                    <v-form @submit.prevent="agregarProducto">
                        <h1>
                            Añadir productos
                        </h1>
                        <v-col cols="12" sm="10" md="10">
                            <v-text-field v-model="name" :rules="[() => !!name || 'Este campo no puede estar vacio']"
                                label="Nombre" required>
                            </v-text-field>


                            <v-textarea v-model="descripción"
                                :rules="[() => !!descripcion || 'Este campo no puede estar vacio']" label="Descripcion"
                                required>
                            </v-textarea>


                            <v-text-field v-model="precio"
                                :rules="[() => !!precio || 'Este campo no puede estar vacio']" label="Precio" required>
                            </v-text-field>


                            <v-file-input v-model="imagen" :rules="rules" accept="image/png, image/jpeg"
                                placeholder=" Busca la
                                imagen" prepend-icon="mdi-camera" label="Imagen">
                            </v-file-input>


                            <v-btn class="white--text" color="teal lighten-2" type="submit">
                                Agregar
                            </v-btn>
                        </v-col>
                    </v-form>
                
            </v-navigation-drawer>
            <v-row class="mx-12 mt-11">
                <container>
                    <v-row class="mb-10" v-for="zapatilla in zapatillas" :key="zapatilla.nombre">
                        <img :src="zapatilla.imagen" width="150" height="100" />
                        <v-col>
                            <h1>{{zapatilla.nombre}}</h1>
                            <p>{{zapatilla.descripcion}}</p>
                        </v-col>
                        <v-btn class="mx-3" color="teal lighten-2" fab @click="eliminarProducto(zapatilla.id)">
                            <Icon icon="fluent:delete-16-regular" width="30" height="30" />
                        </v-btn>
                        <v-btn color="teal lighten-2" fab>
                            <Icon icon="clarity:edit-solid" width="30" height="30" />
                        </v-btn>

                    </v-row>
                </container>
                <v-spacer></v-spacer>
                <v-btn @click="drawer = !drawer" fab>
                    <Icon @click="drawer = !drawer" icon="carbon:add-filled" color="#4db6ac" width="66" height="66" />
                </v-btn>
            </v-row>
        </v-row>
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
        zapatillas: [
            {
                id: 1,
                nombre: 'Jordan 1',
                tipo: 'Anashe',
                imagen: require("../assets/zapatillaDefault.png"),
                precio: '125.000',
                descripcion: 'Ta wena la jordan oe',
            },
            {
                id: 2,
                nombre: 'Jordan 2',
                tipo: 'Anashe',
                imagen: require("../assets/zapatillaDefault.png"),
                precio: '200.000',
                descripcion: 'Si el 1 es weno, el 2 es mejor',
            },
            {
                id: 3,
                nombre: 'Jordan 3',
                tipo: 'Anashe',
                imagen: require("../assets/zapatillaDefault.png"),
                precio: '250.000',
                descripcion: 'Es una breve descripcion de la zapatilla 3',
            },
            {
                id: 4,
                nombre: 'Jordan 4',
                tipo: 'Anashe',
                imagen: require("../assets/zapatillaDefault.png"),
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
        }
    }
}
</script>