<template>
  <v-container>
    <page-title>Arquimonstros</page-title>
    <p>
      Em cada zona, um arquimonstro aparece com uma frequência rara e apenas a cada x horas (o máximo é 4 arquimonstros
      iguais por vez em uma área).
    </p>
    <p>Arquimonstros têm um mecanismo especial de spawn, eles só aparecem entre duas missões ambientais.</p>
    <p>
      Antes de mais nada, você deve saber que entre duas missões ambientais, geralmente há um tempo de 1 minuto. No
      entanto, se um arquimonstro aparecer, ele aparecerá em algum lugar na área e um minuto adicional se passará antes
      que a nova missão ambiental comece.
    </p>
    <v-alert color="info" border="left" text dense>
      Um Arquimonstro aparece a cada x horas a partir do momento em que o último apareceu, não a partir do momento em
      que o último foi morto.
    </v-alert>
    <p>
      Arquimonstros podem dropar itens específicos. Entre eles é possível dropar o épico. Os épicos podem ser obtidos de
      várias maneiras:
    </p>
    <p>Se o épico for dropado pelo arquimonstro: também pode ser obtido pelo chefe do calabouço (boss da dungeon).</p>
    <p>Se o épico não puder ser obtido do arquimonstro: ele só poderá ser obtido de monstros e dominantes da horda.</p>
    <p>
      Normalmente eles não estão sozinhos, eles vêm em grupos de 6 monstros mais o arquimonstro. Arquimonstros
      geralmente são monstros tão fortes quanto o chefe do calabouço (boss da dungeon).
    </p>
  </v-container>
</template>

<script>
import PageTitle from '@/components/layout/page-title';

export default {
  name: 'ArchsInfo',
  components: { PageTitle }
};
</script>
