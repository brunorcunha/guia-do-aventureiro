<template>
  <v-container>
    <div class="d-flex align-center justify-center mb-10">
      <img src="@/assets/logo.png" width="69" height="65" alt="" />
      <div class="ml-2 titulo pt-1" style="width: 160px">Guia do Aventureiro</div>
    </div>

    <v-row class="mx-n2">
      <v-col v-for="app in apps" :key="app.path" cols="3">
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

    <Rss />
  </v-container>
</template>

<script>
import apps from '@/models/apps';
import ButtonApp from '@/components/dashboard/button';
import Rss from '../components/dashboard/rss';

export default {
  name: 'Home',
  components: { Rss, ButtonApp },
  data: () => ({
    apps
  }),
  beforeRouteEnter(to, from, next) {
    next(() => window.twttr?.widgets?.load());
  }
};
</script>
