<template>
  <div>
    <v-tabs-items v-model="tab" touchless>
      <v-tab-item v-for="lista in missoes" :key="lista.id">
        <MissoesList :value="lista" />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { sync } from 'vuex-pathify';
import MissoesList from '@/views/Missoes/List';
import missoes from '@/models/quests';

export default {
  name: 'MissoesIndex',
  components: { MissoesList },
  data: () => ({
    missoes
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
    this.abas = missoes.map((e) => ({
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
      inner: 'Missões'
    }
  }
};
</script>
