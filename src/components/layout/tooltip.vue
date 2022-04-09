<template>
  <v-tooltip bottom v-bind="$attrs" transition="slide-y-transition">
    <template #activator="{ on }">
      <div class="d-inline-block" v-on="on">
        <slot />
      </div>
    </template>
    <span>{{ label }}</span>
  </v-tooltip>
</template>

<script>
export default {
  name: 'Tooltip',
  props: {
    label: { type: [String, Number], default: null }
  }
};
</script>
