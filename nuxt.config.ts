// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/strapi',
    '@nuxtjs/robots'
  ],
  strapi: {
    url: 'https://api.krolmic.dev',
  },
  robots: {
    rules: {
      UserAgent: '*',
      Disallow: '/'
    }
  }
});
