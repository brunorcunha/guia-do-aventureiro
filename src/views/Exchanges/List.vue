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

    <v-virtual-scroll :items="filteredList" :item-height="72" :height="listHeight">
      <template #default="{ item }">
        <v-list-item :key="item.id" color="primary" dense :to="`/crupie/${item.id}`">
          <v-list-item-avatar tile size="64" class="my-1">
            <img :src="`${$baseURL}/static/crupie.png`" alt="" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
      </template>
    </v-virtual-scroll>
  </div>
</template>

<script>
import exchangesModel from '@/models/exchanges';
import itemsModel from '@/models/items';
import { sync } from 'vuex-pathify';
import { niceNumber } from '@/utils';

export default {
  name: 'ExchangesList',
  filters: { niceNumber },
  data: () => ({
    search: '',
    baseURL: 'https://www.wakfu.com/pt/mmorpg/enciclopedia/armaduras/'
  }),
  computed: {
    tab: sync('bottomNav/tab'),
    exchanges() {
      return exchangesModel.map((exchange) => ({
        ...exchange,
        exchanges: exchange.exchanges
          .map((e) => ({
            ...e,
            cost: e.cost
              ? {
                  ...e.cost,
                  items: e.cost.items
                    ? e.cost.items.map((i) => ({
                        ...i,
                        item: itemsModel.find((item) => item.id === i.itemId)
                      }))
                    : undefined
                }
              : undefined,
            result: e.result
              ? {
                  ...e.result,
                  items: e.result.items
                    ? e.result.items.map((i) => ({
                        ...i,
                        item: itemsModel.find((item) => item.id === i.itemId)
                      }))
                    : undefined
                }
              : undefined
          }))
          .sort(
            (a, b) =>
              a.cost?.kamas - b.cost?.kamas ||
              a.cost?.orbs - b.cost?.orbs ||
              (a.cost.items || [{}])[0].item?.id - (b.cost.items || [{}])[0].item?.id ||
              (a.cost.items || [{}])[0].item?.lvl - (b.cost.items || [{}])[0].item?.lvl ||
              (a.cost.items || [{}])[0].qty - (b.cost.items || [{}])[0].qty
          )
      }));
    },
    list() {
      return this.exchanges;
    },
    filteredList() {
      if (!this.search) return this.list;
      const search = this.search.toUpperCase();
      return this.list.filter(
        (e) => (e.name || '').toUpperCase().includes(search) || (e.item?.name || '').toUpperCase().includes(search)
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
