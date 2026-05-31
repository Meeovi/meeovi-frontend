<template>
    <section :class="['results-page', 'page', { 'dark-mode': isDark }]">
        <v-container fluid class="results-page__container">
            <v-card class="results-shell" elevation="0">
                <v-toolbar class="results-header" color="blue" density="comfortable" flat>
                    <v-toolbar-title class="amz-title">
                        Results for "{{ searchQuery || 'all items' }}"
                    </v-toolbar-title>

                    <v-spacer></v-spacer>

                    <v-chip class="resultsTotalBadge" color="amber-lighten-5" label>
                        {{ totalLabel }}
                    </v-chip>
                </v-toolbar>

                <v-divider />

                <v-row no-gutters>
                    <v-col cols="12" md="3" class="results-sidebar">
                        <div class="d-md-none pa-3">
                            <v-btn block color="primary" variant="outlined" prepend-icon="fas fa-sliders-h"
                                @click="mobileFiltersOpen = true">
                                Filters
                            </v-btn>
                        </div>

                        <div class="d-none d-md-block">
                            <filters :query="searchQuery" :pending="pending" v-model:sort-by="sortBy"
                                v-model:selected-categories="selectedCategories" v-model:selected-brands="selectedBrands"
                                v-model:selected-price-band="selectedPriceBand" :sort-options="sortOptions"
                                :category-options="categoryOptions" :brand-options="brandOptions"
                                :price-bands="priceBands" @apply="applyFilters" @clear="clearAllFilters" />
                        </div>
                    </v-col>

                    <v-col cols="12" md="9" class="results-main pa-4 pa-md-6">
                        <div class="results-meta mb-4">
                            <div class="results-count">{{ visibleItems.length }} showing</div>
                            <div class="d-flex ga-2 flex-wrap">
                                <v-chip v-if="selectedCategories.length" size="small" variant="outlined" color="primary">
                                    {{ selectedCategories.length }} categories
                                </v-chip>
                                <v-chip v-if="selectedBrands.length" size="small" variant="outlined" color="primary">
                                    {{ selectedBrands.length }} brands
                                </v-chip>
                                <v-chip v-if="selectedPriceBand" size="small" variant="outlined" color="primary">
                                    {{ selectedPriceBand }}
                                </v-chip>
                            </div>
                        </div>

                                                <v-alert v-if="error" type="error" variant="tonal" class="mb-4">
                                                        <strong>Sorry, something went wrong with your search.</strong>
                                                        <div>
                                                            Please try again later or adjust your search terms.
                                                            <template v-if="isDev && error && error.message">
                                                                <br />
                                                                <small style="opacity:0.7;">{{ error.message }}</small>
                                                            </template>
                                                        </div>
                                                </v-alert>

                        <v-alert v-else-if="pending" type="info" variant="tonal" class="mb-4">
                            <strong>Searching</strong>
                            <div>Fetching products and ranking results.</div>
                        </v-alert>

                        <v-alert v-else-if="!visibleItems.length" type="warning" variant="tonal" class="mb-4">
                            <strong>No matches</strong>
                            <div>{{ emptyMessage }}</div>
                        </v-alert>

                        <v-list v-else class="amz-list pa-0" lines="two" bg-color="transparent">
                            <v-list-item v-for="item in visibleItems" :key="String(item.id || item._id || item.title)"
                                class="amz-card">
                                <template #prepend>
                                    <div class="amz-card__media">
                                        <div class="amz-media-placeholder">{{ getTitle(item).charAt(0) }}</div>
                                    </div>
                                </template>

                                <v-list-item-title class="amz-card__title">{{ getTitle(item) }}</v-list-item-title>

                                <v-list-item-subtitle class="amz-card__subtitle">
                                    <span class="amz-card__index">{{ activeIndex }}</span>
                                    <span v-if="item.brand">{{ item.brand }}</span>
                                    <span v-if="item.category">{{ item.category }}</span>
                                </v-list-item-subtitle>

                                <p class="amz-card__desc">{{ getDescription(item) }}</p>

                                <div class="amz-card__actions">
                                    <strong v-if="getPrice(item) !== null" class="amz-price">{{ formatPrice(getPrice(item)) }}</strong>

                                    <v-btn v-if="getLink(item)" :href="String(getLink(item))" target="_blank"
                                        rel="noreferrer" color="primary" variant="text" class="px-0">
                                        View details
                                    </v-btn>
                                </div>
                            </v-list-item>
                        </v-list>

                        <div class="d-flex justify-center mt-6" v-if="pageCount > 1">
                            <v-pagination :model-value="page" :length="pageCount" :total-visible="7" rounded="circle"
                                @update:model-value="changePage" />
                        </div>
                    </v-col>
                </v-row>
            </v-card>
        </v-container>

        <v-navigation-drawer v-model="mobileFiltersOpen" location="left" temporary width="320" class="d-md-none">
            <filters :query="searchQuery" :pending="pending" v-model:sort-by="sortBy"
                v-model:selected-categories="selectedCategories" v-model:selected-brands="selectedBrands"
                v-model:selected-price-band="selectedPriceBand" :sort-options="sortOptions"
                :category-options="categoryOptions" :brand-options="brandOptions" :price-bands="priceBands"
                @apply="applyFilters" @clear="clearAllFilters" />
        </v-navigation-drawer>
    </section>
