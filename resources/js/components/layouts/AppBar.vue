<template>
  <v-app-bar
    elevation="2"
  >

    <NavDrawer />

    <v-app-bar-nav-icon
      v-if="user"
      @click="toggleNavigationDrawer"
      class="mr-3"
    >
    </v-app-bar-nav-icon>

    <v-toolbar-title>{{ title }}</v-toolbar-title>

    <v-spacer></v-spacer>

    <v-btn
      v-if="user"
      icon
      @click="toggleAccountDrawer"
    >
      <v-icon>mdi-account</v-icon>
    </v-btn>

    <v-btn
      v-if="!user"
      icon
      @click="toggleLRRDrawer"
    >
      <v-icon>mdi-login</v-icon>
    </v-btn>

    <AccountDrawer />
    <LRRDrawer />

  </v-app-bar>
</template>

<script>

import NavDrawer from './drawers/NavDrawer';
import AccountDrawer from './drawers/AccountDrawer';
import LRRDrawer from './drawers/LRRDrawer';

import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: 'AppBar',
  components: {
    AccountDrawer,
    LRRDrawer,
    NavDrawer,
  },
  data: () => ({
    //
  }),

  methods:{
    ...mapActions({
      toggleNavigationDrawer: 'drawerModule/toggleNavigationDrawer',
      toggleAccountDrawer: 'drawerModule/toggleAccountDrawer',
      toggleLRRDrawer: 'drawerModule/toggleLRRDrawer',
    }),

  },

  computed:{
    ...mapGetters({
      user: 'userModule/user'
    }),
    title(){
      return 'App Bar Title'
    },
  },

}
</script>
