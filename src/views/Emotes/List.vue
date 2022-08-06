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

    <v-virtual-scroll :items="filteredList" :item-height="65" :height="listHeight">
      <template #default="{ item }">
        <v-list-item :key="item.id" color="primary" dense :to="`/emote/${item.id}`">
          <v-list-item-avatar tile size="64" class="my-0">
            <v-img content :src="`${$baseURL}/emotes/${item.id}.png`">
              <template #placeholder>
                <img src="/img/187.png" alt="" />
              </template>
            </v-img>
          </v-list-item-avatar>
          <v-list-item-content class="py-0">
            <v-list-item-title>
              <v-chip color="primary" label x-small class="mr-1 px-1">{{ item.cmd }}</v-chip>
              <span class="body-2">{{ item.name }}</span>
            </v-list-item-title>
            <v-list-item-subtitle v-if="item.item" class="d-flex align-center">
              <img :src="`${$baseURL}/items/${item.item.gfx}.png`" height="16" alt="" class="mr-1" />
              {{ item.item.name }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
      </template>
    </v-virtual-scroll>
  </div>
</template>

<script>
import emotesModel from '@/models/emotes';
import itemsModel from '@/models/items';
import { sync } from 'vuex-pathify';

export default {
  name: 'EmotesList',
  data: () => ({
    search: ''
  }),
  computed: {
    tab: sync('bottomNav/tab'),
    list() {
      return emotesModel.map((e) => ({
        ...e,
        item: itemsModel.find((i) => i.id == e.id)
      }));
    },
    filteredList() {
      if (!this.search) return this.list;
      const search = this.search.toUpperCase();
      return this.list.filter(
        (e) =>
          (e.name || '').toUpperCase().includes(search) ||
          (e.item?.name || '').toUpperCase().includes(search) ||
          (e.location || '').toUpperCase().includes(search)
      );
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
