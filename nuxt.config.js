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
   'assets/styles/sellerDashboard.css',
   'assets/styles/PriceSlider.css',
   'assets/styles/searchTheme.css',
 ],

 modules: [
   '@nuxtjs/apollo',
   'nuxt-gtag',
   'nuxt3-leaflet',
   '@logto/nuxt',
   "@nuxt/image",
   '@nuxtjs/algolia',
   'nuxt-directus',
   '@nuxtjs/tailwindcss',
   'nuxt-newsletter',
   "@nuxtjs/cloudinary",
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

 newsletter: {
  mailchimp: {
    apiKey: process.env.MAILCHIMP_API_KEY,
    serverPrefix: process.env.MAILCHIMP_SERVER_PREFIX,
    audienceId: process.env.MAILCHIMP_AUDIENCE_ID,
    component: true // optional
  }
},

cloudinary: {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME,
  uploadPreset: process.env.CLOUDINARY_PRESET,
  apiKey: process.env.CLOUDINARY_API_KEY,
  analytics: true,
  cloud: {},
  url: process.env.CLOUDINARY_URL,
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
    budibaseEmbed: process.env.BUDIBASE_EMBED || '',
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

  algolia: {
    apiKey: process.env.ALGOLIA_API_KEY,
    applicationId: process.env.ALGOLIA_APPLICATION_ID,
    globalIndex: '',
    lite: true,
    cache: false,
    instantSearch: true, 
    useFetch: false,
    crawler: {
      apiKey: '<YOUR_API_KEY>',
      indexName: '<YOUR_INDEX_NAME>',
      meta: ['title', 'description'],
      include: () => true
    },
    recommend: true,
  },

 apollo: {
   clients: {
     default: {
       httpEndpoint: process.env.GRAPHQL_HOST,
       tokenStorage: "cookie",
       httpLinkOptions: {
         headers: {
           'x-hasura-admin-secret': `Bearer ${process.env.GRAPHQL_TOKEN}`,
           'content-type': 'application/json'
         }
       }
     }, 
     cms: {
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

 compatibilityDate: '2024-07-14'
})