<template>
  <v-navigation-drawer v-model="drawerRight" app right temporary touchless width="300">
    <v-toolbar flat>
      <v-icon class="mr-2">bi-gear</v-icon>
      Configurações
    </v-toolbar>
    <v-divider />

    <v-list subheader two-line flat>
      <v-subheader>Aparência</v-subheader>

      <v-list-item-group>
        <v-list-item @click="darkTheme = !darkTheme">
          <v-list-item-action class="mr-4">
            <v-switch :input-value="darkTheme" inset color="primary" />
          </v-list-item-action>

          <v-list-item-content>
            <v-list-item-title>Tema Escuro</v-list-item-title>
            <v-list-item-subtitle>Trocar para o tema escuro</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>

    <v-footer fixed style="border: 1px solid rgba(255, 255, 255, 0.12)">
      <v-btn block text color="secondary" @click="reset">Resetar Configurações</v-btn>
    </v-footer>
  </v-navigation-drawer>
</template>

<script>
import { sync } from 'vuex-pathify';

export default {
  name: 'Configs',
  computed: {
    drawerRight: sync('app/drawerRight'),
    darkTheme: sync('persistent/darkTheme')
  },
  watch: {
    darkTheme(val) {
      this.$vuetify.theme.dark = val;
    }
  },
  methods: {
    reset() {
      this.darkTheme = true;
    }
  }
};
</script>
