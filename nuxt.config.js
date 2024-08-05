/*import {
  defineNuxtConfig
} from 'nuxt' */
import vuetify, {
  transformAssetUrls
} from 'vite-plugin-vuetify'
import { useLayers } from 'nuxt-layers-utils'

const layers = useLayers(__dirname, {
  cms: 'layers/cms',
  commerce: 'layers/commerce',
})


// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: layers.extends(),
  alias: layers.alias('#'),
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
          href: "//cdn-images.mailchimp.com/embedcode/classic-061523.css",
        },
      ],
      script: [
        /*{
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
          src: "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js",
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
    'assets/styles/sellerDashboard.css',
    'assets/styles/PriceSlider.css',
    'assets/styles/searchTheme.css',
  ],

  modules: [
    //'@nuxtjs/apollo',
    'nuxt3-leaflet',
    "@nuxt/image",
    '@nuxtjs/algolia',
    '@nuxtjs/tailwindcss',
    '@sidebase/nuxt-auth',
    'nuxt-echarts',
    "nuxt-disqus",
    'nuxt-schema-org', // https://nuxtseo.com/schema-org/guides/quick-setup
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({
          autoImport: true
        }))
      })
    },
  ],

  disqus: {
    shortname: process.env.DISQUS_SHORTNAME,
  },

  echarts: {
    renderer: ['svg', 'canvas'],
    charts: ['BarChart', 'LineChart', 'PieChart'],
    components: ['DatasetComponent', 'GridComponent', 'TooltipComponent'],
    features: ['LabelLayout', 'UniversalTransition']
  },

  auth: {
    isEnabled: true,
    disableServerSideAuth: false,
    globalAppMiddleware: false,
    baseURL: `http://localhost:3011/api/auth`,
    provider: {
      type: 'authjs',
      trustHost: false,
      defaultProvider: 'credentials',
      addDefaultCallbackUrl: true
    },
    sessionRefresh: {
      enablePeriodically: true,
      enableOnWindowFocus: true,
    }
  },/**/

  runtimeConfig: {
    // Authentication Secret
    authSecret: process.env.NUXT_AUTH_SECRET,

    // Elasticsearch
    searchHost: process.env.ELASTICSEARCH_URL,
    searchKey: process.env.ELASTICSEARCH_APP_SEARCH_KEY,
    indexName: process.env.ELASTICSEARCH_INDEX_NAME,

    // Cloudflare Turnstile
    turnstile: {
      // This can be overridden at runtime via the NUXT_TURNSTILE_SECRET_KEY
      // environment variable.
      secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY,
    },
    public: {
      // Budibase
      budibaseEmbed: process.env.BUDIBASE_EMBED || '',

      // Google Tag Manager
      gtagId: process.env.NUXT_PUBLIC_GTAG_ID,

      // Mailchimp
      mailchimpId: process.env.MAILCHIMP_ID,

      // Cloudinary
      cloudinaryCloudName: process.env.CLOUDINARY_CLOUD_NAME,
    },
  },

  algolia: {
    apiKey: process.env.ALGOLIA_API_KEY,
    applicationId: process.env.ALGOLIA_APPLICATION_ID,
    globalIndex: process.env.ALGOLIA_INDEX_NAME,
    lite: true,
    cache: false,
    instantSearch: {
      theme: 'algolia'
    },
    useFetch: false,
    crawler: {
      apiKey: process.env.ALGOLIA_CRAWLER_ID,
      indexName: process.env.ALGOLIA_INDEX_NAME,
      meta: ['title', 'description'],
      include: () => true
    },
    recommend: true,
  },

 /* apollo: {
    clients: {
      default: {
        httpEndpoint: 'http://localhost:4000/graphql',
        tokenStorage: "cookie",
      },
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
    }
  },

  compatibilityDate: '2024-07-14'
})