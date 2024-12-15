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
      script: [{
          src: `https://platform-api.sharethis.com/js/sharethis.js#property=${process.env.NUXT_PROJECT_ID}&product=sticky-share-buttons`,
          async: true
        },
        {
          src: `https://www.paypal.com/sdk/js?client-id=${process.env.PAYPAL_CLIENT_ID}&buyer-country=US&currency=USD&components=buttons,card-fields&enable-funding=venmo`,
          async: true
        },
        {
          src: `${process.env.NUXT_PUBLIC_COMMENTS_URL}/comments/embed.js`,
          async: true
        },
        {
          src: `https://app3.weatherwidget.org/js/?id=ww_217f04fb5b512`,
          async: true
        },
      ],
    },
  },

  appConfig: {
    titleSuffix: 'Meeovi',
  },

  components: {
    dirs: [
      '~/components/search/atoms',
      '~/components/search/molecules',
      '~/components/search/organisms'
    ]
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
    '~/assets/css/typography.css',
    '~/assets/css/spacing.css',
    '~/assets/css/shadow.css',
    '~/assets/css/utilities.css',
    'assets/styles/mobile.css',
    'assets/styles/styles.css',
    'assets/styles/sellerDashboard.css',
    'assets/styles/PriceSlider.css',
    'assets/styles/searchTheme.css',
  ],

  modules: [
    "@nuxt/image",
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    "@storefront-ui/nuxt",
    'nuxt-vuefire',
    '@nuxtjs/leaflet',
    //"@prisma/nuxt",
    '@nuxtjs/seo',
    "nuxt-security",
    '@nuxtjs/partytown',
    '@nuxt/scripts',
    'nuxt-booster',
    '@nuxtjs/algolia',
    'nuxt-link-checker',
    '@nuxtjs/sitemap',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({
          autoImport: true
        }))
      })
    },
  ],

  site: { 
    url: process.env.NUXT_PUBLIC_SITE_URL, 
    name: process.env.NUXT_PUBLIC_SITE_NAME
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

  booster: {
    optimizeSSR: {
      cleanPreloads: true,
      cleanPrefetches: true,
      inlineStyles: true
    },

    detection: {
      performance: true,
      browserSupport: true,
      battery: true
    },

    performanceMetrics: {
      timing: {
        fcp: 800,
        dcl: 1200
      }
    },

    /**
     * IntersectionObserver rootMargin for Compoennts and Assets
     */
    lazyOffset: {
      component: '0%',
      asset: '0%'
    }
  },

  image: {
    screens: {
      default: 320,
      xxs: 480,
      xs: 576,
      sm: 768,
      md: 996,
      lg: 1200,
      xl: 1367,
      xxl: 1600,
      '4k': 1921
    },

    domains: ['*'],

    alias: {
      youtube: 'https://img.youtube.com',
      vimeo: 'https://i.vimeocdn.com',
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
      apiKey: process.env.ALGOLIA_CRAWLER_ID  || '',
      indexName: process.env.ALGOLIA_INDEX_NAME || '',
      meta: ['title', 'description'],
      include: () => true
    },
    recommend: true,
  },

  // https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/prisma-nuxt-module#configuration
  /* prisma: {
     installCli: false,
     installClient: false,
     generateClient: false,
     formatSchema: false,
     installStudio: false,
     autoSetupPrisma: true
   },*/

  // https://nuxtseo.com/robots
  robots: {
    groups: [{
      userAgent: ['*'],
      disallow: ['/account'],
      allow: ['/pages/*'],
      comment: 'Allow Google AdsBot to index the login page but no-admin pages'
    }, ]
  },

  /*auth: {
    isEnabled: true,
    disableServerSideAuth: false,
    globalAppMiddleware: false,
    originEnvKey: 'AUTH_ORIGIN',
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
  },*/

  vuefire: {
    emulators: {
      // uncomment this line to run the application in production mode without emulators during dev
      // enabled: false,
      auth: {
        options: {
          disableWarnings: true,
        },
      },
    },
    auth: {
      enabled: true,
      sessionCookie: false,
    },

    appCheck: {
      provider: 'ReCaptchaV3',
      // site key, NOT secret key
      key: process.env.FIREBASE_APPCHECK_DEBUG_TOKEN,
      isTokenAutoRefreshEnabled: true,
    },

    config: {
      apiKey: process.env.NUXT_FIREBASE_API_KEY,
      authDomain: process.env.NUXT_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NUXT_FIREBASE_PROJECT_ID,
      storageBucket: process.env.NUXT_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: process.env.NUXT_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.NUXT_FIREBASE_APP_ID,
      measurementId: process.env.NUXT_MEASUREMENT_ID,
    },
  },

  runtimeConfig: {
    // Elasticsearch
    searchHost: process.env.ELASTICSEARCH_URL,
    searchKey: process.env.ELASTICSEARCH_APP_SEARCH_KEY,
    indexName: process.env.ELASTICSEARCH_INDEX_NAME,
    api_key: process.env.ELASTICSEARCH_API_KEY,
    id: process.env.ELASTICSEARCH_ID,
    username: process.env.ELASTICSEARCH_USERNAME,
    password: process.env.ELASTICSEARCH_PASSWORD,

    // Cloudflare Turnstile
    turnstile: {
      // This can be overridden at runtime via the NUXT_TURNSTILE_SECRET_KEY
      // environment variable.
      secretKey: process.env.NUXT_TURNSTILE_SECRET_KEY,
    },
    /*logto: {
      endpoint: process.env.NUXT_LOGTO_ENDPOINT,
      appId: process.env.NUXT_LOGTO_APP_ID,
      appSecret: process.env.NUXT_LOGTO_APP_SECRET,
      cookieEncryptionKey: process.env.NUXT_LOGTO_COOKIE_ENCRYPTION_KEY,
      customRedirectBaseUrl: process.env.NUXT_LOGTO_REDIRECT_URL
    },*/
    public: {
      // Hasura
      websiteURL: process.env.GRAPHQL_HOST,
      websiteToken: process.env.GRAPHQL_TOKEN,

      //Algolia
      appId: process.env.ALGOLIA_APPLICATION_ID,
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: process.env.ALGOLIA_INDEX_NAME,

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
          token: process.env.NUXTUS_DIRECTUS_STATIC_TOKEN,
        }
      },

      meilisearch: {
        host: process.env.MEILISEARCH_HOST,
        searchApiKey: process.env.MEILISEARCH_SEARCH_API_KEY,
        options: {
          primaryKey: 'id',
          keepZeroFacets: false,
          finitePagination: false
        }
      },

      // Magento 
      commerceUrl: process.env.MAGE_STORE_URL,
      commerceGraphql: process.env.MAGE_MAGENTO_GRAPHQL_URL,
      commerceApiToken: process.env.WEBSITE_TOKEN,

      // Firebase
      firebaseApiKey: process.env.NUXT_FIREBASE_API_KEY,
      firebaseAuthDomain: process.env.NUXT_FIREBASE_AUTH_DOMAIN,
      firebaseProjectId: process.env.NUXT_FIREBASE_PROJECT_ID,
      firebaseStorageBucket: process.env.NUXT_FIREBASE_STORAGE_BUCKET,
      firebaseMessagingSenderId: process.env.NUXT_FIREBASE_MESSAGING_SENDER_ID,
      firebaseAppId: process.env.NUXT_FIREBASE_APP_ID,
      measurementId: process.env.NUXT_MEASUREMENT_ID,

      // Budibase
      budibaseEmbed: process.env.BUDIBASE_EMBED || '',

      // Google Tag Manager
      gtagId: process.env.NUXT_PUBLIC_GTAG_ID,

      // Comments
      commentsUrl: process.env.NUXT_COMMENT_ID,
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
      'firebaseui',
      'firebase/auth',
      'firebase/app'
    ],
  },  

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
    optimizeDeps: {
      include: ['algoliasearch/lite', 'firebase/auth', 'firebase/app'],
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
    }
  },

  compatibilityDate: '2024-12-11',
})