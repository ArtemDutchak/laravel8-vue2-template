import Vue from 'vue';
import Router from 'vue-router';
import {i18n} from '../i18n'

import Layout from '../components/layouts/Layout';

import Home from '../components/pages/Home';

import Dashboard from '../components/pages/Dashboard';
import Categories from '../components/pages/Categories';
import CustomUrls from '../components/pages/CustomUrls';
import ScanList from '../components/pages/ScanList';
import Favorites from '../components/pages/Favorites';
import Listing from '../components/pages/Listing';
import Settings from '../components/pages/Settings';

import E404 from '../components/pages/E404';

const routes = [
  {
    path: '/:lang',
    component:{
      render(c){return c('router-view')}
    },
    children: [
      { path: '/', name: 'HomePage', component: Home },
      { path: 'e404', name: 'E404Page', component: E404 },
      { path: 'error', name: 'ErrorPage', component: Home },
      { path: '', name: 'Layout', component: Layout, children: [
        { path: 'dashboard', name: 'DashboardPage', component: Dashboard },
        { path: 'categories', name: 'CategoriesPage', component: Categories },
        { path: 'custom-urls', name: 'CustomUrlsPage', component: CustomUrls },
        { path: 'scan-list', name: 'ScanListPage', component: ScanList },
        { path: 'favorites', name: 'FavoritesPage', component: Favorites },
        { path: 'listing', name: 'ListingPage', component: Listing },
        { path: 'settings', name: 'SettingsPage', component: Settings },
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
    router.push({name: 'E404Page', params: { lang: 'en' }});
  }

  next()

})

export default router
