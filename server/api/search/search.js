import { MeiliSearch } from 'meilisearch'
import 'dotenv/config'

const client = new MeiliSearch({
  host: process.env.MEILISEARCH_HOST,
  apiKey: process.env.MEILISEARCH_SEARCH_API_KEY // Use search key for reading
})

export default defineEventHandler(async (event) => {
  const query = getQuery(event)
  const { q, type, page = 1, limit = 10 } = query

  try {
    let results
    if (type && type !== 'all') {
      // Search specific index
      results = await client.index(type).search(q, {
        limit,
        offset: (page - 1) * limit
      })
    } else {
      // Search all indexes
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

      const searchPromises = indexes.map(index =>
        client.index(index).search(q, {
          limit,
          offset: (page - 1) * limit
        })
      )

      const allResults = await Promise.all(searchPromises)
      
      // Combine results
      results = {
        hits: allResults.flatMap(r => r.hits),
        estimatedTotalHits: allResults.reduce((sum, r) => sum + (r.estimatedTotalHits || 0), 0)
      }
    }

    return results
  } catch (error) {
    console.error('Search error:', error)
    throw createError({
      statusCode: 500,
      message: 'Search failed'
    })
  }
})
