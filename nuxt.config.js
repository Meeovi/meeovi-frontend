/*import {
  defineNuxtConfig
} from 'nuxt' */

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      viewport: 'minimum-scale=1, initial-scale=1, width=device-width',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [{
          name: 'description',
          content: 'Social Marketplace for Creators'
        },
      ],
      link: [{
          rel: 'icon',
          href: '/favicon.ico'
        },
        {
          rel: 'apple-touch-icon',
          href: '/icons/apple-touch-icon-180x180.png'
        },
      ],
      script: [{
        src: 'https://platform-api.sharethis.com/js/sharethis.js#property=63155c574a688f00124a59c2&product=sticky-share-buttons',
        async: 'async'
      }, ],
    },
  },

  appConfig: {
    titleSuffix: 'Meeovi',
  },
  css: [
    'assets/web/assets/mobirise-icons2/mobirise2.css',
    'assets/web/assets/mobirise-icons/mobirise-icons.css',
    'assets/bootstrap/css/bootstrap.min.css',
    'assets/tether/tether.min.css',
    'assets/bootstrap/css/bootstrap-grid.min.css',
    'assets/bootstrap/css/bootstrap-reboot.min.css',
    'assets/parallax/jarallax.css',
    'assets/theme/css/style.css',
    'assets/gallery/style.css',
    'assets/mobirise/css/mbr-additional.css',
    'vuetify/lib/styles/main.sass',
    //'@mdi/font/css/materialdesignicons.min.css',
    '@fortawesome/fontawesome-svg-core/styles.css',
    'assets/styles/styles.css',
  ],

  typescript: {
    typeCheck: true,
  },

  modules: [
    [
      '@nuxtjs/i18n',
      {
        locales: [
          {
            code: 'en',
            file: 'en.json',
          },
        ],
        lazy: true,
        langDir: 'lang',
        defaultLocale: 'en',
      },
    ],
    '@nuxt/content',
    'nuxt-directus',
    '@nuxtjs/apollo',
    'nuxt-gtag',
    //'@sidebase/nuxt-auth',
    '@nuxtjs/tailwindcss',
  ],

  directus: {
    url: process.env.DIRECTUS_URL,
    auth: {
      email: process.env.DIRECTUS_EMAIL,
      password: process.env.DIRECTUS_PASSWORD,
      token: process.env.DIRECTUS_TOKEN,
    }
  },

  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID
  },

  /* auth: {
     provider: {
       type: 'authjs'
     },
     strategies: {
       keycloak: {
         scheme: 'oauth2',
         endpoints: {
           authorization: process.env.KEYCLOAK_AUTHORIZATION_URL,
           token: process.env.KEYCLOAK_TOKEN_URL,
           userInfo: process.env.KEYCLOAK_USER_INFO_URL,
           logout: process.env.KEYCLOAK_LOGOUT_URL,
         },
         responseType: 'token id_token',
         tokenType: 'Bearer',
         redirectUri: process.env.BASE_URL || '/',
         clientId: process.env.KEYCLOAK_CLIENT_ID,
       },
     },
     redirect: {
       login: '/login',
       logout: '/',
       callback: '/login',
       home: '/',
     },
   }, */

   runtimeConfig: {
    websiteURL: process.env.GQL_HOST,
    websiteToken: process.env.WEBSITE_TOKEN,
  },

  apollo: {
    authType: "Bearer",
    authHeader: "Authorization",
    tokenStorage: "cookie",
    clients: {
      default: {
        tokenName: "apollo-token",
        httpEndpoint: process.env.GRAPHQL_HOST,
        httpLinkOptions: {
          headers: {
            'x-hasura-admin-secret': process.env.GRAPHQL_TOKEN,
            'content-type': 'application/json'
          }
        } /**/
      },
      cms: {
        httpEndpoint: process.env.DIRECTUS_GRAPHQL
      },
      wordpress: {
        httpEndpoint: process.env.CMS_GRAPHQL
      }
    },
  },
  
  build: {
    transpile: [
      'vuetify',
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/pro-solid-svg-icons",
      "@fortawesome/pro-regular-svg-icons",
      "@fortawesome/free-brands-svg-icons",
    ],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})