import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/sobre',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    path: '/arquis',
    name: 'Archs',
    component: () => import(/* webpackChunkName: "archs" */ '@/views/Archs/Index.vue'),
    children: [
      {
        path: '/:id',
        component: () => import(/* webpackChunkName: "monster" */ '@/views/Monster/Index.vue')
      }
    ]
  },
  {
    path: '/monstro/:id',
    name: 'Monster',
    component: () => import(/* webpackChunkName: "monster" */ '@/views/Monster/Index.vue')
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
