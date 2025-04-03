<template>
  <div class="contentPage">
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">
      <p>Sorry, we encountered an error: {{ friendlyErrorMessage }}</p>
      <button @click="retryFetch">Retry</button>
    </div>
    <div v-else-if="page">
      <div v-if="result?.cmsPage.title === 'Meeovi Global'">
        <meeoviGlobal />
      </div>
      
      <div v-if="result?.cmsPage.title === 'Pickup Locations'">
        <pickupLocations />
      </div>

      <div v-if="result?.cmsPage.title === 'Notifications'">
        <notifications />
      </div>

      <!-- Ensure proper rendering of Magento CMS page content -->
      <div class="cms-content" v-html="result?.cmsPage?.content"></div>
    </div>
    <div v-else>
      <p>Page not found</p>
    </div>
  </div>
</template>

<script setup>
import { useQuery } from '@vue/apollo-composable'
import { onErrorCaptured } from 'vue'
import { gql } from 'graphql-tag'
import meeoviGlobal from '~/components/pages/meeoviGlobal.vue'
import pickupLocations from '~/components/pages/pickup-locations.vue'
import notifications from '~/components/pages/notifications.vue'

// Import your existing GraphQL query
import cmsPageQuery from '~/graphql/queries-mutations_subscriptions/queries/cmsPage.gql?raw'
const CMS_PAGE_QUERY = gql`${cmsPageQuery}`

const route = useRoute()
const slug = computed(() => route.params.slug?.[0] || '')
const redirect_code = computed(() => route.query.redirect_code || null)

// Add error handling and timeout configuration
const { result, loading, error, refetch } = useQuery(
  CMS_PAGE_QUERY,
  () => ({
    identifier: slug.value,
    redirect_code: redirect_code.value || 301
  }),
  {
    // Add configuration options
    fetchPolicy: 'cache-and-network',
    errorPolicy: 'all',
    // Add timeout
    context: {
      fetchOptions: {
        timeout: 30000, // 30 second timeout
      },
    },
    // Add retry logic
    retryCount: 2,
  }
)

// Friendly error message computed property
const friendlyErrorMessage = computed(() => {
  if (!error.value) return ''
  
  if (error.value.networkError) {
    return 'Network error occurred. Please check your connection and try again.'
  }
  
  if (error.value.graphQLErrors?.length) {
    return 'Unable to load page content. Please try again later.'
  }
  
  return 'An unexpected error occurred.'
})

// Retry function
const retryFetch = async () => {
  try {
    await refetch()
  } catch (e) {
    console.error('Retry failed:', e)
  }
}

// Page data computed property with error handling
const page = computed(() => {
  try {
    if (result.value?.cmsPage) {
      return {
        ...result.value.cmsPage,
        // Provide default value for redirect_code if null
        redirect_code: result.value.cmsPage.redirect_code || 301
      }
    }
    return null
  } catch (e) {
    console.error('Error accessing page data:', e)
    return null
  }
})

// Error handling middleware
onErrorCaptured((error) => {
  console.error('Apollo error:', error)
  // You could also implement error reporting here
})

definePageMeta({
  layout: 'nolive',
})

useHead(() => ({
  title: page.value?.title || page.value?.name || 'Page',
  meta: [
    {
      name: 'description',
      content: page.value?.meta_description || ''
    }
  ]
}))

// Add error boundary
onErrorCaptured((err, instance, info) => {
  console.error('Error captured:', err, info)
  return false // Prevent error from propagating
})
</script>

<style scoped>
.error-message {
  color: #dc3545;
  padding: 1rem;
  margin: 1rem 0;
  border: 1px solid #dc3545;
  border-radius: 4px;
}

.retry-button {
  padding: 0.5rem 1rem;
  margin-top: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.retry-button:hover {
  background-color: #0056b3;
}
</style>
