<template>
  <v-dialog v-model="dialog" scrollable :fullscreen="$vuetify.breakpoint.mobile" max-width="400">
    <v-card v-if="monster" rounded="lg" outlined :tile="$vuetify.breakpoint.mobile">
      <v-img src="@/assets/bg.jpg" height="200">
        <div class="fill-height" style="position: relative">
          <v-toolbar dense color="transparent" class="flex-grow-0" flat>
            <v-btn v-if="$vuetify.breakpoint.mobile" icon dark @click="dialog = false">
              <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            <v-spacer />
            <v-btn v-if="!$vuetify.breakpoint.mobile" icon dark @click="dialog = false">
              <v-icon>bi-x-lg</v-icon>
            </v-btn>
          </v-toolbar>

          <div id="painelBG" class="d-flex align-center justify-center pt-2 flex-grow-1">
            <img
              :src="`https://github.com/brunorcunha/discord-wakfu/raw/main/assets/monster/png/${monster.id}.png`"
              alt=""
              style="max-height: 200px"
              @error="$event.target.src = '/img/erro.png'"
            />
          </div>
        </div>
      </v-img>

      <v-divider />

      <v-card-text class="pt-4">
        <div class="d-flex align-center">
          <img
            :src="`https://github.com/brunorcunha/discord-wakfu/raw/main/assets/monstersFamily/${monster.family_id}.png`"
            alt=""
            class="ml-n2 mr-1"
            width="32"
            height="32"
            @error="$event.target.src = '/img/erro.png'"
          />
          <h1 class="text-h5">{{ monster.name.pt }}</h1>
        </div>
        <h2 class="body-1 font-weight-light ml-7">Nível {{ monster.level_min }} à {{ monster.level_max }}</h2>

        <div v-if="!!(monster.location || []).length" class="mt-4">
          <h3 class="body-1">Localização:</h3>
          <div v-for="(local, i) in monster.location" :key="i + local">
            <div class="d-flex align-center">
              <img
                :src="`https://github.com/brunorcunha/discord-wakfu/raw/main/assets/emoji/loc.png`"
                alt=""
                width="32"
                height="32"
              />
              <h1 class="body-2">{{ local }}</h1>
            </div>
          </div>
        </div>

        <v-alert v-if="monster.arch" text dense border="left" type="info" class="mt-4">
          Frequência de aparecimento: <br />
          {{ frequenciaAparecimento }}
        </v-alert>
      </v-card-text>

      <v-divider />

      <v-card-actions>
        <v-btn block text color="secondary" :href="urlOficial" target="_blank">
          Abrir na enciclopédia oficial
          <v-icon right>bi-box-arrow-up-right</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Monster',
  data: () => ({
    dialog: false,
    monster: null
  }),
  computed: {
    frequenciaAparecimento() {
      if (!this.monster) return null;
      if (this.monster.level_min < 60) return 'Toda hora';
      else if (this.monster.level_min < 145) return 'A cada 2h30';
      else return 'A cada 4 horas';
    },
    urlOficial() {
      return `https://www.wakfu.com/pt/mmorpg/enciclopedia/monstros/${this.monster.id}-wakfu`;
    }
  },
  methods: {
    open(monster) {
      this.monster = monster;
      this.dialog = true;
    }
  }
};
</script>

<style scoped></style>
