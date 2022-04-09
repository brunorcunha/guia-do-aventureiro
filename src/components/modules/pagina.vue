<template>
  <div v-html="pagina" />
</template>

<script>
export default {
  name: 'Pagina',
  props: {
    value: { type: String, default: '' }
  },
  computed: {
    pagina() {
      return this.value
        .replaceAll('[ #icon', '[#icon')
        .replaceAll(' :center', ':center')
        .replace(
          /\[#icon\s*(\d+)([a-z:]*)\]/g,
          (a, n1) =>
            `<div class="mt-2"><img src="${this.$baseURL}/text/${n1}.png" alt="" style="max-width:100%" /></div>`
        );
    }
  }
};
</script>
