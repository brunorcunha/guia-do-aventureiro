<template>
  <div>
    <v-tabs-items v-model="tab" touchless>
      <v-tab-item>
        <EmotesList />
      </v-tab-item>

      <v-tab-item>
        <EmotesInfo />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { sync } from 'vuex-pathify';
import EmotesList from '@/views/Emotes/List';
import EmotesInfo from '@/views/Emotes/Info';

export default {
  name: 'EmotesIndex',
  components: { EmotesList, EmotesInfo },
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
      { nome: 'Emotes', icon: 'bi-list-stars' },
      { nome: 'Informações', icon: 'bi-info-circle' }
    ];
    this.tab = 0;
  },
  beforeDestroy() {
    this.abas = [];
  },
  head: {
    title: {
      inner: 'Emotes'
    }
  }
};
</script>
