<template>
    <v-navigation-drawer
      absolute
      right
      class="account-drawer"
      :permanent="showAccountDrawer"
      :value="showAccountDrawer"
    >
      <template v-slot:prepend>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/women/81.jpg">
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>{{ user.name }}</v-list-item-title>
            <v-list-item-subtitle>{{ $t('text.logged_in') }}</v-list-item-subtitle>
          </v-list-item-content>

          <v-btn
            icon
            @click="closeAccountDrawer"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>

        </v-list-item>
      </template>

      <v-divider />

      <v-list-item
      >
        <v-list-item-content
          class="langs">
          <v-tabs
            :value="langTabIndex"
            centered
            dark
            icons-and-text
          >
            <v-tab
              v-for="lang in languages"
              :key="lang.code"
              @click="switchLang(lang.code)">
              {{ lang.title }}
            </v-tab>

          </v-tabs>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list-item
        class="mb-n5"
      >
        <v-list-item-content
          class="pl-2">
            <v-switch
              dense
              class="sm"
              v-model="switchDarkTheme"
              inset
              :label="$t('button.switchDarkTheme')"
            ></v-switch>
        </v-list-item-content>
      </v-list-item>

      <v-divider />

      <v-list dense>
        <v-list-item @click="logout">
          <v-list-item-icon>
            <v-icon>mdi-logout</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>Logout</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>


    </v-navigation-drawer>
</template>

<script>

import { mapGetters } from 'vuex';
import { mapActions } from 'vuex';

export default {
  name: 'AccountDrawer',
  data: () => ({
    switchDarkTheme: false,
  }),

  methods:{
    toggleDrawer(){
      this.drawer = !this.drawer;
    },
    logout(){
      const url = 'logout';
      this.$sendData(url).then(response => {
        this.callbackAction(url, response);
      });
    },
    switchLang(lang){
      this.$i18n.locale = lang;
      this.setLanguage(lang);
      localStorage.setItem('lang', lang);
      this.$router.push({ params: {lang} });
    },
    callbackAction(url, response){
      switch (url) {
        case 'logout':
          this.logoutCallbackAction(response)
          break;
      }
    },
    logoutCallbackAction(response){
      this.$router.push({ name: 'HomePage' });
      location.reload();
    },
    ...mapActions({
      closeAccountDrawer: 'drawerModule/closeAccountDrawer',
      setLanguage: 'languageModule/setLanguage'
    }),
  },

  computed:{
    title(){
      return 'App Bar Title'
    },
    langTabIndex(){
      return this.currLanguage ? this.currLanguage.index : 0;
    },
    ...mapGetters({
      showAccountDrawer: 'drawerModule/showAccountDrawer',
      languages: 'languageModule/languages',
      currLanguage: 'languageModule/currLanguage',
      user: 'userModule/user'
    }),
  },

  watch:{
    switchDarkTheme(value){
      localStorage.setItem('darkTheme', value);
      this.$vuetify.theme.dark = value;
    },
  },

  created(){
    this.switchDarkTheme = this.$vuetify.theme.dark;
  },

}
</script>
