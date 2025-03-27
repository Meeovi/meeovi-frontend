import { useQuery } from '@vue/apollo-composable'
import type { OutletData, Outlet, CategoryResult } from '~/types/outlets'
import { CategoryQuery } from '~/graphql/commerce/queries/id/department'

export const useOutletData = (): OutletData => {
  const route = useRoute();
  const { $directus, $readItem, $readItems } = useNuxtApp()

  const { result } = useQuery<CategoryResult>(CategoryQuery, {
    uid: route.params.uid
  });

  // Wait for the Magento category data to be available
  const { data: outlets, error: outletsError } = useAsyncData<Outlet[] | null>('outlets', async () => {
    try {
      // Wait explicitly for the GraphQL result
      while (!result.value?.categories?.items?.[0]?.name) {
        await new Promise(resolve => setTimeout(resolve, 100))
      }

      const categoryName = result.value.categories.items[0].name
      if (!categoryName) {
        console.warn('No category name available')
        return null;
      }

      const directusData = await $directus.request<Outlet[]>($readItems('outlets', {
        filter: {
          name: {
            _icontains: categoryName
          }
        },
        fields: ['*', {
          '*': ['*']
        }]
      }))

      return directusData
    } catch (error) {
      console.error('Error fetching outlets:', error)
      return null
    }
  }, {
    server: true,
    immediate: true,
    watch: [() => route.params.uid, () => result.value]
  })

  const { data: outlet, error: outletError } = useAsyncData<Outlet | null>('outlet', async () => {
    try {
      if (!outlets.value?.[0]?.id) {
        console.warn('No outlet ID available')
        return null;
      }

      const outletData = await $directus.request<Outlet>($readItem('outlets', outlets.value[0].id, {
        fields: ['*', {
          '*': ['*']
        }]
      }))

      return outletData
    } catch (error) {
      console.error('Error fetching outlet:', error)
      return null
    }
  }, {
    server: true,
    immediate: true,
    watch: [() => outlets.value]
  })

  // Add watchers to handle reactive updates
  watch(() => result.value?.categories?.items?.[0]?.name, async (newName) => {
    if (newName) {
      await refreshNuxtData('outlets')
    }
  })

  watch(() => outlets.value, async (newOutlets) => {
    if (newOutlets?.[0]?.id) {
      await refreshNuxtData('outlet')
    }
  })

  return {
    result,
    outlets,
    outlet,
    outletsError,
    outletError
  }
}
