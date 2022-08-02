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

    <v-virtual-scroll :items="filteredList" :item-height="49" :height="listHeight">
      <template #default="{ item }">
        <v-list-item :key="item.id" color="primary" :to="`/territorio/${item.id}`">
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
            <v-list-item-subtitle v-if="false" class="mt-1" style="height: 24px">
              <v-chip v-if="!item.interior && item.boat" small label outlined color="#60E5EA" class="mr-1 px-2">
                <img src="@/assets/boat.png" class="mr-1" width="18" />
                Barco
              </v-chip>
              <v-chip
                v-if="!item.zaap && item.interior && item.boat"
                small
                label
                outlined
                color="#E19843"
                class="mr-1 px-2"
              >
                <img src="@/assets/train.png" class="mr-1" width="18" />
                Trem
              </v-chip>
              <v-chip v-if="item.zaap" small label outlined color="#07D3AB" class="mr-1 px-2">
                <img src="@/assets/zaap.png" class="mr-1" width="18" />
                Zaap
              </v-chip>
              <v-chip v-if="item.interior" small label outlined color="#C1C289" class="px-2">
                <img src="@/assets/interior.png" class="mr-1" width="18" />
                Interior
              </v-chip>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
      </template>
    </v-virtual-scroll>
  </div>
</template>

<script>
import territories from '@/models/territories';
import { sync } from 'vuex-pathify';
import { betweenLvls } from '@/utils';

export default {
  name: 'LocationsList',
  data: () => ({
    search: ''
  }),
  computed: {
    tab: sync('bottomNav/tab'),
    list() {
      return [
        ...territories.filter((e) => e.idProtector || (e.areas?.length && e.areas.some((f) => f.monsters?.length)))
      ].sort((a, b) => a.name.localeCompare(b.name));
    },
    filteredList() {
      if (!this.search) return this.list;
      const number = parseInt(this.search);
      if (!isNaN(number)) {
        return this.list.filter((e) => betweenLvls(number, e.minLvl, e.maxLvl));
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
