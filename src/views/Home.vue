<template>
  <div class="home">
    <!-- Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop -->
    <v-chip class="ma-5" color="indigo" outlined pill large href="/cart">
      Carrinho: {{cart_size}}
      <v-icon right x-large>mdi-cart-outline</v-icon>
    </v-chip>
    <v-row>
      <v-col v-for="item in items" :key="item.id" cols="12" md="3" sm="4" class="my-2">
        <v-card min-width="200" class="mx-auto" width="250">
          <v-img :src="item.url" height="300"></v-img>
          <v-card-text>{{ item.text }}</v-card-text>
          <v-rating readonly :value="item.rating" dense color="orange" background-color="orange" hover class="mr-2"/>
          <v-card-actions>
            <v-btn text v-on:click="addCart(item.id)" :color="item.cart_color">
              Alugar
              <v-icon :color="item.cart_color">mdi-cart</v-icon>
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
  computed: {
    cart_size: function() {
      return this.cart.length;
    }
  },
  methods: {
    addCart: function(item_id) {
      if (this.items[item_id - 1].cart_color == "indigo") {
        this.cart.push(this.items[item_id - 1]);
        this.items[item_id - 1].cart_color = "green";
      } else {
        this.cart.pop(this.items[item_id - 1]);
        this.items[item_id - 1].cart_color = "indigo";
      }
    }
  },
  data() {
    return {
      cart: [],
      items: [
        {
          id: 1,
          text:
            "Visit ten places on our planet that are undergoing the biggest changes today.",
          url: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
          link: "/",
          cart_color: "indigo",
          rating:1
        },
        {
          id: 2,
          text:
            "Visit ten places on our planet that are undergoing the biggest changes today.",
          url: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
          link: "/",
          cart_color: "indigo",
          rating:2
        },
        {
          id: 3,
          text:
            "Visit ten places on our planet that are undergoing the biggest changes today.",
          url: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
          link: "/",
          cart_color: "indigo",
          rating:3
        },
        {
          id: 4,
          text:
            "Visit ten places on our planet that are undergoing the biggest changes today.",
          url: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
          link: "/",
          cart_color: "indigo",
          rating:4
        },
        {
          id: 5,
          text:
            "Visit ten places on our planet that are undergoing the biggest changes today.",
          url: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
          link: "/",
          cart_color: "indigo",
          rating:5
        },
        {
          id: 6,
          text:
            "Visit ten places on our planet that are undergoing the biggest changes today.",
          url: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
          link: "/",
          cart_color: "indigo",
          rating:0
        }
      ]
    };
  }
};
</script>

<style scoped>
.home {
  text-align: center;
}
</style>
