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
                                    <v-card-subtitle>Cantidad:</v-card-subtitle>
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
            <v-btn @click="drawer = true" rounded fab color="teal lighten-2">
                <Icon icon="bi:filter" color="white" width="40" height="40" />
            </v-btn>
        </v-container>
        <div align="center">
            <v-navigation-drawer v-model="drawer" absolute temporary>
                <v-navigation-drawer v-model="drawer" absolute temporary>
                    <v-container centered justify="center">
                        <h1>Filtros</h1>
                        <v-row>
                            <v-checkbox v-model="TagsCheck" hide-details class="ml-4"></v-checkbox>
                            <h3 align="left" class="mt-5">Tags</h3>
                        </v-row>
                        <v-container class="center">
                            <v-checkbox v-model="Deportiva" label="Deportiva" hide-details class="ml-2"></v-checkbox>
                            <v-checkbox v-model="Casual" label="Casual" hide-details class="ml-2"></v-checkbox>
                            <v-checkbox v-model="Urbana" label="Urbana" hide-details class="ml-2"></v-checkbox>
                        </v-container>
                        <v-row>
                            <v-checkbox v-model="PrecioCheck" hide-details class="ml-4"></v-checkbox>
                            <h3 align="left" class="mt-5">Precio</h3>
                        </v-row>
                        <v-row>
                            <v-col class="px-4">
                                <v-range-slider v-model="range" :max="max" :min="min" hide-details class="align-center">
                                    <template v-slot:prepend>
                                        <v-text-field :value="range[0]" class="mt-0 pt-0" hide-details single-line
                                            type="number" style="width: 60px" @change="$set(range, 0, $event)">
                                        </v-text-field>
                                    </template>
                                    <template v-slot:append>
                                        <v-text-field :value="range[1]" class="mt-0 pt-0" hide-details single-line
                                            type="number" style="width: 60px" @change="$set(range, 1, $event)">
                                        </v-text-field>
                                    </template>
                                </v-range-slider>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-checkbox v-model="TallaCheck" hide-details class="ml-4"></v-checkbox>
                            <h3 align="left" class="mt-5">Talla</h3>
                        </v-row>
                        <v-row>
                            <v-spacer></v-spacer>
                            <v-text-field v-model="TallaFiltro" label="Ingresa la talla"></v-text-field>
                            <v-spacer></v-spacer>
                        </v-row>
                        <div align="center">
                            <v-btn @click="filtroZapatilllas()" color="teal lighten-2" class="white--text"> Filtrar
                            </v-btn>
                        </div>
                    </v-container>
                </v-navigation-drawer>
            </v-navigation-drawer>

            <div class="text-center" v-if="!cargado">
                <v-progress-circular :size="50" color="primary" indeterminate></v-progress-circular>
            </div>
            <v-container v-else>
                <v-row>
                    <v-col v-for="ArrayZapatillas in zapatillas" :key="ArrayZapatillas._id" cols="3">
                        <v-card height="350" width="500" outlined center
                            @mouseover="mostrarBotonCompra(ArrayZapatillas.nombre)"
                            @mouseleave="ocultarBotonCompra(ArrayZapatillas.nombre)"
                            @click="agregarCarroCompra(true,ArrayZapatillas.nombre, ArrayZapatillas.imagen, ArrayZapatillas.stock, ArrayZapatillas.precio, ArrayZapatillas.tipo, ArrayZapatillas.marca)">
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
                            <v-img height="150" width="250" :src="ArrayZapatillas.imagen">
                                <template v-slot:placeholder>
                                    <v-row class="fill-height ma-0" align="center" justify="center">
                                        <v-progress-circular indeterminate color="teal lighten-2"></v-progress-circular>
                                    </v-row>
                                </template>
                            </v-img>
                            <h3>
                                {{ArrayZapatillas.nombre}}
                            </h3>
                            <p>
                                Marca: {{ArrayZapatillas.marca}}
                            </p>
                            <p>
                                Tipo: {{ArrayZapatillas.tipo}}
                            </p>
                            <span>
                                Precio: ${{ArrayZapatillas.precio}} USD
                            </span>
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
    props: {
    },
    data() {
        return {
            hidden: null,
            nombre: null,
            zapatillas: [],
            drawer: false,
            group: null,
            Deportiva: null,
            Casual: null,
            Urbana: null,
            PrecioCheck: null,
            Precio: null,
            TagsCheck: null,
            TallaCheck: null,
            TallaFiltro: null,

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
            cargado: false,
        };
    },
    created() {
        this.drawer = true
        this.TagsCheck = this.$store.state.tags
        if (this.TagsCheck) {
            this.Urbana = this.$store.state.Urbana
            this.Casual = this.$store.state.Casual
            this.Deportiva = this.$store.state.Deportiva
        }
        this.PrecioCheck = this.$store.state.precio
        if (this.PrecioCheck) {
            this.min = this.$store.state.precioMin
            this.max = this.$store.state.precioMax
            this.range[0] = this.min
            this.range[1] = this.max
        }
        this.TallaCheck = this.$store.state.talla
        if (this.TallaCheck) {
            this.TallaFiltro = this.$store.state.tallaFiltrar
        }
        this.filtroZapatilllas();
    },
    components: {
        Icon,
        VistaMarca
    },
    methods: {
        mostrarBotonCompra(nombre) {
            this.hidden = true
            this.nombre = nombre
        },
        ocultarBotonCompra(nombre) {
            this.hidden = false
            this.nombre = nombre
        },
        filtroZapatilllas() {
            this.cargado = false
            var zapatillasUrbana = []
            var zapatillasCasual = []
            var zapatillasDeportiva = []
            var zapatillaTalla = []
            var zapatillasBD = []
            this.zapatillas = []
            if(!this.TagsCheck){
                this.Urbana=false
                this.Casual=false
                this.Deportiva=false
            }
            if(!this.TallaCheck){
                this.TallaFiltro=null
            }
            this.axios.get('Ez-Producto').then((response) => {
                zapatillasBD = response.data;
                if (this.TagsCheck) {
                    if (this.Urbana) {
                        zapatillasUrbana = zapatillasBD.filter(v => v.tipo === "Urbana")
                        for (var i = 0; i < zapatillasUrbana.length; i++) {
                            this.zapatillas.push({
                                nombre: zapatillasUrbana[i].nombre,
                                marca: zapatillasUrbana[i].marca,
                                tipo: zapatillasUrbana[i].tipo,
                                imagen: zapatillasUrbana[i].imagen,
                                precio: zapatillasUrbana[i].precio,
                                sexo: zapatillasUrbana[i].sexo,
                                visible: zapatillasUrbana[i].visible,
                                stock: zapatillasUrbana[i].stock,
                                color: zapatillasUrbana[i].color,
                            })
                        }
                    }
                    if (this.Casual) {
                        zapatillasCasual = zapatillasBD.filter(v => v.tipo === "Casual")
                        for (var i = 0; i < zapatillasCasual.length; i++) {
                            this.zapatillas.push({
                                nombre: zapatillasCasual[i].nombre,
                                marca: zapatillasCasual[i].marca,
                                tipo: zapatillasCasual[i].tipo,
                                imagen: zapatillasCasual[i].imagen,
                                precio: zapatillasCasual[i].precio,
                                sexo: zapatillasCasual[i].sexo,
                                visible: zapatillasCasual[i].visible,
                                stock: zapatillasCasual[i].stock,
                                color: zapatillasCasual[i].color,
                            })
                        }
                    }
                    if (this.Deportiva) {
                        zapatillasDeportiva = zapatillasBD.filter(v => v.tipo === "Deportiva")
                        for (var i = 0; i < zapatillasDeportiva.length; i++) {
                            this.zapatillas.push({
                                nombre: zapatillasDeportiva[i].nombre,
                                marca: zapatillasDeportiva[i].marca,
                                tipo: zapatillasDeportiva[i].tipo,
                                imagen: zapatillasDeportiva[i].imagen,
                                precio: zapatillasDeportiva[i].precio,
                                sexo: zapatillasDeportiva[i].sexo,
                                visible: zapatillasDeportiva[i].visible,
                                stock: zapatillasDeportiva[i].stock,
                                color: zapatillasDeportiva[i].color,
                            })
                        }
                    }
                }
                if (this.PrecioCheck) {
                    if (this.TagsCheck) {
                        this.zapatillas = this.zapatillas.filter(v => v.precio >= this.range[0] && v.precio <= this.range[1])
                    } else {
                        this.zapatillas = zapatillasBD.filter(v => v.precio >= this.range[0] && v.precio <= this.range[1])
                    }
                }
                if (this.TallaCheck) {
                    var stock = []
                    if (this.TagsCheck) {
                        for (var i = 0; i < this.zapatillas.length; i++) {
                            stock = this.zapatillas[i].stock
                            for (var j = 0; j < stock.length; j++) {
                                if (stock[j].talla === this.TallaFiltro) {
                                    zapatillaTalla.push({
                                        nombre: this.zapatillas[i].nombre,
                                        marca: this.zapatillas[i].marca,
                                        tipo: this.zapatillas[i].tipo,
                                        imagen: this.zapatillas[i].imagen,
                                        precio: this.zapatillas[i].precio,
                                        sexo: this.zapatillas[i].sexo,
                                        visible: this.zapatillas[i].visible,
                                        stock: this.zapatillas[i].stock,
                                        color: this.zapatillas[i].color,
                                    })
                                }
                            }
                        }
                        this.zapatillas = zapatillaTalla
                    } else {
                        for (var i = 0; i < zapatillasBD.length; i++) {
                            stock = zapatillasBD[i].stock
                            for (var j = 0; j < stock.length; j++) {
                                if (stock[j].talla === this.TallaFiltro) {
                                    zapatillaTalla.push({
                                        nombre: zapatillasBD[i].nombre,
                                        marca: zapatillasBD[i].marca,
                                        tipo: zapatillasBD[i].tipo,
                                        imagen: zapatillasBD[i].imagen,
                                        precio: zapatillasBD[i].precio,
                                        sexo: zapatillasBD[i].sexo,
                                        visible: zapatillasBD[i].visible,
                                        stock: zapatillasBD[i].stock,
                                        color: zapatillasBD[i].color,
                                    })
                                }
                            }
                        }
                        this.zapatillas = zapatillaTalla
                    }
                }
                this.cargado = true
            })
                .catch((e) => {
                    console.log(e)
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
                    if (this.cmbxCarrito === null || this.cmbxCantidad === null) {
                        estadoElementos = false
                    }
                    if (!estadoElementos) {
                        Swal.fire({
                            icon: 'error',
                            title: 'No se ingresaron las cantidades y/o talla...',
                            text: 'Ingrese la talla y las cantidades para agregar productos a su carro de compras!',
                        })
                    } else {
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