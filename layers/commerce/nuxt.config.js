// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ["@storefront-ui/nuxt", "@nuxtjs/apollo"],

  runtimeConfig: {
    // Magento Ecommerce
    websiteURL: process.env.GQL_HOST,
    websiteToken: process.env.WEBSITE_TOKEN,

    public: {
      // Stripe
      stripePk: process.env.STRIPE_PUBLIC_KEY,
    },
  },

  apollo: {
    clients: {
      default: {
        httpEndpoint: process.env.GRAPHQL_HOST,
        tokenStorage: "cookie",
        httpLinkOptions: {
          headers: {
            'x-hasura-admin-secret': `${process.env.GRAPHQL_TOKEN}`,
            'content-type': 'application/json'
          }
        }
      },
    },
  },
})