import { NuxtModule, RuntimeConfig } from 'nuxt/schema'
declare module 'nuxt/schema' {
  interface NuxtConfig {
    ["mdc"]?: typeof import("@nuxtjs/mdc").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["content"]?: typeof import("@nuxt/content").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["meilisearch"]?: typeof import("nuxt-meilisearch").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["directus"]?: typeof import("nuxt-directus").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["apollo"]?: typeof import("@nuxtjs/apollo").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["gtag"]?: typeof import("nuxt-gtag").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["googleFonts"]?: typeof import("@nuxtjs/google-fonts").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["i18n"]?: typeof import("@nuxtjs/i18n").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["image"]?: typeof import("@nuxt/image").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["paypal"]?: typeof import("nuxt-paypal").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["medusa"]?: typeof import("nuxt-medusa").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["devtools"]?: typeof import("C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    ["telemetry"]?: typeof import("@nuxt/telemetry").default extends NuxtModule<infer O> ? Partial<O> : Record<string, any>
    modules?: (undefined | null | false | NuxtModule | string | [NuxtModule | string, Record<string, any>] | ["@nuxtjs/mdc", Exclude<NuxtConfig["mdc"], boolean>] | ["@nuxt/content", Exclude<NuxtConfig["content"], boolean>] | ["nuxt-meilisearch", Exclude<NuxtConfig["meilisearch"], boolean>] | ["nuxt-directus", Exclude<NuxtConfig["directus"], boolean>] | ["@nuxtjs/apollo", Exclude<NuxtConfig["apollo"], boolean>] | ["nuxt-gtag", Exclude<NuxtConfig["gtag"], boolean>] | ["@nuxtjs/google-fonts", Exclude<NuxtConfig["googleFonts"], boolean>] | ["@nuxtjs/i18n", Exclude<NuxtConfig["i18n"], boolean>] | ["@nuxt/image", Exclude<NuxtConfig["image"], boolean>] | ["nuxt-paypal", Exclude<NuxtConfig["paypal"], boolean>] | ["nuxt-medusa", Exclude<NuxtConfig["medusa"], boolean>] | ["C:/Users/Basti/AppData/Roaming/npm/node_modules/@nuxt/devtools/module", Exclude<NuxtConfig["devtools"], boolean>] | ["@nuxt/telemetry", Exclude<NuxtConfig["telemetry"], boolean>])[],
  }
  interface RuntimeConfig {
   app: {
      baseURL: string,

      buildAssetsDir: string,

      cdnURL: string,
   },

   mdc: {
      highlight: any,
   },

   content: {
      cacheVersion: number,

      cacheIntegrity: string,

      transformers: Array<any>,

      base: string,

      api: {
         baseURL: string,
      },

      watch: {
         ws: {
            port: {
               port: number,

               portRange: Array<number>,
            },

            hostname: string,

            showURL: boolean,
         },
      },

      sources: any,

      ignores: Array<any>,

      locales: Array<any>,

      defaultLocale: any,

      highlight: boolean,

      markdown: {
         tags: {
            p: string,

            a: string,

            blockquote: string,

            "code-inline": string,

            code: string,

            em: string,

            h1: string,

            h2: string,

            h3: string,

            h4: string,

            h5: string,

            h6: string,

            hr: string,

            img: string,

            ul: string,

            ol: string,

            li: string,

            strong: string,

            table: string,

            thead: string,

            tbody: string,

            td: string,

            th: string,

            tr: string,
         },

         anchorLinks: {
            depth: number,

            exclude: Array<number>,
         },

         remarkPlugins: any,

         rehypePlugins: any,
      },

      yaml: any,

      csv: {
         delimeter: string,

         json: boolean,
      },

      navigation: {
         fields: Array<any>,
      },

      contentHead: boolean,

      documentDriven: boolean,

      respectPathCase: boolean,

      experimental: {
         clientDB: boolean,

         stripQueryParameters: boolean,

         advanceQuery: boolean,
      },
   },

   serverMeilisearchClient: {
      hostUrl: string,

      searchApiKey: string,

      serverSideUsage: boolean,

      instantSearch: {
         theme: string,
      },

      adminApiKey: string,

      clientOptions: {
         placeholderSearch: boolean,

         paginationTotalHits: number,

         finitePagination: boolean,

         primaryKey: any,

         keepZeroFacets: boolean,
      },
   },

   private: {
      apiKey: any,
   },
  }
  interface PublicRuntimeConfig {
   paypal: {
      clientId: string,
   },

   mdc: {
      components: {
         prose: boolean,

         map: {
            p: string,

            a: string,

            blockquote: string,

            "code-inline": string,

            code: string,

            em: string,

            h1: string,

            h2: string,

            h3: string,

            h4: string,

            h5: string,

            h6: string,

            hr: string,

            img: string,

            ul: string,

            ol: string,

            li: string,

            strong: string,

            table: string,

            thead: string,

            tbody: string,

            td: string,

            th: string,

            tr: string,
         },
      },

      headings: {
         anchorLinks: {
            h1: boolean,

            h2: boolean,

            h3: boolean,

            h4: boolean,

            h5: boolean,

            h6: boolean,
         },
      },
   },

   content: {
      locales: Array<any>,

      defaultLocale: any,

      integrity: any,

      experimental: {
         stripQueryParameters: boolean,

         advanceQuery: boolean,

         clientDB: boolean,
      },

      respectPathCase: boolean,

      api: {
         baseURL: string,
      },

      navigation: {
         fields: Array<any>,
      },

      tags: {
         p: string,

         a: string,

         blockquote: string,

         "code-inline": string,

         code: string,

         em: string,

         h1: string,

         h2: string,

         h3: string,

         h4: string,

         h5: string,

         h6: string,

         hr: string,

         img: string,

         ul: string,

         ol: string,

         li: string,

         strong: string,

         table: string,

         thead: string,

         tbody: string,

         td: string,

         th: string,

         tr: string,
      },

      highlight: boolean,

      wsUrl: string,

      documentDriven: boolean,

      host: string,

      trailingSlash: boolean,

      contentHead: boolean,

      anchorLinks: {
         depth: number,

         exclude: Array<number>,
      },
   },

   meilisearchClient: {
      hostUrl: string,

      searchApiKey: string,

      serverSideUsage: boolean,

      instantSearch: {
         theme: string,
      },

      clientOptions: {
         placeholderSearch: boolean,

         paginationTotalHits: number,

         finitePagination: boolean,

         primaryKey: any,

         keepZeroFacets: boolean,
      },
   },

   directus: {
      url: string,

      autoFetch: boolean,

      autoRefresh: boolean,

      onAutoRefreshFailure: any,

      fetchUserParams: any,

      token: any,

      devtools: boolean,

      cookieNameToken: string,

      cookieNameRefreshToken: string,

      cookieMaxAge: number,

      cookieSameSite: string,

      cookieSecure: boolean,
   },

   gtag: {
      id: string,

      config: any,

      initialConsent: boolean,

      loadingStrategy: string,
   },

   i18n: {
      experimental: {
         jsTsFormatResource: boolean,
      },

      baseUrl: string,
   },

   medusa: {
      baseUrl: string,

      maxRetries: number,

      publishableApiKey: any,

      global: boolean,
   },
  }
}
declare module 'vue' {
        interface ComponentCustomProperties {
          $config: RuntimeConfig
        }
      }