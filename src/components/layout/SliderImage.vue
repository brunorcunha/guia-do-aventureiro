<template>
  <div v-if="mostrar" class="mb-4 scrollimg d-flex justify-center">
    <img :src="src" alt="" @error="error" />
  </div>
</template>

<script>
export default {
  name: 'SliderImage',
  props: {
    src: { type: String, default: null }
  },
  data: () => ({
    mostrar: true
  }),
  methods: {
    error() {
      this.mostrar = false;
    }
  }
};
</script>
