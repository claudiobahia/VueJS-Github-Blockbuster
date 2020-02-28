<template>
  <v-app>
    <Navbar />
    <v-content class="mx-2">
      <h1 id="status" class="text--darken-2 grey--text" v-if="horas < 20 && horas > 9">Estamos abertos</h1>
      <h1 id="status" class="text--darken-2 grey--text" v-else>Estamos fechados</h1>
      <router-view ></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
export default {
  name: "App",

  components: {
    Navbar
  },

  data: () => ({
    horas: new Date().getHours()
  })
};
</script>

<style scoped>
#status {
  text-align: center;
}
</style>