export default {
  namespaced: true,
  state: {
    sidebarClose: false,
    sidebarStatic: false,
    sidebarActiveElement: '',
    chatOpen: false,
    chatNotificationIcon: false,
    chatNotificationPopover: false,
  },
  mutations: {

  },
  actions: {

  },
  getters:{
    navMenu(state, getters, rootState){
      return state.navMenu;
    }
  }
};
