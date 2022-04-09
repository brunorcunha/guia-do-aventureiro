<template>
  <div>
    <v-tabs-items v-model="tab" touchless>
      <v-tab-item>
        <ExchangesList />
      </v-tab-item>

      <v-tab-item>
        <ExchangesInfo />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { sync } from 'vuex-pathify';
import ExchangesList from '@/views/Exchanges/List';
import ExchangesInfo from '@/views/Exchanges/Info';

export default {
  name: 'ExchangesIndex',
  components: { ExchangesList, ExchangesInfo },
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
      { nome: 'Fichas', icon: 'bi-list-stars' },
      { nome: 'Informações', icon: 'bi-info-circle' }
    ];
    this.tab = 0;
  },
  beforeDestroy() {
    this.abas = [];
  },
  head: {
    title: {
      inner: 'Fichas'
    }
  }
};
</script>
