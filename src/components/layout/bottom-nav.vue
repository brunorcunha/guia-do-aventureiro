<template>
  <v-bottom-navigation v-model="tab" :background-color="color" :input-value="ativo" shift app grow dark>
    <v-btn v-for="aba in abas" :key="aba.nome" height="56" color="transparent">
      <img v-if="aba.img" :src="aba.img" alt="" class="img" />
      <template v-else>
        <span>{{ aba.nome }}</span>
        <v-icon>{{ aba.icon }}</v-icon>
      </template>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
import { sync } from 'vuex-pathify';

export default {
  name: 'BottomNav',
  computed: {
    tab: sync('bottomNav/tab'),
    abas: sync('bottomNav/abas'),
    ativo() {
      return !!this.abas.length;
    },
    color() {
      switch (this.tab) {
        case 0:
          return '#3437C6';
        case 1:
          return '#F79733';
        case 2:
          return '#813BAD';
        case 3:
          return '#DA1F56';
        default:
          return '#F1B928';
      }
    }
  }
};
</script>
