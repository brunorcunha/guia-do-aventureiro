import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/Home.vue';
import store from '@/store';

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

const scrollBehavior = () => window.scrollTo({ top: 0, behavior: 'smooth' });
const beforeEach = () => store.set('app/loadingPage', true);
const afterEach = () => store.set('app/loadingPage', false);

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior
});

router.beforeEach = beforeEach;
router.afterEach = afterEach;

export default router;
