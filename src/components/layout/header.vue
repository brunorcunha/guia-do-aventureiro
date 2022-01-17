<template>
  <v-app-bar app flat>
    <v-btn icon @click="drawer = !drawer"><v-icon>bi-list</v-icon></v-btn>

    <v-spacer />

    <TopNav v-if="!$vuetify.breakpoint.mobile" />

    <v-spacer />

    <v-btn icon @click="drawerRight = !drawerRight"><v-icon>bi-gear</v-icon></v-btn>
  </v-app-bar>
</template>

<script>
import { sync } from 'vuex-pathify';
import TopNav from '@/components/layout/top-nav';

export default {
  name: 'Header',
  components: { TopNav },
  computed: {
    drawer: sync('app/drawer'),
    drawerRight: sync('app/drawerRight')
  }
};
</script>
