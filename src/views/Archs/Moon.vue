<template>
  <v-container>
    <page-title>Arquimonstros de Moon</page-title>

    <p class="body-1">
      Os arquimonstros de moon são criaturas especiais, capturadas pelos discípulos de Otomai. Eles concordarão em
      liberar a criatura por 1 hora em troca de vários recursos, permitindo que você tente a sorte lutando contra eles!
    </p>
    <p class="body-1">
      Em combate, o Arquimonstro é acompanhado por tantas criaturas de sua família de monstros quantos jogadores em
      campo.
    </p>
    <p class="body-1">
      Se você derrotá-los, você é recompensado com seu recurso especial, além de ter a chance de dropar armas poderosas
      que podem ser melhoradas através de craft.
    </p>
    <p class="body-1">
      Tenha cuidado, você só pode dropar em um arquimonstro uma vez por hora. Você pode recomeçar a luta quantas vezes
      quiser enquanto estiver no limite de tempo de 1 hora! Se o cronômetro chegar a 0 enquanto você estiver em combate,
      a luta não termina.
    </p>

    <h2 class="text-h5">Lista de arquimonstros:</h2>

    <div class="mx-n2">
      <v-list dense>
        <v-divider />

        <v-list-item to="/monstro/3868">
          <v-list-item-content class="body-2">Gengas Kin</v-list-item-content>
        </v-list-item>
        <v-divider />

        <v-list-item to="/monstro/3867">
          <v-list-item-content class="body-2">Koko Zambianko</v-list-item-content>
        </v-list-item>
        <v-divider />

        <v-list-item to="/monstro/3972">
          <v-list-item-content class="body-2">Croco-Monsieur, o Dandy</v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </v-container>
</template>

<script>
import PageTitle from '@/components/layout/page-title';

export default {
  name: 'ArchsMoon',
  components: { PageTitle }
};
</script>
