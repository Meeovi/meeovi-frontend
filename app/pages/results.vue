<template>
    <div>
        <v-sheet elevation="2">
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
            <v-tabs v-model="tab" color="primary">
                <v-tab value="one" href="#">All</v-tab>
            </v-tabs>

            <v-divider></v-divider>

            <v-tabs-window v-model="tab">
                <v-tabs-window-item value="one">
                    <v-sheet class="pa-5" color="purple">
                        <section class="results-page">
                            <v-card class="results-shell" elevation="0">

                                <v-row no-gutters>
                                    <v-col cols="12" md="3" class="results-sidebar">
                                        <div class="d-md-none pa-3">
                                            <v-btn block color="primary" variant="outlined"
                                                prepend-icon="fas fa-sliders-h" @click="mobileFiltersOpen = true">
                                                Filters
                                            </v-btn>
                                        </div>

                                        <div class="d-none d-md-block">
                                            <filters
                                                :query="searchQuery"
                                                :pending="pending"
                                                v-model:sort-by="sortBy"
                                                v-model:selected-categories="selectedCategories"
                                                v-model:selected-brands="selectedBrands"
                                                v-model:selected-price-band="selectedPriceBand"
                                                :sort-options="[
                                                    { value: 'relevance', label: 'Relevance' },
                                                    { value: 'price-asc', label: 'Price: Low to High' },
                                                    { value: 'price-desc', label: 'Price: High to Low' },
                                                    { value: 'title-asc', label: 'Title: A to Z' }
                                                ]"
                                                :category-options="categoryOptions"
                                                :brand-options="brandOptions"
                                                :price-bands="priceBands"
                                                @apply="applyFilters"
                                                @clear="clearAllFilters"
                                            />
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
                                            <v-list-item
                                                v-for="item in visibleItems"
                                                :key="String(item.id || item._id || item.title)"
                                                class="amz-card"
                                            >
                                                <template #prepend>
                                                    <div class="amz-card__media">
                                                        <div class="amz-media-placeholder">
                                                            {{ getTitle(item).charAt(0) }}
                                                        </div>
                                                    </div>
                                                </template>

                                                <v-list-item-title class="amz-card__title">
                                                    {{ getTitle(item) }}
                                                </v-list-item-title>

                                                <v-list-item-subtitle class="amz-card__subtitle">
                                                    <span class="amz-card__index">{{ activeIndex }}</span>
                                                    <span v-if="item.brand">{{ item.brand }}</span>
                                                    <span v-if="item.category">{{ item.category }}</span>
                                                </v-list-item-subtitle>

                                                <p class="amz-card__desc">{{ getDescription(item) }}</p>

                                                <div class="amz-card__actions">
                                                    <strong v-if="getPrice(item) !== null" class="amz-price">
                                                        {{ formatPrice(getPrice(item)) }}
                                                    </strong>

                                                    <v-btn
                                                        v-if="getLink(item)"
                                                        :href="String(getLink(item))"
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        color="primary"
                                                        variant="text"
                                                        class="px-0"
                                                    >
                                                        View details
                                                    </v-btn>
                                                </div>
                                            </v-list-item>
                                        </v-list>

                                        <div class="d-flex justify-center mt-6" v-if="pageCount > 1">
                                            <v-pagination
                                                :model-value="page"
                                                :length="pageCount"
                                                :total-visible="7"
                                                rounded="circle"
                                                @update:model-value="changePage"
                                            />
                                        </div>
                                    </v-col>
                                </v-row>
                            </v-card>

                            <v-navigation-drawer
                                v-model="mobileFiltersOpen"
                                location="left"
                                temporary
                                width="320"
                                class="d-md-none"
                            >
                                <filters
                                    :query="searchQuery"
                                    :pending="pending"
                                    v-model:sort-by="sortBy"
                                    v-model:selected-categories="selectedCategories"
                                    v-model:selected-brands="selectedBrands"
                                    v-model:selected-price-band="selectedPriceBand"
                                    :sort-options="[
                                        { value: 'relevance', label: 'Relevance' },
                                        { value: 'price-asc', label: 'Price: Low to High' },
                                        { value: 'price-desc', label: 'Price: High to Low' },
                                        { value: 'title-asc', label: 'Title: A to Z' }
                                    ]"
                                    :category-options="categoryOptions"
                                    :brand-options="brandOptions"
                                    :price-bands="priceBands"
                                    @apply="applyFilters"
                                    @clear="clearAllFilters"
                                />
                            </v-navigation-drawer>
                        </section>
                    </v-sheet>
                </v-tabs-window-item>
            </v-tabs-window>
        </v-sheet>
    </div>
</template>

<script setup lang="ts">
    import filters from '../components/search/filters/filters.vue'
    import {
        useAlternateSearch,
        getTitle,
        getDescription,
        getPrice,
        getLink,
        formatPrice
    } from '@mframework/alternate-search' // auto‑imported from the module

    const {
        // state
        searchQuery,
        activeIndex,
        page,
        sortBy,
        selectedCategories,
        selectedBrands,
        selectedPriceBand,
        editableQuery,
        editableIndex,

        // data
        items,
        visibleItems,
        total,
        pageCount,
        categoryOptions,
        brandOptions,
        priceBands,
        pending,
        error,
        totalLabel,
        emptyMessage,

        // actions
        changePage,
        applyFilters,
        clearAllFilters,
        navigateWithState
    } = useAlternateSearch()

    // UI state
    const tab = ref('one')
    const mobileFiltersOpen = ref(false)

    useHead({
        title: 'Search Results'
    })
</script>