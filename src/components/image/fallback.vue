<template>
  <v-img v-if="vimg" v-bind="$attrs" :src="srcAtual" alt="" contain>
    <template #placeholder>
      <slot>
        <img :src="`${$baseURL}/static/erro2.png`" alt="" />
      </slot>
    </template>
  </v-img>
  <img v-else v-bind="$attrs" :src="srcAtual" alt="" />
</template>

<script>
export default {
  name: 'ImageFallback',
  props: {
    src: { type: [Array, String], default: null },
    vimg: { type: Boolean, default: true }
  },
  data: () => ({
    index: 0,
    srcAtual: null
  }),
  computed: {
    srcTratado() {
      if (!this.src) return [];
      if (typeof this.src === 'string' || this.src instanceof String) return [this.src];
      return this.src;
    }
  },
  mounted() {
    this.definirRender();
  },
  methods: {
    async definirRender() {
      if (!this.srcTratado[this.index]) {
        this.srcAtual = '/img/erro.png';
        return;
      }
      try {
        this.srcAtual = await this.testImage(this.srcTratado[this.index]);
      } catch (e) {
        this.index++;
        await this.definirRender();
      }
    },
    testImage(src) {
      return new Promise((resolve, reject) => {
        const img = new Image();
        img.onload = () => resolve(src);
        img.onerror = () => reject(reject);
        img.src = src;
      });
    }
  }
};
</script>
