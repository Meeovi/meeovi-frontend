import {
  useLayers
} from 'nuxt-layers-utils'
import {
  resolve
} from 'path'

const layers = useLayers(__dirname, {
  shared: '../../../layers/shared',
  auth: '../../../layers/auth',
  commerce: '../../../layers/commerce',
  social: '../../../layers/social',
  search: '../../../layers/search',
})

export default defineNuxtConfig({
  extends: layers.extends(),
  alias: {
    ...Object.fromEntries(
      Object.entries(layers.alias('#')).map(([key, value]) => [key, resolve(__dirname, value)])
    ),
    '#experience-builder': resolve(__dirname, '../../../../packages/plugins/experience-builder/runtime'),
    '#experience-builder/': resolve(__dirname, '../../../../packages/plugins/experience-builder/runtime') + '/',
    '@mframework/meeovi-forms': resolve(__dirname, '../../../packages/plugins/meeovi-forms/src'),
    '@mframework/meeovi-forms/': resolve(__dirname, '../../../packages/plugins/meeovi-forms/src/') + '/'
  },
  routeRules: {
    '/auth/login': {
      redirect: '/login'
    },
    '/auth/register': {
      redirect: '/register'
    },
    '/auth/reset-password': {
      redirect: '/reset-password'
    },
    '/auth/callback': {
      redirect: '/callback'
    },
    "/directus/**": {
      proxy: {
        to: import.meta.env.DIRECTUS_URL + "/**"
      }
    },
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
    'adapter-magento/module'
  ],

  magento: {
    endpoint: process.env.MAGENTO_GRAPHQL_URL,
    token: process.env.GQL_KEY,
  },

  /*imports: {
    presets: [{
        from: 'alternate-sdk/auth/adapter',
        imports: [
          ['default', 'useSdkAuthAdapter']
        ],
      },
      {
        from: 'alternate-sdk/commerce/adapter',
        imports: [
          ['default', 'useSdkCommerceAdapter']
        ],
      },
      {
        from: 'alternate-sdk/content/adapter',
        imports: [
          ['default', 'useSdkContentAdapter']
        ],
      },
      {
        from: 'alternate-sdk/search/adapter',
        imports: [
          ['default', 'useSdkSearchAdapter']
        ],
      },
      {
        from: 'alternate-sdk/federation/adapter',
        imports: [
          ['default', 'useSdkFederationAdapter']
        ],
      },
    ],
  },*/

  pinia: {
    storesDirs: ['/app/stores/**'],
  },

  runtimeConfig: {
    public: {
      graphqlEndpoint: process.env.GRAPHQL_URL,
      // Directus
      directus: {
        url: process.env.DIRECTUS_URL,
        auth: {
          email: process.env.NUXTUS_DIRECTUS_ADMIN_EMAIL,
          password: process.env.NUXTUS_DIRECTUS_ADMIN_PASSWORD,
          token: process.env.NUXTUS_DIRECTUS_STATIC_TOKEN,
          enabled: true,
          enableGlobalAuthMiddleware: false, // Enable auth middleware on every page
          userFields: ['*'], // Select user fields
          redirect: {
            login: '/auth/login', // Path to redirect when login is required
            logout: '/', // Path to redirect after logout
            home: '/', // Path to redirect after successful login
            resetPassword: '/auth/reset-password', // Path to redirect for password reset
            callback: '/auth/callback', // Path to redirect after login with provider
          },
        }
      },
      sentry: {
        dsn: process.env.SENTRY_DSN || process.env.NUXT_PUBLIC_SENTRY_DSN || ''
      }
    },
  },

  build: {
    transpile: [
      '@vue/email',
    ]
  },

  nitro: {
    esbuild: {
      options: {
        target: 'esnext'
      }
    },
    rollupConfig: {
      external: ['nuxt/app', 'nuxt/config', 'nuxt'],
      output: {
        inlineDynamicImports: false
      },
      onwarn(warning: {
        code: string;importer: any;ids: any[];message: any
      }, handler: (arg0: any) => void) {
        const isCircular = warning.code === 'CIRCULAR_DEPENDENCY'
        const importer = String(warning.importer || '')
        const ids = Array.isArray(warning.ids) ? warning.ids.join(' ') : ''
        const message = String(warning.message || '')

        const isFrameworkInternal = (
          importer.includes('node_modules/nitropack/') ||
          importer.includes('node_modules/@nuxt/nitro-server/') ||
          importer.includes('node_modules/@nuxt/image/') ||
          ids.includes('node_modules/nitropack/') ||
          ids.includes('node_modules/@nuxt/nitro-server/') ||
          ids.includes('node_modules/@nuxt/image/') ||
          message.includes('virtual:#nitro-internal-virtual/') ||
          message.includes('virtual:#internal/nuxt/island-renderer') ||
          message.includes('virtual:#imports')
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
      alias: {},
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
    zeroRuntime: true
  }
})