<template>
  <div v-if="exchange">
    <v-divider />
    <v-img src="@/assets/bg.jpg" height="120">
      <div class="fill-height" style="position: relative">
        <v-toolbar dense color="transparent" class="flex-grow-0" flat>
          <v-btn icon dark @click="fechar">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
        </v-toolbar>

        <div id="painelBG" class="d-flex justify-center flex-grow-1 align-center">
          <img :src="`${$baseURL}/static/crupie.png`" alt="" />
        </div>
      </div>
    </v-img>

    <v-divider />

    <div class="px-4 py-3" style="position: relative">
      <v-btn v-if="webShareApiSupported" color="primary" class="mt-n2" fab top right absolute @click="share">
        <v-icon>bi-share</v-icon>
      </v-btn>

      <div class="mt-4">
        <template v-if="dungeonLocations.length">
          <h2 class="text-h6">Calabouço</h2>
          <div v-for="(local, i) in dungeonLocations" :key="i + local">
            <a class="d-flex align-center" @click="$router.push(`/calabouco/${local.id}`)">
              <img
                :src="`https://github.com/brunorcunha/discord-wakfu/raw/main/assets/emoji/loc.png`"
                alt=""
                width="32"
                height="32"
              />
              <h1 class="body-2">{{ local.name }}</h1>
            </a>
          </div>
        </template>
        <template v-if="territoryLocations.length">
          <h3 class="text-h6">Localização</h3>
          <div v-for="(local, i) in territoryLocations" :key="i + local">
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
        </template>
      </div>

      <Crupie :id="id" />
    </div>
  </div>
</template>

<script>
import exchangesModel from '@/models/exchanges';
import territoriesModel from '@/models/territories';
import dungeonsModel from '@/models/dungeons';
import Crupie from '@/components/modules/crupie';

export default {
  name: 'Exchange',
  components: { Crupie },
  data: () => ({
    exchange: null,
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
    dungeonLocations() {
      return dungeonsModel.filter((e) => e.idCrupie === this.id);
    },
    territoryLocations() {
      return territoriesModel.filter((e) => (e.crupies || []).includes(this.id));
    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.fromRoute = from;
    });
  },
  mounted() {
    this.exchange = JSON.parse(JSON.stringify(exchangesModel.find((e) => e.id === this.id)));
    this.$emit('updateHead');
  },
  methods: {
    share() {
      window.navigator.share({
        url: `https://guiawakfu.netlify.app/crupie/${this.exchange.id}`
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
        inner: this.exchange?.name
      };
    }
  }
};
</script>
