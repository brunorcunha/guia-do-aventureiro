<template>
  <div v-if="titulo">
    <v-divider />
    <v-img src="@/assets/bg.jpg" height="100">
      <div class="fill-height" style="position: relative">
        <v-toolbar dense color="transparent" class="flex-grow-0" flat>
          <v-btn icon dark @click="fechar">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
        </v-toolbar>

        <div id="painelBG" class="d-flex justify-center flex-grow-1 align-center">
          <img :src="`${$baseURL}/rewards/2.png`" alt="" />
        </div>
      </div>
    </v-img>

    <v-divider />

    <div class="px-4 py-3" style="position: relative">
      <v-btn v-if="webShareApiSupported" color="primary" class="mt-n2" fab top right absolute @click="share">
        <v-icon>bi-share</v-icon>
      </v-btn>

      <div>
        <div class="d-flex align-center mb-4">
          <img :src="`${$baseURL}/itemTypes/512.png`" alt="" class="mr-2" />
          <h1 class="text-h5">{{ titulo.name }}</h1>
        </div>

        <template v-if="item">
          <h2 class="text-h6 mb-1">Item</h2>
          <div class="d-flex align-center mb-4 body-1 pointer" @click="$router.push(`/item/${item.id}`)">
            <img :src="`${$baseURL}/items/${item.gfx}.png`" height="24" alt="" class="mr-1" />
            {{ item.name }}
          </div>
        </template>

        <template v-if="conquistas && conquistas.length > 0">
          <h2 class="text-h6 mb-1">Conquistas</h2>

          <v-card outlined class="mb-1 catAchiev">
            <v-list dense subheader class="pb-0">
              <template v-for="conquista in conquistas">
                <Missao :key="conquista.id" :item="conquista" />
                <v-divider :key="`c${conquista.id}`" />
              </template>
            </v-list>
          </v-card>
        </template>

        <template v-if="missoes && missoes.length > 0">
          <h2 class="text-h6 mb-1">Missões</h2>

          <v-card outlined class="mb-4 catAchiev">
            <v-list dense subheader class="pb-0">
              <template v-for="missao in missoes">
                <Missao :key="missao.id" :item="missao" />
                <v-divider :key="`m${missao.id}`" />
              </template>
            </v-list>
          </v-card>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import itemsModel from '@/models/items';
import titulosModel from '@/models/titulos';
import missoesModel from '@/models/quests';
import conquistasModel from '@/models/conquistas';
import Missao from '@/components/modules/missao';

export default {
  name: 'Titulo',
  components: { Missao },
  data: () => ({
    titulo: null,
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
    item() {
      if (!this.titulo) return null;
      return itemsModel.find((i) => i.id == this.titulo.item_id);
    },
    missoes() {
      if (!this.titulo) return null;
      return missoesModel.reduce((ac, item) => {
        this.getRoot(item, ac);
        return ac;
      }, []);
    },
    conquistas() {
      if (!this.titulo) return null;
      return conquistasModel.reduce((ac, item) => {
        this.getRoot(item, ac);
        return ac;
      }, []);
    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.fromRoute = from;
    });
  },
  mounted() {
    this.titulo = JSON.parse(JSON.stringify(titulosModel.find((e) => e.id == this.id)));
    this.$emit('updateHead');
  },
  methods: {
    share() {
      window.navigator.share({
        url: `https://guiawakfu.netlify.app/titulo/${this.emote.id}`
      });
    },
    getRoot(root, ac) {
      root.conquistas.filter((e) => e.rewards.some((f) => f.titulo == this.id)).forEach((e) => ac.push(e));
      (root.children || []).forEach((e) => this.getRoot(e, ac));
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
        inner: this.titulo?.name
      };
    }
  }
};
</script>
