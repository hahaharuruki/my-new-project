const { defineConfig } = require('@vue/cli-service');

module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production'
    ? '/my-new-project/' // リポジトリ名に置き換えます
    : '/'
});