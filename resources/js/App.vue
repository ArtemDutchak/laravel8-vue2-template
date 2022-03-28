<template>
  <v-app>
    <v-main>

      <AppBar />

      <router-view v-slot="{ Component, route }">
      </router-view>

    </v-main>
  </v-app>
</template>

<script>

import AppBar from './components/layouts/AppBar';

import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    AppBar,
  },
  data: () => ({
    //
  }),

  methods:{
    ...mapActions({
      setUser: 'userModule/setUser',
      setLanguage: 'languageModule/setLanguage'
    }),
    initApp(){
      this.initUser();
      this.initTheme();
      this.initLang();
    },
    initUser(){
      this.setUser(user);
    },
    initTheme(){
      let darkTheme = localStorage.getItem('darkTheme');
      if (darkTheme != 'true') {
        localStorage.setItem('darkTheme', 'false');
      }
      this.$vuetify.theme.dark = darkTheme === 'true' ? true : false;
    },
    initLang(){
      let savedLang = localStorage.getItem('lang');
      this.setLanguage(savedLang);
      if (this.$route.params.lang != savedLang) {
        this.$router.push({ params: {lang: savedLang} });
      }
    }
  },

  computed:{

  },

  created(){
    this.initApp();
  }

}
</script>

<style src="./styles/app.scss" lang="scss" />
