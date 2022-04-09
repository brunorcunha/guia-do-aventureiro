<template>
  <Tooltip :label="label">
    <img :src="img" alt="" :height="height" class="mr-1" @click.stop="link ? $router.push(link) : null" />
  </Tooltip>
</template>

<script>
import { niceNumber } from '@/utils';
import items from '@/models/items';
import emotes from '@/models/emotes';
import titulos from '@/models/titulos';
import zaaps from '@/models/zaaps';
import Tooltip from '../layout/tooltip';

export default {
  name: 'Reward',
  components: { Tooltip },
  filters: { niceNumber },
  props: {
    reward: { type: Object, default: () => ({}) }
  },
  data: () => ({
    height: 24
  }),
  computed: {
    item() {
      if (!this.reward.item) return null;
      return items.find((e) => e.id === this.reward.item[0]);
    },
    emote() {
      if (!this.reward.emote) return null;
      return emotes.find((e) => e.id === this.reward.emote);
    },
    titulo() {
      if (!this.reward.titulo) return null;
      return titulos.find((e) => e.id === this.reward.titulo);
    },
    zaap() {
      if (!this.reward.zaap) return null;
      return zaaps[this.reward.zaap];
    },
    label() {
      if (this.reward.titulo) return `Título: ${this.titulo?.name}`;
      else if (this.reward.poi) return 'Marcador de Mapa';
      else if (this.reward.item) return `${this.reward.item[1]}x ${this.item.name}`;
      else if (this.reward.emote) return this.emote.name;
      else if (this.reward.xp) return `${this.$options.filters.niceNumber(this.reward.xp)} xp`;
      else if (this.reward.kamas) return `${this.$options.filters.niceNumber(this.reward.kamas)} kamas`;
      else if (this.reward.almanax) return 'Bênção do Almanax';
      else if (this.reward.guild) return `${this.reward.guild} Pontos de Guilda`;
      else if (this.reward.zaap) return this.zaap;
      else if (this.reward.spell) return 'Feitiço';
      return '';
    },
    img() {
      const base = process.env.VUE_APP_BASE_URL;
      if (this.reward.titulo) return `${base}/rewards/2.png`;
      else if (this.reward.poi) return `${base}/poi/${this.reward.poi}.png`;
      else if (this.reward.item) return `${base}/items/${this.item.gfx}.png`;
      else if (this.reward.emote) return `${base}/emotes/${this.reward.emote}.png`;
      else if (this.reward.xp) return `${base}/rewards/6.png`;
      else if (this.reward.kamas) return `${base}/rewards/11.png`;
      else if (this.reward.almanax) return `${base}/rewards/9.png`;
      else if (this.reward.guild) return `${base}/rewards/12.png`;
      else if (this.reward.zaap) return `${base}/rewards/15.png`;
      else if (this.reward.spell) return `${base}/spells/${this.reward.spell}.png`;
      return '';
    },
    link() {
      if (this.reward.item) return `/item/${this.item.id}`;
      else if (this.reward.titulo) return `/titulo/${this.reward.titulo}`;
      else if (this.reward.emote) return `/emote/${this.emote.id}`;
      return null;
    }
  }
};
</script>
