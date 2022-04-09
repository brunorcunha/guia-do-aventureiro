<template>
  <div>
    <v-tabs-items v-model="tab" touchless>
      <v-tab-item>
        <CapturableList />
      </v-tab-item>

      <v-tab-item>
        <CapturableInfo />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { sync } from 'vuex-pathify';
import CapturableList from '@/views/Capturable/List';
import CapturableInfo from '@/views/Capturable/Info';

export default {
  name: 'CapturableIndex',
  components: { CapturableList, CapturableInfo },
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
      { nome: 'Capturáveis', icon: 'bi-list-stars' },
      { nome: 'Informações', icon: 'bi-info-circle' }
    ];
    this.tab = 0;
  },
  beforeDestroy() {
    this.abas = [];
  },
  head: {
    title: {
      inner: 'Capturáveis'
    }
  }
};
</script>
