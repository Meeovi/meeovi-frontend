/**
 * Unit tests — alternate-search layer integration
 *
 * Sections:
 *   1. HTTP client contract  (elasticsearchAdapter/client.ts)
 *   2. elasticsearchAdapter  (full pipeline, mocked fetch)
 *   3. useAlternateSearch composable logic  (pure functions, no Nuxt runtime)
 *   4. createSearch + elasticsearchAdapter  (full pipeline, mocked fetch)
 *   5. Live OpenSearch smoke test  (auto-enabled when ALTERNATE_SEARCH_URL is set)
 *
 * All mocking in sections 1-4 uses vi.spyOn + mockRestore so real fetch is
 * always present for section 5.
 */
export {};
