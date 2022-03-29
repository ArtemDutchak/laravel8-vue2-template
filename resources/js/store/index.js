import Vue from 'vue';
import Vuex from 'vuex';

import layoutModule from './modules/layout';
import navMenuModule from './modules/navmenu';
import drawerModule from './modules/drawers';
import userModule from './modules/user';
import languageModule from './modules/language';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    layoutModule,
    navMenuModule,
    drawerModule,
    userModule,
    languageModule,
  },
  state:{

  },
  mutations:{

  },
  actions:{

  },
  getters:{

  }
});
