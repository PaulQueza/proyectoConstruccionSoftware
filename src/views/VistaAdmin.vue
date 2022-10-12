<template>
    <v-app>
        <v-row class="mx-2 mt-3" v-if="ingresoAdmin === true">
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
                                    <v-text-field v-model="stock"
                                        :rules="[() => !!stock || 'Este campo no puede estar vacio']" label="stocks"
                                        required>
                                    </v-text-field>
                                    <v-text-field v-model="color"
                                        :rules="[() => !!color || 'Este campo no puede estar vacio']" label="Color"
                                        required>
                                    </v-text-field>
                                    <v-text-field v-model="imagen"
                                        :rules="[() => !!imagen || 'Este campo no puede estar vacio']" label="Imagen"
                                        required prepend-icon="mdi-camera">
                                    </v-text-field>
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
                                    <p>
                                        Tallas:
                                    </p>
                                    <li v-for="(product) in stock" :key="product.id">
                                        <input :id="product.id" :value="product.talla" name="product.talla"
                                            type="checkbox" v-model="checked">
                                        <label :for="product.id"> {{product.talla}}</label>
                                    </li>
                                    <v-text-field :rules="[() => !!cantidad || 'Este campo no puede estar vacio']"
                                        label="Cantidad" required>
                                    </v-text-field>
                                    <v-text-field v-model="color"
                                        :rules="[() => !!color || 'Este campo no puede estar vacio']" label="Color"
                                        required>
                                    </v-text-field>
                                    <v-text-field v-model="imagen"
                                        :rules="[() => !!imagen || 'Este campo no puede estar vacio']" label="Imagen"
                                        required prepend-icon="mdi-camera">
                                    </v-text-field>
                                    <v-btn @click="editarProducto(false, '', '', '', '', 0, '', '', '')"
                                        class="white--text" color="teal lighten-2" type="submit">
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
                <v-container fluid style="margin: 0px; padding: 0px; width: 60%">
                    <v-row>
                        <v-col v-for="zapatilla in zapatillas" :key="zapatilla._id" cols="3">
                            <v-card height="550" width="700" outlined center>
                                <v-img height="160" width="300" :src="zapatilla.imagen">
                                    <template v-slot:placeholder>
                                        <v-row class="fill-height ma-0" align="center" justify="center">
                                            <v-progress-circular indeterminate color="teal lighten-2">
                                            </v-progress-circular>
                                        </v-row>
                                    </template>
                                </v-img>
                                <v-col>
                                    <v-btn class="mx-3" color="teal lighten-2" fab
                                        @click="eliminarProducto(zapatilla._id)" top left card>
                                        <Icon icon="fluent:delete-16-regular" width="30" height="30" />
                                    </v-btn>
                                    <v-btn color="teal lighten-2" fab
                                        @click="editarProducto(true, zapatilla.nombre, zapatilla.marca, zapatilla.stock, zapatilla.color, zapatilla.precio, zapatilla.tipo, zapatilla._id, zapatilla.imagen)"
                                        top right card>
                                        <Icon icon="clarity:edit-solid" width="30" height="30" />
                                    </v-btn>
                                    <h1 style="font-size:140%">{{zapatilla.nombre}}</h1>
                                    <p style="font-size:90%">
                                        Marca: {{zapatilla.marca}}<br>
                                        Tipo: {{zapatilla.tipo}} <br>
                                        Precio: {{zapatilla.precio}}<br>
                                        Tallas:<br>
                                        <span v-for="{talla, cantidad} in zapatilla.stock" :key="talla.id">
                                            talla: {{talla}} quedan: {{cantidad}} <br>
                                        </span>
                                        Color: {{zapatilla.color}}<br>
                                        Id: {{zapatilla._id}}<br>
                                    </p>
                                </v-col>
                            </v-card>
                        </v-col>
                    </v-row>
                </v-container>
            </v-row>
            <!-- Boton agregar -->
            <div style: width="30px">
                <v-row no-gutters justify="end">
                    <v-btn @click="agregarProducto(true)" absolute top right>
                        <Icon icon="carbon:add-filled" color="#4db6ac" width="66" height="66" />
                    </v-btn>
                </v-row>
            </div>
        </v-row>
        <v-container align="center" v-else>
            <v-spacer></v-spacer>
            <h1> No se encontró la página</h1>
            <v-spacer></v-spacer>
        </v-container>
    </v-app>

