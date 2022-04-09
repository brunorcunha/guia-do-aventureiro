<template>
  <div>
    <v-tabs-items v-model="tab" touchless>
      <v-tab-item>
        <BooksList />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { sync } from 'vuex-pathify';
import BooksList from '@/views/Books/List';

export default {
  name: 'BooksIndex',
  components: { BooksList },
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
    this.abas = [{ nome: 'Livros', icon: 'bi-list-stars' }];
    this.tab = 0;
  },
  beforeDestroy() {
    this.abas = [];
  },
  head: {
    title: {
      inner: 'Livros'
    }
  }
};
</script>
