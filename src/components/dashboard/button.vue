<template>
  <div v-ripple class="fill-height d-flex flex-column align-center" @click="$router.push('/arquis')">
    <v-card outlined elevation="6" color="accent" class="mb-1 pointer" rounded="xl" width="70" height="70">
      <div class="d-flex align-center justify-center fill-height" style="line-height: 0">
        <img src="@/assets/icon_17.png" alt="" style="display: block" />
      </div>
    </v-card>
    <div class="caption text-center" style="line-height: 12px">Arquis</div>
  </div>
</template>

<script>
export default {
  name: 'ButtonApp'
};
</script>
