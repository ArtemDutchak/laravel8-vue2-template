export default {
  namespaced: true,
  state: {
    showNavigationDrawer: false,
    showAccountDrawer: false,
    showLRRDrawer: false,
  },
  mutations: {
    toggleNavigationDrawer(state){
      state.showNavigationDrawer = !state.showNavigationDrawer;
    },
    toggleAccountDrawer(state){
      state.showAccountDrawer = !state.showAccountDrawer;
    },
    closeNavigationDrawer(state){
      state.showNavigationDrawer = false;
    },
    closeAccountDrawer(state){
      state.showAccountDrawer = false;
    },
    openNavigationDrawer(state){
      state.showNavigationDrawer = true;
    },
    openAccountDrawer(state){
      state.showAccountDrawer = true;
    },
    toggleLRRDrawer(state){
      state.showLRRDrawer = !state.showLRRDrawer;
    },
    closeLRRDrawer(state){
      state.showLRRDrawer = false;
    },
    openLRRDrawer(state){
      state.showLRRDrawer = true;
    },
  },
  actions: {
    toggleNavigationDrawer(ctx){
      ctx.commit('toggleNavigationDrawer');
    },
    toggleAccountDrawer(ctx){
      ctx.commit('toggleAccountDrawer');
    },
    closeNavigationDrawer(ctx){
      ctx.commit('closeNavigationDrawer');
    },
    closeAccountDrawer(ctx){
      ctx.commit('closeAccountDrawer');
    },
    toggleLRRDrawer(ctx){
      ctx.commit('toggleLRRDrawer');
    },
    closeLRRDrawer(ctx){
      ctx.commit('closeLRRDrawer');
    },
    openLRRDrawer(ctx){
      ctx.commit('openLRRDrawer');
    },
  },
  getters:{
    showNavigationDrawer(state, getters, rootState){
      return state.showNavigationDrawer;
    },
    showAccountDrawer(state, getters, rootState){
      return state.showAccountDrawer;
    },
    showLRRDrawer(state, getters, rootState){
      return state.showLRRDrawer;
    },
  }
};