</template>

<script setup lang="ts">
        import './results.css'
        // --- Dark mode support ---
        import { useColorMode } from '@vueuse/core'
        const colorMode = useColorMode ? useColorMode() : ref('light')
        const isDark = computed(() => colorMode.value === 'dark')

        // Show technical error details only in dev
        const isDev = process.env.NODE_ENV === 'development' || import.meta.env.MODE === 'development'
    import filters from '../components/search/filters/filters.vue'

    type SearchResponse = {
        items ? : Array < Record < string,
        any >>
        total ? : number
        page ? : number
        pageSize ? : number
        facets ? : any
    }

    const route = useRoute()
    const config = useRuntimeConfig()
    const searchClientUrl = computed(() => {
        const url = config.public.alternateSearchClientUrl
        return typeof url === 'string' && url.trim() ? url : '/api/search'
    })

    const indexes = computed(() => {
        const value = config.public.alternateSearchIndexes
        return Array.isArray(value) && value.length > 0 ? value : ['products']
    })

    const searchQuery = computed(() => typeof route.query.q === 'string' ? route.query.q.trim() : '')
    const activeIndex = computed(() => {
        const requested = typeof route.query.index === 'string' ? route.query.index : ''
        return requested || indexes.value[0] || 'products'
    })
    const page = computed(() => {
        const value = Number(route.query.page || 1)
        return Number.isFinite(value) && value > 0 ? value : 1
    })
    const requestedPageSize = 12
    const sortBy = ref(typeof route.query.sort === 'string' ? route.query.sort : 'relevance')
    const selectedCategories = ref < string[] > (toArrayQuery(route.query.categories))
    const selectedBrands = ref < string[] > (toArrayQuery(route.query.brands))
    const selectedPriceBand = ref < string > (typeof route.query.price === 'string' ? route.query.price : '')
    const mobileFiltersOpen = ref(false)

    const editableQuery = ref(searchQuery.value)
    const editableIndex = ref(activeIndex.value)

    watch([searchQuery, activeIndex], ([nextQuery, nextIndex]) => {
        editableQuery.value = nextQuery
        editableIndex.value = nextIndex
    })

    watch(
        () => route.query,
        (query) => {
            selectedCategories.value = toArrayQuery(query.categories)
            selectedBrands.value = toArrayQuery(query.brands)
            selectedPriceBand.value = typeof query.price === 'string' ? query.price : ''
            sortBy.value = typeof query.sort === 'string' ? query.sort : 'relevance'
        },
    )

    const {
        data,
        pending,
        error
    } = await useAsyncData < SearchResponse > (
        () => `search:${activeIndex.value}:${searchQuery.value}:${page.value}`,
        async () => {
            if (!searchQuery.value) {
                return {
                    items: [],
                    total: 0,
                    page: 1,
                    pageSize: requestedPageSize,
                    facets: []
                }
            }

            return await $fetch < SearchResponse > (`${searchClientUrl.value}/${activeIndex.value}`, {
                query: {
                    q: searchQuery.value,
                    page: page.value,
                    pageSize: requestedPageSize,
                },
            })
        }, {
            watch: [searchQuery, activeIndex, page],
            default: () => ({
                items: [],
                total: 0,
                page: 1,
                pageSize: requestedPageSize,
                facets: []
            }),
        },
    )

    const items = computed(() => {
        const list = Array.isArray(data.value?.items) ? data.value.items : []
        return sortItems(list, sortBy.value)
    })
    const total = computed(() => Number(data.value?.total || 0))
    const effectivePageSize = computed(() => {
        const value = Number(data.value?.pageSize)
        return Number.isFinite(value) && value > 0 ? value : requestedPageSize
    })
    const pageCount = computed(() => Math.max(1, Math.ceil(total.value / effectivePageSize.value)))
    const facets = computed(() => data.value?.facets)
    const categoryOptions = computed(() => {
        const fromFacet = facetToOptions(facets.value, 'category')
        if (fromFacet.length) return fromFacet
        return deriveOptionsFromItems(items.value, 'category')
    })
    const brandOptions = computed(() => {
        const fromFacet = facetToOptions(facets.value, 'brand')
        if (fromFacet.length) return fromFacet
        return deriveOptionsFromItems(items.value, 'brand')
    })

    const priceBands = computed(() => {
        const bands = [{
                id: '0-25',
                min: 0,
                max: 25,
                label: 'Under $25'
            },
            {
                id: '25-50',
                min: 25,
                max: 50,
                label: '$25 to $50'
            },
            {
                id: '50-100',
                min: 50,
                max: 100,
                label: '$50 to $100'
            },
            {
                id: '100+',
                min: 100,
                max: Number.POSITIVE_INFINITY,
                label: '$100 & above'
            },
        ]

        return bands
            .map((band) => ({
                ...band,
                count: items.value.filter((item) => {
                    const price = getPrice(item)
                    if (price === null) return false
                    if (band.max === Number.POSITIVE_INFINITY) return price >= band.min
                    return price >= band.min && price < band.max
                }).length,
            }))
            .filter((band) => band.count > 0)
    })

    const sortOptions = [{
            value: 'relevance',
            label: 'Relevance'
        },
        {
            value: 'price-asc',
            label: 'Price: Low to High'
        },
        {
            value: 'price-desc',
            label: 'Price: High to Low'
        },
        {
            value: 'title-asc',
            label: 'Title: A to Z'
        },
    ]

    const visibleItems = computed(() => {
        return items.value.filter((item) => {
            const category = normalizeText(item.category)
            const brand = normalizeText(item.brand)
            const price = getPrice(item)

            const categoryPass = !selectedCategories.value.length || selectedCategories.value.includes(
                category)
            const brandPass = !selectedBrands.value.length || selectedBrands.value.includes(brand)
            const pricePass = matchesPriceBand(price, selectedPriceBand.value)

            return categoryPass && brandPass && pricePass
        })
    })

    const totalLabel = computed(() => {
        if (!searchQuery.value) return 'Enter a query to search the demo dataset.'
        return `${total.value} result${total.value === 1 ? '' : 's'} across ${pageCount.value} page${pageCount.value === 1 ? '' : 's'}`
    })
    const emptyMessage = computed(() => {
        if (!searchQuery.value) {
            return 'Use the search box above to query the seeded in-memory records or your configured backend.'
        }
        if (selectedCategories.value.length || selectedBrands.value.length || selectedPriceBand.value) {
            return 'No matches for the active filter combination. Try clearing one or more filters.'
        }
        return `No matches were found for "${searchQuery.value}".`
    })

    async function changePage(nextPage: number) {
        await navigateWithState(nextPage)
    }

    async function applyFilters() {
        await navigateWithState(1)
    }

    async function clearAllFilters() {
        selectedCategories.value = []
        selectedBrands.value = []
        selectedPriceBand.value = ''
        sortBy.value = 'relevance'
        await navigateWithState(1)
    }

    async function navigateWithState(targetPage: number) {
        const query = {
            ...(editableQuery.value.trim() ? {
                q: editableQuery.value.trim()
            } : {}),
            index: editableIndex.value,
            page: String(targetPage),
            ...(selectedCategories.value.length ? {
                categories: selectedCategories.value.join(',')
            } : {}),
            ...(selectedBrands.value.length ? {
                brands: selectedBrands.value.join(',')
            } : {}),
            ...(selectedPriceBand.value ? {
                price: selectedPriceBand.value
            } : {}),
            ...(sortBy.value !== 'relevance' ? {
                sort: sortBy.value
            } : {}),
        }

        await navigateTo({
            path: '/results',
            query,
        })
    }

    function firstValue(item: Record < string, any > , keys: string[]): unknown {
        for (const key of keys) {
            const value = item?.[key]
            if (value !== undefined && value !== null && value !== '') {
                return value
            }
        }
        return null
    }

    function getTitle(item: Record < string, any > ): string {
        return String(firstValue(item, ['title', 'name', 'label', 'product_name']) || 'Untitled')
    }

    function getDescription(item: Record < string, any > ): string {
        const value = firstValue(item, ['description', 'body', 'summary', 'excerpt', 'content'])
        return value ? String(value) : 'No description available.'
    }

    function getPrice(item: Record < string, any > ): number | null {
        const value = firstValue(item, ['price', 'amount', 'final_price'])
        const parsed = Number(value)
        return Number.isFinite(parsed) ? parsed : null
    }

    function getLink(item: Record < string, any > ): string | null {
        const value = firstValue(item, ['url', 'slug'])
        if (!value) return null
        if (String(value).startsWith('http')) return String(value)
        return null
    }

    function formatPrice(value: number | null): string {
        if (value === null) return ''
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
            maximumFractionDigits: 2,
        }).format(value)
    }

    function normalizeText(value: unknown): string {
        return String(value || '').trim()
    }

    function toArrayQuery(value: unknown): string[] {
        if (typeof value !== 'string' || !value.trim()) return []
        return value
            .split(',')
            .map((item) => item.trim())
            .filter(Boolean)
    }

    function sortItems(source: Array < Record < string, any >> , sort: string): Array < Record < string, any >> {
        const itemsCopy = [...source]
        if (sort === 'price-asc') {
            return itemsCopy.sort((a, b) => (getPrice(a) ?? Number.POSITIVE_INFINITY) - (getPrice(b) ?? Number
                .POSITIVE_INFINITY))
        }
        if (sort === 'price-desc') {
            return itemsCopy.sort((a, b) => (getPrice(b) ?? 0) - (getPrice(a) ?? 0))
        }
        if (sort === 'title-asc') {
            return itemsCopy.sort((a, b) => getTitle(a).localeCompare(getTitle(b)))
        }
        return itemsCopy
    }

    function matchesPriceBand(price: number | null, band: string): boolean {
        if (!band) return true
        if (price === null) return false
        if (band === '0-25') return price < 25
        if (band === '25-50') return price >= 25 && price < 50
        if (band === '50-100') return price >= 50 && price < 100
        if (band === '100+') return price >= 100
        return true
    }

    function deriveOptionsFromItems(itemsList: Array < Record < string, any >> , field: string) {
        const counts = new Map < string,
            number > ()
        for (const item of itemsList) {
            const key = normalizeText(item[field])
            if (!key) continue
            counts.set(key, (counts.get(key) || 0) + 1)
        }

        return Array.from(counts.entries())
            .map(([value, count]) => ({
                value,
                count
            }))
            .sort((a, b) => b.count - a.count)
    }

    function facetToOptions(rawFacets: any, field: string): Array < {
        value: string;count: number
    } > {
        if (!rawFacets) return []

        const objectFacet = rawFacets?.[field]
        if (objectFacet && typeof objectFacet === 'object' && !Array.isArray(objectFacet)) {
            return Object.entries(objectFacet)
                .map(([value, count]) => ({
                    value,
                    count: Number(count || 0)
                }))
                .filter((entry) => entry.value && entry.count > 0)
                .sort((a, b) => b.count - a.count)
        }

        const arrayFacet = Array.isArray(rawFacets) ? rawFacets.find((entry) => entry?.field === field) : null
        const buckets = arrayFacet?.buckets
        if (Array.isArray(buckets)) {
            return buckets
                .map((entry) => ({
                    value: normalizeText(entry?.value),
                    count: Number(entry?.count || 0),
                }))
                .filter((entry) => entry.value && entry.count > 0)
                .sort((a, b) => b.count - a.count)
        }

        return []
    }

    useHead({
        title: 'Search Results'
    })
</script>