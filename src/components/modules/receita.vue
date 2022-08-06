<template>
  <v-card v-if="receitaCompleta" outlined rounded="lg" class="mb-4">
    <v-card-text class="py-2">
      <div class="body-1 mb-1 cyan--text font-weight-bold">
        {{ receitaCompleta.craft.name }} ({{ receitaCompleta.lvl }})
      </div>
      <div
        v-for="ingred in receitaCompleta.ingredients"
        :key="ingred.id"
        v-ripple
        class="body-2 d-flex align-center pointer mb-1"
        @click="$router.push(`/item/${ingred.id}`)"
      >
        <img :src="`${$baseURL}/items/${ingred.item.gfx}.png`" alt="" height="24" class="mx-1" />
        {{ ingred.qnt }}x
        <span :class="`${$itemRarityClassText(ingred.item)} ml-2`">
          {{ ingred.item.name }}
        </span>
      </div>
    </v-card-text>
  </v-card>
</template>

<script>
import itemsModel from '@/models/items';
import craftsModel from '@/models/crafts';

export default {
  name: 'Receita',
  props: {
    receita: { type: Object, default: null }
  },
  data: () => ({
    baseURL: 'https://www.wakfu.com/pt/mmorpg/enciclopedia/armaduras/'
  }),
  computed: {
    receitaCompleta() {
      if (!this.receita) return null;
      return {
        ...this.receita,
        craft: craftsModel.find((e) => e.id === this.receita.idCraft),
        result: {
          ...this.receita.result,
          item: itemsModel.find((e) => e.id === this.receita.result.id)
        },
        ingredients: this.receita.ingredients.map((e) => ({
          ...e,
          item: itemsModel.find((i) => i.id === e.id)
        }))
      };
    }
  }
};
</script>
