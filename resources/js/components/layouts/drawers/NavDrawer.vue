<template>
  <v-navigation-drawer
      absolute
      left
      class="navigation-drawer"
      :permanent="showNavigationDrawer && user"
      :value="showNavigationDrawer && user"
    >

    <template v-slot:prepend>
      <v-list-item two-line>

        <v-btn
          icon
          @click="closeNavigationDrawer"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>

        <v-list-item-avatar>
        </v-list-item-avatar>

        <v-list-item-content>
        </v-list-item-content>

      </v-list-item>
    </template>

      <v-divider></v-divider>

      <v-list>
        <v-list-item
          v-for="(item, index) in navMenuItems"
          :key="'item_' + index"
          :to="{name: item.route}"
          >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ $t(`menu.${item.code}`) }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        </v-list>

      </v-navigation-drawer>
</template>

<script>

import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';

export default {
  name: 'AppBar',
  data: () => ({
    drawer: true,
    group: true,
    mini: true,
  }),

  methods:{
    ...mapActions({
      closeNavigationDrawer: 'drawerModule/closeNavigationDrawer',
    }),
  },

  computed:{
    title(){
      return 'App Bar Title'
    },
    ...mapGetters({
      showNavigationDrawer: 'drawerModule/showNavigationDrawer',
      navMenuItems: 'navMenuModule/navMenu',
      user: 'userModule/user'
    }),
  },

}
</script>
