

<template>
    <v-app>
       <div align="left">
            <v-row class="mx-12 mt-4" >
                    <v-col>
                        <v-row class="mb-2" v-for="ArrayZapatillas in zapatillas" :key="ArrayZapatillas.id" >
                            <v-card  height="250" width="700" >
                                <v-container>
                                    <v-container >
                                        <v-row row="12" sm="10" md="10" >
                                            <h1>{{ArrayZapatillas.nombre}}</h1>
                                            <v-spacer></v-spacer>
                                            <v-spacer></v-spacer>
                                            <v-spacer></v-spacer>
                                            <v-spacer></v-spacer>
                                            <v-spacer></v-spacer>
                                            <v-btn @click="eliminar(ArrayZapatillas.nombre)">
                                                Eliminar
                                            </v-btn> 
                                        </v-row>   
                                    </v-container>
                                        <v-row
                                            align="center"
                                        >
                                            <v-card height="150" width="250">
                                                <v-img height="150" width="250"
                                                    :src="ArrayZapatillas.imagen">
                                                    <template v-slot:placeholder>
                                                        <v-row class="fill-height ma-0" align="center" justify="center">
                                                            <v-progress-circular indeterminate color="teal lighten-2"></v-progress-circular>
                                                        </v-row>
                                                    </template>
                                                </v-img>  
                                            </v-card>
                                            <v-col >     
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
                                            <v-col >
                                                <v-select
                                                        :items="null"
                                                        label="Talla"
                                                    >
                                                    </v-select>
                                                
                                                <p align="center">
                                                    Cantidad 
                                                </p>
                                                <v-row justify="space-around" >   
                                                    <v-btn @click="disminuir(ArrayZapatillas.nombre)"> 
                                                        -     
                                                    </v-btn>    
                                                    <p>
                                                        {{ArrayZapatillas.count}}
                                                        
                                                    </p>
                                                    <v-btn @click="aumentar(ArrayZapatillas.nombre)">
                                                        +
                                                    </v-btn>
                                                    <p>
                                                        Total precio: {{(ArrayZapatillas.precio*ArrayZapatillas.count).toLocaleString('es', { style: 'currency', currency: 'USD' })}}
                                                    </p>
                                                </v-row>                    
                                            </v-col>
                                        </v-row> 
                                </v-container>
                            </v-card>
                        </v-row>
                    </v-col>
                <v-card height="500" width="700">
                    <v-container >
                        <v-col  align="center"> 
                            <H1>
                                Información de Carrito    
                            </H1>
                            <H3>
                                Información de envio
                            </H3 >
                            <p>
                                Nombre:    
                            </p>
                            <p> Telefono:</p>
                            <p>
                                Dirreccion de envío:
                            </p>
                            <p> 
                                Total precio: {{(sum).toLocaleString('es', { style: 'currency', currency: 'USD' })}}
                            </p>
                            <v-btn >
                                Finalizar pedido 
                            </v-btn>
                        </v-col>
                    </v-container>
                </v-card>   
            </v-row>
        </div> 
    </v-app>
</template>

<script>
import { Icon } from "@iconify/vue2";

 let zapatillas1= [
        {
            id: 0,
            nombre: "Fila Oakmont Tr",
            marca: "Fila",
            tipo: "Urbana",
            imagen: "https://i.ibb.co/QmCZKzZ/Fila1.jpg",
            precio: 69.990,
            sexo: "F",
            color: "Rosado",
            visible: true,
            stock:[
                {
                    talla:"36",
                    cantidad:12
                }
            ],
            count:2
        },
        {
            id: 1,
            nombre: "Puma R78 Voyage Better222",
            marca: "Puma",
            tipo: "Deportiva",
            imagen: "https://i.ibb.co/1npKqsX/Puma1.jpg",
            precio: 69.990,
            sexo: "F",
            color: "Negro",
            visible: true,
            stock:[
                {
                    talla:"35",
                    cantidad:8
                },
                {
                    talla:"36",
                    cantidad:3
                },
                {
                    talla:"37",
                    cantidad:7
                }
            ],
            count:1
        },
    ]

export default {
   data() {
       return {
           hidden: null,
           nombre: null,
           drawer: false,
           group: null,
           Deportiva:null,
           Casual:null,
           Urbana:null,
           Preciocheck: null,
           Precio: null,
           zapatillas: [
            ],
            tallas: []           
       };
    },
    created() {
        this.listarZapatillas();
    },
    methods:{
        aumentar(nombre){
            for(var i=0;i<this.zapatillas.length;i++){
                if(this.zapatillas[i].nombre==nombre){
                    if(this.zapatillas[i].count!=0){
                        this.zapatillas[i].count=this.zapatillas[i].count+1;
                        i=this.zapatillas.length
                    }else{
                        console.log("verificar stock")
                    }
                }
            }

        },
        disminuir(nombre){
            for(var i=0;i<this.zapatillas.length;i++){
                if(this.zapatillas[i].nombre==nombre){
                    if(this.zapatillas[i].count>=2){
                        this.zapatillas[i].count=this.zapatillas[i].count-1;
                        i=this.zapatillas.length
                    }else{
                        console.log("verificar stock")
                    }
                }
            }
        },
        eliminar(nombre){
            for(var i=0;i<this.zapatillas.length;i++){
                console.log("comp1: "+this.zapatillas[i].nombre)
                if(this.zapatillas[i].nombre==nombre){
                    this.zapatillas.splice(i,1)
                    i=this.zapatillas.length
                    console.log("se elimina")
                }
            }

            
        },
        listarZapatillas(){
            for(var i=0;i<zapatillas1.length;i++){
                this.zapatillas.push(zapatillas1[i])
                console.log(this.zapatillas[i].nombre)
            }
        },
        onScroll (e) {
        this.offsetTop = e.target.scrollTop
      },
    },
    computed:{
        sum:{
            get(){
                let sum=0;
                for (let ArrayZapatillas of this.zapatillas){
                    sum+=ArrayZapatillas.count*ArrayZapatillas.precio;
                }
                return sum;
            }
        },
    }
}
</script>