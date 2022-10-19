<template>
    <v-app>
        <v-container>
            <v-dialog v-model="drawerCarrito" max-width="1000px">
                <v-card>
                    <v-card-title>
                        <span class="text-h5">Agregar al carro de compras</span>
                    </v-card-title>
                    <v-card-text>
                        <v-row>
                            <v-img height="10%" width="10%" :src="imagenCarro"></v-img>
                            <v-col>
                                <v-card-title>
                                    <span class="text-h5">{{this.nombreCarro}}</span>
                                </v-card-title>
                                <v-row>
                                    <v-card-subtitle>Precio:</v-card-subtitle>
                                    <v-card-subtitle>${{this.precioCarro}} USD</v-card-subtitle>
                                    <v-card-subtitle>(c/u)</v-card-subtitle>
                                </v-row>
                                <v-row>
                                    <v-card-subtitle>Tallas:</v-card-subtitle>
                                    <v-select v-model="cmbxCarrito" :items="itemsCarro" @change="eleccionTalla()">
                                    </v-select>
                                </v-row>
                                <v-row>
                                    <v-card-subtitle>cantidad:</v-card-subtitle>
                                    <v-select v-model="cmbxCantidad" :items="itemsCantidad"></v-select>
                                </v-row>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-spacer></v-spacer>
                            <v-spacer></v-spacer>
                            <v-spacer></v-spacer>
                            <v-btn color="teal lighten-2" class="white--text"
                                @click="agregarCarroCompra(false,'', '', '','')">Agregar</v-btn>
                            <v-spacer></v-spacer>
                        </v-row>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-container>

        <v-container>
            <h2> Resultado busqueda: {{this.$store.state.busqueda}}</h2>
            <v-text-field outlined v-model="buscar" prepend-inner-icon="mdi-magnify" dense flat hide-details solo
                label="Buscar" @keyup.enter="busqueda">
            </v-text-field>
        </v-container>
        <div>
            <v-container>
                <v-row>
                    <v-col v-for="ArrayZapatillas in zapatillasFinal" :key="ArrayZapatillas._id" cols="10">
                        <v-card height="300" width="700" outlined center class="mx-12"
                            @mouseover="mostrarBotonCompra(ArrayZapatillas.nombre)"
                            @mouseleave="ocultarBotonCompra(ArrayZapatillas.nombre)"
                            @click="agregarCarroCompra(true,ArrayZapatillas.nombre, ArrayZapatillas.imagen, ArrayZapatillas.stock, ArrayZapatillas.precio, ArrayZapatillas.tipo, ArrayZapatillas.marca)"
                            >
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
                            <v-row>
                                <v-img height="250px" width="250px" :src="ArrayZapatillas.imagen">
                                    <template v-slot:placeholder>
                                        <v-row class="fill-height ma-0" align="center" justify="center">
                                            <v-progress-circular indeterminate color="teal lighten-2">
                                            </v-progress-circular>
                                        </v-row>
                                    </template>
                                </v-img>
                                <v-col>
                                    <h2>
                                        Nombre: {{ArrayZapatillas.nombre}}
                                    </h2>
                                    <p>
                                        Marca: {{ArrayZapatillas.marca}}
                                    </p>
                                    <p>
                                        Tipo: {{ArrayZapatillas.tipo}}
                                    </p>
                                    <span>
                                        Precio: ${{ArrayZapatillas.precio}} USD
                                    </span>
                                </v-col>
                            </v-row>

                            <v-spacer></v-spacer>
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </div>
    </v-app>
