import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import pt from 'vuetify/es5/locale/pt';

Vue.use(Vuetify);

const theme = {
  primary: '#009688',
  accent: '#3ba4a7',
  secondary: '#CA4699',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
};

export default new Vuetify({
  theme: {
    dark: true,
    options: {
      customProperties: true
    },
    themes: {
      light: theme,
      dark: theme
    }
  },
  lang: {
    locales: { pt },
    current: 'pt'
  },
  icons: {
    iconfont: 'mdi'
  }
});
