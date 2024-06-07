/*import {
  defineNuxtConfig
} from 'nuxt' */
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

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
      script: [/*{
        src: 'https://platform-api.sharethis.com/js/sharethis.js#property=63155c574a688f00124a59c2&product=sticky-share-buttons',
        async: 'async',
        crossorigin: 'anonymous'
      }, 
      {
        src: 'https://js.stripe.com/v3/',
        defer: true,
        crossorigin: 'anonymous'
      }*/
      {
        src: 'https://app2.weatherwidget.org/js/?id=ww_be4a6c6ecdcf1',
      }
    ],
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
    'assets/styles/mobile.css',
    'assets/styles/styles.css',
    //'assets/styles/PriceSlider.css',
  ],

  typescript: {
    typeCheck: true,
  },

  devtools: { 
    enabled: true,
    vscode: {},
  },

  modules: [
    '@nuxt/content',
    'nuxt-directus',
    '@nuxtjs/apollo',
    'nuxt-gtag',
    'nuxt3-leaflet',
    //'@sidebase/nuxt-auth',
    "@nuxt/image",
    '@nuxtjs/kinde',
    '@nuxtjs/algolia',
    '@nuxtjs/tailwindcss',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],

  /*directus: {
    url: process.env.DIRECTUS_URL,
    auth: {
      email: process.env.NUXTUS_DIRECTUS_ADMIN_EMAIL,
      password: process.env.NUXTUS_DIRECTUS_ADMIN_PASSWORD,
      token: process.env.NUXTUS_DIRECTUS_STATIC_TOKEN,
    }
  },*/

  algolia: {
    instantSearch: {
      theme: 'algolia'
    }
  },

  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID
  },

  kinde: {
    // This is true by default and adds 'auth-logged-in' and 'auth-logged-out'
    // middleware to your Nuxt application.
    // 
    // middleware: false,
    //
    // enable the debug `/api/health` endpoint
    // debug: true,
  },

   runtimeConfig: {
    //websiteURL: process.env.GQL_HOST,
    //websiteToken: process.env.WEBSITE_TOKEN,
    turnstile: {
      // This can be overridden at runtime via the NUXT_TURNSTILE_SECRET_KEY
      // environment variable.
      secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY,
    },
    public: {
      stripePk: process.env.STRIPE_PUBLIC_KEY,
      wordpressUrl: process.env.wordpressUrl,
    },
  },

  apollo: {
    authType: "Bearer",
    authHeader: "Authorization",
    tokenStorage: "cookie",
    clients: {
    /*  default: {
        tokenName: "apollo-token",
        httpEndpoint: process.env.GRAPHQL_HOST,
        httpLinkOptions: {
          headers: {
            'x-hasura-admin-secret': process.env.GRAPHQL_TOKEN,
            'content-type': 'application/json'
          }
        } 
      }, */
      cms: {
        httpEndpoint: process.env.wordpressUrl
      },
    /*  commerce: {
        httpEndpoint: process.env.VDURE_URL
      },*/
    },
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
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
})