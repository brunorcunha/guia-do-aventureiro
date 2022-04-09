<template>
  <v-container>
    <page-title>Informações</page-title>
    <p class="body-1">
      Emotes são animações que seu personagem pode aprender e executar a qualquer momento. Para abrir a janela de
      emotes, aperte a tecla E. Uma vez que o emote é aprendido, você pode:
    </p>
    <ul class="mb-4 body-1">
      <li>Clicar nele para o seu personagem executar;</li>
      <li>Arrastá-lo para a barra de atalhos e acessá-lo mais rapidamente;</li>
      <li>Digitar o comando (começa com '/', indicado ao passar o mouse sobre o emote).</li>
    </ul>
    <div class="text-center mb-4">
      <img src="@/assets/resources/emotes.png" alt="" width="100%" height="1136" style="max-width: 408px" />
    </div>
    <p class="body-1">Os emotes são separados em 3 partes:</p>
    <ul class="mb-4 body-1">
      <li><strong>Emotes</strong>: Animações simples, executadas imediatamente.</li>
      <li><strong>Emotes com alvo</strong>: Animações que precisam de outro personagem para serem executadas.</li>
      <li><strong>Carinhas</strong>: Emojis normais da classe do seu personagem, não executam nenhuma animação.</li>
    </ul>
  </v-container>
</template>

<script>
import PageTitle from '@/components/layout/page-title';

export default {
  name: 'EmotesInfo',
  components: { PageTitle }
};
</script>
