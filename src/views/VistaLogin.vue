<template>
    <v-app >
        <v-spacer></v-spacer>
        <v-row justify="center">
            <v-col cols="2" sm="10" md="8" lg="5">
                <div color="teal lighten-2">
                    <h1 color="teal lighten-2">
                        Inicio de sesión
                    </h1>
                </div>
                <v-card ref="form">
                    <v-card-text>
                        <v-container>
                            <h3> Nombre de usuario</h3>
                            <v-text-field ref="name" v-model="name"
                                :rules="[() => !!name || 'Este campo no puede quedar vacio']"
                                :error-messages="errorMessages" required>
                            </v-text-field>
                            <h3> Contraseña</h3>
                            <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                :rules="[rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" counter
                                @click:append="show1 = !show1" required></v-text-field>
                            <router-link to="/login/problems">¿Olvidaste tu Contraseña?</router-link>
                        </v-container>
                    </v-card-text>
                    <v-container>
                        <v-card-actions>
                            <v-btn color="teal lighten-2" to="/crearcuenta" class="white--text">
                                Crear Cuenta
                            </v-btn>
                            <v-spacer></v-spacer>
                            <v-btn color="teal lighten-2" class="white--text" :class="visibilidadBotonCrear" :disabled="visivilidadBton">
                                Ingresar
                            </v-btn>
                        </v-card-actions>
                    </v-container>
                    <v-divider class="mt-11"></v-divider>
                </v-card>
            </v-col>
        </v-row>
        <v-spacer></v-spacer>
    </v-app>

</template>

<script>
export default {
    data: () => ({
        errorMessages: '',
        name: null,
        show1: false,
        password: '',
        visivilidadBton:true,
        rules: {
            min: v => v.length >= 8 || 'Minimo 8 caracteres',
        },
    }),
    computed: {

        visibilidadBotonCrear() {
            if(this.name=='' || this.email=='' || this.verifyemail==''||  this.password=='' || this.verifypassword==''){
                this.visivilidadBton = true
            }else{
                this.visivilidadBton = false
            }
        },
    },
    watch: {
        name() {
            this.errorMessages = ''
        },
    },
}
</script>