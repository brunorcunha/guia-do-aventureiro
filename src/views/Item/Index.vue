<template>
  <div v-if="item">
    <v-divider />
    <v-img src="@/assets/bg.jpg" height="120">
      <div class="fill-height" style="position: relative">
        <v-toolbar dense color="transparent" class="flex-grow-0" flat>
          <v-btn icon dark @click="fechar">
            <v-icon>mdi-arrow-left</v-icon>
          </v-btn>
          <v-spacer />
          <v-btn v-if="!book" icon dark @click="abrirExterno">
            <v-icon>bi-box-arrow-up-right</v-icon>
          </v-btn>
        </v-toolbar>

        <div id="painelBG" class="d-flex justify-center flex-grow-1 align-center">
          <img :src="`${$baseURL}/items/${item.gfx}.png`" alt="" />
        </div>
      </div>
    </v-img>

    <v-divider />

    <div class="px-4 py-3" style="position: relative">
      <v-btn v-if="webShareApiSupported" color="primary" class="mt-n2" fab top right absolute @click="share">
        <v-icon>bi-share</v-icon>
      </v-btn>

      <div class="mb-4">
        <div class="d-flex align-center">
          <img
            :src="`${$baseURL}/itemTypes/${type}.png`"
            alt=""
            class="pt-3 px-2 pb-2"
            @error="$event.target.src = `${$baseURL}/itemTypes/-2.png`"
          />
          <h1 :class="$itemRarityClassText(item) + ' text-h5'">{{ item.name }}</h1>
        </div>
        <h2 v-if="item.lvl" class="body-1 font-weight-light ml-11">Nível {{ item.lvl }}</h2>
      </div>

      <template v-if="receitaReferencia">
        <h2 class="text-h6 my-1">Receita do item</h2>

        <v-card outlined rounded="lg" class="mb-4 mt-2">
          <v-list-item :to="`/item/${receitaReferencia.id}`">
            <v-list-item-avatar tile class="my-1 mr-4">
              <img :src="`${$baseURL}/items/${receitaReferencia.gfx}.png`" alt="" />
            </v-list-item-avatar>

            <v-list-item-content class="py-0" style="z-index: 1">
              <v-list-item-title :class="$itemRarityClassText(receitaReferencia) + ' d-flex align-center'">
                {{ receitaReferencia.name }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </template>

      <template v-if="referenciaReceita">
        <h2 class="text-h6 my-1">Item da Receita</h2>

        <v-card outlined rounded="lg" class="mb-4 mt-2">
          <v-list-item :to="`/item/${referenciaReceita.id}`">
            <v-list-item-avatar tile class="my-1 mr-4">
              <img :src="`${$baseURL}/items/${referenciaReceita.gfx}.png`" alt="" />
            </v-list-item-avatar>

            <v-list-item-content class="py-0" style="z-index: 1">
              <v-list-item-title :class="$itemRarityClassText(referenciaReceita) + ' d-flex align-center'">
                {{ referenciaReceita.name }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </template>

      <template v-if="emote">
        <h2 class="text-h6 mb-1 px-4">Emote</h2>
        <v-card outlined rounded="lg" class="mb-4">
          <v-list-item color="primary" dense :to="`/emote/${emote.id}`">
            <v-list-item-avatar tile size="64" class="my-0">
              <v-img content :src="`${$baseURL}/emotes/${emote.id}.png`">
                <template #placeholder>
                  <img src="/img/187.png" alt="" />
                </template>
              </v-img>
            </v-list-item-avatar>
            <v-list-item-content class="py-0">
              <v-list-item-title>
                <v-chip color="primary" label x-small class="mr-1 px-1">{{ emote.cmd }}</v-chip>
                <span class="body-2">{{ emote.name }}</span>
              </v-list-item-title>
              <p class="mb-0 mt-1 body-2 grey--text text--lighten-1">{{ emote.location }}</p>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </template>

      <template v-if="titulo">
        <h2 class="text-h6 mb-1 px-4">Título</h2>
        <v-card outlined rounded="lg" class="mb-4">
          <v-list-item color="primary" dense :to="`/titulo/${titulo.id}`">
            <v-list-item-content class="py-0">
              <v-list-item-title>
                <span class="body-1">{{ titulo.name }}</span>
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </template>

      <template v-if="colheitas && colheitas.length > 0">
        <h2 class="text-h6 mb-1">Colheitas</h2>
        <v-card outlined rounded="lg" class="mb-4">
          <v-list subheader dense>
            <template v-for="colheita in colheitas">
              <v-list-item :key="colheita.monster.id" :to="`/monstro/${colheita.monster.id}`" class="pl-0">
                <monster-illus :monster="colheita.monster" />

                <v-list-item-content class="py-0" style="z-index: 1">
                  <v-list-item-title>{{ colheita.monster.name }}</v-list-item-title>
                  <v-list-item-subtitle>
                    {{ colheita.collect.skill.name }} (nível {{ colheita.collect.lvl }})
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action v-if="colheita.collect.morto !== undefined" class="my-1">
                  <v-tooltip v-if="colheita.collect.morto === true" bottom>
                    <template #activator="{ on }">
                      <img :src="`${$baseURL}/dead.png`" alt="" height="40" v-on="on" />
                    </template>
                    <span>Colheita no cadáver</span>
                  </v-tooltip>
                  <v-tooltip v-else bottom>
                    <template #activator="{ on }">
                      <img :src="`${$baseURL}/coracao.png`" alt="" v-on="on" />
                    </template>
                    <span>Colheita no alvo vivo</span>
                  </v-tooltip>
                </v-list-item-action>
              </v-list-item>

              <v-divider :key="`d${colheita.monster.id}`" />
            </template>
          </v-list>
        </v-card>
      </template>

      <template v-if="drops && drops.length > 0">
        <h2 class="text-h6 mb-1">Drops</h2>
        <v-card outlined rounded="lg" class="mb-4">
          <v-list subheader dense>
            <template v-for="drop in drops">
              <v-list-item :key="(drop.monster || {}).id" :to="`/monstro/${(drop.monster || {}).id}`" class="pl-0">
                <monster-illus :monster="drop.monster" />
                <v-list-item-content v-if="drop.monster" class="py-0" style="z-index: 1">
                  <v-list-item-title>{{ drop.monster.name }}</v-list-item-title>
                  <v-list-item-subtitle>
                    Nível {{ drop.monster.minLvl }}
                    <template v-if="drop.monster.maxLvl"> à {{ drop.monster.maxLvl }}</template>
                  </v-list-item-subtitle>
                </v-list-item-content>

                <v-list-item-action class="caption"> {{ drop.rate }}% </v-list-item-action>
              </v-list-item>

              <v-divider :key="`d${(drop.monster || {}).id}`" />
            </template>
          </v-list>
        </v-card>
      </template>

      <template v-if="crupies && crupies.length > 0">
        <h2 class="text-h6 mb-1">Crupiês</h2>
        <v-card outlined rounded="lg" class="mb-4">
          <v-list subheader dense>
            <template v-for="crupie in crupies">
              <v-list-item :key="crupie.id" :to="`/crupie/${crupie.id}`" class="pl-0">
                <v-list-item-avatar tile size="64" class="my-1">
                  <img :src="`${$baseURL}/static/crupie.png`" alt="" />
                </v-list-item-avatar>
                <v-list-item-content class="py-0" style="z-index: 1">
                  <v-list-item-title>{{ crupie.name }}</v-list-item-title>

                  <v-list-item-subtitle
                    v-if="(crupie.item.cost || {}).kamas"
                    class="d-flex align-center font-weight-light"
                  >
                    <img
                      src="https://raw.githubusercontent.com/brunorcunha/discord-wakfu/main/assets/kamaIcon.png"
                      alt=""
                      class="mr-1"
                    />
                    {{ crupie.item.cost.kamas | niceNumber }} Kamas
                  </v-list-item-subtitle>
                  <v-list-item-subtitle
                    v-if="(crupie.item.cost || {}).orbs"
                    class="d-flex align-center font-weight-light"
                  >
                    <img src="/img/gorbs.png" alt="" class="mr-1" />
                    {{ crupie.item.cost.orbs | niceNumber }}x Orbes de Glória
                  </v-list-item-subtitle>
                  <v-list-item-subtitle
                    v-for="itemc in (crupie.item.cost || {}).items"
                    :key="itemc.id"
                    class="d-flex align-center font-weight-light"
                  >
                    <img :src="`${$baseURL}/items/${itemc.item.gfx}.png`" height="24" alt="" class="mr-1" />
                    {{ itemc.qty }}x
                    <span :class="$itemRarityClassText(itemc.item) + ' ml-1'">{{ itemc.item.name }}</span>
                  </v-list-item-subtitle>
                  <v-list-item-subtitle class="caption">{{ crupie.item.criteria }}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider :key="`d${crupie.id}`" />
            </template>
          </v-list>
        </v-card>
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

      <template v-if="receita">
        <h2 class="text-h6 my-1">Receita</h2>

        <Receita :receita="receita" />
      </template>

      <template v-if="book">
        <h2 class="text-h6 mb-1">Páginas</h2>
        <v-card v-for="(page, i) in book.pages" :key="`p${i}`" outlined rounded="lg" class="mb-2">
          <v-card-text class="pb-0">
            <div v-if="page.img" class="align-center">
              <img :src="`${$baseURL}/backgroundDisplay/${page.img}.png`" alt="" style="max-width: 100%" />
            </div>
            <Pagina :value="page.txt" />
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <div class="caption">Página {{ i + 1 }}</div>
          </v-card-actions>
        </v-card>
      </template>
    </div>
  </div>
</template>

<script>
import itemsModel from '@/models/items';
import booksModel from '@/models/books';
import emotesModel from '@/models/emotes';
import receitasModel from '@/models/recipes';
import equipTypeModel from '@/models/equipType';
import craftsModel from '@/models/crafts.json';
import monstersModel from '@/models/monsters';
import exchangesModel from '@/models/exchanges';
import missoesModel from '@/models/quests';
import titulosModel from '@/models/titulos';
import conquistasModel from '@/models/conquistas';
import MonsterIllus from '@/components/image/monsterIllus';
import Pagina from '@/components/modules/pagina';
import Missao from '@/components/modules/missao';
import { niceNumber } from '@/utils';
import Receita from '@/components/modules/receita';

export default {
  name: 'Item',
  filters: { niceNumber },
  components: { Receita, Missao, Pagina, MonsterIllus },
  data: () => ({
    item: null,
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
    type() {
      return equipTypeModel[this.item.idType] || this.item.idType;
    },
    book() {
      if (!this.item.idBook) return null;
      return booksModel.find((e) => e.id === this.item.idBook);
    },
    emote() {
      return emotesModel.find((e) => e.item_id === this.item.id);
    },
    titulo() {
      return titulosModel.find((e) => e.item_id === this.item.id);
    },
    receitaCraft() {
      return receitasModel.map((e) => ({
        ...e,
        craft: craftsModel.find((f) => f.id === e.craft_id)
      }));
    },
    receita() {
      return this.receitaCraft.find((e) => e.result.item_id === this.item.id);
    },
    referenciaReceita() {
      const i = this.receitaCraft.find((e) => e.item_id === this.item.id);
      if (!i) return null;
      return itemsModel.find((e) => e.id === i.result.item_id);
    },
    receitaReferencia() {
      const i = this.receitaCraft.find((e) => e.result.item_id === this.item.id);
      if (!i) return null;
      return itemsModel.find((e) => e.id === i.item_id);
    },
    colheitas() {
      if (!this.item) return null;
      return monstersModel.reduce((ac, monster) => {
        const collect = (monster.collects || []).find((f) => f.item === this.id);
        if (collect) {
          ac.push({ monster, collect: { ...collect, skill: craftsModel.find((c) => c.id === collect.skill) } });
        }
        return ac;
      }, []);
    },
    drops() {
      if (!this.item || !this.item.drops) return null;
      return this.item.drops.map((e) => ({
        monster: monstersModel.find((f) => f.id === e.monster),
        rate: e.rate
      }));
    },
    crupies() {
      return exchangesModel
        .filter((e) => e.exchanges.find((f) => f.result.items?.some((g) => g.id === this.id)))
        .map((e) => {
          const itemc = e.exchanges.find((f) => f.result.items?.some((g) => g.id === this.id));
          return {
            ...e,
            item: {
              ...itemc,
              cost: itemc.cost
                ? {
                    ...itemc.cost,
                    items: itemc.cost.items
                      ? itemc.cost.items.map((i) => ({
                          ...i,
                          item: itemsModel.find((item) => item.id === i.id)
                        }))
                      : undefined
                  }
                : undefined
            }
          };
        });
    },
    missoes() {
      if (!this.item) return null;
      return missoesModel.reduce((ac, item) => {
        this.getRoot(item, ac);
        return ac;
      }, []);
    },
    conquistas() {
      if (!this.item) return null;
      return conquistasModel.reduce((ac, item) => {
        this.getRoot(item, ac);
        return ac;
      }, []);
    }
  },
  watch: {
    $route() {
      this.init();
    }
  },
  beforeRouteEnter(to, from, next) {
    next((vm) => {
      vm.fromRoute = from;
    });
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.item = JSON.parse(JSON.stringify(itemsModel.find((e) => e.id === this.id)));
      this.$emit('updateHead');
    },
    getRoot(root, ac) {
      root.conquistas
        .filter((e) => e.rewards.some((f) => f.item && f.item[0] === this.item.id))
        .forEach((e) => ac.push(e));
      (root.children || []).forEach((e) => this.getRoot(e, ac));
    },
    share() {
      window.navigator.share({
        url: `https://guiawakfu.netlify.app/item/${this.item.id}`
      });
    },
    fechar() {
      if (!this.fromRoute?.name) {
        this.$router.push('/');
      } else {
        this.$router.back();
      }
    },
    abrirExterno() {
      window.open(`https://www.wakfu.com/pt/mmorpg/enciclopedia/recursos/${this.item.id}-wakfu`);
    }
  },
  head: {
    title: function () {
      return {
        inner: this.item?.name
      };
    }
  }
};
</script>
