const dev = process.env.NODE_ENV === 'development';

module.exports = {
  publicPath: '/',
  productionSourceMap: false,
  transpileDependencies: ['vuetify'],
  pluginOptions: {
    i18n: {
      locale: 'pt-br',
      fallbackLocale: 'pt-br',
      localeDir: 'locales',
      enableInSFC: false
    }
  },
  configureWebpack: {
    optimization: { minimize: !dev },
    output: { filename: dev ? '[name].[hash].js' : '[name].[contenthash].js' },
    devtool: dev ? 'source-map' : 'none'
  },
  pwa: {
    name: 'Guia do Aventureiro - Wakfu',
    msTileColor: '#ffffff',
    themeColor: '#A157A8',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
    manifestOptions: {
      name: 'Guia do Aventureiro - Wakfu',
      short_name: 'Guia do Aventureiro',
      orientation: 'portrait',
      themeColor: '#A157A8'
    }
  }
};
