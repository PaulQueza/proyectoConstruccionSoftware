<template>
    <v-app >
        <v-spacer></v-spacer>
        <!-- <v-alert :v-model="mostrarIncio" type="success">
       I'm a success alert.</v-alert> -->
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
                            <v-btn color="teal lighten-2" class="white--text" :class="visibilidadBotonCrear" :disabled="visivilidadBton" @click="verificarUsuario(name,password)">
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
    const usuarios = [
        {
            nombre: 'Matias',
            correo: 'Matias@gmail.com',
            contraseña: 'matias111',

        },
        {
            nombre: 'Cristian',
            correo: 'Cristian@gmail.com',
            contraseña: 'cris1234567',
        },
    ]   
export default {
    data: () => ({
        errorMessages: '',
        name: null,
        show1: false,
        password: '',
        visivilidadBton:true,
        mostrarInicio: null,
        usuarios:[],
        rules: {
            min: v => v.length >= 8 || 'Minimo 8 caracteres',
            
        },
    }),
    created() {
        this.listarCuentas();
    },
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


    methods: {
        listarCuentas(){
            this.axios.get("EZ-Usuario")
                .then((response) => {
                    this.usuarios = response.data;
                    console.log("Usuarios Cargados")
                })
                .catch((e) => {
                    console.log('error' + e);
                })
        },
        verificarUsuario(name,password){
            var estado=false
            if(password == '' || name==''){               
                console.log("error") 
            }else{
                this.visivilidadBton=false 
                for(var i=0;i<this.usuarios.length;i++){
                    //console.log("NAME: "+name+" == "+"guarado "+usuarios[i].xnombre)
                    //console.log("contraseña: "+password+" == "+"guarado "+usuarios[i].contraseña)
                    if(name==this.usuarios[i].nombreUsuario && password==this.usuarios[i].contrasena){
                        console.log("Ingreso como el  usuario "+name)
                        estado=true
                    }
                    else{
                        //console.log("error usuario o contraseña")
                    } 
                }
                if(estado){
                    console.log("Ingreso corecto")
                    
                }else{
                    console.log("error usuario o contraseña")
                }
                
                
            }
        }
    },
}
</script>