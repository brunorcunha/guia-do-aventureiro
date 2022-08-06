<template>
  <div v-if="dungeon">
    <v-divider />
    <v-img src="@/assets/bg.jpg" height="200">
      <div class="fill-height" style="position: relative">
        <v-toolbar dense color="transparent" class="flex-grow-0" flat>
          <v-btn icon dark @click="fechar">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
        </v-toolbar>

        <div id="painelBG" class="d-flex justify-center flex-grow-1 align-end">
          <img
            :src="`${$baseURL}/bossIllustrations/${dungeon.id}.png`"
            alt=""
            @error="$event.target.src = `${$baseURL}/bossIllustrations/default.png`"
          />
        </div>
      </div>
    </v-img>

    <v-divider />

    <div class="px-6 py-5" style="position: relative">
      <v-btn v-if="webShareApiSupported" color="primary" class="mt-n2" fab top right absolute @click="share">
        <v-icon>bi-share</v-icon>
      </v-btn>

      <div>
        <div class="d-flex align-center">
          <img src="@/assets/dungeon.png" class="mr-2" alt="" />
          <h1 class="text-h5">{{ dungeon.name }}</h1>
        </div>
        <h2 v-if="dungeon.lvl" class="body-1 font-weight-light ml-11">Nível {{ dungeon.lvl }}</h2>

        <div v-if="localizacao.length" class="mt-4">
          <h2 class="text-h6">Localização</h2>
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

        <div v-if="bosses.length" class="mt-4">
          <h2 class="text-h6">{{ bosses.length > 1 ? 'Chefes' : 'Chefe' }}</h2>
          <v-card outlined rounded="lg" class="mb-4">
            <v-list subheader dense>
              <template v-for="monster in bosses">
                <v-list-item :key="monster.id" :to="`/monstro/${monster.id}`" class="pl-0">
                  <monster-illus :monster="monster" />
                  <v-list-item-content class="py-0" style="z-index: 1">
                    <v-list-item-title>{{ monster.name }}</v-list-item-title>
                    <v-list-item-subtitle>
                      Nível {{ monster.minLvl }}
                      <template v-if="monster.maxLvl"> à {{ monster.maxLvl }}</template>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-list-item>

                <v-divider :key="`d${monster.id}`" />
              </template>
            </v-list>
          </v-card>
        </div>

        <template v-if="crupie">
          <h2 class="text-h6">Crupiê</h2>

          <v-card outlined rounded="lg" class="mb-4">
            <v-list subheader>
              <v-list-item :to="`/crupie/${crupie.id}`">
                <v-list-item-avatar tile size="64" class="my-1">
                  <img :src="`${$baseURL}/static/crupie.png`" alt="" />
                </v-list-item-avatar>
                <v-list-item-content class="py-0" style="z-index: 1">
                  <v-list-item-title>{{ crupie.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>
              <v-divider />
            </v-list>
          </v-card>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import monsters from '@/models/monsters';
import territoriesModel from '@/models/territories';
import dungeonsModel from '@/models/dungeons';
import exchangesModel from '@/models/exchanges';
import MonsterIllus from '@/components/image/monsterIllus';

export default {
  name: 'Dungeon',
  components: { MonsterIllus },
  data: () => ({
    dungeon: null,
    fromRoute: null
  }),
  computed: {
    id() {
      return this.$route.params.id ? parseInt(this.$route.params.id) : null;
    },
    webShareApiSupported() {
      if (process.browser) return !!navigator.share;
      return false;
    },
    localizacao() {
      return territoriesModel.filter((e) => e.id === this.dungeon.idTerritory);
    },
    bosses() {
      return monsters.filter((m) => (m.isBoss || m.isUb) && m.idFamily === this.dungeon.idBossFamily);
    },
    crupie() {
      if (!this.dungeon.idCrupie) return null;
      return exchangesModel.find((e) => e.id === this.dungeon.idCrupie);
    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.fromRoute = from;
    });
  },
  mounted() {
    this.dungeon = JSON.parse(JSON.stringify(dungeonsModel.find((e) => e.id === this.id)));
    this.$emit('updateHead');
  },
  methods: {
    share() {
      window.navigator.share({
        url: `https://guiawakfu.netlify.app/calabouco/${this.dungeon.id}`
      });
    },
    fechar() {
      if (!this.fromRoute?.name) {
        this.$router.push('/');
      } else {
        this.$router.back();
      }
    }
  },
  head: {
    title: function () {
      return {
        inner: this.dungeon?.name
      };
    }
  }
};
</script>
