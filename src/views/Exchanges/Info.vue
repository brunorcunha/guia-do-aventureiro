<template>
  <v-container>
    <page-title>Informações</page-title>
    <p class="body-1">
      Fichas são moedas especiais obtidas ao completar missões e calabouços. Ficam vinculadas ao personagem, eles podem
      ser trocados em crupiês por itens específicos, equipamentos, cosméticos, decorações e títulos. Elas ficam visíveis
      na aba <strong>Missão</strong> do inventário.
    </p>

    <div class="d-flex justify-center mb-4">
      <v-card outlined class="text-center" rounded="lg">
        <div class="primary mb-1 px-2 caption">Crupiê</div>
        <img :src="`${$baseURL}/static/crupie.gif`" alt="" />
      </v-card>
    </div>

    <v-alert color="info" border="left" text dense>
      O número de fichas geralmente dobra quando está com pacote de bônus ativo.
    </v-alert>

    <h2 class="text-h5 mt-6 mb-2">Fichas Principais</h2>

    <p>
      As fichas principais são aquelas respectivas a níveis diferentes. Elas podem ser obtidas completando os
      calabouços, bem como as missões de caçador (diárias e semanais). Ao final de cada calabouço, independente do nível
      de Stasis, cada personagem recebe 4 fichas.
    </p>

    <div class="d-flex justify-center mb-4 flex-wrap">
      <img :src="`${$baseURL}/items/64912686.png`" alt="" />
      <img :src="`${$baseURL}/items/64920672.png`" alt="" />
      <img :src="`${$baseURL}/items/64920968.png`" alt="" />
      <img :src="`${$baseURL}/items/64921001.png`" alt="" />
      <img :src="`${$baseURL}/items/64921002.png`" alt="" />
      <img :src="`${$baseURL}/items/64921003.png`" alt="" />
      <img :src="`${$baseURL}/items/64921004.png`" alt="" />
      <img :src="`${$baseURL}/items/64921005.png`" alt="" />
      <img :src="`${$baseURL}/items/64921006.png`" alt="" />
      <img :src="`${$baseURL}/items/64921007.png`" alt="" />
      <img :src="`${$baseURL}/items/64921008.png`" alt="" />
      <img :src="`${$baseURL}/items/64919796.png`" alt="" />
      <img :src="`${$baseURL}/items/64921010.png`" alt="" />
      <img :src="`${$baseURL}/items/64927888.png`" alt="" />
      <img :src="`${$baseURL}/items/64929023.png`" alt="" />
    </div>

    <p>É possível obter fichas através das seguintes atividades na Guilda dos Caçadores:</p>

    <ul class="mb-4">
      <li>Uma missão diária, para vencer um calabouço, oferece 20 fichas.</li>
      <li>
        Missões diárias, para entregar 10 sementes, oferecem 2 fichas. Com uma média de 4 famílias de monstros por
        nível, é possível receber até 8 fichas por nível.
      </li>
      <li>
        Missões diárias, para entregar 10 recursos, oferecem 4 fichas. Com uma média de 4 famílias de monstros por
        nível, é possível receber até 16 fichas por nível.
      </li>
      <li>Uma missão semanal, vencer 3 ou 4 calabouços diferentes, oferece 80 fichas.</li>
    </ul>

    <p>
      Também é possível receber fichas através de atividades não-repetíveis. Se você as fizer sem Pacote Bônus, as
      fichas extras serão perdidos permanentemente.
    </p>

    <ul class="mb-4">
      <li>
        Missões de mercenários oferecem: 4 fichas para as fáceis; 8 fichas para aquelas que envolvem combate; 8 fichas
        para as difíceis e mini-jogos; e 20 fichas para aquelas que precisam fazer um calabouço.
      </li>
      <li>
        Talentos de masmorra concedem 10 fichas para cada talento, para um total de 40 fichas se você completar todos
        eles. Esses talentos não são repetíveis, se você completá-los sem um Booster Pack, os tokens extras são perdidos
        permanentemente.
      </li>
    </ul>

    <v-alert color="info" border="left" text dense>
      Antes de fevereiro de 2017, cada calabouço tinha sua própria ficha. Se você ainda tiver alguma em seu inventário,
      troque-as no crupiê do porão da taverna de Astrub. Também é possível trocar as respectivas fichas no crupiê de
      cada calabouço.
    </v-alert>

    <h2 class="text-h5 mt-6 mb-2">Fichas Modulox</h2>

    <div class="d-flex justify-center mb-4 flex-wrap">
      <img :src="`${$baseURL}/items/60220752.png`" alt="" />
    </div>

    <p>
      Fichas Modulox são recebidas como recompensa de missões oferecidas por Mod'Ule, a criatura que se encontra no seu
      saco de viagem. Essas missões exigem que você complete alguns calabouços e o recompensarão com 2 fichas Modulox. O
      calabouço solicitado muda diariamente e é o mesmo para todos os jogadores. O crupiê Modulox está disponível no
      porão da taverna de Astrub, em troca desses tokens, você pode optar por obter qualquer token de fatia.
    </p>

    <h2 class="text-h5 mt-6 mb-2">Fichas de Mentor</h2>

    <div class="d-flex justify-center mb-4 flex-wrap">
      <img :src="`${$baseURL}/items/60320478.png`" alt="" />
    </div>

    <p>
      Ao acompanhar jogadores novatos em seus primeiros passos (modulando seu próprio nível). Você poderá obter fichas
      de Mentor. O crupiê do mentor está localizado no térreo da taverna de Astrub com itens cosméticos exclusivos.
    </p>

    <div class="d-flex justify-center mb-4">
      <v-card outlined class="text-center" rounded="lg">
        <div class="primary mb-1 px-2 caption">Ícone do Jogador Novato</div>
        <img :src="`${$baseURL}/static/5.png`" alt="" class="mt-1" />
      </v-card>
    </div>

    <p>Você receberá 1 ficha de Mentor cada vez que um jogador novato de seu grupo:</p>

    <ul class="mb-4">
      <li>Subir de nível.</li>
      <li>Realizar uma conquista.</li>
      <li>Completar uma missão.</li>
    </ul>

    <v-alert color="info" border="left" text dense>
      Fichas de Mentor só podem ser recebidas uma vez a cada 15 minutos.
    </v-alert>

    <h2 class="text-h5 mt-6 mb-2">Fichas de Chefe Supremo</h2>

    <div class="d-flex justify-center mb-4 flex-wrap">
      <img :src="`${$baseURL}/items/60214162.png`" alt="" />
      <img :src="`${$baseURL}/items/60214163.png`" alt="" />
      <img :src="`${$baseURL}/items/60214164.png`" alt="" />
      <img :src="`${$baseURL}/items/60214165.png`" alt="" />
      <img :src="`${$baseURL}/items/60316159.png`" alt="" />
      <img :src="`${$baseURL}/items/60214164.png`" alt="" />
      <img :src="`${$baseURL}/items/60320282.png`" alt="" />
      <img :src="`${$baseURL}/items/60320717.png`" alt="" />
      <img :src="`${$baseURL}/items/60324034.png`" alt="" />
      <img :src="`${$baseURL}/items/60326285.png`" alt="" />
    </div>

    <p>
      Cada Chefe Supremo tem sua própria ficha que só pode ser usada no respectivo crupiê. Cada vitória contra um Chefe
      Supremo garante 10 fichas. Fichas adicionais podem ser obtidas completando as conquistas de cada Chefe Supremo
      (aba de Desafios).
    </p>

    <h2 class="text-h5 mt-6 mb-2">Fichas Especiais</h2>

    <p>Os calabouços que tem mecânicas especiais normalmente tem fichas especiais.</p>

    <h2 class="text-h6 mt-6 mb-2">Ficha Perdida</h2>
    <div class="d-flex justify-center mb-4 flex-wrap">
      <img :src="`${$baseURL}/items/60219408.png`" alt="" />
    </div>

    <p>
      Ficha obtida ao vencer o calabouço Ateliê Abandonado em Kelba. Diferente de outros calabouços, ele deve ser
      concluída em um tempo limitado. Completar a primeira sala concede 2 fichas, a segunda 3, a terceira 4 e, a última
      sala 10. Só é possível obter fichas em cada sala uma vez por dia, até um máximo de 19 fichas por dia.
    </p>

    <h2 class="text-h6 mt-6 mb-2">Ficha Exumada</h2>
    <div class="d-flex justify-center mb-4 flex-wrap">
      <img :src="`${$baseURL}/items/64924797.png`" alt="" />
    </div>

    <p>
      Ficha obtida ao vencer os calabouços da Torre Mineral. Diferente de outros calabouços, a torre mineral só tem uma
      sala. Cada vitória na única sala da masmorra lhe concederá 10 fichas. O acesso à Torre requer um encantamento de
      Feca para cada personagem. Arpagone garante um encantamento de Feca grátis por dia. Tentativas adicionais são
      pagas.
    </p>

    <v-row class="mx-0">
      <v-col class="px-1">
        <v-card outlined class="text-center" rounded="lg">
          <div class="primary mb-1 px-2 caption">Imperfeito</div>
          <img :src="`${$baseURL}/items/31728028.png`" alt="" class="mt-1" />
        </v-card>
      </v-col>

      <v-col class="px-1">
        <v-card outlined class="text-center" rounded="lg">
          <div class="primary mb-1 px-2 caption">Eterno</div>
          <img :src="`${$baseURL}/items/31728029.png`" alt="" class="mt-1" />
        </v-card>
      </v-col>

      <v-col class="px-1">
        <v-card outlined class="text-center" rounded="lg">
          <div class="primary mb-1 px-2 caption">Divino</div>
          <img :src="`${$baseURL}/items/31728030.png`" alt="" class="mt-1" />
        </v-card>
      </v-col>
    </v-row>

    <h2 class="text-h5 mt-6 mb-2">Fichas de Evento</h2>

    <h2 class="text-h6 mt-6 mb-2">Ficha de Boss Smasher</h2>
    <div class="d-flex justify-center mb-4 flex-wrap">
      <img :src="`${$baseURL}/items/47212231.png`" alt="" />
    </div>

    <p>
      Todo mês os jogadores recebem uma missão de derrotar um chefe de calabouço, com Stasis 21+, no modo competitivo. O
      crupiê está disponível no porão da taverna de Astrub e oferece itens cosméticos exclusivas (títulos, aparências de
      sacos de viagem e trajes).
    </p>

    <h2 class="text-h6 mt-6 mb-2">Ficha da Festa da Primavera</h2>
    <div class="d-flex justify-center mb-4 flex-wrap">
      <img :src="`${$baseURL}/items/60318006.png`" alt="" />
    </div>

    <p>
      No início do ano ocorre o evento da Festa da Primavera e as fichas são obtidas com missões do evento e drops
      globais. O crupiê está disponível no porão da taverna de Astrub.
    </p>

    <h2 class="text-h6 mt-6 mb-2">Ficha de Música</h2>
    <div class="d-flex justify-center mb-4 flex-wrap">
      <img :src="`${$baseURL}/items/60327070.png`" alt="" />
    </div>

    <p>
      Durante o evento da Festa da Fanfão, as fichas são obtidas nos drops globais. O crupiê está disponível no porão da
      taverna de Astrub.
    </p>

    <h2 class="text-h6 mt-6 mb-2">Fichäreia</h2>
    <div class="d-flex justify-center mb-4 flex-wrap">
      <img :src="`${$baseURL}/items/60320391.png`" alt="" />
      <img :src="`${$baseURL}/items/60320392.png`" alt="" />
    </div>

    <p>
      Durante o evento de Älmadräva, as fichas são obtidas com missões do evento e drops globais. Também é possível
      obter pérolas que funcionam como fichas e o calabouço Pälácio Märinho é liberado. O crupiê está disponível atrás
      da taverna de Astrub.
    </p>

    <h2 class="text-h6 mt-6 mb-2">Ficha de Relouin</h2>
    <div class="d-flex justify-center mb-4 flex-wrap">
      <img :src="`${$baseURL}/items/60212845.png`" alt="" />
    </div>

    <p>
      Durante o evento de Relouin, as fichas são obtidas com missões do evento e drops globais. Também é liberado
      calabouço Antro da Feiticeira. O crupiê está disponível em frente o calabouço.
    </p>

    <h2 class="text-h6 mt-6 mb-2">Ficha do Papai Nowel</h2>
    <div class="d-flex justify-center mb-4 flex-wrap">
      <img :src="`${$baseURL}/items/60315135.png`" alt="" />
    </div>

    <p>
      No fim do ano ocorre o evento de Natal e as fichas são obtidas com missões do evento e drops no mapa de natal.
      Também são liberados 2 calabouços, o Ateliê do Papai Nowel e a Casa do Papai Nowel. O crupiê está disponível
      somente durante o evento no mapa de natal.
    </p>

    <h2 class="text-h5 mt-6 mb-2">Outras Fichas</h2>

    <h2 class="text-h6 mt-6 mb-2">Almaficha</h2>
    <div class="d-flex justify-center mb-4 flex-wrap">
      <img :src="`${$baseURL}/items/60314168.png`" alt="" />
    </div>

    <p>
      Fichas obtidas orando uma vez por dia no Bibliotemplo. Também é possível obter fichas adicionais ajudando
      Tristepin no seu treinamento. O crupiê está localizado dentro do Bibliotemplo.
    </p>

    <h2 class="text-h6 mt-6 mb-2">Ficha de Emblema de Classe</h2>
    <div class="d-flex justify-center mb-4 flex-wrap">
      <img :src="`${$baseURL}/items/60213128.png`" alt="" />
    </div>

    <p>
      Ficha obtida ao completar a conquista "Um emblema de classe bem merecido!" que pede para realizar uma missão com
      Mod'Ule (dentro do saco de viagem). Ela pode ser trocada por um emblema de classe (nível 60) no porão da Taverna
      de Astrub.
    </p>

    <h2 class="text-h6 mt-6 mb-2">Ficha de Dragoperu</h2>
    <div class="d-flex justify-center mb-4 flex-wrap">
      <img :src="`${$baseURL}/items/60318703.png`" alt="" />
    </div>

    <p>
      Ficha obtida em Astrub por Melmac quando você recebe sua permissão de montaria. Ela permite que escolha um
      Dragoperu entre os disponíveis no crupiê localizado próximo a ele.
    </p>

    <h2 class="text-h6 mt-6 mb-2">Ficha da montascote patriota</h2>
    <div class="d-flex justify-center mb-4 flex-wrap">
      <img :src="`${$baseURL}/items/60318703.png`" alt="" />
    </div>

    <p>
      Se você é um cidadão de uma nação e seus pontos de cidadania são altos, você pode receber uma Ficha da montascote
      patriota que pode ser usado para obter a aparência de montaria de sua nação. O crupiê está no QG dos guardas da
      sua nação, na mesma sala onde está o Mestre Coruja.
    </p>

    <h2 class="text-h6 mt-6 mb-2">Ficha de compensação</h2>
    <div class="d-flex justify-center mb-4 flex-wrap">
      <img :src="`${$baseURL}/items/47212231.png`" alt="" />
    </div>

    <p>
      Fichas que são oferecidas pela Ankama durante os períodos de bugs como compensação pelo tempo de jogo perdido. O
      crupiê está disponível no porão da taverna de Astrub.
    </p>

    <h2 class="text-h6 mt-6 mb-2">Ficha de Bronze</h2>
    <div class="d-flex justify-center mb-4 flex-wrap">
      <img :src="`${$baseURL}/items/60213126.png`" alt="" />
    </div>

    <p>
      Fichas antigas que eram usadas como moeda na Feira Trool. Se ainda possuir alguma, elas ainda podem ser trocadas
      por decorações e equipamentos em um crupiê na Feira Trool.
    </p>
  </v-container>
</template>

<script>
import PageTitle from '@/components/layout/page-title';

export default {
  name: 'ExchangesInfo',
  components: { PageTitle }
};
</script>
