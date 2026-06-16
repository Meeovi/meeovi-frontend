import {
  useLayers
} from 'nuxt-layers-utils'

const layers = useLayers(__dirname, {
  shared: '../../../layers/shared',
  auth: '../../../layers/auth',
  commerce: '../../../layers/commerce',
  social: '../../../layers/social'
})

export default defineNuxtConfig({
  extends: layers.extends(),
  alias: layers.alias('#'),
  routeRules: {
    '/auth/login': { redirect: '/login' },
    '/auth/register': { redirect: '/register' },
    '/auth/reset-password': { redirect: '/reset-password' },
    '/auth/callback': { redirect: '/callback' },
  },

  ssr: true,
  typescript: {
    typeCheck: false
  },

  app: {
    baseURL: '/',
    head: {
      viewport: 'minimum-scale=1, initial-scale=1, width=device-width',
      templateParams: {
        separator: '·'
      },
      htmlAttrs: {
        lang: 'en'
      },
      titleTemplate: `%s - ${process.env.NUXT_PUBLIC_SITE_NAME || 'Meeovi'}`,
      meta: [{
          name: 'description',
          content: `${process.env.NUXT_PUBLIC_SITE_DESCRIPTION || 'Meeovi'}`
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ],
      link: [{
          rel: 'icon',
          href: '/favicon.ico'
        },
        {
          rel: 'apple-touch-icon',
          href: '/icons/apple-touch-icon-180x180.png'
        }
      ]
    }
  },

  appConfig: {
    titleSuffix: `${process.env.NUXT_PUBLIC_SITE_NAME || ' - Meeovi'}`
  },

  css: [
    'assets/web/assets/mobirise-icons2/mobirise2.css',
    'assets/bootstrap/css/bootstrap.min.css',
    'assets/bootstrap/css/bootstrap-grid.min.css',
    'assets/bootstrap/css/bootstrap-reboot.min.css',
    'assets/theme/css/style.css',
    'assets/mobirise/css/mbr-additional.css',
    'assets/styles/social.css',
    'assets/styles/mobile.css',
    'assets/styles/styles.css',
    'assets/styles/search.css',
    'assets/styles/auth.css',
  ],

  modules: [
    '@pinia/nuxt',
    '@sentry/nuxt/module',
    '@mframework/adapter-directus',
    '@mframework/alternate-auth',
    '@mframework/adapter-magento',
  ],

  imports: {
    presets: [
      {
        from: 'alternate-sdk/auth/adapter',
        imports: [['default', 'useSdkAuthAdapter']],
      },
      {
        from: 'alternate-sdk/commerce/adapter',
        imports: [['default', 'useSdkCommerceAdapter']],
      },
      {
        from: 'alternate-sdk/content/adapter',
        imports: [['default', 'useSdkContentAdapter']],
      },
      {
        from: 'alternate-sdk/search/adapter',
        imports: [['default', 'useSdkSearchAdapter']],
      },
      {
        from: 'alternate-sdk/federation/adapter',
        imports: [['default', 'useSdkFederationAdapter']],
      },
    ],
  },

  magento: {
    url: process.env.MAGENTO_URL,
    token: process.env.MAGENTO_ADMIN_TOKEN,
    provider: 'rest', // or 'graphql'
  },

  pinia: {
    storesDirs: ['/app/stores/**'],
  },

  runtimeConfig: {
    meeoviSecret: process.env.MEEOVI_SECRET,
    databaseProvider: process.env.BETTER_AUTH_DATABASE_PROVIDER || 'postgresql',
    public: {
      sentry: {
        dsn: process.env.SENTRY_DSN || '',
      },
      meeoviProvider: process.env.MEEOVI_PROVIDER || 'opensearch',
      directus: {
        url: process.env.DIRECTUS_URL,
        nuxtBaseUrl: process.env.NUXT_PUBLIC_SITE_URL || 'http://localhost:3000',
        devtools: true,
        token: process.env.NUXTUS_DIRECTUS_STATIC_TOKEN,
        auth: {
          email: process.env.NUXTUS_DIRECTUS_ADMIN_EMAIL,
          password: process.env.NUXTUS_DIRECTUS_ADMIN_PASSWORD,
          token: process.env.NUXTUS_DIRECTUS_STATIC_TOKEN,
          enabled: true,
          enableGlobalAuthMiddleware: false, // Enable auth middleware on every page
          userFields: ['*'], // Select user fields
          redirect: {
            login: '/login', // Path to redirect when login is required
            logout: '/', // Path to redirect after logout
            home: '/', // Path to redirect after successful login
            resetPassword: '/reset-password', // Path to redirect for password reset
            callback: '/callback', // Path to redirect after login with provider
          },
        }
      },
      magento: {
        baseUrl: process.env.MAGENTO_BASE_URL || '',
        accessToken: process.env.MAGENTO_ACCESS_TOKEN || ''
      },
      search: {
        index: process.env.ALTERNATE_SEARCH_INDEX || process.env.NUXT_PUBLIC_SEARCH_INDEX || process.env.SEARCH_INDEX || ''
      },
      payments: {
        provider: process.env.PAYMENT_PROVIDER || process.env.NUXT_PAYMENT || 'stripe'
      },
      storage: {
        provider: process.env.STORAGE_PROVIDER || process.env.NUXT_APP_STORAGE || 'local'
      },
      image: {
        optimizer: process.env.IMAGE_OPTIMIZER || process.env.IMAGE_PROVIDER || 'netlify',
        cdnDomain: process.env.IMAGE_CDN_DOMAIN || process.env.TWICPICS_DOMAIN || ''
      },
      betterAuth: {
        databaseProvider: process.env.BETTER_AUTH_DATABASE_PROVIDER || 'prisma',
        databaseUrl: process.env.DATABASE_URL,
        betterAuth: {
          provider: process.env.BETTER_AUTH_DATABASE_PROVIDER,
          url: process.env.BETTER_AUTH_DATABASE_URL,
        },
        auth: {
          secret: process.env.BETTER_AUTH_SECRET
        },
        socialProviders: [{
            name: 'google',
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
          },
          {
            name: 'github',
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
          },
          {
            name: 'discord',
            clientId: process.env.DISCORD_CLIENT_ID,
            clientSecret: process.env.DISCORD_CLIENT_SECRET,
            scope: ['email', 'identify']
          },
        ],
        // Configure plugins
        plugins: [{
            name: 'twoFactor',
            options: {
              issuer: 'My App'
            }
          },
          {
            name: 'username',
            options: {}
          },
          {
            name: 'organization',
            options: {}
          },
        ]
      },
    }
  },

  build: {
    transpile: [
      '@mframework/adapter-magento',
      //'@mframework/adapter-prisma',
      '@vue/email'
    ]
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext'
      }
    },
    rollupConfig: {
      onwarn(warning, handler) {
        const isCircular = warning.code === 'CIRCULAR_DEPENDENCY'
        const importer = String(warning.importer || '')
        const ids = Array.isArray(warning.ids) ? warning.ids.join(' ') : ''
        const message = String(warning.message || '')

        const isFrameworkInternal = (
          importer.includes('node_modules/nitropack/')
          || importer.includes('node_modules/@nuxt/nitro-server/')
          || importer.includes('node_modules/@nuxt/image/')
          || ids.includes('node_modules/nitropack/')
          || ids.includes('node_modules/@nuxt/nitro-server/')
          || ids.includes('node_modules/@nuxt/image/')
          || message.includes('virtual:#nitro-internal-virtual/')
          || message.includes('virtual:#internal/nuxt/island-renderer')
          || message.includes('virtual:#imports')
        )

        if (isCircular && isFrameworkInternal) {
          return
        }

        handler(warning)
      },
    },
    externals: {
      external: ['playwright-core'],
    },
    prerender: {
      failOnError: false,
      ignore: ['/assets/images/*'],
    },
  },

  vite: {
    resolve: {
      alias: {
        '@mframework/ui-forms/': new URL('../../../../packages/modules/ui-forms/src/', import.meta.url).pathname,
      },
    },
  },

  compatibilityDate: '2026-02-15',

  sentry: {
    org: 'meeovi',
    project: 'meeovi',
    autoInjectServerSentry: 'top-level-import'
  },

  sourcemap: {
    client: 'hidden'
  },

  ogImage: {
    // Enable zero-runtime mode to disable dynamic generation and remove signing warning
    zeroRuntime: true
    // If you want dynamic OG images, comment out zeroRuntime and set a secret like below:
    // secret: process.env.NUXT_OG_IMAGE_SECRET || '<your-generated-secret>'
  }
})