</template>
<script>
import { Icon } from "@iconify/vue2";
import VistaMarca from '../views/VistaMarca.vue'
import Swal from 'sweetalert2'
export default {
    data: () => ({
        hidden: null,
        nombre: null,
        zapatillas: [],
        zapatillasFinal: [],
        drawer: false,
        group: null,
        buscar: null,
        drawerCarrito: null,

        drawerCarrito: null,
        imagenCarro: null,
        tallasCarro: [],
        nombreCarro: null,
        precioCarro: null,
        tipoCarro: null,
        marcaCarro: null,
        cmbxCarrito: null,
        cmbxCantidad: null,
        itemsCarro: [],
        itemsCantidad: [],
        cantidadMaximaCarro: null,
        min: 0,
        max: 500,
        range: [0, 500],
    }),
    created() {
        this.listarZapatillas()
    },
    components: {
        Icon,
        VistaMarca
    },
    methods: {
        listarZapatillas() {
            this.axios.get('EZ-Producto')
                .then((response) => {
                    this.zapatillas = response.data;
                    this.$store.state.busqueda = this.$store.state.busqueda.toLowerCase()
                    this.zapatillasFinal = this.zapatillas.filter(zapatilla => zapatilla.nombre.toLowerCase().indexOf(this.$store.state.busqueda) !== -1)
                })
                .catch((e) => {
                    console.log('error' + e);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error en la busqueda...',
                        text: 'Error conexion con la red!',
                    })
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
        limpiarVentana() {
            console.log("LIMPIANDO VENTANA")
            this.hidden = null
            this.nombre = null
            this.zapatillas = []
            this.zapatillasFinal = []
            this.drawer = false
            this.group = null
        },
        busqueda() {
            var algo = []
            if (this.$route.path !== `/busqueda/${this.buscar}`) {
                this.$router.push({ path: `/busqueda/${this.buscar}` })
            }
            this.limpiarVentana()
            this.axios.get('EZ-Producto')
                .then((response) => {
                    this.zapatillas = response.data;
                    this.buscar = this.buscar.toLowerCase()
                    this.zapatillasFinal = this.zapatillas.filter(zapatilla => zapatilla.nombre.toLowerCase().indexOf(this.buscar) !== -1)
                })
                .catch((e) => {
                    console.log('error' + e);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error en la busqueda...',
                        text: 'Error conexion con la red!',
                    })
                })
        },
        agregarCarroCompra(consulta, nombre, imagen, tallas, precio, tipo, marca) {
            if (consulta) {
                this.itemsCantidad = []
                this.itemsCarro = []
                this.cmbxCantidad = null
                this.cmbxCarrito = null
                this.drawerCarrito = true

                this.nombreCarro = nombre
                this.imagenCarro = imagen
                this.tallasCarro = tallas
                this.precioCarro = precio
                this.tipoCarro = tipo
                this.marcaCarro = marca

                for (var i = 0; i < this.tallasCarro.length; i++) {
                    this.itemsCarro.push(this.tallasCarro[i].talla)
                }
            } else {
                if (this.$store.state.ingresoUsuario) {
                    var estadoTalla = true
                    var estadoElementos = true
                    for (var i = 0; i < this.$store.state.carroCompras.length; i++) {
                        if (this.nombreCarro === this.$store.state.carroCompras[i].nombre && this.$store.state.carroCompras[i].talla === this.cmbxCarrito) {
                            estadoTalla = false
                            break
                        }
                    }
                    if(this.cmbxCarrito===null || this.cmbxCantidad===null){
                        estadoElementos=false
                    }
                    if(!estadoElementos){
                        Swal.fire({
                            icon: 'error',
                            title: 'No se ingresaron las cantidades y/o talla...',
                            text: 'Ingrese la talla y las cantidades para agregar productos a su carro de compras!',
                        })
                    }else{
                        if (estadoTalla) {
                            this.$store.state.carroCompras.push({
                                nombre: this.nombreCarro,
                                marca: this.marcaCarro,
                                tipo: this.tipoCarro,
                                precio: this.precioCarro,
                                imagen: this.imagenCarro,
                                talla: this.cmbxCarrito,
                                count: this.cmbxCantidad,
                                maxCantidad: this.cantidadMaximaCarro,
                                id: Date.now()
                            })
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: 'El producto se añadido al carro',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        } else {
                            Swal.fire({
                                icon: 'error',
                                title: 'Talla duplicada en el carro...',
                                text: 'Modifique la talla para poder ingresarlo al carro!',
                            })
                        }
                    }
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Error al ingresar productos al carro...',
                        text: 'Debes logearte para poder añadir productos a tu carro de compras!',
                    })
                    this.$store.state.visibleBusqueda=true
                    this.$router.push({ path: "/login" })
                    
                }
                this.drawerCarrito = false
            }
        },
        eleccionTalla() {
            var cantidad
            var estado = false
            for (var i = 0; i < this.tallasCarro.length; i++) {
                if (this.cmbxCarrito === this.tallasCarro[i].talla) {
                    cantidad = this.tallasCarro[i].cantidad
                    this.cantidadMaximaCarro = this.tallasCarro[i].cantidad
                    estado = true
                    break
                }
            }
            if (estado) {
                for (var i = 0; i <= cantidad; i++) {
                    if (i !== 0) {
                        this.itemsCantidad.push(i)
                    }
                }
            } else {
                this.drawerCarrito = false
                Swal.fire({
                    icon: 'error',
                    title: 'Fuera de stock...',
                    text: 'La talla que ingreso no esta dentro de nuestro stock!',
                })

            }
        }
    }
};
</script>