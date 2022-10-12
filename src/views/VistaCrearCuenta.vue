<template>
    <v-app>
        <v-spacer></v-spacer>
        <v-row justify="center">

            <v-col cols="12" sm="10" md="8" lg="6">
                <h1>
                    Crear Cuenta
                </h1>
                <v-card ref="form">
                    <v-card-text>
                        <v-text-field ref="name" v-model="name"
                            :rules="[() => !!name || 'Este campo no debe estar vacio'] " :error-messages="errorMessages"
                            label="Ingrese el nombre de usuario" required>
                        </v-text-field>

                        <v-container>
                            <v-row>
                                <v-text-field ref="email" v-model="email" :rules="emailRules"
                                    :error-messages="errorMessages" label="Ingrese el correo electronico" required>

                                </v-text-field>
                                <v-spacer></v-spacer>
                                <v-text-field ref="verifyemail" v-model="verifyemail"
                                    :rules="[() => !!verifyemail || 'Este campo no debe estar vacio']"
                                    :error-messages="errorMessages" label="Verifique el correo electronico" required>

                                </v-text-field>
                            </v-row>
                        </v-container>
                        <v-container>
                            <v-row>
                                <v-text-field v-model="password" :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                                    :rules="[rules.min]" :type="show1 ? 'text' : 'password'" name="input-10-1" counter
                                    @click:append="show1 = !show1" label="Ingrese la contraseña" required>
                                </v-text-field>
                                <v-spacer></v-spacer>
                                <v-text-field v-model="verifypassword" :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                                    :rules="[rules.min]" :type="show2 ? 'text' : 'password'" name="input-10-1" counter
                                    @click:append="show2 = !show2" label="Verifique la contraseña" required>
                                </v-text-field>
                            </v-row>
                        </v-container>
                        <v-spacer></v-spacer>
                        <v-container class="text-center">
                            <v-btn v-model="invisivilidadBton" :class="visibilidadBotonCrear"
                                :disabled="invisivilidadBton"
                                @click="verificarEmail(email,verifyemail,password,verifypassword, name )"
                                color="primary">
                                Crear cuenta
                            </v-btn>
                        </v-container>

                    </v-card-text>

                    <v-divider class="mt-12"></v-divider>

                </v-card>
            </v-col>
        </v-row>
    </v-app>

</template>

