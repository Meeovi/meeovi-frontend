/* eslint-disable no-undef */
import { MeiliSearch } from 'meilisearch'

const client = new MeiliSearch({
  host: process.env.NUXT_PUBLIC_MEILISEARCH_HOST,
  apiKey: process.env.NUXT_PUBLIC_MEILISEARCH_ADMIN_KEY
})

async function initializeIndexes() {
  const indexes = [
    'products',
    'videos',
    'news',
    'images',
    'music',
    'space',
    'books',
    'travel',
    'finance'
  ]

  for (const index of indexes) {
    await client.createIndex(index, { primaryKey: 'id' })
    // Set filterable attributes
    await client.index(index).updateFilterableAttributes([
      'categories',
      'type',
      'price',
      'brand'
    ])
    // Set searchable attributes
    await client.index(index).updateSearchableAttributes([
      'name',
      'description',
      'title',
      'content'
    ])
  }
}

initializeIndexes()
