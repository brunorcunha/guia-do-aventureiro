<template>
  <div v-if="territory && id">
    <v-img src="@/assets/bg.jpg" height="200">
      <div class="fill-height" style="position: relative">
        <v-toolbar dense color="transparent" class="flex-grow-0" flat>
          <v-btn icon dark @click="$emit('back')">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
        </v-toolbar>

        <div id="painelBG" class="d-flex justify-center flex-grow-1 align-center pr-1">
          <img
            :src="`https://github.com/brunorcunha/discord-wakfu/raw/main/assets/areas/${id}.png`"
            alt=""
            style="width: 100%; max-width: 512px"
          />
        </div>
      </div>
    </v-img>
    <v-divider />
  </div>
</template>

<script>
export default {
  name: 'TerritoryBanner',
  props: {
    territory: { type: Number, default: null }
  },
  computed: {
    id() {
      switch (this.territory) {
        case 792:
          return 1;
        case 853:
          return 2;
        case 843:
          return 4;
        case 527:
        case 546:
          return 5;
        case 922:
        case 923:
          return 6;
        case 943:
          return 7;
        case 1071:
          return 8;
        case 1118:
        case 1124:
        case 1122:
        case 1120:
        case 1123:
        case 1119:
          return 9;
        case 1252:
          return 11;
        case 1264:
          return 12;
        case 1276:
          return 13;
        case 1134:
        case 1207:
          return 14;
        case 1208:
        case 1135:
          return 15;
        case 1136:
        case 1209:
          return 16;
        case 1137:
        case 1210:
          return 17;
        case 1298:
        case 1297:
        case 1295:
          return 18;
        case 1076:
          return 8;
      }
      return null;
    }
  }
};
</script>
