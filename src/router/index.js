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
    path: '/ferramentas',
    name: 'Tools',
    component: () => import(/* webpackChunkName: "tool" */ '@/views/Tools.vue')
  },
  {
    path: '/arquis',
    name: 'Archs',
    component: () => import(/* webpackChunkName: "archs" */ '@/views/Archs/Index.vue')
  },
  {
    path: '/capturaveis',
    name: 'Capturable',
    component: () => import(/* webpackChunkName: "capturable" */ '@/views/Capturable/Index.vue')
  },
  {
    path: '/monstros',
    name: 'Monsters',
    component: () => import(/* webpackChunkName: "monsters" */ '@/views/Monsters/Index.vue')
  },
  {
    path: '/monstro/:id',
    name: 'Monster',
    component: () => import(/* webpackChunkName: "monsters" */ '@/views/Monster/Index.vue')
  },
  {
    path: '/fichas',
    name: 'Exchanges',
    component: () => import(/* webpackChunkName: "exchanges" */ '@/views/Exchanges/Index.vue')
  },
  {
    path: '/crupie/:id',
    name: 'Exchange',
    component: () => import(/* webpackChunkName: "exchanges" */ '@/views/Exchange/Index.vue')
  },
  {
    path: '/protector/:id',
    name: 'Protector',
    component: () => import(/* webpackChunkName: "protectors" */ '@/views/Protector/Index.vue')
  },
  {
    path: '/territorios',
    name: 'Locations',
    component: () => import(/* webpackChunkName: "locations" */ '@/views/Locations/Index.vue')
  },
  {
    path: '/territorio/:id',
    name: 'Location',
    component: () => import(/* webpackChunkName: "locations" */ '@/views/Location/Index.vue')
  },
  {
    path: '/calaboucos',
    name: 'Dungeons',
    component: () => import(/* webpackChunkName: "dungeons" */ '@/views/Dungeons/Index.vue')
  },
  {
    path: '/calabouco/:id',
    name: 'Dungeon',
    component: () => import(/* webpackChunkName: "dungeons" */ '@/views/Dungeon/Index.vue')
  },
  {
    path: '/emotes',
    name: 'Emotes',
    component: () => import(/* webpackChunkName: "emotes" */ '@/views/Emotes/Index.vue')
  },
  {
    path: '/emote/:id',
    name: 'Emote',
    component: () => import(/* webpackChunkName: "emotes" */ '@/views/Emote/Index.vue')
  },
  // {
  //   path: '/receitas',
  //   name: 'Receitas',
  //   component: () => import(/* webpackChunkName: "receitas" */ '@/views/Receitas/Index.vue')
  // },
  // {
  //   path: '/receita/:id',
  //   name: 'Receita',
  //   component: () => import(/* webpackChunkName: "receitas" */ '@/views/Receita/Index.vue')
  // },
  {
    path: '/titulos',
    name: 'Titulos',
    component: () => import(/* webpackChunkName: "titulos" */ '@/views/Titulos/Index.vue')
  },
  {
    path: '/titulo/:id',
    name: 'Titulo',
    component: () => import(/* webpackChunkName: "titulos" */ '@/views/Titulo/Index.vue')
  },
  {
    path: '/missoes',
    name: 'Missoes',
    component: () => import(/* webpackChunkName: "conquistas" */ '@/views/Missoes/Index.vue')
  },
  {
    path: '/conquistas',
    name: 'Conquista',
    component: () => import(/* webpackChunkName: "conquistas" */ '@/views/Conquistas/Index.vue')
  },
  {
    path: '/livros',
    name: 'Books',
    component: () => import(/* webpackChunkName: "books" */ '@/views/Books/Index.vue')
  },
  // {
  //   path: '/items',
  //   name: 'Items',
  //   component: () => import(/* webpackChunkName: "items" */ '@/views/Items/Index.vue')
  // },
  {
    path: '/item/:id',
    name: 'Item',
    component: () => import(/* webpackChunkName: "items" */ '@/views/Item/Index.vue')
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
