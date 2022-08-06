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

    <v-virtual-scroll :items="filteredList" :item-height="41" :height="listHeight">
      <template #default="{ item }">
        <v-list-item :key="item.id" color="primary" dense :to="`/titulo/${item.id}`">
          <v-list-item-content class="py-0">
            <v-list-item-title>
              <img
                v-if="item.item"
                :src="`${$baseURL}/items/${item.item.gfx}.png`"
                height="18"
                alt=""
                class="mr-1"
                style="float: left"
              />
              <span class="body-2">{{ item.name }}</span>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
      </template>
    </v-virtual-scroll>
  </div>
</template>

<script>
import itemsModel from '@/models/items';
import titulosModel from '@/models/titulos';
import { sync } from 'vuex-pathify';

export default {
  name: 'TitulosList',
  data: () => ({
    search: ''
  }),
  computed: {
    tab: sync('bottomNav/tab'),
    list() {
      return titulosModel
        .map((e) => ({
          ...e,
          item: itemsModel.find((i) => i.id == e.id)
        }))
        .sort((a, b) => a.name.localeCompare(b.name));
    },
    filteredList() {
      if (!this.search) return this.list;
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
