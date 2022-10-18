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
                                    <v-select v-model="cmbxCarrito" :items="itemsCarro" @change="eleccionTalla()"></v-select>
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
            <v-btn @click="drawer = true" rounded fab color="teal lighten-2">
                <Icon icon="bi:filter" color="white" width="40" height="40" />
            </v-btn>
        </v-container>
        <div align="center">
            <v-navigation-drawer v-model="drawer" absolute temporary>
                <v-container centered justify="center">
                    <h1>Filtros</h1>
                    <h3 align="left">Tipos</h3>
                    <v-container class="center">
                        <v-checkbox v-model="Deportiva" label="Deportiva" hide-details></v-checkbox>
                        <v-checkbox v-model="Casual" label="Casual" hide-details></v-checkbox>
                        <v-checkbox v-model="Urbana" label="Urbana" hide-details></v-checkbox>
                        <div align="center">
                            <v-btn @click="filtroZapatilllas()"> Filtrar</v-btn>
                        </div>
                    </v-container>
                </v-container>
            </v-navigation-drawer>
            <v-container>
                <v-row>
                    <v-col v-for="ArrayZapatillas in zapatillas" :key="ArrayZapatillas._id" cols="3">
                        <v-card height="400" width="500" outlined center
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
export default {
    props: {
    },
    data() {
        return {
            hidden: null,
            nombre: null,
            zapatillas: [],
            zapatillasFinal: [],
            drawer: false,
            group: null,
            Deportiva: null,
            Casual: null,
            Urbana: null,
            Preciocheck: null,
            Precio: null,

            drawerCarrito: null,
            imagenCarro: null,
            tallasCarro: [],
            nombreCarro: null,
            precioCarro: null,
            tipoCarro:null,
            marcaCarro:null,
            cmbxCarrito: null,
            cmbxCantidad: null,
            itemsCarro: [],
            itemsCantidad: [],
            cantidadMaximaCarro:null,
        };
    },
    created() {
        this.drawer=true
        this.Urbana = this.$store.state.Urbana
        this.Casual = this.$store.state.Casual
        this.Deportiva = this.$store.state.Deportiva
        this.Preciocheck = this.$store.state.Preciocheck
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
            this.zapatillasFinal = []
            var zapatillasUrbanas = []
            var zapatillasCasual = []
            var zapatillasDeportivas = []
            var zapatilla = []
            if (this.Urbana) {
                this.axios.get('Productos-FilterTipo/Urbana')
                    .then((response) => {
                        zapatillasUrbanas = response.data;
                        for (var i = 0; i < zapatillasUrbanas.length; i++) {
                            zapatilla = this.zapatillasFinal.filter(zapatilla => zapatilla._id === zapatillasUrbanas[i]._id)
                            if (zapatilla.length === 0) {
                                this.zapatillasFinal.push({
                                    _id: zapatillasUrbanas[i]._id,
                                    nombre: zapatillasUrbanas[i].nombre,
                                    marca: zapatillasUrbanas[i].marca,
                                    tipo: zapatillasUrbanas[i].tipo,
                                    imagen: zapatillasUrbanas[i].imagen,
                                    precio: zapatillasUrbanas[i].precio,
                                    sexo: zapatillasUrbanas[i].sexo,
                                    color: zapatillasUrbanas[i].color,
                                })
                            }
                        }
                    })
                    .catch((e) => {
                        console.log('error' + e);
                    })
                this.zapatillas = this.zapatillasFinal
            }
            if (this.Casual) {
                this.axios.get('Productos-FilterTipo/Casual')
                    .then((response) => {
                        zapatillasCasual = response.data;
                        for (var i = 0; i < zapatillasCasual.length; i++) {
                            zapatilla = this.zapatillasFinal.filter(zapatilla => zapatilla._id === zapatillasCasual[i]._id)
                            if (zapatilla.length === 0) {
                                this.zapatillasFinal.push({
                                    _id: zapatillasCasual[i]._id,
                                    nombre: zapatillasCasual[i].nombre,
                                    marca: zapatillasCasual[i].marca,
                                    tipo: zapatillasCasual[i].tipo,
                                    imagen: zapatillasCasual[i].imagen,
                                    precio: zapatillasCasual[i].precio,
                                    sexo: zapatillasCasual[i].sexo,
                                    color: zapatillasCasual[i].color,
                                })
                            }
                        }
                    })
                    .catch((e) => {
                        console.log('error' + e);
                    })
                this.zapatillas = this.zapatillasFinal
            }
            if (this.Deportiva) {
                this.axios.get('Productos-FilterTipo/Deportiva')
                    .then((response) => {
                        zapatillasDeportivas = response.data;
                        for (var i = 0; i < zapatillasDeportivas.length; i++) {
                            zapatilla = this.zapatillasFinal.filter(zapatilla => zapatilla._id === zapatillasDeportivas[i]._id)
                            if (zapatilla.length === 0) {
                                this.zapatillasFinal.push({
                                    _id: zapatillasDeportivas[i]._id,
                                    nombre: zapatillasDeportivas[i].nombre,
                                    marca: zapatillasDeportivas[i].marca,
                                    tipo: zapatillasDeportivas[i].tipo,
                                    imagen: zapatillasDeportivas[i].imagen,
                                    precio: zapatillasDeportivas[i].precio,
                                    sexo: zapatillasDeportivas[i].sexo,
                                    color: zapatillasDeportivas[i].color,
                                })
                            }
                        }
                    })
                    .catch((e) => {
                        console.log('error' + e);
                    })
                this.zapatillas = this.zapatillasFinal
            }
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
                if(this.$store.state.ingresoUsuario){
                    var estado=true
                    for(var i=0; i<this.$store.state.carroCompras.length;i++){
                        if(this.nombreCarro===this.$store.state.carroCompras[i].nombre && this.$store.state.carroCompras[i].talla===this.cmbxCarrito){
                            estado=false
                            break
                        }
                    }
                    if(estado){
                        this.$store.state.carroCompras.push({
                            nombre: this.nombreCarro,
                            marca:this.marcaCarro,
                            tipo:this.tipoCarro,
                            precio:this.precioCarro,
                            imagen:this.imagenCarro,
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
                    }else{
                        Swal.fire({
                        icon: 'error',
                        title: 'Talla duplicada en el carro...',
                        text: 'Modifique la talla para poder ingresarlo al carro!',
                        })
                    }
                }else{
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
                    this.cantidadMaximaCarro=this.tallasCarro[i].cantidad
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