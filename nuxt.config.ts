import { defineNuxtConfig } from "nuxt/config"
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import vsharp from 'vite-plugin-vsharp'
import dotenv from 'dotenv'

dotenv.config()

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
 ssr: false,

 experimental: {
   watcher: 'parcel'
 },

 app: {
   head: {
     viewport: 'minimum-scale=1, initial-scale=1, width=device-width',
     htmlAttrs: {
       lang: 'en',
     },
     meta: [{
       name: 'description',
       content: 'Social Marketplace for Creators'
     }, ],
     link: [{
         rel: 'icon',
         href: '/favicon.ico'
       },
       {
         rel: 'apple-touch-icon',
         href: '/icons/apple-touch-icon-180x180.png'
       },
       {
         rel: 'stylesheet',
         href: 'https://cdn.jsdelivr.net/npm/instantsearch.css@7/themes/satellite-min.css'
       },
     ],
     script: [
       {
         src: `${process.env.NUXT_PUBLIC_COMMENTS_URL}/comments/embed.js`,
         async: true
       },
     ],
   },
 },

 appConfig: {
   titleSuffix: 'Meeovi',
 },

 css: [
   'video.js/dist/video-js.css',
   'videojs-share/dist/videojs-share.css',
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
   'assets/styles/sellerDashboard.css',
 ],

 modules: [
   "@nuxt/image",
   '@nuxtjs/tailwindcss',
   '@pinia/nuxt',
   "@storefront-ui/nuxt",
   '@nuxtjs/leaflet',
   //'@nuxtjs/i18n',
   //"@prisma/nuxt",
   "nuxt-security",
   (_options, nuxt) => {
     nuxt.hooks.hook('vite:extendConfig', (config) => {
       // @ts-expect-error
       config.plugins.push(vuetify({
         autoImport: true
       }))
     })
   },
 ],

 /*auth: {
   isEnabled: true,
   disableServerSideAuth: false,
   originEnvKey: 'AUTH_ORIGIN',
   baseURL: 'http://localhost:3011/api/auth',
   provider: {
     type: 'authjs',
     trustHost: false,
     defaultProvider: 'email',
     addDefaultCallbackUrl: true
   },
   sessionRefresh: {
     enablePeriodically: true,
     enableOnWindowFocus: true,
   }
 },*/

 meilisearch: {
   hostUrl:  process.env.MEILISEARCH_HOST, //required
   searchApiKey: process.env.MEILISEARCH_SEARCH_API_KEY, // required
   adminApiKey: process.env.MEILISEARCH_ADMIN_API_KEY, // optional
   instantSearch: true,
   serverSideUsage: true // default: false
},

 security: {
   headers: {
     contentSecurityPolicy: false,
     strictTransportSecurity: {
       maxAge: 0
     },
     crossOriginOpenerPolicy: false,
     crossOriginEmbedderPolicy: false,
     permissionsPolicy: false
   }
 },

 // https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/prisma-nuxt-module#configuration
 /* prisma: {
    installCli: false,
    installClient: false,
    generateClient: false,
    formatSchema: false,
    installStudio: false,
    autoSetupPrisma: true
  },

 i18n: {
  strategy: "prefix_except_default",
  defaultLocale: "en-GB",
  detectBrowserLanguage: false,
  langDir: "./src/langs/",
  vueI18n: "./config",
  locales: [
    {
      code: "en-GB",
      language: "en-GB",
      file: "en-GB.ts",
    },
    {
      code: "pl-PL",
      language: "pl-PL",
      file: "pl-PL.ts",
    },
    {
      code: "testde",
      language: "de-DE",
      file: "de-DE.ts",
      localeId: "c19b753b5f2c4bea8ad15e00027802d4",
    },
  ],
},*/

 runtimeConfig: {
   // Cloudflare Turnstile
   turnstile: {
     // This can be overridden at runtime via the NUXT_TURNSTILE_SECRET_KEY
     // environment variable.
     secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY,
   },
   public: {
     // Hasura
     websiteURL: process.env.GRAPHQL_HOST,
     websiteToken: process.env.GRAPHQL_TOKEN,

     // Supabase
     supabase: {
       url: process.env.SUPABASE_URL,
       key: process.env.SUPABASE_KEY,
     },

     // Graphql
     //websiteURL: process.env.GQL_HOST,
     //websiteToken: process.env.WEBSITE_TOKEN,

     // Authentication Secret
     authSecret: process.env.NUXT_AUTH_SECRET,

     // JWT Secret
     jwtSecret: process.env.JWT_SECRET,

     // Directus
     directus: {
       url: process.env.DIRECTUS_URL,
       auth: {
         email: process.env.NUXTUS_DIRECTUS_ADMIN_EMAIL,
         password: process.env.NUXTUS_DIRECTUS_ADMIN_PASSWORD,
         token: process.env.NUXTUS_DIRECTUS_STATIC_TOKEN
       }
     },

     indexName: process.env.MEILISEARCH_INDEX_NAME,

     meilisearch: {
       host: process.env.MEILISEARCH_HOST,
       searchApiKey: process.env.MEILISEARCH_SEARCH_API_KEY,
       options: {
         primaryKey: 'id',
         keepZeroFacets: false,
         finitePagination: false
       },
     },

     // Medusa
     medusaBackendUrl: process.env.MEDUSA_BACKEND_URL || 'http://localhost:9000',
     medusaPublishableKey: process.env.MEDUSA_PUBLISHABLE_KEY,

     // Magento 
     commerceUrl: process.env.MAGE_STORE_URL,
     commerceGraphql: process.env.MAGE_MAGENTO_GRAPHQL_URL,
     commerceApiToken: process.env.WEBSITE_TOKEN,

     // Budibase
     budibaseEmbed: process.env.BUDIBASE_EMBED || '',

     // Google Tag Manager
     gtagId: process.env.NUXT_PUBLIC_GTAG_ID,

     // Comments
     commentsUrl: process.env.NUXT_COMMENT_ID,

     // Websockets
     websocketUrl: process.env.NUXT_WEBSOCKET_URL,

     // Stripe
     stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
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
   ssr: {
     noExternal: ['vuetify']
   },
   vue: {
     template: {
       transformAssetUrls,
     },
   },
 },

 nitro: {
   prerender: {
     routes: [
       '/assets/images/*',
     ]
   },
 },

 compatibilityDate: '2025-02-22',
})