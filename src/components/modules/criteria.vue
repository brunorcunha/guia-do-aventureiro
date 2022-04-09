<template>
  <v-card v-if="criterio" outlined color="grey darken-4" rounded="lg" class="mt-1">
    <ul class="caption grey--text text--lighten-1 py-1">
      <li v-for="item in listaCriterios" :key="item">{{ item }}</li>
    </ul>
  </v-card>
</template>

<script>
export default {
  name: 'Criteria',
  props: {
    criterio: { type: String, default: null }
  },
  computed: {
    listaCriterios() {
      if (!this.criterio) return [];
      return this.criterio.split(/[^a-zA-Z]and[^a-zA-Z]/).map((e) => this.formatCriterio(e.trim()));
    }
  },
  methods: {
    formatCriterio(str) {
      return str;
    }
  }
};
</script>
