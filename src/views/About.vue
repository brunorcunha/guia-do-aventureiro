<template>
  <v-container>
    <page-title>Sobre o App</page-title>

    <p>
      O APP <strong>Guia do Aventureiro - Wakfu</strong> foi criado por um fã apaixonado que joga a muito tempo e reune
      informações, ferramentas e guias para os jogadores durante sua aventura no MMO Wakfu.
    </p>

    <h2 class="text-h5">Desenvolvedor:</h2>

    <div class="mx-n2">
      <v-list three-line>
        <v-list-item href="https://github.com/brunorcunha" target="_blank">
          <v-list-item-avatar size="64">
            <img src="https://avatars.githubusercontent.com/u/3453372?v=4" alt="" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Bruno Cunha</v-list-item-title>
            <v-list-item-subtitle><v-icon left small>bi-discord</v-icon> Bruno Cunha#0189</v-list-item-subtitle>
            <v-list-item-subtitle> <v-icon left small>bi-github</v-icon> brunorcunha </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>

    <h2 class="text-h5">Fonte:</h2>

    <div class="mx-n2">
      <v-list>
        <v-list-item href="https://methodwakfu.com/" target="_blank">
          <v-list-item-avatar>
            <img src="@/assets/method.webp" alt="" />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title>Method Wakfu</v-list-item-title>
            <v-list-item-subtitle> <v-icon left small>bi-link</v-icon> methodwakfu.com </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </div>
  </v-container>
</template>

<script>
import PageTitle from '@/components/layout/page-title';

export default {
  components: { PageTitle },
  head: {
    title: {
      inner: 'Sobre'
    }
  }
};
</script>
