/*import {
  defineNuxtConfig
} from 'nuxt' */

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['@sidebase/core'],

  typescript: {
    typeCheck: true,
  },
  app: {
    head: {
      viewport: 'minimum-scale=1, initial-scale=1, width=device-width',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { name: 'description', content: 'Social Marketplace for Creators' },
        { name: 'theme-color', content: '#018937' },
      ],
      link: [
        { rel: 'icon', href: '/favicon.ico' },
        { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-180x180.png' },
      ],
      script: [
        { src: 'https://platform-api.sharethis.com/js/sharethis.js#property=63155c574a688f00124a59c2&product=sticky-share-buttons', async: 'async'},
        { src: 'http://free-website-translation.com/scripts/fwt.js', async: 'async'}
      ],
    },
  },
  appConfig: {
    titleSuffix: 'Meeovi',
  },
  imports: {
    dirs: ['composables/**', 'utils/**'],
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
    //'assets/commerce/css/magento.css',
    'assets/styles/styles.css',
    'assets/style.scss'
  ],

  image: {
    screens: {
      '4xl': 1920,
      '3xl': 1536,
      '2xl': 1366,
      xl: 1280,
      lg: 1024,
      md: 768,
      sm: 640,
      xs: 376,
      '2xs': 360,
    },
  },

  modules: [
    '@nuxt/content',
    'nuxt-meilisearch',
    'nuxt-directus',
    '@nuxtjs/apollo',
    'nuxt-gtag',
    [
      '@nuxtjs/google-fonts',
      {
        families: {
          'Red Hat Display': [400, 500, 700],
          'Red Hat Text': [300, 400, 500, 700],
        },
      },
    ],
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
    '@nuxt/image',
    'nuxt-paypal',
    'nuxt-medusa',
  ],

  paypal: {
    clientId: process.env.PAYPAL_CLIENT_ID,
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
  
  /*auth: {
    strategies: {
      local: false,
      keycloak: {
        scheme: "oauth2",
        endpoints: {
          authorization:
            process.env.KEYCLOAK_API_URL +
            "auth/realms/test-realm/protocol/openid-connect/auth",
          token:
            process.env.KEYCLOAK_API_URL +
            "auth/realms/test-realm/protocol/openid-connect/token",
          userInfo:
            process.env.KEYCLOAK_API_URL +
            "auth/realms/test-realm/protocol/openid-connect/userinfo",
          logout:
            process.env.KEYCLOAK_API_URL +
            "auth/realms/test-realm/protocol/openid-connect/logout?redirect_uri=" +
            encodeURIComponent("127.0.0.1"),
        },
        token: {
          property: "access_token",
          type: "Bearer",
          name: "Authorization",
          maxAge: 300,
        },
        refreshToken: {
          property: "refresh_token",
          maxAge: 60 * 60 * 24 * 30,
        },
        responseType: "code",
        grantType: "authorization_code",
        clientId: process.env.KEYCLOAK_CLIENTID,
        scope: ["openid", "profile", "email"],
        codeChallengeMethod: "S256",
      },
    },
    redirect: {
      login: "/Admin/Auth/login",
      // logout: "/login",
      home: "/index.vue",
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
      /*  httpLinkOptions: {
          headers: {
            'x-hasura-admin-secret': process.env.GQL_KEY,
          }
        } */
      },
      //other: './apollo/other.ts'
      vendure: {
        httpEndpoint: process.env.GQL_HOST,
      /*  httpLinkOptions: {
          headers: {
            'x-hasura-admin-secret': process.env.GQL_KEY,
          }
        } */
      }
    },
  },/**/

  build: {
    transpile: [
      'vuetify',
      "@fortawesome/vue-fontawesome",
      "@fortawesome/fontawesome-svg-core",
      "@fortawesome/pro-solid-svg-icons",
      "@fortawesome/pro-regular-svg-icons",
      "@fortawesome/free-brands-svg-icons",
      'vue-instantsearch',
      'instantsearch.js/es'
    ],
  },

  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
})