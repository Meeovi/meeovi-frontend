/*import {
  defineNuxtConfig
} from 'nuxt' */

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: [
    "@shopware-pwa/composables-next/nuxt-layer",
    
  ],
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

  runtimeConfig: {
    public: {
      shopware: {
        shopwareEndpoint: process.env.NUXT_SHOPWARE_SHOPWARE_ENDPOINT,
        shopwareAccessToken: process.env.NUXT_PUBLIC_SHOPWARE_SHOPWARE_ACCESS_TOKEN,
      },
    },
  },

  routeRules: {
    "/": {
      isr: 60 * 60 * 24,
    },
    "/commerce/cart": {
      ssr: false,
      headers: {
        "Cache-Control": "no-cache, no-store, must-revalidate",
      },
    },
    "/commerce/checkout/**": {
      ssr: false,
    },
    "/admin/auth/login": {
      ssr: false,
    },
    "/admin/auth/register": {
      ssr: false,
    },
    "/admin/auth/reset-password": {
      ssr: false,
    },
    "/commerce/wishlist": {
      ssr: false,
    },
    "/admin/user/account": {
      ssr: false,
    },
    "/admin/user/account/**": {
      ssr: false,
    },
    "/search": {
      ssr: false,
    },
    "/search/**": {
      ssr: false,
    },
    "/**": {
      isr: 60 * 60 * 24,
    },
  },

  typescript: {
    // typeCheck: true,
    strict: true,
  },

  modules: [
    '@nuxt/content',
    'nuxt-meilisearch',
    'nuxt-directus',
    '@nuxtjs/apollo',
    'nuxt-gtag',
    //'@sidebase/nuxt-auth',
    'dayjs-nuxt',
    '@nuxtjs/tailwindcss',
    "@nuxtjs/i18n",
    //"@shopware-pwa/nuxt3-module",
    "@shopware-pwa/cms-base",
  ],

  devtools: { enabled: true },

  vueuse: {
    ssrHandlers: true,
  },

  nitro: {
    compressPublicAssets: true,
  },

  directus: {
    url: process.env.DIRECTUS_URL,
    auth: {
      email: process.env.DIRECTUS_EMAIL,
      password: process.env.DIRECTUS_PASSWORD,
      token: process.env.DIRECTUS_TOKEN,
    }
  },

  meilisearch: {
    hostUrl: process.env.HOSTURL,
    searchApiKey: process.env.SEARCH_APIKEY,
    adminApiKey: process.env.ADMIN_APIKEY,
    instantSearch: true,
    serverSideUsage: false,
    instantSearch: {
      theme: 'algolia'
    },
    clientOptions: {
      placeholderSearch: true, // default
      paginationTotalHits: 50, // default
      finitePagination: true, // default
      primaryKey: undefined, // default
      keepZeroFacets: false, // default
    },
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
   }, 

   runtimeConfig: {
     websiteURL: process.env.GQL_HOST,
     websiteToken: process.env.WEBSITE_TOKEN,
   },*/

  apollo: {
    authType: "Bearer",
    authHeader: "Authorization",
    tokenStorage: "cookie",
    clients: {
      default: {
        tokenName: "apollo-token",
        httpEndpoint: process.env.DIRECTUS_GRAPHQL,
      },
      vendure: {
        httpEndpoint: process.env.SHOP_API,
      },
      hasura: {
        httpEndpoint: process.env.GQL_HOST,
        httpLinkOptions: {
            headers: {
              'x-hasura-admin-secret': process.env.GQL_KEY,
            }
          }/**/
      }
    },
  },

  i18n: {
    strategy: "prefix_except_default",
    defaultLocale: "en-GB",
    detectBrowserLanguage: false,
    langDir: "./i18n/src/langs/",
    vueI18n: "./i18n/config",
    compilation: {
      jit: false,
    },
    locales: [
      {
        code: "en-GB",
        iso: "en-GB",
        file: "en-GB.ts",
      },
      {
        code: "pl-PL",
        iso: "pl-PL",
        file: "pl-PL.ts",
      },
      {
        code: "de-DE",
        iso: "de-DE",
        file: "de-DE.ts",
      },
    ],
    experimental: {
      jsTsFormatResource: true,
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