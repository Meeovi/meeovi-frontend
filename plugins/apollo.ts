import { defineNuxtPlugin } from '#app'
import { ApolloClient, InMemoryCache, createHttpLink, ApolloLink, split } from '@apollo/client/core'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { type InjectionKey } from 'vue'
import { setContext } from '@apollo/client/link/context'

export default defineNuxtPlugin((nuxtApp) => {
  const config = useRuntimeConfig()

  const primaryHttpLink = createHttpLink({
    uri: config.public.commerceUrl,
  })

  const secondaryHttpLink = createHttpLink({
    uri: config.public.directus.url, // Replace with your secondary endpoint
  })

  const thirdHttpLink = createHttpLink({
    //uri: config.public.wpGraphql, // Replace with your third endpoint
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

  const thirdAuthLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        'authorization': `Bearer ${config.public.wordpressToken}`, // Replace with your third auth token
      }
    }
  })

  const primaryLink = primaryAuthLink.concat(primaryHttpLink)
  const secondaryLink = secondaryAuthLink.concat(secondaryHttpLink)
  const thirdLink = thirdAuthLink.concat(thirdHttpLink)

  const splitLink = split(
    (operation) => {
      const context = operation.getContext()
      return context.clientName === 'secondary'
    },
    secondaryLink,
    split(
      (operation) => {
        const context = operation.getContext()
        return context.clientName === 'third'
      },
      thirdLink,
      primaryLink // This becomes the default link for when neither condition is met
    )
  )

  const apolloClient = new ApolloClient({
    link: splitLink,
    cache: new InMemoryCache(),
    connectToDevTools: true
  })

  nuxtApp.vueApp.provide(DefaultApolloClient as InjectionKey<typeof apolloClient>, apolloClient)
})
