<template>
  <div>
    <div class="pa-2">
      <v-text-field
        v-model="search"
        outlined
        dense
        hide-details
        clearable
        prepend-inner-icon="mdi-magnify"
        label="Pesquisar"
      />
    </div>

    <v-divider />

    <div :style="`overflow-y: scroll; height: ${listHeight}px`">
      <Missoes :categoria="value" root :search="search" />
    </div>
  </div>
</template>

<script>
import { sync } from 'vuex-pathify';
import Missoes from '@/components/modules/missoes';

export default {
  name: 'ConquistasList',
  components: { Missoes },
  props: {
    value: { type: Object, default: null }
  },
  data: () => ({
    search: ''
  }),
  computed: {
    tab: sync('bottomNav/tab'),
    listHeight() {
      const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      if (this.$vuetify.breakpoint.mobile) {
        return height - 168;
      }
      return height - 121;
    }
  }
};
</script>
