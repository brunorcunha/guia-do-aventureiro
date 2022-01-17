<template>
  <v-app>
    <Header />

    <MenuList />
    <Configs />

    <v-main>
      <v-slide-x-transition mode="out-in">
        <router-view />
      </v-slide-x-transition>
    </v-main>

    <BottomNav v-if="$vuetify.breakpoint.mobile" />
    <Monster ref="monsterDialog" />
  </v-app>
</template>

<script>
import Vue from 'vue';
import eventBus from '@/event-bus';
import BottomNav from '@/components/layout/bottom-nav';
import MenuList from '@/components/layout/menu-list';
import Configs from '@/components/layout/configs';
import Header from '@/components/layout/header';
import Monster from '@/components/monster';
import { sync } from 'vuex-pathify';

export default {
  name: 'DefaultLayout',
  components: { Monster, Header, MenuList, Configs, BottomNav },
  computed: {
    darkTheme: sync('persistent/darkTheme')
  },
  created() {
    this.$vuetify.theme.dark = this.darkTheme;
  },
  mounted() {
    Vue.prototype.$monsterDialog = this.$refs.monsterDialog;
    Vue.prototype.$eventBus = eventBus;
  }
};
</script>

<style lang="scss">
@import '@/scss/main.scss';
</style>
