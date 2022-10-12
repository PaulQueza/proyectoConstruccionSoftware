<template>
    <v-app>
       <div align="left">

            <v-row class="mx-12 mt-4">
                <v-col>
                
                    <v-row class="mb-12" v-for="ArrayZapatillas in zapatillas" :key="ArrayZapatillas._id">
                        <v-card  height="225" width="700" >
                            <v-container>
                                <v-container>
                                    <h1>{{ArrayZapatillas.nombre}}</h1>
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
                                    <v-col justify="space-around" >
                                        <p>
                                            Cantidad 
                                        </p>
                                        <v-row justify="space-around" >   
                                            <v-btn @click="messages--"> 
                                                -     
                                            </v-btn>    
                                            <p>
                                                {{messages}}
                                            </p>
                                            <v-btn @click="messages++">
                                                +
                                            </v-btn>
                                            <p>
                                                Total precio: {{ArrayZapatillas.precio*messages}}
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
                                Precio Final: 
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
export default {
   data() {
       return {
           hidden: null,
           nombre: null,
           zapatillas: [],
           drawer: false,
           group: null,
           Deportiva:null,
           Casual:null,
           Urbana:null,
           Preciocheck: null,
           Precio: null,
           messages: [],
        
          
       };
   },
   created() {
       this.listarZapatillas();
   },
   components: {
       Icon,
   },
   methods: {
       listarZapatillas() {
           this.axios.get("EZ-Producto")
               .then((response) => {
                   this.zapatillas = response.data;

               })
               .catch((e) => {
                   console.log('error' + e);
               })
       },
   }
};
</script>