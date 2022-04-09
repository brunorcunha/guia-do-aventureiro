<template>
  <div>
    <v-tabs-items v-model="tab" touchless>
      <v-tab-item>
        <LocationsList />
      </v-tab-item>

      <v-tab-item>
        <LocationsInfo />
      </v-tab-item>
    </v-tabs-items>
  </div>
</template>

<script>
import { sync } from 'vuex-pathify';
import LocationsList from '@/views/Locations/List';
import LocationsInfo from '@/views/Locations/Info';

export default {
  name: 'LocationsIndex',
  components: { LocationsList, LocationsInfo },
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
    this.abas = [{ nome: 'Territórios', icon: 'bi-list-stars' }];
    this.tab = 0;
  },
  beforeDestroy() {
    this.abas = [];
  },
  head: {
    title: {
      inner: 'Territórios'
    }
  }
};
</script>
