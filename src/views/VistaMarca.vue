<template>

    <v-main>
        <v-carousel hide-delimiter-background cycle>
            <v-container class="mt-12">
                <v-row align="center" justify="center">
                    <v-carousel-item>
                        <v-btn color="black" text rounded height="300" width="300" @click="redirigirCatalogo('Nike')"
                            >
                            <Icon icon="simple-icons:nike" width="300" height="300" />
                        </v-btn>
                    </v-carousel-item>
                    <v-carousel-item>
                        <v-btn color="black" text rounded height="300" width="300" @click="redirigirCatalogo('Adidas')"
                            >
                            <Icon icon="simple-icons:adidas" width="300" height="300" />
                        </v-btn>
                    </v-carousel-item>
                    <v-carousel-item>
                        <v-btn color="black" text rounded height="300" width="300" @click="redirigirCatalogo('Fila')"
                            >
                            <Icon icon="simple-icons:fila" width="300" height="300" />
                        </v-btn>
                    </v-carousel-item>
                    <v-carousel-item>
                        <v-btn color="black" text rounded height="300" width="300" @click="redirigirCatalogo('Puma')"
                            >
                            <Icon icon="simple-icons:puma" width="300" height="300" />
                        </v-btn>
                    </v-carousel-item>
                </v-row>
            </v-container>
        </v-carousel>
    </v-main>
</template>

<script>
import { Icon } from '@iconify/vue2';
export default {
    data: () => ({
        marcas: [
            {
                id: 1,
                nombre: "Adidas",
                icono: "simple-icons:adidas",
            },
            {
                id: 2,
                nombre: "Nike",
                icono: "simple-icons:nike",
            },
            {
                id: 3,
                nombre: "Fila",
                icono: "simple-icons:fila",
            },
            {
                id: 4,
                nombre: "Puma",
                icono: "simple-icons:puma",
            },
        ]
    }),
    components: {
        Icon,
    },
    methods: {
        redirigirCatalogo(nombre) {
            if (nombre === 'Puma') {
                this.$store.state.vistaMarcaAdidas = false
                this.$store.state.vistaMarcaFila = false
                this.$store.state.vistaMarcaPuma = true
                this.$store.state.vistaMarcaNike = false
            } else if (nombre === 'Adidas') {
                this.$store.state.vistaMarcaAdidas = true
                this.$store.state.vistaMarcaFila = false
                this.$store.state.vistaMarcaPuma = false
                this.$store.state.vistaMarcaNike = false
            } else if (nombre === 'Nike') {
                this.$store.state.vistaMarcaAdidas = false
                this.$store.state.vistaMarcaFila = false
                this.$store.state.vistaMarcaPuma = false
                this.$store.state.vistaMarcaNike = true
            } else if (nombre === 'Fila') {
                this.$store.state.vistaMarcaAdidas = false
                this.$store.state.vistaMarcaFila = true
                this.$store.state.vistaMarcaPuma = false
                this.$store.state.vistaMarcaNike = false
            } else {
                console.log("ERROR MARCA")
            }
            this.$router.push({ name: "filterMarca"})
        },

    },
};
</script>