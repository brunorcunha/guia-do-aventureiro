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

    <v-virtual-scroll :items="filteredList" :item-height="56" :height="listHeight">
      <template #default="{ item }">
        <v-list-item :key="item.id" color="primary" :to="`/item/${item.id}`">
          <v-list-item-avatar>
            <img :src="`${$baseURL}/items/${item.gfx}.png`" alt="" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title :class="$itemRarityClassText(item)">{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
      </template>
    </v-virtual-scroll>
  </div>
</template>

<script>
import items from '@/models/items';
import { sync } from 'vuex-pathify';
import { betweenLvls } from '@/utils';

export default {
  name: 'BooksList',
  data: () => ({
    search: ''
  }),
  computed: {
    tab: sync('bottomNav/tab'),
    list() {
      return items.filter((e) => e.type === 496);
    },
    filteredList() {
      if (!this.search) return this.list;
      const number = parseInt(this.search);
      if (!isNaN(number)) {
        return this.list.filter((e) => betweenLvls(number, e.level_min, e.level_max));
      }
      const search = this.search.toUpperCase();
      return this.list.filter((e) => e.name.toUpperCase().includes(search));
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
