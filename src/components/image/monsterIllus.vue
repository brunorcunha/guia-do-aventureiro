<template>
  <div class="d-inline-block monsterIllus mr-n10">
    <v-img :src="`${$baseURL}/monsterIllustrations/${monster.gfx}.png`" width="132" height="41" alt="">
      <template #placeholder>
        <img :src="`${$baseURL}/monsterIllustrations/default.png`" alt="" />
      </template>
    </v-img>
  </div>
</template>

<script>
export default {
  name: 'MonsterIllus',
  props: {
    monster: { type: Object, default: null }
  }
};
</script>
