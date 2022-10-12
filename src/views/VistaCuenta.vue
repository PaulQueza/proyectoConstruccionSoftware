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
                            <v-btn @click="hiddenD = !hiddenD, !hiddenF">
                                <span>Datos</span>
                            </v-btn>
                            <v-btn @click="hiddenF = !hiddenF, !hiddenD">
                                <span>Factura</span>
                            </v-btn>
                            <v-btn @click="hidden = !hidden">
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
                                    <h2> Nombre</h2>
                                    <v-spacer></v-spacer>
                                    <h2>Correo</h2>
                                    <v-spacer></v-spacer>
                                    <h2>Contraseña</h2>
                                </v-row>
                            </v-container>
                            
                            <v-container>
                                <v-row class="text-center">
                                    <h3 class="text-decoration-underline">XXXXXX</h3>
                                    <v-spacer></v-spacer>
                                    <h3 class="text-decoration-underline">XXXXXX</h3>
                                    <v-spacer></v-spacer>
                                    <h3 class="text-decoration-underline">XXXXXX</h3>
                                </v-row>
                            </v-container>
                           
                            <v-container>
                                <v-row justify="center">
                                    <v-col align="center">
                                        <v-btn color="teal lighten-2" class="mt-12" @click="overlayDato = !overlayDato">
                                            Editar datos
                                        </v-btn>
                                        <v-overlay
                                            :absolute="absoluteDato"
                                            :opacity="opacityDato"
                                            :value="overlayDato"
                                            >
                                            <v-container>
                                                <v-row>
                                                    <v-col>
                                                        <v-text-field ref="email" v-model="email"
                                                            :rules="emailRules"
                                                            :error-messages="errorMessages" label="Modificar correo electronico" required>
                                                            
                                                        </v-text-field>
                                                        
                                                    </v-col>
                                                    <v-col>
                                                        <v-spacer></v-spacer>
                                                        <v-text-field ref="email" v-model="email"
                                                            :rules="emailRules"
                                                            :error-messages="errorMessages" label="Modificar contraseña" required>
                                                            
                                                        </v-text-field>
                                                    </v-col>
                                                </v-row>
                                            </v-container>
                                            <v-btn
                                                color="teal lighten-2"
                                                @click="overlayDato = false"
                                            >
                                                Guardar
                                            </v-btn>
                                        </v-overlay>
                                    </v-col>
                                </v-row>
                            </v-container>
                            
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
                                    <h2> Nombre</h2>
                                    <v-spacer></v-spacer>
                                    <h2> Telefonico</h2>
                                    <v-spacer></v-spacer>
                                    <h2> Calle</h2>
                                </v-row>
                            </v-container>
                            
                            <v-container>
                                <v-row class="text-center">
                                    <h3 class="text-decoration-underline">XXXXXX</h3>
                                    <v-spacer></v-spacer>
                                    <h3 class="text-decoration-underline">XXXXXX</h3>
                                    <v-spacer></v-spacer>
                                    <h3 class="text-decoration-underline">XXXXXX</h3>
                                </v-row>
                            </v-container>
                            <v-container>
                                <v-row class="text-center">
                                    <h2> Región</h2>
                                    <v-spacer></v-spacer>
                                    <h2> Comuna</h2>
                                    
                                </v-row>
                            </v-container>
                            
                            <v-container>
                                <v-row class="text-center">
                                    <h3 class="text-decoration-underline">XXXXXX</h3>
                                    <v-spacer></v-spacer>
                                    <h3 class="text-decoration-underline">XXXXXX</h3>
                                    
                                </v-row>
                            </v-container>
                           
                            <v-container>
                                <v-row justify="center">
                                    <v-col align="center">
                                        <v-btn color="teal lighten-2" class="mt-12" @click="overlayFactura = !overlayFactura">
                                            Editar datos
                                        </v-btn>
                                        <v-overlay
                                            :absolute="absoluteFactura"
                                            :opacity="opacityFactura"
                                            :value="overlayFactura"
                                            >
                                            <v-container>
                                                <v-row>
                                                    <v-col>
                                                        <v-text-field ref="email" v-model="email"
                                                            :rules="emailRules"
                                                            :error-messages="errorMessages" label="Modificar nombre" required>
                                                            
                                                        </v-text-field>
                                                        
                                                        <v-text-field ref="email" v-model="email"
                                                            :rules="emailRules"
                                                            :error-messages="errorMessages" label="Modificar Telefono" required>
                                                            
                                                        </v-text-field>
                                                    </v-col>
                                                    <v-col>
                                                        <v-text-field ref="email" v-model="email"
                                                            :rules="emailRules"
                                                            :error-messages="errorMessages" label="Modificar Calle" required>
                                                            
                                                        </v-text-field>
                                                        <v-text-field ref="email" v-model="email"
                                                            :rules="emailRules"
                                                            :error-messages="errorMessages" label="Modificar Región" required>
                                                            
                                                        </v-text-field>
                                                        <v-spacer></v-spacer>
                                                        <v-text-field ref="email" v-model="email"
                                                            :rules="emailRules"
                                                            :error-messages="errorMessages" label="Modificar Comuna" required>
                                                        </v-text-field>
                                                        
                                                    </v-col>
                                                        
                                                    
                                                </v-row>
                                            </v-container>
                                            <v-btn
                                                color="teal lighten-2"
                                                @click="overlayFactura = false"
                                            >
                                                Guardar
                                            </v-btn>
                                        </v-overlay>
                                    </v-col>
                                </v-row>
                            </v-container>
                            
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>            
        
        <v-container v-show="!hiddenD">
            <v-row justify="center">
                <v-col cols="12" md="8" lg="6">
                    <v-card>
                        
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </v-app>
    
    
</template>

<script>
export default {
    data: () => ({
        absoluteDato: true,
        opacityDato: 1,
        overlayDato: false,
        absoluteFactura: true,
        opacityFactura: 1,
        overlayFactura: false,

        hiddenD: false,
        hiddenF: true,
        
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