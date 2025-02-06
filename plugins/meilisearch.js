import { MeiliSearch } from 'meilisearch'

export default defineNuxtPlugin(() => {
  const config = useRuntimeConfig()
  
  const client = new MeiliSearch({
    host: config.public.meilisearch.host,
    apiKey: config.public.meilisearch.searchApiKey,
  })
  
  return {
    provide: {
      client
    }
  }
})
