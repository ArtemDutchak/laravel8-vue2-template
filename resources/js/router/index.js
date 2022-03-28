import Vue from 'vue';
import Router from 'vue-router';
import {i18n} from '../i18n'

import Layout from '../components/layouts/Layout';

import Home from '../components/pages/Home';
import E404 from '../components/pages/E404';

const routes = [
  {
    path: '/:lang',
    component:{
      render(c){return c('router-view')}
    },
    children: [
      { path: '/', name: 'Home', component: Home },
      { path: 'e404', name: 'E404', component: E404 },
      { path: 'login', name: 'Login', component: Home },
      { path: 'error', name: 'Error', component: Home },
      { path: 'app', name: 'Layout', component: Home, children: [
        { path: 'dashboard', name: 'AnalyticsPage', component: Home },
        { path: 'settings', name: 'SettingsPage', component: Home },
        { path: 'operations', name: 'OperationsPage'},
        { path: 'operations/product-update', name: 'ProductUpdatePage', component: Home },
        { path: 'operations/export', name: 'ExportPage', component: Home },
        { path: 'typography', name: 'TypographyPage', component: Home },
        { path: 'components', name: 'Components'},
        { path: 'components/icons', name: 'IconsPage', component: Home },
        { path: 'notifications', name: 'NotificationsPage', component: Home },
        { path: 'components/charts', name: 'ChartsPage', component: Home },
        { path: 'tables', name: 'TablesBasicPage', component: Home },
        { path: 'components/maps', name: 'GoogleMapPage', component: Home },
      ]}
    ]
  }
];

Vue.use(Router);

const router = new Router({
  mode: 'history',
  base: '/',
  routes,
})

router.allowedLanguages = ['en', 'ua'];

router.beforeEach((to, from, next) => {

  let language = to.params.lang
  if (language) {
    if (router.allowedLanguages.includes(language)) {
      i18n.locale = language
    }else{
      router.push({name: to.name, params: { lang: 'en' }})
    }
  }else{
    router.push({name: 'E404', params: { lang: 'en' }})
  }

  next()

})

export default router
