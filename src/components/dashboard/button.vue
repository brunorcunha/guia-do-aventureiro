<template>
  <div v-ripple class="fill-height d-flex flex-column align-center" @click="goTo">
    <v-card outlined elevation="6" :color="bg" class="mb-1 pointer" rounded="xl" width="70" height="70">
      <div class="d-flex align-center justify-center fill-height" style="line-height: 0">
        <img :src="`/img/${iconName}.png`" alt="" style="display: block" :width="width" />
      </div>
    </v-card>
    <div class="caption text-center" style="line-height: 12px">{{ name }}</div>
  </div>
</template>

<script>
const randomInt = (minimum, maximum) => Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

export default {
  name: 'ButtonApp',
  props: {
    name: { type: String, default: null },
    path: { type: String, default: null },
    bg: { type: String, default: null },
    icon: { type: String, default: null },
    rand: { type: [String, Number], default: null },
    width: { type: [String, Number], default: 57 }
  },
  computed: {
    iconName() {
      return !this.rand ? this.icon : this.icon.replace('_1', `_${randomInt(1, this.rand)}`);
    }
  },
  methods: {
    goTo() {
      if (this.$route.path === this.path) return;
      this.$router.push(this.path);
    }
  }
};
</script>
