<template>
  <nav>
    <v-app-bar app dark class="indigo">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="headline text-uppercase">
        <span>Bem vindo!</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <span class="font-weight-light display-1">Locadora {{title}}</span>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" app dark class="indigo">
      <v-list shaped>
        <v-subheader>OPTIONS MENU</v-subheader>
        <v-list-item-group>
          <v-list-item v-for="(item, i) in items" :key="i" :to="item.route">
            <v-list-item-icon>
              <v-icon v-text="item.icon" />
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title v-text="item.text" />
            </v-list-item-content>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      title: "API github de maluco",
      drawer: false,
      items: [
        { text: "HOME", icon: "mdi-home", route:'/' },
        { text: "CARRINHO", icon: "mdi-cart", route:'/cart' },
        { text: "HISTÓRICO", icon: "mdi-history", route:'/history' }
      ]
    };
  },
  methods: {}
};
</script>

<style scoped>
</style>
