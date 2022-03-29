export default {
  namespaced: true,
  state: {
    user: false,
  },
  mutations: {
    setUser(state, user){
      state.user = JSON.parse(JSON.stringify(user));
    },
  },
  actions: {
    setUser(ctx, user){
      ctx.commit('setUser', user);
    },
  },
  getters:{
    user(state, getters, rootState){
      return state.user;
    },
  }
};
