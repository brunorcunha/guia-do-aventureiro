<template>
  <v-container>
    <div class="d-flex align-center justify-center mb-10">
      <img src="@/assets/logo.png" width="69" height="65" alt="" />
      <div class="ml-2 titulo pt-1" style="width: 160px">Guia do Aventureiro</div>
    </div>

    <v-row class="mx-n2">
      <v-col cols="3">
        <ButtonApp />
      </v-col>
      <v-col cols="3"></v-col>
      <v-col cols="3"></v-col>
      <v-col cols="3"></v-col>

      <v-col cols="3"></v-col>
      <v-col cols="3"></v-col>
      <v-col cols="3"></v-col>
      <v-col cols="3"></v-col>

      <v-col cols="3"></v-col>
      <v-col cols="3"></v-col>
      <v-col cols="3"></v-col>
      <v-col cols="3"></v-col>

      <v-col cols="3"></v-col>
      <v-col cols="3"></v-col>
      <v-col cols="3"></v-col>
      <v-col cols="3"></v-col>
    </v-row>
  </v-container>
</template>

<script>
import ButtonApp from '@/components/dashboard/button';

export default {
  name: 'Home',
  components: { ButtonApp }
};
</script>
