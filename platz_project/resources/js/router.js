// ./router.js

import Vue from 'vue'
import Router from 'vue-router'

// Chargmeent des composants des différentes routes
import Index from './components/Ressources/Index'

// Création du routing
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index
    }
  ]
})
