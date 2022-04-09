<template>
  <div>
    <v-tabs-items v-model="tab" touchless>
      <v-tab-item>
        <TitulosList />
      </v-tab-item>

      <v-tab-item>
        <TitulosInfo />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { sync } from 'vuex-pathify';
import TitulosList from '@/views/Titulos/List';
import TitulosInfo from '@/views/Titulos/Info';

export default {
  name: 'TitulosIndex',
  components: { TitulosList, TitulosInfo },
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
      { nome: 'Títulos', icon: 'bi-list-stars' },
      { nome: 'Informações', icon: 'bi-info-circle' }
    ];
    this.tab = 0;
  },
  beforeDestroy() {
    this.abas = [];
  },
  head: {
    title: {
      inner: 'Títulos'
    }
  }
};
</script>
