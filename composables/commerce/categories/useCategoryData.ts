import { useQuery } from '@vue/apollo-composable'
import type { CategoryData, Category, CategoryResult, Space } from '~/types/categories'
import { CategoryQuery } from '~/graphql/commerce/queries/id/category'

export const useCategoryData = (): CategoryData => {
  const route = useRoute();
  const { $directus, $readItem, $readItems } = useNuxtApp()

  const { result } = useQuery<CategoryResult>(CategoryQuery, {
    uid: route.params.uid
  });

  // Wait for the Magento category data to be available
  const { data: categories, error: categoriesError } = useAsyncData<Category[] | null>('categories', async () => {
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

      const directusData = await $directus.request<Category[]>($readItems('categories', {
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
      console.error('Error fetching categories:', error)
      return null
    }
  }, {
    server: true,
    immediate: true,
    watch: [() => route.params.uid, () => result.value]
  })

  const { data: category, error: categoryError } = useAsyncData<Category | null>('category', async () => {
    try {
      if (!categories.value?.[0]?.id) {
        console.warn('No category ID available')
        return null;
      }

      const categoryData = await $directus.request<Category>($readItem('categories', categories.value[0].id, {
        fields: ['*',
          'categories.categories_id.*',
          'shorts.shorts_id.*',
          'spaces.spaces_id.*',
          'image.*'
        ]
      }))

      return categoryData
    } catch (error) {
      console.error('Error fetching category:', error)
      return null
    }
  }, {
    server: true,
    immediate: true,
    watch: [() => categories.value]
  })

  // Add spaces data fetching
  const { data: spaces, error: spacesError } = useAsyncData<Space[] | null>('spaces', async () => {
    try {
      if (!categories.value?.[0]?.id) {
        console.warn('No category ID available for spaces')
        return null;
      }

      const spacesData = await $directus.request<Space[]>($readItems('spaces', {
        filter: {
          category: {
            _eq: categories.value[0].id
          }
        },
        fields: ['*', {
          category: ['*']
        }],
        sort: ['name']
      }))

      return spacesData
    } catch (error) {
      console.error('Error fetching spaces:', error)
      return null
    }
  }, {
    server: true,
    immediate: true,
    watch: [() => categories.value]
  })

  // Add watchers to handle reactive updates
  watch(() => result.value?.categories?.items?.[0]?.name, async (newName) => {
    if (newName) {
      await refreshNuxtData('categories')
    }
  })

  watch(() => categories.value, async (newCategorys) => {
    if (newCategorys?.[0]?.id) {
      await refreshNuxtData('category')
      await refreshNuxtData('spaces') // Add this to refresh spaces when category changes
    }
  })

  return {
    result,
    categories,
    category,
    spaces, // Add this
    categoriesError,
    categoryError,
    spacesError // Add this
  }
}
