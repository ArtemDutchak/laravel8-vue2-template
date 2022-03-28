export default {
  namespaced: true,
  state: {
    languages: [
      {
        code: 'en',
        title: 'EN',
        desc: 'English',
      },{
        code: 'ua',
        title: 'UA',
        desc: 'Українська',
      }
    ],
  },
  mutations: {
    setLanguage(state, lang){
      state.currLanguage = JSON.parse(JSON.stringify(lang));
    },
  },
  actions: {
    setLanguage(ctx, lang){
      let currLanguage = JSON.parse(JSON.stringify(ctx.state.languages[0]));
      for (let i = 0; i < ctx.state.languages.length; i++) {
        const language = ctx.state.languages[i];
        if (language.code == lang) {
          currLanguage = language;
          currLanguage.index = i;
        }
      }
      ctx.commit('setLanguage', currLanguage);
    },
  },
  getters:{
    languages(state, getters, rootState){
      return state.languages;
    },
    currLanguage(state, getters, rootState){
      return state.currLanguage;
    },
  }
};
