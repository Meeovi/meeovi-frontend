/*import {
  defineNuxtConfig
} from 'nuxt' */
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
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
        crossorigin: 'anonymous'
      },
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

  devtools: { 
    enabled: true,
    vscode: {},
  },

  modules: [
    '@nuxt/content',
    '@nuxtjs/apollo',
    'nuxt-gtag',
    'nuxt3-leaflet',
    '@logto/nuxt',
    //'@sidebase/nuxt-auth',
    "@nuxt/image",
    'nuxt-directus',
    '@nuxtjs/tailwindcss',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
  ],

  routeRules: {
    proxy: [
      process.env.wordpressUrl,
    ],
  },

  gtag: {
    id: process.env.NUXT_PUBLIC_GTAG_ID
  },

   runtimeConfig: {
    //websiteURL: process.env.GQL_HOST,
    //websiteToken: process.env.WEBSITE_TOKEN,
    logto: {
      endpoint: process.env.NUXT_LOGTO_ENDPOINT,
      appId: process.env.NUXT_LOGTO_APP_ID,
      appSecret: process.env.NUXT_LOGTO_APP_SECRET,
      cookieEncryptionKey: process.env.NUXT_LOGTO_COOKIE_ENCRYPTION_KEY,
    },
    turnstile: {
      // This can be overridden at runtime via the NUXT_TURNSTILE_SECRET_KEY
      // environment variable.
      secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY,
    },
    public: {
      stripePk: process.env.STRIPE_PUBLIC_KEY,
      wordpressUrl: process.env.API_URL,
      wordpressToken: process.env.WORDPRESS_TOKEN,
      commerceUrl: process.env.MAGE_STORE_URL,
      commerceApiToken: process.env.WEBSITE_TOKEN,
      directus: {
        url: process.env.DIRECTUS_URL,
        auth: {
          email: process.env.NUXTUS_DIRECTUS_ADMIN_EMAIL,
          password: process.env.NUXTUS_DIRECTUS_ADMIN_PASSWORD,
          token: process.env.NUXTUS_DIRECTUS_STATIC_TOKEN,
        }
      }
    },
    wpApiUsername: process.env.WP_API_USERNAME,
    wpApiPassword: process.env.WP_API_PASSWORD,
  },

  apollo: {
    authType: "Bearer",
    authHeader: "Authorization",
    tokenStorage: "cookie",
    clients: {
      /*default: {
        tokenName: "apollo-token",
        httpEndpoint: process.env.MAGE_MAGENTO_GRAPHQL_URL,
        httpLinkOptions: {
          headers: {
            'Authorization': `Bearer ${process.env.WEBSITE_TOKEN}`,
            'content-type': 'application/json'
          }
        } 
      }, */
      cms: {
        tokenName: "apollo-token",
        httpEndpoint: process.env.API_URL_GRAPHQL,
        httpLinkOptions: {
          headers: {
            'Authorization': `Bearer ${process.env.WORDPRESS_TOKEN}`,
            'content-type': 'application/json'
          }
        } 
      }, 
    /*  commerce: {
        httpEndpoint: process.env.VDURE_URL
      },*/
    },
  },

  logto: {
    pathnames: {
      signIn: '/login',
      signOut: '/logout',
      callback: '/auth/callback',
    },
  },

  build: {
    transpile: [
      'vuetify',
      'nuxt-graphql-request',
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