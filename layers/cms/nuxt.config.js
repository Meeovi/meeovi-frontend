// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['nuxt-graphql-client'],

  runtimeConfig: {
    public: {
      // Wordpress + Woocommerce
      wordpressUrl: process.env.API_URL,
      wordpressToken: process.env.WORDPRESS_TOKEN,
      commerceUrl: process.env.MAGE_STORE_URL,
      commerceApiToken: process.env.WEBSITE_TOKEN,

      // Graphql

      GQL_HOST: process.env.API_URL_GRAPHQL,

      // Directus
      /*directus: {
        url: process.env.DIRECTUS_URL,
        auth: {
          email: process.env.NUXTUS_DIRECTUS_ADMIN_EMAIL,
          password: process.env.NUXTUS_DIRECTUS_ADMIN_PASSWORD,
          token: process.env.NUXTUS_DIRECTUS_STATIC_TOKEN,
        }
      }*/
    },
    wpApiUsername: process.env.WP_API_EMAIL,
    wpApiPassword: process.env.WP_API_PASSWORD,
  },

  /*apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.API_URL_GRAPHQL,
        httpLinkOptions: {
          headers: {
            'Authorization': `Bearer ${process.env.WORDPRESS_TOKEN}`,
            'username': process.env.WP_API_USERNAME,
            'password': process.env.WP_API_PASSWORD,
            'content-type': 'application/json'
          }
        }
      },
    },
  },*/

  compatibilityDate: '2024-04-03',
})