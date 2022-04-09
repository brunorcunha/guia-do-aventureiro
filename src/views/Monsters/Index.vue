<template>
  <div>
    <v-tabs-items v-model="tab" touchless>
      <v-tab-item>
        <MonstersList />
      </v-tab-item>

      <v-tab-item>
        <MonstersInfo />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { sync } from 'vuex-pathify';
import MonstersList from '@/views/Monsters/List';
import MonstersInfo from '@/views/Monsters/Info';

export default {
  name: 'MonstersIndex',
  components: { MonstersList, MonstersInfo },
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
    this.abas = [{ nome: 'Monstros', icon: 'bi-list-stars' }];
    this.tab = 0;
  },
  beforeDestroy() {
    this.abas = [];
  },
  head: {
    title: {
      inner: 'Monstros'
    }
  }
};
</script>
