<template>
  <v-container>
    <page-title>Ferramentas</page-title>

    <p>
      Abaixo listados as ferramentas criadas pela comunidade de jogadores de Wakfu. Nenhuma das ferramentas abaixo são
      oficiais ou tem apoio da Ankama. Utilize apenas para referencia.
    </p>

    <h2 class="text-h5">Builds</h2>

    <div class="mx-n2 mb-4">
      <v-list three-line>
        <v-list-item href="https://zenithwakfu.com/builder" target="_blank">
          <v-list-item-content>
            <div class="text-center">
              <img
                src="https://zenithwakfu.com/images/header/zenith-logo.webp"
                alt=""
                style="max-width: 90%; max-height: 75px"
              />
            </div>
            <v-list-item-title>Zenith</v-list-item-title>
            <v-list-item-subtitle>https://zenithwakfu.com/builder</v-list-item-subtitle>
            <p class="font-weight-light mb-0 body-2">
              Ferramenta bem completa para criação de builds de qualquer classe.
            </p>
          </v-list-item-content>
        </v-list-item>

        <v-divider />

        <v-list-item href="https://wakfu-gear.netlify.app/" target="_blank">
          <v-list-item-content>
            <div class="text-center">
              <img
                src="https://wakfu-gear.netlify.app/static/logo.png"
                alt=""
                style="max-width: 90%; max-height: 75px"
              />
            </div>
            <v-list-item-title>Wakfu Gear</v-list-item-title>
            <v-list-item-subtitle>https://wakfu-gear.netlify.app</v-list-item-subtitle>
            <p class="font-weight-light mb-0 body-2">Ferramenta para comparação de itens e equipamentos.</p>
          </v-list-item-content>
        </v-list-item>

        <v-divider />

        <v-list-item href="https://companion.methodwakfu.com/" target="_blank">
          <v-list-item-content>
            <div class="text-center">
              <img
                src="https://companion.methodwakfu.com/static/media/logo2.56268a0f.png"
                alt=""
                style="max-width: 90%; max-height: 75px"
              />
            </div>
            <v-list-item-title>Companion</v-list-item-title>
            <v-list-item-subtitle>https://companion.methodwakfu.com</v-list-item-subtitle>
            <p class="font-weight-light mb-0 body-2">Ferramenta para pesquisa de sublimações.</p>
          </v-list-item-content>
        </v-list-item>

        <v-divider />
      </v-list>
    </div>

    <h2 class="text-h5">Craft</h2>

    <div class="mx-n2 mb-4">
      <v-list three-line>
        <v-list-item href="https://craftkfu.waklab.fr/" target="_blank">
          <v-list-item-content>
            <div class="text-center">
              <img
                src="https://craftkfu.waklab.fr/img/logo.d232731e.png"
                alt=""
                style="max-width: 90%; max-height: 75px"
              />
            </div>
            <v-list-item-title>Craftkfu</v-list-item-title>
            <v-list-item-subtitle>https://craftkfu.waklab.fr</v-list-item-subtitle>
            <p class="font-weight-light mb-0 body-2">
              Ferramenta para verificar os ingredientes de todas as receitas do jogo.
            </p>
          </v-list-item-content>
        </v-list-item>

        <v-divider />
      </v-list>
    </div>

    <h2 class="text-h5">Tutoriais</h2>

    <div class="mx-n2 mb-4">
      <v-list three-line>
        <v-list-item href="https://methodwakfu.com/" target="_blank">
          <v-list-item-content>
            <div class="text-center">
              <img
                src="https://methodwakfu.com/wp-content/uploads/2020/03/logo-method-reborn.png"
                alt=""
                style="max-width: 90%; max-height: 75px"
              />
            </div>
            <v-list-item-title>Method Wakfu</v-list-item-title>
            <v-list-item-subtitle>https://methodwakfu.com</v-list-item-subtitle>
            <p class="font-weight-light mb-0 body-2">
              Site em francês com diversos tutoriais e boas informações do jogo.
            </p>
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
      inner: 'Tools'
    }
  }
};
</script>
