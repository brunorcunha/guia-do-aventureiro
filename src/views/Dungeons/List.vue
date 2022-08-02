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

    <v-virtual-scroll :items="filteredList" :item-height="92" :height="listHeight">
      <template #default="{ item }">
        <v-list-item :key="item.id" color="primary" :to="`/calabouco/${item.id}`">
          <dungeon-illus :dungeon="item" />
          <v-list-item-content style="z-index: 1">
            <v-list-item-title>{{ item.name }}</v-list-item-title>
            <v-list-item-subtitle>Nível {{ item.lvl }}</v-list-item-subtitle>
            <v-list-item-subtitle v-if="item.locate">{{ item.locate.name }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
      </template>
    </v-virtual-scroll>
  </div>
</template>

<script>
import dungeonsModel from '@/models/dungeons';
import territoriesModel from '@/models/territories';
import { sync } from 'vuex-pathify';
import { betweenLvls } from '@/utils';
import DungeonIllus from '@/components/image/dungeonIllus';

export default {
  name: 'DungeonsList',
  components: { DungeonIllus },
  data: () => ({
    search: ''
  }),
  computed: {
    tab: sync('bottomNav/tab'),
    list() {
      return dungeonsModel
        .map((e) => ({
          ...e,
          locate: territoriesModel.find((m) => m.id === e.territory)
        }))
        .sort((a, b) => a.lvl - b.lvl);
    },
    filteredList() {
      if (!this.search) return this.list;
      const number = parseInt(this.search);
      if (!isNaN(number)) {
        return this.list.filter((e) => betweenLvls(number, e.minLvl, 215));
      }
      const search = this.search.toUpperCase();
      return this.list.filter((e) => (e.name || '').toUpperCase().includes(search));
    },
    listHeight() {
      const height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      if (this.$vuetify.breakpoint.mobile) {
        return height - 169;
      }
      return height - 121;
    }
  }
};
</script>
