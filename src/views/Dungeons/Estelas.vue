<template>
  <v-container>
    <page-title>Estelas</page-title>

    <div class="d-flex justify-center mb-4">
      <img src="/img/estela1.png" alt="" class="mx-1" />
      <img src="/img/estela2.png" alt="" class="mx-1" />
      <img src="/img/estela3.png" alt="" class="mx-1" />
    </div>

    <p class="body-1">
      Estela é uma mecânica de calabouço que pode ser ativada para aumentar a dificuldade e ter a chance de obter
      sublimações. Para ativá-la é preciso Escalpo de Pandaride:
    </p>

    <div class="d-flex justify-center mb-4">
      <v-card outlined class="text-center" rounded="lg">
        <div class="primary mb-1 px-2 caption">Escalpo de Pandaride</div>
        <img src="https://static.ankama.com/wakfu/portal/game/item/115/53127283.png" alt="" class="mx-2" />
      </v-card>
    </div>

    <p class="body-1">
      Alguns calabouços possuem 3 estelas inativas. Quando ativadas, elas adicionam dificuldade ao chefe do calabouço e
      permite que sublimações sejam obtidas. Um bônus de sabedoria e prospecção também é concedido aos personagens, de
      acordo com a quantidade de estelas ativadas.
    </p>

    <div class="d-flex justify-center mb-4">
      <img :src="`${$baseURL}/states/6078.png`" alt="" class="mx-1" />
      <img :src="`${$baseURL}/states/6079.png`" alt="" class="mx-1" />
      <img :src="`${$baseURL}/states/6080.png`" alt="" class="mx-1" />
    </div>

    <p class="body-1">
      Cada calabouço possui mecânicas diferentes para cada estela, assim como drop de sublimações diferentes. Podem ser
      ativadas individualmente, liberando a mecânica do chefe e o drop da sublimação correspondente. As estelas não
      podem ser ativadas abaixo da Stasis 11.
    </p>
  </v-container>
</template>

<script>
import PageTitle from '@/components/layout/page-title';

export default {
  name: 'EstelasInfo',
  components: { PageTitle }
};
</script>
