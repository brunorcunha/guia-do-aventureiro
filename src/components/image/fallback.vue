<template>
  <v-img v-bind="$attrs" :src="srcComputed" alt="" @error="failed = true" />
</template>

<script>
export default {
  name: 'ImageFallback',
  props: {
    src: { type: String, default: null }
  },
  data: () => ({
    failed: false
  }),
  computed: {
    srcComputed() {
      return this.failed ? '/img/erro.png' : this.src;
    }
  }
};
</script>
