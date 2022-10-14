<template>
    <v-app>
        
        <v-container>
            <v-row justify="center">
                <v-col cols="12" sm="10" md="8" lg="6" align="center">
                <v-avatar
                    color="primary"
                    size="72"
                ></v-avatar>
                </v-col>
            </v-row>
        </v-container>
        
        <v-container>
            <v-row justify="center">
                <v-col cols="12" md="8" lg="6">
                    <div>
                        <v-bottom-navigation
                        :value="value"
                        color="teal"
                        grow
                        >
                            <v-btn @click="hiddenD = !hiddenD, !hiddenF, !hiddenH">
                                <span>Datos</span>
                            </v-btn>
                            <v-btn @click="hiddenF = !hiddenF, !hiddenD, !hiddenH">
                                <span>Factura</span>
                            </v-btn>
                            <v-btn @click="hiddenH = !hiddenH, !hiddenD, !hiddenF">
                                <span>Historial de compras</span>
                            </v-btn>
                        </v-bottom-navigation>
                    </div>
                </v-col>
            </v-row>
        </v-container>
        
        <v-container v-show="!hiddenD">
            <v-row justify="center">
                <v-col cols="12" md="8" lg="6">
                    <v-card>
                        <v-card-text>
                            <v-container>
                                <v-row class="text-center">
                                    <v-col>
                                        <h2> Nombre</h2>
                                    </v-col>
                                    <v-col>
                                        <h2>Correo</h2>
                                    </v-col>
                                    <v-col>
                                        <h2>Contraseña</h2>
                                    </v-col>                                   
                                </v-row>
                            </v-container>
                            
                            <v-container>
                                <v-row class="text-center">
                                    <v-col>
                                        <h3 class="text-decoration-underline">XXXXXX</h3>
                                    </v-col>
                                    <v-col>
                                        <h3 class="text-decoration-underline">XXXXXX</h3>
                                    </v-col>
                                    <v-col>
                                        <h3 class="text-decoration-underline">XXXXXX</h3>
                                    </v-col>
                                </v-row>
                            </v-container>
                                
                            
                                <v-row justify="center">
                                    <v-col align="center">
                                        <v-dialog
                                            v-model="dialogD"
                                            persistent
                                            max-width="600px"
                                            >
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn
                                                color="teal lighten-2"
                                                v-bind="attrs"
                                                v-on="on"
                                                >
                                                Editar datos
                                                </v-btn>
                                            </template>
                                            <v-card>
                                                <v-card-title>
                                                <span class="text-h5">Datos a modificar</span>
                                                </v-card-title>
                                                <v-card-text>
                                                <v-container>
                                                    <v-row>
                                                        <v-col cols="12">
                                                            <v-text-field
                                                            label="Correo*"
                                                            required
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12">
                                                            <v-text-field
                                                            label="Contraseña*"
                                                            type="password"
                                                            required
                                                            ></v-text-field>
                                                        </v-col>
                                                    </v-row>
                                                </v-container>
                                                <small>*indica campo requerido</small>
                                                </v-card-text>
                                                <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn
                                                    color="blue darken-1"
                                                    text
                                                    @click="dialogD = false"
                                                >
                                                    Cerrar
                                                </v-btn>
                                                <v-btn
                                                    color="blue darken-1"
                                                    text
                                                    @click="dialogD = false"
                                                >
                                                    Guardar
                                                </v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-dialog>
                                    </v-col>
                                </v-row>
                            
                            
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>

        <v-container v-show="!hiddenF">
            <v-row justify="center">
                <v-col cols="12" md="8" lg="6">
                    <v-card>
                        <v-card-text>
                            <v-container>
                                <v-row class="text-center">
                                    <v-col>
                                        <h2> Nombre</h2>
                                    </v-col>
                                    <v-col>
                                        <h2> Telefono</h2>
                                    </v-col>
                                    <v-col>
                                        <h2> Calle</h2>
                                    </v-col>  
                                </v-row>
                            </v-container>
                            
                            <v-container>
                                <v-row class="text-center">
                                    <v-col>
                                        <h3 class="text-decoration-underline">XXXXXX</h3>
                                    </v-col>
                                    <v-col>
                                        <h3 class="text-decoration-underline">XXXXXX</h3>
                                    </v-col>
                                    <v-col>
                                        <h3 class="text-decoration-underline">XXXXXX</h3>
                                    </v-col>
                                </v-row>
                            </v-container>
                            <v-container>
                                <v-row class="text-center">
                                    <v-col>
                                        <h2> Región</h2>   
                                    </v-col>
                                    <v-col>
                                        <h2> Comuna</h2>
                                    </v-col>
                                </v-row>
                            </v-container>
                            
                            <v-container>
                                <v-row class="text-center">
                                    <v-col>
                                        <h3 class="text-decoration-underline">XXXXXX</h3>
                                    </v-col>
                                    <v-col>
                                        <h3 class="text-decoration-underline">XXXXXX</h3>
                                    </v-col>
                                </v-row>
                            </v-container>
                           
                                <v-row justify="center">
                                    <v-col align="center">
                                        <v-dialog
                                            v-model="dialogF"
                                            persistent
                                            max-width="600px"
                                            >
                                            <template v-slot:activator="{ on, attrs }">
                                                <v-btn
                                                color="teal lighten-2"
                                                v-bind="attrs"
                                                v-on="on"
                                                >
                                                Editar datos
                                                </v-btn>
                                            </template>
                                            <v-card>
                                                <v-card-title>
                                                <span class="text-h5">Datos a modificar</span>
                                                </v-card-title>
                                                <v-card-text>
                                                <v-container>
                                                    <v-row>
                                                        <v-col cols="12">
                                                            <v-text-field
                                                            label="Nombre*"
                                                            required
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12">
                                                            <v-text-field
                                                            label="Telefono*"
                                                            required
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12">
                                                            <v-text-field
                                                            label="Calle*"
                                                            required
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12">
                                                            <v-text-field
                                                            label="Región*"
                                                            required
                                                            ></v-text-field>
                                                        </v-col>
                                                        <v-col cols="12">
                                                            <v-text-field
                                                            label="Comuna*"
                                                            required
                                                            ></v-text-field>
                                                        </v-col>
                                                        
                                                    </v-row>
                                                </v-container>
                                                <small>*indica campo requerido</small>
                                                </v-card-text>
                                                <v-card-actions>
                                                <v-spacer></v-spacer>
                                                <v-btn
                                                    color="blue darken-1"
                                                    text
                                                    @click="dialogF = false"
                                                >
                                                    Cerrar
                                                </v-btn>
                                                <v-btn
                                                    color="blue darken-1"
                                                    text
                                                    @click="dialogF = false"
                                                >
                                                    Guardar
                                                </v-btn>
                                                </v-card-actions>
                                            </v-card>
                                        </v-dialog>
                                    </v-col>
                                </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>            
        
        <v-container v-show="!hiddenH">
            <v-row justify="center">
                <v-col cols="12" md="8" lg="6">
                    <v-card align="end">
                        <v-row>
                            <v-col>

                            </v-col>
                            <v-col>
                                
                            </v-col>
                            <v-col align="end">
                                <v-slider
                                    v-model="value"
                                    vertical
                                ></v-slider>
                            </v-col>
                        </v-row>
                        
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
    
    
</template>

<script>
export default {
    data: () => ({

        dialogD: false,
        dialogF: false,
        hiddenD: false,
        hiddenF: true,
        hiddenH: true,
        
    }),
    
    computed: {
       
    },
    watch: {
        name() {
            this.errorMessages = ''
        },
    },

    methods: {
       
    },
}
</script>