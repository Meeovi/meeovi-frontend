import { MeiliSearch } from 'meilisearch';

export default defineEventHandler(async (event) => {
  const query = getQuery(event).q;
  const client = new MeiliSearch({ host: useRuntimeConfig().meiliHost });

  const { hits } = await client.index('orders').search(query);
  return hits;
});
