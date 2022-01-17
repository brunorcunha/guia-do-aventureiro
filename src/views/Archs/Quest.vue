<template>
  <v-container>
    <page-title>Miniarqui e os Arquis</page-title>

    <div class="text-center">
      <img src="https://raw.githubusercontent.com/brunorcunha/discord-wakfu/main/assets/npc/npc4573.png" alt="" />
    </div>

    <p>
      Depois de completar a quest da <strong>Confraria</strong>, você pode completar a quest
      <strong>"Miniarqui e os Arquis"</strong> de Ruel localizado em Astrub.
    </p>

    <div class="d-flex justify-center mb-4">
      <v-card outlined class="text-center" rounded="lg">
        <div class="primary mb-1 px-2 caption">Ícone</div>
        <img
          src="https://raw.githubusercontent.com/brunorcunha/discord-wakfu/main/assets/emoji/75.png"
          alt=""
          class="mx-2"
        />
      </v-card>
    </div>

    <SliderImage src="https://methodwakfu.com/wp-content/uploads/2019/10/Ruel-2.png" />

    <p>
      A quest inclui nada menos que 56 missões que pedirão para você matar um arquimonstro do seu nível ou menor, até
      que você tenha lutado com todos os arquimonstros do jogo pelo menos uma vez.
    </p>
    <p>
      Cada missão lhe dará experiência, e também marcará o nível da missão. A cada 5 missões desta série de 40, você
      ganhará um título e receitas para novos equipamentos.
    </p>
    <p>Você tem uma semana para fazer a quest e, se conseguir, pode solicitar uma nova imediatamente.</p>

    <v-alert color="info" border="left" text dense>
      O arquimonstro solicitado é aleatório entre todos aqueles abaixo do nível do herói que ainda não foram concluídos.
    </v-alert>

    <v-alert color="info" border="left" text dense>
      Se você iniciar a missão com heróis, eles podem ter outros arquis diferentes.
    </v-alert>

    <h2 class="text-h5">Lista de quests:</h2>

    <div class="mx-n2">
      <v-list dense>
        <template v-for="quest in quests">
          <v-divider :key="`d${quest}`" />
          <v-list-item :key="quest" @click="pesquisarMonstro(quest)">
            <v-list-item-content class="body-2">{{ quest }}</v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </div>
  </v-container>
</template>

<script>
import PageTitle from '@/components/layout/page-title';
import SliderImage from '@/components/layout/SliderImage';

export default {
  name: 'ArchsQuest',
  components: { SliderImage, PageTitle },
  data: () => ({
    quests: [
      'Miniarqui e os Arquis - Abrasivo, o Decapante',
      'Miniarqui e os Arquis - Abrigus, o Protetor',
      'Miniarqui e os Arquis - Blopala, o Cintilante',
      'Miniarqui e os Arquis - Bródi, o Amigável',
      'Miniarqui e os Arquis - Capuchino, o Energizante',
      'Miniarqui e os Arquis - Cawalbino, o Descorado',
      'Miniarqui e os Arquis - Chafedorento, o Deteriorado',
      'Miniarqui e os Arquis - Charco Aurélio, o Argiloso',
      'Miniarqui e os Arquis - Cinza XIII',
      'Miniarqui e os Arquis - Coguloso, o Faminto',
      'Miniarqui e os Arquis - Dama Branca',
      'Miniarqui e os Arquis - Dartifícia, a Explosiva',
      'Miniarqui e os Arquis - Discípulo de Raval',
      'Miniarqui e os Arquis - Estalagpai, o Rígido',
      'Miniarqui e os Arquis - Fhenris, o Mimute Solitário',
      'Miniarqui e os Arquis - Freuntuoso Gás Morno',
      'Miniarqui e os Arquis - Frililimão, o Ácido',
      'Miniarqui e os Arquis - Garrado, o Afiado',
      'Miniarqui e os Arquis - Gelatinho Royal',
      'Miniarqui e os Arquis - Imagem do Conde Traspafrent',
      'Miniarqui e os Arquis - Javastraz, o Adamascado',
      'Miniarqui e os Arquis - Joel Frombehind',
      'Miniarqui e os Arquis - Kay Zer',
      'Miniarqui e os Arquis - Kokoblongo, o Vertical',
      'Miniarqui e os Arquis - Kraken',
      'Miniarqui e os Arquis - Leinaldics',
      'Miniarqui e os Arquis - Lodamallow',
      'Miniarqui e os Arquis - Makhar, a Terrível',
      'Miniarqui e os Arquis - Meymosso, o Floreado',
      'Miniarqui e os Arquis - Minibulieta',
      'Miniarqui e os Arquis - Mulano, o Gás',
      'Miniarqui e os Arquis - Muligano, o Descartado',
      'Miniarqui e os Arquis - Orrokimaru, o Rastejante',
      'Miniarqui e os Arquis - Orvália, a Matinal',
      'Miniarqui e os Arquis - Papamullets, o Cabeludo',
      'Miniarqui e os Arquis - Peskivo, o Arisco',
      'Miniarqui e os Arquis - Pewpew, o Artilheiro',
      'Miniarqui e os Arquis - Pritt, o Meloso',
      'Miniarqui e os Arquis - Pássaro do Tempo',
      'Miniarqui e os Arquis - Ratitubeia, o Cambaleante',
      'Miniarqui e os Arquis - Riktus, o Expressivo',
      'Miniarqui e os Arquis - Rouflaket, o Cavalheiro',
      'Miniarqui e os Arquis - Scaramelo, o Derretido',
      "Miniarqui e os Arquis - Sar'Human, o Sacerdote da Chama",
      'Miniarqui e os Arquis - Sir Urh, o Recluso',
      'Miniarqui e os Arquis - Smaganozes, o Bailarino',
      'Miniarqui e os Arquis - Smif Helino',
      'Miniarqui e os Arquis - Soldadora Fundida',
      'Miniarqui e os Arquis - Sussurrador Amável Miaw',
      'Miniarqui e os Arquis - Tapaburako, o Solitário',
      'Miniarqui e os Arquis - Troolglodita',
      'Miniarqui e os Arquis - Tubagaço',
      'Miniarqui e os Arquis - Tulho, o Rotundo',
      'Miniarqui e os Arquis - Turbivento',
      'Miniarqui e os Arquis - Vermuchacho',
      'Miniarqui e os Arquis - Wipley, a Sobwevivente',
      'Miniarqui e os Arquis - Zombowabbit'
    ]
  }),
  methods: {
    pesquisarMonstro(nome) {
      this.$eventBus.$emit('pesquisar-arch', nome.replace('Miniarqui e os Arquis - ', ''));
    }
  }
};
</script>
