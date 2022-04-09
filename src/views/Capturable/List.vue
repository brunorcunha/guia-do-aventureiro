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

    <v-virtual-scroll :items="filteredList" :item-height="62" :height="listHeight">
      <template #default="{ item }">
        <v-list-item :key="item.id" color="primary" :to="`/monstro/${item.id}`">
          <v-list-item-avatar tile>
            <ImageFallback
              contain
              :src="`https://github.com/brunorcunha/discord-wakfu/raw/main/assets/monster/png/${item.id}.png`"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title :class="$monsterRarityClassText(item)">{{ item.name }}</v-list-item-title>
            <v-list-item-subtitle>
              Nível {{ item.level_min }}
              <template v-if="item.level_max">à {{ item.level_max }}</template>
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
import ImageFallback from '@/components/image/fallback';
import { betweenLvls } from '@/utils';

export default {
  name: 'CapturableList',
  components: { ImageFallback },
  data: () => ({
    search: ''
  }),
  computed: {
    tab: sync('bottomNav/tab'),
    list() {
      return monsters.filter((e) => e.capture);
    },
    filteredList() {
      if (!this.search) return this.list;
      const number = parseInt(this.search);
      if (!isNaN(number)) {
        return this.list.filter((e) => betweenLvls(number, e.level_min, e.level_max));
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
