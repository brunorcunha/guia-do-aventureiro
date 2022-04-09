<template>
  <div v-if="protector">
    <v-divider />
    <v-img src="@/assets/bg.jpg" height="246">
      <div class="fill-height" style="position: relative">
        <v-toolbar dense color="transparent" class="flex-grow-0" flat>
          <v-btn icon dark @click="fechar">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
        </v-toolbar>

        <div id="painelBG" class="d-flex justify-center flex-grow-1 align-center">
          <img
            :src="`${$baseURL}/interactiveDialog/protector${protector.gfx}.png`"
            alt=""
            @error="$event.target.src = `${$baseURL}/interactiveDialog/default.png`"
          />
        </div>
      </div>
    </v-img>

    <v-divider />

    <div class="px-4 py-3" style="position: relative">
      <v-btn v-if="webShareApiSupported" color="primary" class="mt-n2" fab top right absolute @click="share">
        <v-icon>bi-share</v-icon>
      </v-btn>

      <div class="pt-2">
        <div class="d-flex align-center mb-4">
          <img :src="`${$baseURL}/static/protectors/${protector.gfx}_0.png`" alt="" class="mr-2" />
          <div>
            <h1 class="text-h5">{{ protector.name }}</h1>
            <p class="body-2 mb-0" @click="$router.push(`/territorio/${territory.id}`)">
              {{ territory.name }}
              <template v-if="territory.name !== area.name">/ {{ area.name }}</template>
            </p>
          </div>
        </div>

        <v-card rounded="lg" outlined class="mb-4">
          <v-card-text class="text--darken-4 body-2">
            <strong>Sexo</strong>: {{ protector.sex }}<br />
            <strong>Trabalho</strong>: {{ protector.job }}<br />
            <strong>Altura</strong>: {{ protector.height }}<br />
            <strong>Peso</strong>: {{ protector.weight }}<br />
            <div v-html="protector.custom.replaceAll('\\n', '<br />').replaceAll(':', '</b>:')"></div>
          </v-card-text>
        </v-card>

        <v-card
          v-if="(protector.flora_will || []).length || (protector.fauna_will || []).length"
          rounded="lg"
          outlined
          class="pb-1"
        >
          <v-card-title class="font-weight-light primary py-0 white--text"> Vontade </v-card-title>

          <template v-for="flora in protector.flora_will">
            <v-list-item :key="flora.kind_id">
              <v-list-item-avatar size="36">
                <img :src="`${$baseURL}/static/flora_${flora.kind_id}.png`" alt="" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>
                  <template v-if="flora.kind_id === 1">Árvores</template>
                  <template v-if="flora.kind_id === 2">Trigos</template>
                  <template v-if="flora.kind_id === 10">Plantas</template>
                </v-list-item-title>
                <v-list-item-subtitle>
                  <strong>Quantidade</strong>: {{ flora.min }} - {{ flora.max }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider :key="`d${flora.kind_id}`" />
          </template>

          <template v-for="fauna in protector.fauna_will">
            <v-list-item :key="fauna.kind_id">
              <v-list-item-avatar size="32">
                <img :src="`${$baseURL}/monstersFamily/${fauna.kind_id}.png`" alt="" />
              </v-list-item-avatar>
              <v-list-item-content>
                <v-list-item-title>{{ familys[fauna.kind_id] }}</v-list-item-title>
                <v-list-item-subtitle>
                  <strong>Quantidade</strong>: {{ fauna.min }} - {{ fauna.max }}
                </v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>

            <v-divider :key="`d${fauna.kind_id}`" />
          </template>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import protectorsModel from '@/models/protectors';
import territoriesModel from '@/models/territories';
import familysModel from '@/models/familys';

export default {
  name: 'Protector',
  data: () => ({
    protector: null,
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
    territory() {
      if (!this.protector) return null;
      return territoriesModel.find((e) => e.areas?.some((a) => a.id === this.protector.territory));
    },
    area() {
      if (!this.territory) return null;
      return this.territory.areas.find((a) => a.id === this.protector.territory);
    },
    familys() {
      if (!this.protector) return null;
      return this.protector.fauna_will
        .map((e) => familysModel.find((f) => f.id === e.kind_id))
        .reduce((ac, item) => {
          ac[item.id] = item.name;
          return ac;
        }, {});
    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.fromRoute = from;
    });
  },
  mounted() {
    this.protector = JSON.parse(JSON.stringify(protectorsModel.find((e) => e.id === this.id)));
    this.$emit('updateHead');
  },
  methods: {
    share() {
      window.navigator.share({
        url: `https://guiawakfu.netlify.app/protector/${this.protector.id}`
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
        inner: this.protector?.name
      };
    }
  }
};
</script>
