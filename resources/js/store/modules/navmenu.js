export default {
  namespaced: true,
  state: {
    navMenu:[
      {
        icon: 'mdi-view-dashboard',
        code: 'dashboard',
        route: 'DashboardPage',
        active: false,
      },{
        icon: 'mdi-view-list',
        code: 'categories',
        route: 'CategoriesPage',
        active: false,
      },{
        icon: 'mdi-link-variant',
        code: 'custom_urls',
        route: 'CustomUrlsPage',
        active: false,
      },{
        icon: 'mdi-playlist-check',
        code: 'scan_list',
        route: 'ScanListPage',
        active: false,
      },{
        icon: 'mdi-cards-heart',
        code: 'favorites',
        route: 'FavoritesPage',
        active: false,
      },{
        icon: 'mdi-playlist-check',
        code: 'listing',
        route: 'ListingPage',
        active: false,
      },{
        icon: 'mdi-cog',
        code: 'settings',
        route: 'SettingsPage',
        active: false,
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
