<template>
  <v-btn-toggle v-model="tab" :background-color="color" dense dark mandatory>
    <v-btn v-for="aba in abas" :key="aba.nome" color="transparent" class="px-6">
      <img v-if="aba.img" :src="aba.img" alt="" class="img" />
      <template v-else>
        <v-icon left>{{ aba.icon }}</v-icon>
        <span>{{ aba.nome }}</span>
      </template>
    </v-btn>
  </v-btn-toggle>
</template>

<script>
import { sync } from 'vuex-pathify';

export default {
  name: 'TopNav',
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
