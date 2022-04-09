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
            <v-list-item-subtitle> {{ item.skill.name }} (nível {{ item.lvl }}) </v-list-item-subtitle>
          </v-list-item-content>

          <v-list-item-action v-if="item.morto !== undefined" class="my-1">
            <v-tooltip v-if="item.morto === true" bottom>
              <template #activator="{ on }">
                <img :src="`${$baseURL}/static/dead.png`" alt="" height="40" v-on="on" />
              </template>
              <span>Colheita no cadáver</span>
            </v-tooltip>
            <v-tooltip v-else bottom>
              <template #activator="{ on }">
                <img :src="`${$baseURL}/static/coracao.png`" alt="" v-on="on" />
              </template>
              <span>Colheita no alvo vivo</span>
            </v-tooltip>
          </v-list-item-action>
        </v-list-item>

        <v-divider :key="`d${index}`" />
      </template>
    </v-list>
  </v-card>
</template>

<script>
import craftsModel from '@/models/crafts.json';
import itemsModel from '@/models/items';

export default {
  name: 'Colheitas',
  props: {
    colheitas: { type: Array, default: () => [] }
  },
  data: () => ({
    baseURL: 'https://www.wakfu.com/pt/mmorpg/enciclopedia/armaduras/'
  }),
  computed: {
    items() {
      if (!this.colheitas) return [];
      return this.colheitas.map((e) => ({
        ...e,
        item: itemsModel.find((item) => item.id === e.item),
        skill: craftsModel.find((f) => f.id === e.skill)
      }));
    }
  }
};
</script>
