<template>
  <v-app>
    <v-app-bar color="teal lighten-2" app
    height="100">

      <v-img class="mx-12" max-height="100" max-width="100" src="./assets/icono/logo.png"></v-img>
      <v-tabs centered class="ml-n9" color="white" light>
        <v-tab to="/catalogoHombre">
          Hombre
        </v-tab>
        <v-tab to="/catalogoMujer">
          Mujer
        </v-tab>
        <v-tab to="/catalogoMarca">
          Marca
        </v-tab>
      </v-tabs>
      <v-container>
        <v-row justify="space-around">
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-text-field prepend-inner-icon="mdi-magnify" rounded dense flat hide-details solo label="Buscar">
          </v-text-field>
          <div>
            <v-btn color="teal lighten-5" rounded class="mx-1" to="/login">
              <Icon icon="ant-design:user-outlined"/>
            </v-btn>

            <v-btn color="teal lighten-5" rounded class="mx-1" to="/carritocompras">
              <Icon icon="maki:shop"/>
            </v-btn>
          </div>
        </v-row>
      </v-container>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-main>
      <router-view />
    </v-main>

    <v-footer color="grey" padless>
      <v-row justify="center" no-gutters>
        <v-btn v-for="icono in iconos" :key="icono" color="white" text rounded class="my-2" icon>
          <v-icon size="24px">{{icono}}</v-icon>
        </v-btn>
        <v-col class="grey py-4 text-center white--text" cols="12">
          {{ new Date().getFullYear() }} — <strong>Ez-Neackers</strong>
        </v-col>
      </v-row>
    </v-footer>
  </v-app>
</template>

<script>
import { Icon } from "@iconify/vue2";
export default {
  data: () => ({
    iconos: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
  components: {
    Icon
  }
};
</script>
