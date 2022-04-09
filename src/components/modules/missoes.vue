<template>
  <div v-if="root">
    <template v-if="categoria.children && categoria.children.length > 0">
      <missoes v-for="child in categoria.children" :key="child.id" :categoria="child" />
    </template>
    <v-list v-else dense subheader class="pb-0">
      <template v-for="(item, index) in categoria.conquistas">
        <Missao :key="index" :item="item" />
        <v-divider :key="`c${index}}`" />
      </template>
    </v-list>
  </div>

  <v-card v-else-if="categoria" outlined class="mb-1 catAchiev">
    <v-card-title v-ripple="{ class: 'primary--text' }" class="py-1 pointer" @click="open = !open">
      {{ categoria.name || 'Missão' }}
    </v-card-title>

    <v-divider v-if="open" />

    <v-expand-transition>
      <v-list v-if="open" dense subheader class="pb-0">
        <template v-for="(item, index) in categoria.conquistas">
          <Missao :key="index" :item="item" />
          <v-divider :key="`c${index}`" />
        </template>
      </v-list>
    </v-expand-transition>

    <v-expand-transition>
      <div v-if="open && categoria.children && categoria.children.length" class="ma-1">
        <missoes v-for="child in categoria.children" :key="child.id" :categoria="child" />
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
import Missao from './missao';

export default {
  name: 'Missoes',
  components: { Missao },
  props: {
    categoria: { type: Object, default: null },
    root: { type: Boolean, default: false },
    search: { type: String, default: null }
  },
  data: () => ({
    open: false
  })
};
</script>
