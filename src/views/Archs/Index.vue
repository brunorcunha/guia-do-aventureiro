<template>
  <div>
    <v-tabs-items v-model="tab" touchless>
      <v-tab-item>
        <ArchsList />
      </v-tab-item>

      <v-tab-item>
        <ArchsInfo />
      </v-tab-item>

      <v-tab-item>
        <ArchsQuest />
      </v-tab-item>

      <v-tab-item>
        <ArchsMoon />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { sync } from 'vuex-pathify';
import ArchsList from '@/views/Archs/List';
import ArchsInfo from '@/views/Archs/Info';
import ArchsQuest from '@/views/Archs/Quest';
import ArchsMoon from '@/views/Archs/Moon';

export default {
  name: 'ArchsIndex',
  components: { ArchsMoon, ArchsQuest, ArchsInfo, ArchsList },
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
      { nome: 'Arquis', icon: 'bi-list-stars' },
      { nome: 'Informações', icon: 'bi-info-circle' },
      { nome: 'Quest', icon: 'bi-flag' },
      { nome: 'Moon', icon: 'bi-moon' }
    ];
    this.tab = 0;
  },
  beforeDestroy() {
    this.abas = [];
  },
  head: {
    title: {
      inner: 'Arquimonstros'
    }
  }
};
</script>
