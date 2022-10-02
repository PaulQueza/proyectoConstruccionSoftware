<template>
    <v-app>

        <v-btn>sdklhalkdsadhsal</v-btn>
        <tr v-for="(item, index) in notas" :key="index">
            <p>{{item.nombre}}</p>
            <p>{{item.marca}}</p>
            <p>{{item.tipo}}</p>
            <v-btn> HOLA</v-btn>
        </tr>
    </v-app>

</template>
<script>
export default {
    data() {
        return {
            notas: [],
        };
    },
    created() {
        this.listarNotas();
    },
    methods: {
        listarNotas() {
            this.axios.get('EZ-Producto')
                .then((response) => {
                    // console.log(response.data)
                    this.notas = response.data;
                })
                .catch((e) => {
                    console.log('error' + e);
                })
        }
    }
};
</script>
