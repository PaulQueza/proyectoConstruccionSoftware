<template>
    <v-app>
        <v-row class="mx-2 mt-3">
            <v-dialog v-model="drawer" max-width="500px">
                <v-card>
                    <v-card-title>
                        <span class="text-h5">Agregar productos</span>
                    </v-card-title>
                    <v-card-text>
                        <v-container>
                            <v-row justify="center">
                                    <v-col cols="12" sm="10" md="10">
                                        <v-text-field v-model="name"
                                            :rules="[() => !!name || 'Este campo no puede estar vacio']" label="Nombre"
                                            required>
                                        </v-text-field>
                                        <v-text-field v-model="marca"
                                            :rules="[() => !!marca || 'Este campo no puede estar vacio']" label="Marca"
                                            required>
                                        </v-text-field>
                                        <v-text-field v-model="tipo"
                                            :rules="[() => !!tipo || 'Este campo no puede estar vacio']" label="Tipo"
                                            required>
                                        </v-text-field>
                                        <v-text-field v-model="precio"
                                            :rules="[() => !!precio || 'Este campo no puede estar vacio']"
                                            label="Precio" required>
                                        </v-text-field>
                                        <v-text-field v-model="talla"
                                            :rules="[() => !!talla || 'Este campo no puede estar vacio']"
                                            label="Tallas" required>
                                        </v-text-field>
                                        <v-text-field v-model="color"
                                            :rules="[() => !!color || 'Este campo no puede estar vacio']"
                                            label="Color" required>
                                        </v-text-field>
                                        <v-file-input v-model="imagen" :rules="rules" accept="image/png, image/jpeg"
                                            placeholder=" Busca la imagen" prepend-icon="mdi-camera" label="Imagen">
                                        </v-file-input>
                                        <v-btn @click="agregarProducto()" class="white--text" color="teal lighten-2" type="submit">
                                            Agregar
                                        </v-btn>
                                    </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-dialog>
            <v-row class="mx-12 mt-4" justify="center">
                <v-container fluid style="margin: 0px; padding: 0px; width: 40%">
                    <v-row class="mb-12" v-for="zapatilla in zapatillas" :key="zapatilla.id">
                        <img :src="zapatilla.imagen" width="160" height="150" />
                        <v-col>
                            <h1 style="font-size:170%">{{zapatilla.nombre}}</h1>
                            <p style="font-size:90%">
                                Marca: {{zapatilla.marca}}<br>
                                Tipo: {{zapatilla.tipo}} <br>
                                Precio: {{zapatilla.precio}}<br>
                                Tallas: {{zapatilla.talla}}<br>
                                Color: {{zapatilla.color}}<br>
                            </p>

                        </v-col>
                        <v-btn class="mx-3" color="teal lighten-2" fab @click="eliminarProducto(zapatilla.id)">
                            <Icon icon="fluent:delete-16-regular" width="30" height="30" />
                        </v-btn>
                        <v-btn color="teal lighten-2" fab @click="editarProducto(zapatilla.id)">
                            <Icon icon="clarity:edit-solid" width="30" height="30" />
                        </v-btn>

                    </v-row>
                </v-container>
            </v-row>
            <div style: width="30px">
                <v-row no-gutters justify="end">
                    <v-btn @click="drawer = !drawer" fab>
                        <Icon icon="carbon:add-filled" color="#4db6ac" width="66"
                            height="66" />
                    </v-btn>
                </v-row>
            </div>
        </v-row>
    </v-app>

</template>
<script>
import { Icon } from "@iconify/vue2";
export default {
    data: () => ({
        name: null,
        marca: null,
        tipo: null,
        precio: null,
        talla: null,
        color: null,
        imagen: null,
        drawer: false,
        zapatillas: [
            {
                id: 1,
                nombre: 'Adidas Forum Low',
                marca: 'Adidas',
                tipo: 'Urbana',
                imagen: require("../assets/Adidas2.jpg"),
                precio: '$84.990',
                talla: '41 43 44',
                color: 'Blanco',
            },
            {
                id: 2,
                nombre: 'Nike Blazer Mid 77',
                marca: 'Nike',
                tipo: 'Urbana',
                imagen: require("../assets/Nike1.jpg"),
                precio: '$106.990',
                talla: '42 43 44',
                color: 'Blanco',
            },
            {
                id: 3,
                nombre: 'Puma MAYZE STACK',
                marca: 'Puma',
                tipo: 'Casual',
                imagen: require("../assets/Puma3.jpg"),
                precio: '$94.990',
                talla: '35 36',
                color: 'Negro',
            },
            {
                id: 4,
                nombre: 'On Cloud 5',
                marca: 'On cloud',
                tipo: 'Deportiva',
                imagen: require("../assets/OnCloud3.jpg"),
                precio: '$139.990',
                talla: '35 36 37',
                color: 'Rosado',
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
            if (this.name == '' || this.tipo == '' || this.marca == '' || this.talla == '' || this.color == '' || this.precio == '' || this.imagen == '') {
                console.log("Datos vacios")
            } else {
                this.zapatillas.push({
                    id: Date.now(),
                    nombre: this.name,
                    marca: this.marca,
                    tipo: this.tipo,
                    color: this.color,
                    precio: this.precio,
                })
                this.name = null
                this.marca = null
                this.talla = null
                this.color = null
                this.imagen = null
                this.precio = null
                this.tipo = null
            }
            this.drawer=false;
        },
        eliminarProducto(id) {
            console.log(id)
            this.zapatillas = this.zapatillas.filter(e => e.id != id)
        },
        editarProducto(id) {

        }
    }
}
</script>