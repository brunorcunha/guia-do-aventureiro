<template>
  <div class="d-inline-block dungeonIllus ml-n10 mr-n2">
    <v-img contain :src="`${$baseURL}/bossIllustrations/${dungeon.id}.png`" width="193" height="96" alt="">
      <template #placeholder>
        <img :src="`${$baseURL}/bossIllustrations/default.png`" alt="" width="193" height="96" />
      </template>
    </v-img>
  </div>
</template>

<script>
export default {
  name: 'DungeonIllus',
  props: {
    dungeon: { type: Object, default: null }
  }
};
</script>
