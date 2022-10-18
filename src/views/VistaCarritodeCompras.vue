

<template>
    <v-app>
        <div align="left" v-if="this.$store.state.ingresoUsuario">
            <v-row class="mx-12 mt-4">
                <v-card height="600" width="50%" outlined>
                <v-col >
                    <v-row class="mb-2" v-for="ArrayZapatillas in this.$store.state.carroCompras" :key="ArrayZapatillas.id">
                        <v-card height="250" width="700" class="mx-12">
                            <v-container>
                                <v-container>
                                    <v-row row="12" sm="10" md="10">
                                        <h1>{{ArrayZapatillas.nombre}}</h1>
                                        <v-spacer></v-spacer>
                                        <v-spacer></v-spacer>
                                        <v-spacer></v-spacer>
                                        <v-spacer></v-spacer>
                                        <v-spacer></v-spacer>
                                        <v-btn @click="eliminar(ArrayZapatillas.id)">
                                            Eliminar
                                        </v-btn>
                                    </v-row>
                                </v-container>
                                <v-row align="center">
                                    <v-card height="150" width="250">
                                        <v-img height="150" width="250" :src="ArrayZapatillas.imagen">
                                            <template v-slot:placeholder>
                                                <v-row class="fill-height ma-0" align="center" justify="center">
                                                    <v-progress-circular indeterminate color="teal lighten-2">
                                                    </v-progress-circular>
                                                </v-row>
                                            </template>
                                        </v-img>
                                    </v-card>
                                    <v-col>
                                        <p>
                                            Marca: {{ArrayZapatillas.marca}}
                                        </p>
                                        <p>
                                            Tipo: {{ArrayZapatillas.tipo}}
                                        </p>
                                        <p>
                                            Precio: ${{ArrayZapatillas.precio}} USD
                                        </p>
                                        <v-spacer></v-spacer>
                                    </v-col>
                                    <v-col>
                                        <span>Talla {{ArrayZapatillas.talla}}</span>
                                        <p align="center">
                                            Cantidad
                                        </p>
                                        <v-row justify="space-around">
                                            <v-btn @click="disminuir(ArrayZapatillas.id)">
                                                -
                                            </v-btn>
                                            <p>
                                                {{ArrayZapatillas.count}}

                                            </p>
                                            <v-btn @click="aumentar(ArrayZapatillas.id)">
                                                +
                                            </v-btn>
                                            <p>
                                                Total precio:
                                                {{(ArrayZapatillas.precio*ArrayZapatillas.count).toLocaleString('es', {
                                                style: 'currency', currency: 'USD' })}}
                                            </p>
                                        </v-row>
                                    </v-col>
                                </v-row>
                            </v-container>
                        </v-card>
                    </v-row>
                </v-col>
            </v-card>
                <v-card height="600" width="50%" outlined>
                    <v-container>
                        <v-col align="center">
                            <H1>
                                Información de Carrito
                            </H1>
                            <H3>
                                Información de envio
                            </H3>
                            <p>
                                Nombre: {{this.nombreUsuario}}
                            </p>
                            <p> Telefono: {{this.telefonoUsuario}}</p>
                            <p>
                                Dirreccion de envío: {{this.direccionEnvio}}
                            </p>
                            <p>
                                Total precio: {{(sum).toLocaleString('es', { style: 'currency', currency: 'USD' })}}
                            </p>
                            <v-btn color="teal lighten-2" class="white--text" @click="comprar()">
                                Comprar
                            </v-btn>
                        </v-col>
                    </v-container>
                </v-card>
            </v-row>
        </div>
        <v-container align="center" v-else>
            <v-spacer></v-spacer>
            <h1> Inicia sesion ctm</h1>
            <v-spacer></v-spacer>
        </v-container>
    </v-app>
</template>

<script>
import Swal from 'sweetalert2'
import { Icon } from "@iconify/vue2";
export default {
    data() {
        return {
            hidden: null,
            nombre: null,
            drawer: false,
            group: null,
            Deportiva: null,
            Casual: null,
            Urbana: null,
            Preciocheck: null,
            Precio: null,
            tallas: [],
            usuarios:[],
            nombreUsuario:null,
            telefonoUsuario:null,
            direccionEnvio:null,
            sumaTotal:null,
        };
    },
    created() {
        this.$store.state.visibleBusqueda=true
        this.datosUsuario();
    },
    methods: {
        aumentar(id) {
            var zapatillas=this.$store.state.carroCompras
            for (var i = 0; i < zapatillas.length; i++) {
                if (zapatillas[i].id == id) {
                    if (zapatillas[i].count < zapatillas[i].maxCantidad) {
                        this.$store.state.carroCompras[i].count++;
                        break
                    }
                }
            }

        },
        disminuir(id) {
            var zapatillas=this.$store.state.carroCompras
            for (var i = 0; i < zapatillas.length; i++) {
                if (zapatillas[i].id == id) {
                    if (zapatillas[i].count >= 2) {
                        this.$store.state.carroCompras[i].count--;
                        break
                    }
                }
            }
        },
        eliminar(id) {
            var zapatillas=this.$store.state.carroCompras
            for (var i = 0; i < zapatillas.length; i++) {
                console.log("comp1: " + zapatillas[i].nombre)
                if (zapatillas[i].id == id) {
                    this.$store.state.carroCompras.splice(i,1)
                    console.log("se elimina")
                    break
                }
            }
        },
        listarZapatillas() {
            for (var i = 0; i < zapatillas1.length; i++) {
                this.zapatillas.push(zapatillas1[i])
                console.log(this.zapatillas[i].nombre)
            }
        },
        onScroll(e) {
            this.offsetTop = e.target.scrollTop
        },
        datosUsuario() {
            this.axios.get("EZ-Usuario")
                .then((response) => {
                    this.usuarios = response.data;
                    for (var i = 0; i < this.usuarios.length; i++) {
                        if (this.usuarios[i].nombreUsuario===this.$store.state.UsuarioConectadoNombre) {
                            this.nombreUsuario=this.usuarios[i].nombre
                            this.telefonoUsuario=this.usuarios[i].telefono
                            this.direccionEnvio=this.usuarios[i].region+", "+this.usuarios[i].ciudad+", "+this.usuarios[i].direccion
                        }
                    }
                })
                .catch((e) => {
                    console.log('error' + e);
                })
        },
        comprar(){
            if(this.sumaTotal===0 || this.direccionEnvio.length===0){
                Swal.fire({
                    icon: 'error',
                    title: 'Error al comprar',
                    text:'Revisa si hay productos en tu carro, tambien tu direccion de envio',
                    showConfirmButton: false,
                    timer: 1500
                })
            }else{
                this.$store.state.carroCompras=[]
                this.sumaTotal=null
                Swal.fire({
                    icon: 'success',
                    title: 'El producto ha sido comprado',
                    text:'Gracias por tu compra!',
                    showConfirmButton: false,
                    timer: 1500
                })
                if (this.$route.path !== `/`) {
                    this.$router.push({ path: "/" })
                }
            }
        },
    },
    computed: {
        sum: {
            get() {
                this.sumaTotal = 0;
                for (let ArrayZapatillas of this.$store.state.carroCompras) {
                    this.sumaTotal+= ArrayZapatillas.count * ArrayZapatillas.precio;
                }
                return this.sumaTotal;
            }
        },
    }
}
</script>