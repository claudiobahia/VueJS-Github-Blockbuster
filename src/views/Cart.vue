<template>
  <div class="cart">
    <v-chip class="ma-5" color="indigo" outlined pill label large>
      Carrinho: {{cart_size}}
      <v-icon right x-large>mdi-cart-outline</v-icon>
    </v-chip>
    <v-chip class="ma-5" color="indigo" outlined pill label large to="/cart/close-buy">
      <!-- params: { id: filme.id }  -->
      Finalizar
      <v-icon right size="25">mdi-check-outline</v-icon>
    </v-chip>
    <v-row>
      <v-col v-for="item in items" :key="item.id" cols="12" class="my-2">
        <v-card class="my-1" max-width="100%" outlined>
          <v-list-item three-line>
            <v-list-item-avatar tile min-width="150" min-height="210" color="grey">
              <v-img :src="item.url" height="300"></v-img>
            </v-list-item-avatar>
            <v-list-item-content>
              <v-list-item-subtitle class="headline grey--text text--darken-3">{{item.text}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-card-actions align="start">
            <v-btn x-large text v-on:click="removeCart(item.id)" :color="item.cart_color">
              Remover
              <v-icon :color="item.cart_color">mdi-delete</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  computed: {
    cart_size: function() {
      return this.items.length;
    }
  },
  methods: { 
    removeCart: function(item_id) {
      this.items.pop(this.items[item_id - 1]);
    }
  },
  data() {
    return {
      items: [
        {
          id: 1,
          text:
            "Visit ten places on our planet that are undergoing the biggest changes today.",
          url: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
          link: "/",
          cart_color: "indigo",
          rating: 1
        },
        {
          id: 2,
          text:
            "Visit ten places on our planet that are undergoing the biggest changes today.",
          url: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
          link: "/",
          cart_color: "indigo",
          rating: 2
        },
        {
          id: 3,
          text:
            "Visit ten places on our planet that are undergoing the biggest changes today.",
          url: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
          link: "/",
          cart_color: "indigo",
          rating: 3
        },
        {
          id: 4,
          text:
            "Visit ten places on our planet that are undergoing the biggest changes today.",
          url: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
          link: "/",
          cart_color: "indigo",
          rating: 4
        },
        {
          id: 5,
          text:
            "Visit ten places on our planet that are undergoing the biggest changes today.",
          url: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
          link: "/",
          cart_color: "indigo",
          rating: 5
        },
        {
          id: 6,
          text:
            "Visit ten places on our planet that are undergoing the biggest changes today.",
          url: "https://cdn.vuetifyjs.com/images/cards/mountain.jpg",
          link: "/",
          cart_color: "indigo",
          rating: 0
        }
      ]
    };
  }
};
</script>