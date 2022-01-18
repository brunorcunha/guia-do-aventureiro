<template>
  <v-footer v-if="deferredPrompt" fixed padless>
    <v-card color="primary" flat tile outlined width="100%">
      <v-list-item class="px-2">
        <v-list-item-avatar size="64" class="my-0 mr-2">
          <img src="@/assets/icon_54.png" alt="" />
        </v-list-item-avatar>
        <v-list-item-content class="body-2 white--text">Acesse o app de forma simples e rápida.</v-list-item-content>
      </v-list-item>
      <v-card-actions class="pt-0">
        <v-spacer />
        <v-btn small text color="gray" @click="deferredPrompt = null">Dispensar</v-btn>
        <v-btn rounded small depressed color="white" class="primary--text px-4" @click="install">Instalar</v-btn>
      </v-card-actions>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: 'InstallPwa',
  data: () => ({
    deferredPrompt: null
  }),
  async mounted() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault();
      this.deferredPrompt = e;
    });
    window.addEventListener('appinstalled', () => {
      this.deferredPrompt = null;
      console.log('appinstalled');
    });
  },
  methods: {
    install() {
      this.deferredPrompt.prompt();
      this.deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
          this.deferredPrompt = null;
        } else {
          console.log('User dismissed the A2HS prompt');
        }
      });
    }
  }
};
</script>