<script>
import Swal from 'sweetalert2'
export default {
    data: () => ({
        countries: ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Anguilla', 'Antigua &amp; Barbuda', 'Argentina', 'Armenia', 'Aruba', 'Australia', 'Austria', 'Azerbaijan', 'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bermuda', 'Bhutan', 'Bolivia', 'Bosnia &amp; Herzegovina', 'Botswana', 'Brazil', 'British Virgin Islands', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', 'Cambodia', 'Cameroon', 'Cape Verde', 'Cayman Islands', 'Chad', 'Chile', 'China', 'Colombia', 'Congo', 'Cook Islands', 'Costa Rica', 'Cote D Ivoire', 'Croatia', 'Cruise Ship', 'Cuba', 'Cyprus', 'Czech Republic', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Estonia', 'Ethiopia', 'Falkland Islands', 'Faroe Islands', 'Fiji', 'Finland', 'France', 'French Polynesia', 'French West Indies', 'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Gibraltar', 'Greece', 'Greenland', 'Grenada', 'Guam', 'Guatemala', 'Guernsey', 'Guinea', 'Guinea Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hong Kong', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', 'Iraq', 'Ireland', 'Isle of Man', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jersey', 'Jordan', 'Kazakhstan', 'Kenya', 'Kuwait', 'Kyrgyz Republic', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', 'Luxembourg', 'Macau', 'Macedonia', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Mauritania', 'Mauritius', 'Mexico', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Montserrat', 'Morocco', 'Mozambique', 'Namibia', 'Nepal', 'Netherlands', 'Netherlands Antilles', 'New Caledonia', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'Norway', 'Oman', 'Pakistan', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', 'Portugal', 'Puerto Rico', 'Qatar', 'Reunion', 'Romania', 'Russia', 'Rwanda', 'Saint Pierre &amp; Miquelon', 'Samoa', 'San Marino', 'Satellite', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'South Africa', 'South Korea', 'Spain', 'Sri Lanka', 'St Kitts &amp; Nevis', 'St Lucia', 'St Vincent', 'St. Lucia', 'Sudan', 'Suriname', 'Swaziland', 'Sweden', 'Switzerland', 'Syria', 'Taiwan', 'Tajikistan', 'Tanzania', 'Thailand', `Timor L'Este`, 'Togo', 'Tonga', 'Trinidad &amp; Tobago', 'Tunisia', 'Turkey', 'Turkmenistan', 'Turks &amp; Caicos', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States', 'Uruguay', 'Uzbekistan', 'Venezuela', 'Vietnam', 'Virgin Islands (US)', 'Yemen', 'Zambia', 'Zimbabwe'],
        errorMessages: '',
        name: null,
        email: '',
        valid: true,
        verifyemail: null,
        password: '',
        verifypassword: '',
        show1: false,
        show2: false,
        invisivilidadBton: true,
        usuarios: [],
        emailRules: [
            v => !!v || 'Correo ingresado invalido',
            v => /^[a-z0-9!#$%&'+/=?^_`{|}~-]+(?:.[a-z0-9!#$%&'+/=?^_`{|}~-]+)@(?:[a-z0-9](?:[a-z0-9-][a-z0-9])?.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/.test(v) || 'Correo ingresado invalido',
        ],
        botonRule: [

        ],
        rules: {
            min: v => v.length >= 5 || 'Minimo 5 caracteres',
        },
        usuariosCrear:{
            edad:'',
            telefono:'',
            correo:'',
            nombreUsuario:'',
            contrasena:'',
            region:'',
            ciudad:'',
            direccion:''
        }
    }),
    created() {
        this.listarCuentas();
    },
    computed: {

        form() {
            return {
                name: this.name,
                email: this.email,
                verifyemail: this.verifyemail,
                password: this.password,
                verifypassword: this.verifypassword,
            }
        },
        visibilidadBotonCrear() {
            if (this.name == '' || this.email == '' || this.verifyemail == '' || this.password == '' || this.verifypassword == '') {
                this.invisivilidadBton = true
            } else {
                this.invisivilidadBton = false
            }
        },
    },

    watch: {
        name() {
            this.errorMessages = ''
        },
    },

    methods: {
        listarCuentas() {
            this.axios.get("EZ-Usuario")
                .then((response) => {
                    this.usuarios = response.data;
                    console.log("Usuarios Cargados")
                })
                .catch((e) => {
                    console.log('error' + e);
                })
        },
        addressCheck() {
            this.errorMessages = this.address && !this.name
                ? `Hey! I'm required`
                : ''

            return true
        },
        verificarEmail(email, emailVerificar, password, verifypassword, name) {
            var estadoCrearCuenta = true;
            if (email == '' || emailVerificar == '' || password == '' || verifypassword == '' || name == '') {
                console.log("error")
                estadoCrearCuenta = false;
            } else {
                this.visivilidadBton = false
                if (password == verifypassword && email == emailVerificar) {
                    for (var i = 0; i < this.usuarios.length; i++) {
                        if (name == this.usuarios[i].nombreUsuario) {
                            console.log("Usuario ya existe " + name)
                            estadoCrearCuenta = false;
                        }
                        if (email == this.usuarios[i].correo) {
                            console.log("Correo ya existe " + email)
                            estadoCrearCuenta = false;
                        }
                    }
                } else {
                    console.log("email o contraseña incorrecta")
                    estadoCrearCuenta = false;
                    this.alertCorrecto = false
                    this.alertIncorrecto = true
                }
                if (estadoCrearCuenta) {
                    console.log("CREAR CUENTA")
                    this.usuariosCrear.nombreUsuario=name
                    this.usuariosCrear.contrasena=password
                    this.usuariosCrear.correo=email
                    this.usuariosCrear.edad=""
                    this.usuariosCrear.ciudad=""
                    this.usuariosCrear.direccion=""
                    this.usuariosCrear.region=""
                    this.usuariosCrear.telefono=""
                    this.axios.post("Nuevo-Usuario", this.usuariosCrear)
                        .then((response) => {
                            console.log("Se ingreso correctamente")
                            this.usuarios.unshift(response.data);
                        })
                        .catch((e) => {
                            console.log('error' + e);
                        })
                    Swal.fire(
                        'Cuenta creada!',
                        'Cuenta creada correctamente!',
                        'success'
                    )
                    this.$router.push({ path: "login" })
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Creacion fallida...',
                        text: 'Datos incorrectos!',
                    })
                }
            }
        }
    },

}
</script>