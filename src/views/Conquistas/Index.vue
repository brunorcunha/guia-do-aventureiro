<template>
  <div>
    <v-tabs-items v-model="tab" touchless>
      <v-tab-item v-for="lista in conquistas" :key="lista.id">
        <ConquistasList :value="lista" />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { sync } from 'vuex-pathify';
import ConquistasList from '@/views/Conquistas/List';
import conquistas from '@/models/conquistas';

export default {
  name: 'ConquistasIndex',
  components: { ConquistasList },
  data: () => ({
    conquistas
  }),
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
    this.abas = conquistas.map((e) => ({
      nome: e.name,
      img: `${this.$baseURL}/categories/${e.id}.png`
    }));
    this.tab = 0;
  },
  beforeDestroy() {
    this.abas = [];
  },
  head: {
    title: {
      inner: 'Conquistas'
    }
  }
};
</script>
