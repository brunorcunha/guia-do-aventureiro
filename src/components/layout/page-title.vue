<template>
  <div class="d-flex align-center justify-center">
    <h1 id="title">
      <slot />
    </h1>
  </div>
</template>

<script>
import fitty from 'fitty';

export default {
  name: 'PageTitle',
  created() {
    this.init();
  },
  methods: {
    init() {
      document.fonts.ready.then(() => {
        fitty('#title', { maxSize: 70, multiLine: false });
      });
    }
  }
};
</script>
