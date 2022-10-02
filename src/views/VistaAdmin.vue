<template>
    <v-app>
        <v-row class="mx-2 mt-3">
            <!-- Dialogo de agregar -->
            <v-dialog v-model="drawerAgregar" max-width="500px">
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
                                        :rules="[() => !!precio || 'Este campo no puede estar vacio']" label="Precio"
                                        required>
                                    </v-text-field>
                                    <v-text-field v-model="talla"
                                        :rules="[() => !!talla || 'Este campo no puede estar vacio']" label="Tallas"
                                        required>
                                    </v-text-field>
                                    <v-text-field v-model="color"
                                        :rules="[() => !!color || 'Este campo no puede estar vacio']" label="Color"
                                        required>
                                    </v-text-field>
                                    <v-file-input v-model="imagen" :rules="rules" accept="image/png, image/jpeg"
                                        placeholder=" Busca la imagen" prepend-icon="mdi-camera" label="Imagen">
                                    </v-file-input>
                                    <v-btn @click="agregarProducto(false)" class="white--text" color="teal lighten-2"
                                        type="submit">
                                        Agregar
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-dialog>
            <!-- Dialogo de editar -->
            <v-dialog v-model="drawerEditar" max-width="500px">
                <v-card>
                    <v-card-title>
                        <span class="text-h5">Editar producto </span>
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
                                        :rules="[() => !!precio || 'Este campo no puede estar vacio']" label="Precio"
                                        required>
                                    </v-text-field>
                                    <v-text-field v-model="talla"
                                        :rules="[() => !!talla || 'Este campo no puede estar vacio']" label="Tallas"
                                        required>
                                    </v-text-field>
                                    <v-text-field v-model="color"
                                        :rules="[() => !!color || 'Este campo no puede estar vacio']" label="Color"
                                        required>
                                    </v-text-field>
                                    <v-file-input v-model="imagen" :rules="rules" accept="image/png, image/jpeg"
                                        placeholder=" Busca la imagen" prepend-icon="mdi-camera" label="Imagen">
                                    </v-file-input>
                                    <v-btn @click="editarProducto(false,'','','','','','','')" class="white--text"
                                        color="teal lighten-2" type="submit">
                                        Editar
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-dialog>
            <!-- Mostrar los datos de las zapatillas del inventario -->
            <v-row class="mx-12 mt-4" justify="center">
                <v-container fluid style="margin: 0px; padding: 0px; width: 40%">
                    <v-row class="mb-12" v-for="zapatilla in zapatillas" :key="zapatilla._id">
                        <v-img height="160" width="150"
                            :src="zapatilla.imagen">
                            <template v-slot:placeholder>
                                <v-row class="fill-height ma-0" align="center" justify="center">
                                    <v-progress-circular indeterminate color="teal lighten-2"></v-progress-circular>
                                </v-row>
                            </template>
                        </v-img>
                        <v-col>
                            <h1 style="font-size:170%">{{zapatilla.nombre}}</h1>
                            <p style="font-size:90%">
                                Marca: {{zapatilla.marca}}<br>
                                Tipo: {{zapatilla.tipo}} <br>
                                Precio: {{zapatilla.precio}}<br>
                                Tallas: {{zapatilla.talla}}<br>
                                Color: {{zapatilla.color}}<br>
                                Id: {{zapatilla._id}}<br>
                            </p>
                        </v-col>
                        <v-btn class="mx-3" color="teal lighten-2" fab @click="eliminarProducto(zapatilla.__id)">
                            <Icon icon="fluent:delete-16-regular" width="30" height="30" />
                        </v-btn>
                        <v-btn color="teal lighten-2" fab
                            @click="editarProducto(true, zapatilla.nombre, zapatilla.marca, zapatilla.talla, zapatilla.color, zapatilla.precio, zapatilla.tipo)">
                            <Icon icon="clarity:edit-solid" width="30" height="30" />
                        </v-btn>
                    </v-row>
                </v-container>
            </v-row>
            <!-- Boton agregar -->
            <div style: width="30px">
                <v-row no-gutters justify="end">
                    <v-btn @click="agregarProducto(true)" fab>
                        <Icon icon="carbon:add-filled" color="#4db6ac" width="66" height="66" />
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
        drawerAgregar: false,
        drawerEditar: false,
        zapatillas: [],
        rules: [
            value => !value || value.size < 2000000 || '¡La imagen no puede pesar mas de 2MB!',
        ],
    }),
    created() {
        this.listarZapatillas();
    },
    components: {
        Icon,
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
        agregarProducto(consulta) {
            if(consulta===true){
                this.drawerAgregar=true;
                this.name = ''
                this.marca = ''
                this.talla = ''
                this.tipo = ''
                this.color = ''
                this.precio = ''
            }else{
                this.drawerAgregar=false;
            }
        },
        eliminarProducto(id) {
            console.log(id)
            this.zapatillas = this.zapatillas.filter(e => e.id != id)
        },
        editarProducto(consulta, name, marca, talla, color, precio, tipo) {
            if (consulta == true) {
                this.drawerEditar = true
                this.name = name
                this.marca = marca
                this.talla = talla
                this.tipo = tipo
                this.color = color
                this.precio = precio
            } else {
                this.drawerEditar = false
                this.name = null
                this.marca = null
                this.talla = null
                this.color = null
                this.imagen = null
                this.precio = null
                this.tipo = null
                if (this.name == '' || this.tipo == '' || this.marca == '' || this.talla == '' || this.color == '' || this.precio == '' || this.imagen == '') {
                    console.log("Datos vacios")
                } else {
                    console.log("Editar en la base de datos!!!")
                }
            }
        }
    }
}
</script>