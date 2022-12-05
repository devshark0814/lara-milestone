import Router from 'vue-router'
import Home from './views/Home.vue'
import Gantt from './views/Gantt.vue'
import About from './views/About.vue'
import NotFound from './views/NotFound.vue'

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '*',
      component: NotFound
    },
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/gantt',
      name: 'Gantt',
      component: Gantt
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
  ]
});