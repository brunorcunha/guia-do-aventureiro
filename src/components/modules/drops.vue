<template>
  <v-card v-if="items" outlined rounded="lg" class="mb-1 mt-2">
    <v-list subheader dense>
      <template v-for="(item, index) in items">
        <v-list-item :key="index" :to="`/item/${item.item.id}`">
          <v-list-item-avatar tile class="my-1 mr-4">
            <img :src="`${$baseURL}/items/${item.item.gfx}.png`" alt="" />
          </v-list-item-avatar>

          <v-list-item-content class="py-0" style="z-index: 1">
            <v-list-item-title :class="$itemRarityClassText(item.item) + ' d-flex align-center'">
              {{ item.item.name }}
            </v-list-item-title>
            <v-list-item-subtitle> {{ item.rate }}% </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider :key="`d${index}`" />
      </template>
    </v-list>
  </v-card>
</template>

<script>
import itemsModel from '@/models/items';

export default {
  name: 'Drops',
  props: {
    drops: { type: Array, default: () => [] }
  },
  data: () => ({
    baseURL: 'https://www.wakfu.com/pt/mmorpg/enciclopedia/armaduras/'
  }),
  computed: {
    items() {
      if (!this.drops) return [];
      return this.drops
        .map((e) => ({
          item: itemsModel.find((item) => item.id === e.id),
          rate: e.rate
        }))
        .sort((a, b) => a.item.rarity - b.item.rarity || b.rate - a.rate);
    }
  }
};
</script>
