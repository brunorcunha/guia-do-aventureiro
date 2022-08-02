<template>
  <div v-if="territory">
    <v-divider />
    <TerritoryBanner :territory="territory.id" @back="fechar" />
    <v-card-text class="px-0 pt-4">
      <div class="px-4 px-lg-8">
        <div class="d-flex">
          <img
            :src="`https://github.com/brunorcunha/discord-wakfu/raw/main/assets/emoji/loc.png`"
            alt=""
            width="32"
            height="32"
          />
          <h1 class="text-h5">{{ territory.name }}</h1>
        </div>
        <h2 v-if="minLvl" class="body-1 font-weight-light ml-8">
          Nível {{ minLvl }}
          <template v-if="maxLvl">à {{ maxLvl }}</template>
        </h2>

        <div v-if="false" class="ml-8 mt-2 mb-6">
          <v-chip
            v-if="!territory.interior && territory.boat"
            label
            outlined
            color="#60E5EA"
            class="mb-1 mr-1 pl-1 pr-2"
          >
            <img src="@/assets/boat.png" class="mr-1" alt="" />
            Barco
          </v-chip>
          <v-chip
            v-if="!territory.zaap && territory.interior && territory.boat"
            label
            outlined
            color="#E19843"
            class="mb-1 mr-1 pl-1 pr-2"
          >
            <img src="@/assets/train.png" class="mr-1" alt="" />
            Trem
          </v-chip>
          <v-chip v-if="territory.zaap" label outlined color="#01EDCE" class="mb-1 mr-1 pl-1 pr-2">
            <img src="@/assets/zaap.png" class="mr-1" alt="" />
            Zaap
          </v-chip>
          <v-chip v-if="territory.interior" label outlined color="#C1C289" class="mb-1 pl-1 pr-2">
            <img src="@/assets/interior.png" class="mr-1" alt="" />
            Interior
          </v-chip>
        </div>

        <div v-if="(dungeons || []).length > 0" class="mb-8 mt-2">
          <div class="d-flex align-center mb-2">
            <img src="@/assets/dungeon.png" class="mr-2" alt="" />
            <h2 class="text-h5 font-weight-light">Calabouços (Dungeons)</h2>
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

        <div v-if="((territory || {}).areas || []).length > 0" class="mb-8">
          <div class="d-flex align-center mb-1">
            <img src="@/assets/protector.png" class="mr-2" alt="" />
            <h2 class="text-h5 font-weight-light">Áreas (Ambience Zones)</h2>
          </div>

          <div v-for="area in territory.areas" :key="area.id">
            <v-list-item v-if="area.protector" class="px-0 mt-4" :to="`/protector/${area.idProtector}`">
              <v-list-item-avatar tile size="64">
                <ImageFallback
                  v-if="area.protector"
                  :src="[
                    `${$baseURL}/interactiveDialog/protector${area.protector.gfx}.png`,
                    `${$baseURL}/static/protectors/${area.protector.gfx}_0.png`,
                    `${$baseURL}/interactiveDialog/default.png`
                  ]"
                >
                  <img :src="`${$baseURL}/interactiveDialog/default.png`" alt="" />
                </ImageFallback>
                <v-img v-else :src="`${$baseURL}/interactiveDialog/default.png`" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ area.name }}</v-list-item-title>
                <v-list-item-subtitle>
                  <template v-if="area.minLevel">Nível {{ area.minLevel }}</template>
                  <template v-if="area.maxLevel"> à {{ area.maxLevel }}</template>
                </v-list-item-subtitle>
                <v-list-item-subtitle v-if="area.protector">
                  {{ area.protector.name }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <template v-if="(area.monsters || {}).length">
              <v-card v-for="family in area.monsters" :key="family.id" outlined rounded="lg" class="mb-1">
                <v-card-title class="font-weight-light secondary pa-0 white--text">
                  <img :src="`${$baseURL}/monstersFamily/${family.id}.png`" class="ml-4 mr-2" alt="" />
                  {{ family.family }}
                </v-card-title>
                <v-list subheader dense>
                  <template v-for="monster in family.monsters">
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

                  <v-list-item v-if="family.horda" :to="`/monstro/${family.horda.id}`" class="pl-0">
                    <monster-illus :monster="family.horda" />
                    <v-list-item-content class="py-0" style="z-index: 1">
                      <v-list-item-title :class="$monsterRarityClassText(family.horda)">
                        {{ family.horda.name }}
                      </v-list-item-title>
                      <v-list-item-subtitle>
                        Nível {{ family.horda.minLvl }}
                        <template v-if="family.horda.maxLvl">à {{ family.horda.maxLvl }}</template>
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider v-if="family.horda" />

                  <v-list-item v-if="family.arch" :to="`/monstro/${family.arch.id}`" class="pl-0">
                    <monster-illus :monster="family.arch" />
                    <v-list-item-content class="py-0" style="z-index: 1">
                      <v-list-item-title :class="$monsterRarityClassText(family.arch)">
                        {{ family.arch.name }}
                      </v-list-item-title>
                      <v-list-item-subtitle>
                        Nível {{ family.arch.maxLvl }} à {{ family.arch.maxLvl }}
                      </v-list-item-subtitle>
                    </v-list-item-content>
                  </v-list-item>

                  <v-divider v-if="family.arch" />
                </v-list>
              </v-card>
            </template>
          </div>
        </div>

        <div v-if="territory.crupies" class="d-flex align-center mb-1">
          <img src="/img/64929023.png" width="24" class="mr-2" alt="" />
          <h2 class="text-h5 font-weight-light">Crupiês</h2>
        </div>

        <v-card v-if="territory.crupies" outlined rounded="lg" class="mb-4">
          <v-list subheader>
            <template v-for="crupie in crupies">
              <v-list-item :key="crupie.id" :to="`/crupie/${crupie.id}`">
                <v-list-item-avatar tile size="64" class="my-1">
                  <img :src="`${$baseURL}/static/crupie.png`" alt="" />
                </v-list-item-avatar>
                <v-list-item-content class="py-0" style="z-index: 1">
                  <v-list-item-title>{{ crupie.name }}</v-list-item-title>
                </v-list-item-content>
              </v-list-item>

              <v-divider :key="`cr${crupie.id}`" />
            </template>
          </v-list>
        </v-card>
      </div>
    </v-card-text>
  </div>
</template>

<script>
import familysModel from '@/models/familys';
import dungeonsModel from '@/models/dungeons';
import monstersModel from '@/models/monsters';
import protectorsModel from '@/models/protectors';
import territoriesModel from '@/models/territories';
import ImageFallback from '@/components/image/fallback';
import MonsterIllus from '@/components/image/monsterIllus';
import DungeonIllus from '@/components/image/dungeonIllus';
import exchangesModel from '@/models/exchanges';
import TerritoryBanner from '@/components/image/TerritoryBanner';

export default {
  name: 'Location',
  components: { TerritoryBanner, DungeonIllus, MonsterIllus, ImageFallback },
  data: () => ({
    dialog: true,
    territory: null,
    fromRoute: null
  }),
  computed: {
    id() {
      return this.$route.params.id ? parseInt(this.$route.params.id) : null;
    },
    minLvl() {
      if (!this.territory?.areas) return null;
      return this.territory.areas.reduce((ac, item) => Math.min(ac, item.minLvl), 999);
    },
    maxLvl() {
      if (!this.territory?.areas) return null;
      return this.territory.areas.reduce((ac, item) => Math.max(ac, item.maxLvl), 0);
    },
    webShareApiSupported() {
      if (process.browser) return !!navigator.share;
      return false;
    },
    dungeons() {
      return dungeonsModel
        .filter((e) => e.idTerritory === this.territory.id)
        .map((e) => ({
          ...e,
          boss: monstersModel.find((m) => m.idBoss && m.idFamily === e.family_id)
        }));
    },
    crupies() {
      if (!this.id) return null;
      return this.territory.crupies.map((c) => exchangesModel.find((e) => e.id === c));
    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.fromRoute = from;
    });
  },
  mounted() {
    this.territory = JSON.parse(JSON.stringify(territoriesModel.find((e) => e.id === this.id)));
    this.territory.areas.forEach((e) => {
      if (e.monsters) {
        e.monsters = e.monsters.map((f) => {
          const family_monsters = monstersModel.filter((m) => m.idFamily === f);
          return {
            id: f,
            family: familysModel.find((m) => m.id === f).name,
            arch: family_monsters.find((m) => m.idArch),
            boss: family_monsters.find((m) => m.idBoss),
            horda: family_monsters.find((m) => m.idHorde),
            monsters: family_monsters.filter((m) => !m.idBoss && !m.idArch && !m.idHorde)
          };
        });
      }
      e.protector = protectorsModel.find((f) => f.id === e.idProtector);
    });
    this.territory.areas = this.territory.areas.filter((e) => e.monsters || e.protector);
    this.$emit('updateHead');
  },
  methods: {
    share() {
      window.navigator.share({
        url: `https://guiawakfu.netlify.app/territorio/${this.monster.id}`
      });
    },
    openDungeon(dungeon) {
      this.$router.push(`/calabouco/${dungeon.id}`);
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
        inner: this.territory?.name
      };
    }
  }
};
</script>
