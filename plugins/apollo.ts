import { defineNuxtPlugin } from '#app'
import { ApolloClient, InMemoryCache, createHttpLink, ApolloLink, split } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { type InjectionKey } from 'vue'
import { setContext } from '@apollo/client/link/context'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const primaryHttpLink = createHttpLink({
    uri: config.public.commerceGraphql,
  })

  const secondaryHttpLink = createHttpLink({
    uri: config.public.directus.url, // Replace with your secondary endpoint
  })

  const primaryAuthLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        'Bearer': config.public.commerceApiToken,
      }
    }
  })

  const secondaryAuthLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        'authorization': `Bearer ${config.public.directus.auth.token}`, // Replace with your secondary auth token
      }
    }
  })

  const primaryLink = primaryAuthLink.concat(primaryHttpLink)
  const secondaryLink = secondaryAuthLink.concat(secondaryHttpLink)

  const splitLink = split(
    (operation) => {
      const context = operation.getContext()
      return context.clientName === 'secondary'
    },
    secondaryLink,
    primaryLink
  )

  const apolloClient = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
    connectToDevTools: true
  })

  nuxtApp.vueApp.provide(DefaultApolloClient as InjectionKey<typeof apolloClient>, apolloClient)
})
