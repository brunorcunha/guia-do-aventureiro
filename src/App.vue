<template>
  <v-app>
    <Header />

    <MenuList />
    <Configs />

    <v-main>
      <v-progress-linear v-if="loadingPage" indeterminate color="accent" />
      <v-slide-y-reverse-transition mode="out-in">
        <router-view />
      </v-slide-y-reverse-transition>
    </v-main>

    <BottomNav v-if="$vuetify.breakpoint.mobile" />
  </v-app>
</template>

<script>
import Vue from 'vue';
import eventBus from '@/event-bus';
import BottomNav from '@/components/layout/bottom-nav';
import MenuList from '@/components/layout/menu-list';
import Configs from '@/components/layout/configs';
import Header from '@/components/layout/header';
import { sync } from 'vuex-pathify';

export default {
  name: 'DefaultLayout',
  components: { Header, MenuList, Configs, BottomNav },
  computed: {
    darkTheme: sync('persistent/darkTheme'),
    loadingPage: sync('app/loadingPage')
  },
  created() {
    this.$vuetify.theme.dark = this.darkTheme;
  },
  mounted() {
    Vue.prototype.$baseURL = process.env.VUE_APP_BASE_URL;
    Vue.prototype.$eventBus = eventBus;

    Vue.prototype.$itemRarityClassText = (item) => this.itemRarityClass(item) + '--text';
    Vue.prototype.$itemRarityClass = this.itemRarityClass;

    Vue.prototype.$monsterRarityClassText = (item) => this.monsterRarityClass(item) + '--text';
    Vue.prototype.$monsterRarityClass = this.monsterRarityClass;
  },
  methods: {
    monsterRarityClass(item) {
      if (item.isArch) return 'rarity-2';
      if (item.isBoss) return 'rarity-3';
      if (item.isHorde) return 'rarity-1';
      if (item.isUb) return 'rarity-6';
      return 'rarity-0';
    },
    itemRarityClass(item) {
      switch (item.rarity) {
        case 2:
          return 'rarity-1';
        case 3:
          return 'rarity-2';
        case 4:
          return 'rarity-3';
        case 5:
          return 'rarity-4';
        case 6:
          return 'rarity-5';
        case 7:
          return 'rarity-6';
      }
      return 'rarity-0';
    }
  }
};
</script>

<style lang="scss">
@import '@/scss/main.scss';
</style>