</template>
<script>
import Swal from 'sweetalert2'
import { Icon } from "@iconify/vue2";
export default {
    data: () => ({
        ingresoAdmin: null,
        name: null,
        marca: null,
        tipo: null,
        precio: null,
        color: null,
        imagen: null,
        stock: [],
        _id: null,
        drawerAgregar: false,
        drawerEditar: false,
        zapatillas: [],
        productoAgregar: {
            nombre: null,
            marca: null,
            tipo: null,
            precio: null,
            stock: null,
            color: null,
            imagen: null,
        },
        productoEditar: {
            nombre: null,
            marca: null,
            tipo: null,
            precio: null,
            stock: null,
            color: null,
            imagen: null,
            _id: null
        },
        admins: [],
    }),
    created() {
        this.listarZapatillas();
        this.listarCuentas();
        this.revisarAdmin();
    },
    components: {
        Icon,
    },
    methods: {
        listarCuentas() {
            this.axios.get("EZ-Admin")
                .then((response) => {
                    this.admins = response.data;
                })
                .catch((e) => {
                    console.log('error' + e);
                })
        },
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
            if (consulta === true) {
                this.drawerAgregar = true;
                this.name = ''
                this.marca = ''
                this.stock = ''
                this.tipo = ''
                this.color = ''
                this.precio = 0
            } else {
                this.productoAgregar = {
                    nombre: null,
                    marca: null,
                    tipo: null,
                    precio: null,
                    stock: null,
                    color: null,
                    imagen: null,
                }
                this.productoAgregar.nombre = this.name
                this.productoAgregar.marca = this.marca
                this.productoAgregar.stock = this.stock
                this.productoAgregar.tipo = this.tipo
                this.productoAgregar.color = this.color
                this.productoAgregar.precio = this.precio
                this.axios.post('Nuevo-Producto', this.productoAgregar)
                    .then(res => {
                        // Agrega al inicio de nuestro array notas
                        this.zapatillas.unshift(res.data);
                    })
                    .catch(e => {
                        console.log("error");
                    })
                this.drawerAgregar = false;
            }
        },
        eliminarProducto(id) {
            Swal.fire({
                title: '¿Estas seguro?',
                text: "No podras revertir esto!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Si, eliminalo!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.axios.delete(`Producto-el/${id}`)
                        .then(res => {
                            let index = this.zapatillas.findIndex(item => item._id === res.data._id)
                            this.zapatillas.splice(index, 1);
                        })
                        .catch(e => {
                            console.log("error " + e.response);
                        })
                    Swal.fire(
                        'Eliminado!',
                        'El archivo a sido eliminado.',
                        'success'
                    )
                }
            })

        },
        editarProducto(consulta, name, marca, stock, color, precio, tipo, _id, imagen) {
            if (consulta == true) {
                this.drawerEditar = true
                this.name = name
                this.marca = marca
                this.stock = stock
                this.tipo = tipo
                this.color = color
                this.precio = precio
                this._id = _id
                this.imagen = imagen
            } else {
                this.drawerEditar = false
                if (this.name == '' || this.tipo == '' || this.marca == '' || this.stock == [] || this.color == '' || this.precio == '' || this.imagen == '') {
                    console.log("Datos vacios")
                } else {
                    this.productoEditar = {
                        nombre: null,
                        marca: null,
                        tipo: null,
                        precio: null,
                        stock: null,
                        color: null,
                        imagen: null,
                        _id: null,
                    }
                    this.productoEditar.nombre = this.name
                    this.productoEditar.marca = this.marca
                    this.productoEditar.stock = this.stock
                    this.productoEditar.tipo = this.tipo
                    this.productoEditar.color = this.color
                    this.productoEditar.precio = this.precio
                    this.productoEditar.imagen = this.imagen
                    this.productoEditar._id = this._id
                    this.axios.put(`Producto-ac/${this.productoEditar._id}`, this.productoEditar)
                        .then(res => {
                            const index = this.zapatillas.findIndex(zapatillaB => zapatillaB._id === this.productoEditar._id);
                            this.zapatillas[index].nombre = this.productoEditar.nombre
                            this.zapatillas[index].marca = this.productoEditar.marca
                            this.zapatillas[index].stock = this.productoEditar.stock
                            this.zapatillas[index].tipo = this.productoEditar.tipo
                            this.zapatillas[index].color = this.productoEditar.color
                            this.zapatillas[index].precio = this.productoEditar.precio
                            this.zapatillas[index].imagen = this.productoEditar.imagen
                        })
                        .catch(e => {
                            console.log(e);
                        })
                }
            }
        },
        revisarAdmin() {
            var estado = false
            this.axios.get("EZ-Admin")
                .then((response) => {
                    this.admins = response.data;
                    for (var i = 0; i < this.admins.length; i++) {
                        console.log(this.admins[i].nombreUsuario + "???")
                        if (localStorage.getItem(this.admins[i].nombreUsuario)) {
                            estado = true
                        }
                    }
                    if (estado === true) {
                        this.ingresoAdmin = true
                    } else {
                        this.ingresoAdmin = false
                    }
                })
                .catch((e) => {
                    console.log('error' + e);
                })
        }
    }
}
</script>