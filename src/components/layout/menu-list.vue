<template>
  <v-navigation-drawer v-model="drawer" app touchless>
    <a class="px-2 pt-7 pb-2 d-flex align-center" href="/" style="text-decoration: none">
      <img src="@/assets/logo.png" width="69" height="65" alt="" />
      <span class="ml-2 titulo pt-1">Guia do Aventureiro</span>
    </a>

    <v-row class="mt-4 mx-4">
      <v-col v-for="app in apps" :key="app.path" cols="6">
        <ButtonApp
          :name="app.name"
          :path="app.path"
          :bg="app.bg"
          :icon="app.icon"
          :width="app.width"
          :rand="app.rand"
        />
      </v-col>
    </v-row>

    <InstallPwa />
  </v-navigation-drawer>
</template>

<script>
import apps from '@/models/apps';
import { sync } from 'vuex-pathify';
import InstallPwa from '@/components/layout/install-pwa';
import ButtonApp from '@/components/dashboard/button';

export default {
  name: 'MenuList',
  components: { ButtonApp, InstallPwa },
  data: () => ({
    apps
  }),
  computed: {
    drawer: sync('app/drawer')
  },
  mounted() {
    if (this.$vuetify.breakpoint.lgAndUp) {
      this.drawer = true;
    }
  }
};
</script>
