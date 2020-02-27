<template>
  <div class="home">
    <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
    <v-chip class="ma-5 " color="indigo" outlined pill large href="/cart">
      Carrinho: {{0}}
      <v-icon right x-large>mdi-cart-outline</v-icon>
    </v-chip>
    <v-row>
      <v-col v-for="item in items" :key="item" cols="6" md="4" class="my-2">
        <v-card min-width="200" class="mx-auto" width="250">
          <v-img :src="item.url" height="300"></v-img>
          <v-card-text>{{ item.text }}</v-card-text>
          <v-card-actions>
            <v-btn text color="indigo accent-4">Ler mais</v-btn>
            <v-spacer></v-spacer>
            <v-btn icon>
              <v-icon color="indigo">mdi-cart</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      items: [
        {
          text:
            "Visit ten places on our planet that are undergoing the biggest changes today.",
          url: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
          link: "/"
        },
        {
          text:
            "Visit ten places on our planet that are undergoing the biggest changes today.",
          url: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
          link: "/"
        },
        {
          text:
            "Visit ten places on our planet that are undergoing the biggest changes today.",
          url: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
          link: "/"
        },
        {
          text:
            "Visit ten places on our planet that are undergoing the biggest changes today.",
          url: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
          link: "/"
        },
        {
          text:
            "Visit ten places on our planet that are undergoing the biggest changes today.",
          url: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
          link: "/"
        }
      ]
    };
  }
};
</script>

<style scoped>
.home{
  text-align: center
}
</style>
