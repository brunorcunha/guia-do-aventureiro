<template>
  <div>
    <v-tabs-items v-model="tab" touchless>
      <v-tab-item>
        <DungeonsList />
      </v-tab-item>

      <v-tab-item>
        <DungeonsInfo />
      </v-tab-item>

      <v-tab-item>
        <StasisInfo />
      </v-tab-item>

      <v-tab-item>
        <EstelasInfo />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { sync } from 'vuex-pathify';
import DungeonsList from '@/views/Dungeons/List';
import DungeonsInfo from '@/views/Dungeons/Info';
import StasisInfo from '@/views/Dungeons/Stasis';
import EstelasInfo from '@/views/Dungeons/Estelas';

export default {
  name: 'DungeonsIndex',
  components: { EstelasInfo, DungeonsList, DungeonsInfo, StasisInfo },
  computed: {
    tab: sync('bottomNav/tab'),
    abas: sync('bottomNav/abas')
  },
  watch: {
    tab() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  },
  mounted() {
    this.abas = [
      { nome: 'Calabouços', icon: 'bi-list-stars' },
      { nome: 'Informações', icon: 'bi-info-circle' },
      { nome: 'Stasis', icon: 'bi-hurricane' },
      { nome: 'Estelas', icon: 'bi-pentagon' }
    ];
    this.tab = 0;
  },
  beforeDestroy() {
    this.abas = [];
  },
  head: {
    title: {
      inner: 'Calabouços'
    }
  }
};
</script>
