import Vue from 'vue';
import Vuex from 'vuex';

import layoutModule from './layout';
import navMenuModule from './navmenu';
import drawerModule from './drawers';
import userModule from './user';
import languageModule from './language';

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
