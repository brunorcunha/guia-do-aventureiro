<template>
  <div v-if="monster">
    <v-divider />
    <v-img src="@/assets/bg.jpg" height="200">
      <div class="fill-height" style="position: relative">
        <v-toolbar dense color="transparent" class="flex-grow-0" flat>
          <v-btn icon dark @click="fechar">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-spacer />
          <v-btn icon dark @click="abrirExterno">
            <v-icon>bi-box-arrow-up-right</v-icon>
          </v-btn>
        </v-toolbar>

        <div id="painelBG" class="d-flex align-center justify-center pt-2 flex-grow-1">
          <ImageFallback
            :vimg="false"
            :src="[
              `https://static.ankama.com/wakfu/portal/game/monster/200/${monster.gfx}.png`,
              `https://github.com/brunorcunha/discord-wakfu/raw/main/assets/monster/png/${monster.id}.png`,
              `${$baseURL}/npc/default.png`
            ]"
          >
            <img :src="`${$baseURL}/npc/default.png`" alt="" />
          </ImageFallback>
        </div>
      </div>
    </v-img>

    <v-divider />

    <div class="px-6 py-5" style="position: relative">
      <v-btn v-if="webShareApiSupported" color="primary" class="mt-n2" fab top right absolute @click="share">
        <v-icon>bi-share</v-icon>
      </v-btn>

      <div class="d-flex align-center">
        <img
          :src="`https://github.com/brunorcunha/discord-wakfu/raw/main/assets/monstersFamily/${monster.family_id}.png`"
          alt=""
          class="ml-n2 mr-2"
          width="32"
          height="32"
          @error="$event.target.src = '/img/erro.png'"
        />
        <h1 class="text-h5 mr-2">{{ monster.name }}</h1>
      </div>
      <h2 class="body-1 font-weight-light ml-8">
        Nível {{ monster.level_min }}
        <template v-if="monster.level_max">à {{ monster.level_max }}</template>
      </h2>
      <div class="ml-8">
        <h2 v-if="monster.arch" class="body-1 font-weight-light rarity-2--text">Arquimonstro</h2>
        <h2 v-if="monster.boss" class="body-1 font-weight-light rarity-3--text">Chefe de Calabouço</h2>
        <h2 v-if="monster.horda" class="body-1 font-weight-light rarity-1--text">Horda Ambiental</h2>
        <h2 v-if="monster.ub" class="body-1 font-weight-light rarity-6--text">Chefe Supremo</h2>

        <v-chip v-if="monster.capture" small label outlined color="green" class="mt-1">
          <img src="@/assets/icon_can_capture.png" class="mr-2" />
          Capturável
        </v-chip>
      </div>

      <div v-if="!!(monster.local || []).length" class="mt-4">
        <h3 class="text-h6">Localização</h3>
        <div v-for="(local, i) in localizacao" :key="i + local">
          <a class="d-flex align-center" @click="$router.push(`/territorio/${local.id}`)">
            <img
              :src="`https://github.com/brunorcunha/discord-wakfu/raw/main/assets/emoji/loc.png`"
              alt=""
              width="32"
              height="32"
            />
            <h1 class="body-2">{{ local.name }}</h1>
          </a>
        </div>
      </div>

      <v-alert v-if="monster.arch" text dense border="left" type="info" class="mt-4">
        Frequência de aparecimento: <br />
        {{ frequenciaAparecimento }}
      </v-alert>

      <template v-if="(monster.collects || []).length > 0">
        <h3 class="text-h6 mt-4">Colheitas</h3>
        <Colheitas :colheitas="monster.collects" />
      </template>

      <div v-if="(dungeons || []).length > 0" class="mb-6 mt-2 mx-n2">
        <div class="d-flex align-center mb-2">
          <img src="@/assets/dungeon.png" class="mr-2" alt="" />
          <h2 v-if="dungeons.length > 1" class="text-h6 font-weight-light">Calabouços (Dungeons)</h2>
          <h2 v-else class="text-h6 font-weight-light">Calabouço (Dungeon)</h2>
          <v-spacer />
        </div>

        <v-list-item v-for="dungeon in dungeons" :key="dungeon.id" @click="openDungeon(dungeon)">
          <dungeon-illus :dungeon="dungeon" />
          <v-list-item-content style="z-index: 1">
            <v-list-item-title>{{ dungeon.name }}</v-list-item-title>
            <v-list-item-subtitle>Nível {{ dungeon.lvl }}</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </div>

      <template v-if="(monster.drops || []).length > 0">
        <h3 class="text-h6 mt-4">Drops</h3>
        <Drops :drops="monster.drops" />
      </template>
    </div>
  </div>
</template>

<script>
import monsters from '@/models/monsters';
import dungeonsModel from '@/models/dungeons';
import territories from '@/models/territories';
import Drops from '@/components/modules/drops';
import Colheitas from '@/components/modules/colheitas';
import DungeonIllus from '@/components/image/dungeonIllus';
import ImageFallback from '@/components/image/fallback';

export default {
  name: 'Monster',
  components: { Drops, Colheitas, DungeonIllus, ImageFallback },
  data: () => ({
    dialog: true,
    monster: null,
    fromRoute: null
  }),
  computed: {
    id() {
      return this.$route.params.id ? parseInt(this.$route.params.id) : null;
    },
    frequenciaAparecimento() {
      if (!this.monster) return null;
      if (this.monster.level_min < 60) return 'Toda hora';
      else if (this.monster.level_min < 145) return 'A cada 2h30';
      else return 'A cada 4 horas';
    },
    localizacao() {
      if (!this.monster.local) return null;
      return territories.filter((e) => this.monster.local.includes(e.id));
    },
    dungeons() {
      if (!this.monster.boss && !this.monster.ub) return null;
      return dungeonsModel.filter((e) => e.boss_family === this.monster.family_id);
    },
    webShareApiSupported() {
      if (process.browser) return !!navigator.share;
      return false;
    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.fromRoute = from;
    });
  },
  mounted() {
    this.monster = monsters.find((e) => e.id === this.id);
    this.$emit('updateHead');
  },
  methods: {
    share() {
      window.navigator.share({
        url: `https://guiawakfu.netlify.app/monstro/${this.monster.id}`
      });
    },
    fechar() {
      if (!this.fromRoute?.name) {
        this.$router.push('/');
      } else {
        this.$router.back();
      }
    },
    openDungeon(dungeon) {
      this.$router.push(`/calabouco/${dungeon.id}`);
    },
    abrirExterno() {
      window.open(`https://www.wakfu.com/pt/mmorpg/enciclopedia/monstros/${this.monster.id}-wakfu`);
    }
  },
  head: {
    title: function () {
      return {
        inner: this.monster?.name
      };
    }
  }
};
</script>

<style scoped></style>
