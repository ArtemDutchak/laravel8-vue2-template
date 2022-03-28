<template>
    <v-navigation-drawer
      absolute
      right
      class="lrr-drawer"
      :permanent="showLRRDrawer"
      :value="showLRRDrawer"
    >

    <template v-slot:prepend>
      <v-list-item two-line>

        <v-list-item-avatar>
        </v-list-item-avatar>

        <v-list-item-content>
        </v-list-item-content>

        <v-btn
          icon
          @click="closeLRRDrawer"
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>

      </v-list-item>
    </template>

    <v-divider></v-divider>

    <v-tabs-items
      class="pt-6 px-3"
      v-model="tab"
    >

      <LoginTabItem
        @activateTab="activateTab"
      />

      <LoginTabItem
        @activateTab="activateTab"
        />

      <LoginTabItem
        @activateTab="activateTab"
        />

    </v-tabs-items>
  </v-card>

    </v-navigation-drawer>
</template>

<script>

import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

import LoginTabItem from './LoginTabItem';

export default {
  name: 'LRRDrawer',
  components:{
    LoginTabItem,
  },
  data: () => ({
    group: true,
    mini: true,
    items: [
          { title: 'Home', icon: 'mdi-home-city' },
          { title: 'My Account', icon: 'mdi-account' },
          { title: 'Users', icon: 'mdi-account-group-outline' },
        ],
    tab: 0,
    tabitems: [
      'Login', 'Register', 'Restore',
    ],
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  }),

  methods:{
    activateTab(tabIndex){
      this.tab = tabIndex;
    },
    toggleDrawer(){
      this.drawer = !this.drawer;
      console.log(this.drawer);
    },
    ...mapActions({
      closeLRRDrawer: 'drawerModule/closeLRRDrawer'
    }),
  },

  computed:{
    title(){
      return 'App Bar Title'
    },
    ...mapGetters({
      showLRRDrawer: 'drawerModule/showLRRDrawer'
    }),
  },

  mounted(){
    // setInterval(this.toggleDrawer, 2000);
  },

}
</script>
