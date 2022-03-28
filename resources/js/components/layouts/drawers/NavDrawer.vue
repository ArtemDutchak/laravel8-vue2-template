<template>
  <v-navigation-drawer
      absolute
      left
      class="navigation-drawer"
      :permanent="showNavigationDrawer"
      :value="showNavigationDrawer"
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

      <v-list dense>
          <v-list-group
            v-for="item in navMenuItems"
            :key="item.title"
            v-model="item.active"
            :prepend-icon="item.icon"
            no-action
            active-class="no-active"
          >
            <template v-slot:activator>
              <v-list-item>
                <v-list-item-content>
                  <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </template>

            <v-list-item
              v-for="subItem in item.items"
              :key="subItem.title"
              :to="{name: subItem.route}"
            >
              <v-list-item-content>
                <v-list-item-title>{{ subItem.title }}</v-list-item-title>
              </v-list-item-content>

              <v-list-item-action>
                <v-icon>{{ subItem.icon }}</v-icon>
              </v-list-item-action>
            </v-list-item>
          </v-list-group>
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
    }),
  },

}
</script>
