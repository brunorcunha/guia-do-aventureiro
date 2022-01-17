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

    <v-virtual-scroll :items="archList" :item-height="62" :height="listHeight">
      <template #default="{ item }">
        <v-list-item :key="item.id" color="primary" @click="$monsterDialog.open(item)">
          <v-list-item-avatar tile>
            <ImageFallback
              contain
              :src="`https://github.com/brunorcunha/discord-wakfu/raw/main/assets/monster/png/${item.id}.png`"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ item.name['pt'] }}</v-list-item-title>
            <v-list-item-subtitle>Nível {{ item.level_min }} à {{ item.level_max }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
      </template>
    </v-virtual-scroll>
  </div>
</template>

<script>
import archs from '@/models/archs';
import { sync } from 'vuex-pathify';
import ImageFallback from '@/components/image/fallback';

export default {
  name: 'ArchsList',
  components: { ImageFallback },
  data: () => ({
    search: ''
  }),
  computed: {
    tab: sync('bottomNav/tab'),
    archList() {
      if (!this.search) return archs;
      const search = this.search.toUpperCase();
      return archs.filter((e) => e.name.pt.toUpperCase().includes(search));
    },
    listHeight() {
      const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      if (this.$vuetify.breakpoint.mobile) {
        return height - 169;
      }
      return height - 121;
    }
  },
  mounted() {
    this.$eventBus.$on('pesquisar-arch', this.pesquisarArch);
  },
  methods: {
    pesquisarArch(nome) {
      this.search = nome;
      this.tab = 0;
    }
  }
};
</script>
