<template>
  <v-navigation-drawer v-model="drawer" app touchless>
    <div class="px-2 pt-7 pb-2 d-flex align-center">
      <img src="@/assets/logo.png" width="69" height="65" alt="" />
      <span class="ml-2 titulo pt-1">Guia do Aventureiro</span>
    </div>

    <v-list>
      <v-list-item-group color="primary">
        <v-list-item v-for="(item, i) in items" :key="i" :to="item.to" router exact>
          <v-list-item-action class="mr-2">
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
import { sync } from 'vuex-pathify';

export default {
  name: 'MenuList',
  data: () => ({
    items: [
      { icon: 'bi-grid-3x3-gap-fill', title: 'Tela Inicial', to: '/' },
      { icon: 'mdi-chart-bubble', title: 'Arquis', to: '/arquis' },
      { icon: 'bi-info-square', title: 'Sobre', to: '/sobre' }
    ]
  }),
  computed: {
    drawer: sync('app/drawer')
  }
};
</script>
