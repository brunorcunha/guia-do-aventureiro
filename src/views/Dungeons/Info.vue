<template>
  <v-container>
    <page-title>Informações</page-title>
    <p class="body-1">
      Os calabouços (também chamados de dungeons ou masmorras) são localizações especiais disponíveis em quase todos os
      territórios.
    </p>

    <div class="d-flex justify-center mb-4">
      <v-card outlined class="text-center" rounded="lg">
        <div class="primary mb-1 px-2 caption">Ícone</div>
        <img
          src="https://raw.githubusercontent.com/brunorcunha/discord-wakfu/main/assets/emoji/7.png"
          alt=""
          class="mx-2"
        />
      </v-card>
    </div>

    <p class="body-1">
      Um calabouço basicamente é um conjunto de salas (normalmente quatro) com um grupo de monstros em cada uma. A
      próxima sala só é liberada quando os monstros da sala anterior foram derrotados. Com exceção do chefe, os monstros
      são idênticos aos que você pode enfrentar do lado de fora e, normalmente, os drops são os mesmos.
    </p>

    <SliderImage src="https://methodwakfu.com/wp-content/uploads/2019/09/Donjon-1.png" />

    <p class="body-1">
      Em cada calabouço há um chefe acessível apenas na última sala. O chefe normalmente vem acompanhado de outros
      monstros e em alguns casos pode estar sozinho. Os chefes dão muita experiência, dropam recursos e equipamentos
      úteis (Relíquias, épicos, itens de várias raridades, cosméticos e/ou animais de estimação).
    </p>

    <SliderImage
      src="https://static.ankama.com/upload/backoffice/direct/2015-09-09/9aba75abf5ec2c82ca7675e8da7d6b34.png"
    />

    <p class="body-1">
      Calabouços são uma ótima maneira de subir o nível de seus personagens. A dificuldade é ajustável, o chefe tem
      taxas de drop maiores que os monstros normais, além dos drops exclusivos.
    </p>

    <h2 class="text-h5 mt-6 mb-2">Mímikos</h2>

    <div class="d-flex justify-center mb-4">
      <img src="https://raw.githubusercontent.com/brunorcunha/discord-wakfu/main/assets/monster/png/4196.png" alt="" />
    </div>

    <p class="body-1">
      Mímikos são monstros especiais que podem aparecer no meio de uma batalha de calabouço e que podem lhe dar
      recompensas se você os matar a tempo (antes que fujam). Se tiver sorte, vários mímikos podem aparecer de uma vez.
      Eles não se movem no primeiro turno, mas desaparecem no terceiro turno ou assim que alcançarem a borda do campo de
      batalha. Os mímikos reduzem todo o dano recebido à distância em 50%.
    </p>

    <p class="body-1">
      A taxa de aparecimento dos mímikos é de aproximadamente 10% na Stasis 1 e 20% na Stasis 50 por combate. Além
      disso, quando aparece um mímiko, há uma chance de 5% de que apareçam vários (essa taxa não muda com a stasis).
    </p>

    <v-list>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Mímiko Rúnico</v-list-item-title>
          <p class="body-2 mb-0">Dropa fragmentos e as sublimações: Influência, Extensão e Reprovação.</p>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Mímiko Fragmentado</v-list-item-title>
          <p class="body-2 mb-0">Dropa fragmentos de relíquias do nível do calabouço ou menor.</p>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Mímiko Doméstico</v-list-item-title>
          <p class="body-2 mb-0">Dropa mascotes (pets) e ração de mascotes.</p>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Mímiko Doce</v-list-item-title>
          <p class="body-2 mb-0">Dropa itens comestíveis de aumento de sabedoria, prospecção e profissão.</p>
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Mímiko de nação</v-list-item-title>
          <p class="body-2 mb-0">
            Só aparece em calabouços das nações com Stasis 21+ no modo competitivo. Dropa receita das espadas das nações
            e pedras preciosas.
          </p>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <v-alert color="info" border="left" text dense>
      ATENÇÃO: se você matar todos os monstros antes dos mímikos, eles desaparecerão e a luta terminará.
    </v-alert>

    <h2 class="text-h5 mt-6 mb-2">Variantes</h2>

    <p class="body-1">
      Alguns calabouços apresentam variações no seu funcionamento, fugindo do padrão de quatro salas com um chefe na
      última. São elas:
    </p>

    <ul class="mb-4">
      <li class="body-1">
        <strong>Chefe Supremo</strong>: Também conhecidos como Ultimate Boss (UB), só pode ser acessado três vezes por
        semana e os drops são limitados a uma vitória por semana.
      </li>
      <li class="body-1">
        <strong>Torre Mineral</strong>: Acessível através de Encantamentos Feca que podem ser obtidos na Loja de Ogrines
        ou conversando com Arpagone (Um encantamento de graça por dia).
      </li>
      <li class="body-1">
        <strong>Esconderijos dos Super-Vilões</strong>: Acessível em troca de kamas e limitado a uma vitória por semana.
      </li>
      <li class="body-1">
        <strong>Eventos Sazonais</strong>: Abertas apenas durante o período do evento e às vezes exigem uma chave.
      </li>
    </ul>

    <h2 class="text-h5 mt-6 mb-2">Modo Competitivo</h2>

    <p class="body-1">
      O Modo Competitivo (também chamado de Ranking/Rankeado) é uma forma de aumentar a dificuldade do calabouço em
      troca de recompensas no final do mês dependendo da sua posição no quadro de classificação. Você pode acessar o
      modo competitivo criando uma build através do gerenciamento de builds (tecla O) ou usando uma build automática
      (modulando o nível do personagem (tecla P), ou marcando a opção de modo competitivo ao entrar no calabouço).
    </p>

    <p class="body-1">
      Existem dois tipos de recompensas: baseadas na pontuação pessoal e na classificação final. O quadro de
      classificações é reiniciado todo dia 1º do mês. A pontuação pode ser visualizada em 3 abas: Mês passado, Mês atual
      e Permanente.
    </p>

    <p class="body-1">
      A pontuação pessoal te recompensa com uma certa quantidade de fragmentos, independente da sua classificação no
      final do mês. Ela dependem apenas do nível do calabouço e do nível mais alto de Stasis que você atingiu durante o
      mês.
    </p>

    <v-alert color="info" border="left" text dense>
      A quantidade de fragmentos é equivalente ao número obtido ao reciclar um item de qualidade rara (verde) do
      calabouço, multiplicado por um fator de 1 a 5 dependendo do nível de Stasis (limitada a 40 fragmentos por
      calabouço).
    </v-alert>

    <p class="body-1">
      A classificação final recompensa cada personagem classificado no top 200 com um baú no final do mês. O baú depende
      da classificação (Top 1, Top 60, Top 200).
    </p>

    <v-row class="mb-2">
      <v-col cols="12" lg="4">
        <v-card outlined rounded="lg" class="text-center px-2 fill-height">
          <img :src="`${$baseURL}/items/60625175.png`" alt="" />
          <h3 class="body-1 font-weight-medium">Pequeno Baú do Final da Temporada</h3>
          <p class="body-2">
            <strong>25</strong>% de chance de obter um item cosmético<br />
            <strong>100</strong>% de chance de obter 1 lote de pós, fichas ou transmutações<br />
            <strong>1</strong>% de chance de ganhar uma Runa Épica ou Relíquia
          </p>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4">
        <v-card outlined rounded="lg" class="text-center px-2 fill-height">
          <img :src="`${$baseURL}/items/60625176.png`" alt="" />
          <h3 class="body-1 font-weight-medium">Baú do Final da Temporada</h3>
          <p class="body-2">
            <strong>50</strong>% de chance de obter um item cosmético<br />
            <strong>100</strong>% de chance de obter 3 lotes de pós, fichas ou transmutações<br />
            <strong>3</strong>% de chance de ganhar uma Runa Épica ou Relíquia
          </p>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4">
        <v-card outlined rounded="lg" class="text-center px-2 fill-height">
          <img :src="`${$baseURL}/items/60625177.png`" alt="" />
          <h3 class="body-1 font-weight-medium">Grande Baú do Final da Temporada</h3>
          <p class="body-2">
            <strong>90</strong>% de chance de obter um item cosmético<br />
            <strong>100</strong>% de chance de obter 6 lotes de pós, fichas ou transmutações<br />
            <strong>5</strong>% de chance de ganhar uma Runa Épica ou Relíquia
          </p>
        </v-card>
      </v-col>
    </v-row>

    <v-alert color="info" border="left" text dense>
      A classificação final dos chefes supremos recompensam com baús com taxas melhores, um título e/ou runas
      épicas/relíquias exclusivas.
    </v-alert>

    <v-row class="mb-2">
      <v-col cols="12" lg="4">
        <v-card outlined rounded="lg" class="text-center px-2 fill-height">
          <img :src="`${$baseURL}/items/60625175.png`" alt="" />
          <h3 class="body-1 font-weight-medium">Pequeno Baú do Chefe Final</h3>
          <p class="body-2">
            <strong>25</strong>% de chance de obter um item cosmético<br />
            <strong>100</strong>% de chance de obter 2 lotes de pós, fichas ou transmutações<br />
            <strong>3</strong>% de chance de ganhar uma Runa Épica ou Relíquia<br />
            <strong>1</strong>% de chance de ganhar um título exclusivo
          </p>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4">
        <v-card outlined rounded="lg" class="text-center px-2 fill-height">
          <img :src="`${$baseURL}/items/60625176.png`" alt="" />
          <h3 class="body-1 font-weight-medium">Baú do Chefe Final</h3>
          <p class="body-2">
            <strong>50</strong>% de chance de obter um item cosmético<br />
            <strong>100</strong>% de chance de obter 5 lotes de pós, fichas ou transmutações<br />
            <strong>12</strong>% de chance de ganhar uma Runa Épica ou Relíquia<br />
            <strong>1</strong>% de chance de ganhar um título exclusivo
          </p>
        </v-card>
      </v-col>
      <v-col cols="12" lg="4">
        <v-card outlined rounded="lg" class="text-center px-2 fill-height">
          <img :src="`${$baseURL}/items/60625177.png`" alt="" />
          <h3 class="body-1 font-weight-medium">Grande Baú do Chefe Final</h3>
          <p class="body-2">
            <strong>90</strong>% de chance de obter um ou dois itens cosméticos<br />
            <strong>100</strong>% de chance de obter 8 lotes de pós, fichas ou transmutações<br />
            <strong>25</strong>% de chance de ganhar uma Runa Épica ou Relíquia<br />
            <strong>1</strong>% de chance de ganhar um título exclusivo
          </p>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import PageTitle from '@/components/layout/page-title';
import SliderImage from '@/components/image/SliderImage';

export default {
  name: 'DungeonsInfo',
  components: { SliderImage, PageTitle }
};
</script>
