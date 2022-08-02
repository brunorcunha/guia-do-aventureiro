<template>
  <v-card v-if="crupie" outlined rounded="lg" class="mb-1 mt-4">
    <v-card-title class="font-weight-light secondary py-0 white--text">
      <span class="text-truncate">{{ crupie.name }}</span>
    </v-card-title>
    <v-list subheader dense>
      <template v-for="(exchange, index) in crupie.exchanges">
        <v-list-item v-if="exchange.result.items" :key="index" :to="`/item/${exchange.result.items[0].id}`">
          <v-list-item-avatar
            v-for="item in (exchange.result || {}).items"
            :key="item.id"
            tile
            size="64"
            class="my-1 mr-4"
          >
            <img :src="`${$baseURL}/items/${item.item.gfx}.png`" alt="" />
          </v-list-item-avatar>

          <v-list-item-content class="py-0" style="z-index: 1">
            <v-list-item-title
              v-for="item in (exchange.result || {}).items"
              :key="item.id"
              :class="$itemRarityClassText(item.item) + ' d-flex align-center'"
            >
              {{ item.item.name }}
            </v-list-item-title>
            <v-list-item-subtitle v-if="(exchange.cost || {}).kamas" class="d-flex align-center font-weight-light">
              <img
                src="https://raw.githubusercontent.com/brunorcunha/discord-wakfu/main/assets/kamaIcon.png"
                alt=""
                class="mr-1"
              />
              {{ exchange.cost.kamas | niceNumber }} Kamas
            </v-list-item-subtitle>
            <v-list-item-subtitle v-if="(exchange.cost || {}).orbs" class="d-flex align-center font-weight-light">
              <img src="/img/gorbs.png" alt="" class="mr-1" />
              {{ exchange.cost.orbs | niceNumber }}x Orbes de Glória
            </v-list-item-subtitle>
            <v-list-item-subtitle
              v-for="item in (exchange.cost || {}).items"
              :key="item.id"
              class="d-flex align-center font-weight-light"
            >
              <img :src="`${$baseURL}/items/${item.item.gfx}.png`" height="24" alt="" class="mr-1" />
              {{ item.qty }}x
              <span :class="$itemRarityClassText(item.item) + ' ml-1'">{{ item.item.name }}</span>
            </v-list-item-subtitle>
            <v-list-item-subtitle class="caption">{{ exchange.criteria }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider :key="`d${index}`" />
      </template>
    </v-list>
  </v-card>
</template>

<script>
import exchangesModel from '@/models/exchanges';
import itemsModel from '@/models/items';
import { niceNumber } from '@/utils';

export default {
  name: 'Crupie',
  filters: { niceNumber },
  props: {
    id: { type: [String, Number], default: null }
  },
  data: () => ({
    baseURL: 'https://www.wakfu.com/pt/mmorpg/enciclopedia/armaduras/'
  }),
  computed: {
    crupie() {
      if (!this.id) return null;
      const exchange = exchangesModel.find((e) => e.id === this.id);
      return {
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
                        item: itemsModel.find((item) => item.id === i.id)
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
                        item: itemsModel.find((item) => item.id === i.id)
                      }))
                    : undefined
                }
              : undefined
          }))
          .sort(
            (a, b) =>
              a.cost?.kamas - b.cost?.kamas ||
              a.cost?.orbs - b.cost?.orbs ||
              (a.cost.items || []).reduce((ac, item) => Math.min(ac, item.qty), 99999) -
                (b.cost.items || []).reduce((ac, item) => Math.min(ac, item.qty), 99999)
          )
      };
    }
  }
};
</script>
