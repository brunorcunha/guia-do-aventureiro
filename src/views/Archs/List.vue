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

    <v-virtual-scroll :items="filteredList" :item-height="42" :height="listHeight">
      <template #default="{ item }">
        <v-list-item :key="item.id" color="primary" :to="`/monstro/${item.id}`" dense>
          <monster-illus :monster="item" />
          <v-list-item-content class="py-0" style="z-index: 1">
            <v-list-item-title :class="$monsterRarityClassText(item)">{{ item.name }}</v-list-item-title>
            <v-list-item-subtitle>
              Nível {{ item.minLvl }}
              <template v-if="item.level_max">à {{ item.maxLvl }}</template>
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        <v-divider />
      </template>
    </v-virtual-scroll>
  </div>
</template>

<script>
import monsters from '@/models/monsters';
import { sync } from 'vuex-pathify';
import { betweenLvls } from '@/utils';
import MonsterIllus from '@/components/image/monsterIllus';

export default {
  name: 'ArchsList',
  components: { MonsterIllus },
  data: () => ({
    search: ''
  }),
  computed: {
    tab: sync('bottomNav/tab'),
    list() {
      return monsters.filter((e) => e.isArch);
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
  },
  mounted() {
    this.$eventBus.$on('pesquisar-arch', this.pesquisarArch);
  },
  methods: {
    pesquisarArch(nome) {
      this.search = nome;
      this.tab = 0;
    }
  }
};
</script>
