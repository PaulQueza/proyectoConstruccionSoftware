<template>
    <v-main>
        <v-carousel hide-delimiter-background cycle>
            <v-container class="mt-12">
                <v-row v-for="marca in marcas" :key="marca.id" align="center" justify="center">
                    <v-carousel-item he>
                        <v-btn color="black" text rounded height="300" width="300" :to="marca.path">
                            <Icon :icon="marca.icono" width="300" height="300"/>
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
                path: "/CatalogoFilterAdidas",
            },
            {
                id: 2,
                nombre: "Nike",
                icono: "simple-icons:nike",
                path: "/CatalogoFilterNike",
            },
            {
                id: 3,
                nombre: "Fila",
                icono: "simple-icons:fila",
                path: "/CatalogoFilterFile",
            },
            {
                id: 4,
                nombre: "Fila",
                icono: "simple-icons:puma",
                path: "/CatalogoFilterPuma",
            },
        ]
    }),
    components: {
        Icon,
    },
    methods: {

    },
};
</script>