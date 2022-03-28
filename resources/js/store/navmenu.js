export default {
  namespaced: true,
  state: {
    navMenu:[
      {
        icon: 'mdi-account',
        title: 'Attractions',
        active: false,
        items: [
          {
            title: 'List Item',
            route: 'Home',
          }
        ]
      },
      {
        icon: 'mdi-account',
        title: 'Dining',
        active: false,
        items: [
          {
            title: 'Breakfast & brunch',
            route: 'AnalyticsPage',
          },
          {
            title: 'New American',
            route: 'SettingsPage',
          },
          {
            title: 'Sushi',
            route: 'E404',
          }
        ]
      }
    ]
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
