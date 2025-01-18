import { useQuery } from '@vue/apollo-composable'
import type { DepartmentData, Department, CategoryResult, Space } from '~/types/departments'
import { CategoryQuery } from '~/graphql/commerce/queries/id/department'

export const useDepartmentData = (): DepartmentData => {
  const route = useRoute();
  const { $directus, $readItem, $readItems } = useNuxtApp()

  const { result } = useQuery<CategoryResult>(CategoryQuery, {
    uid: route.params.uid
  });

  // Wait for the Magento category data to be available
  const { data: departments, error: departmentsError } = useAsyncData<Department[] | null>('departments', async () => {
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

      const directusData = await $directus.request<Department[]>($readItems('departments', {
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
      console.error('Error fetching departments:', error)
      return null
    }
  }, {
    server: true,
    immediate: true,
    watch: [() => route.params.uid, () => result.value]
  })

  const { data: department, error: departmentError } = useAsyncData<Department | null>('department', async () => {
    try {
      if (!departments.value?.[0]?.id) {
        console.warn('No department ID available')
        return null;
      }

      const departmentData = await $directus.request<Department>($readItem('departments', departments.value[0].id, {
        fields: ['*',
          'categories.categories_id.*',
          'shorts.shorts_id.*',
          'spaces.spaces_id.*',
          'image.*'
        ]
      }))

      return departmentData
    } catch (error) {
      console.error('Error fetching department:', error)
      return null
    }
  }, {
    server: true,
    immediate: true,
    watch: [() => departments.value]
  })

  // Add spaces data fetching
  const { data: spaces, error: spacesError } = useAsyncData<Space[] | null>('spaces', async () => {
    try {
      if (!departments.value?.[0]?.id) {
        console.warn('No department ID available for spaces')
        return null;
      }

      const spacesData = await $directus.request<Space[]>($readItems('spaces', {
        filter: {
          department: {
            _eq: departments.value[0].id
          }
        },
        fields: ['*', {
          department: ['*']
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
    watch: [() => departments.value]
  })

  // Add watchers to handle reactive updates
  watch(() => result.value?.categories?.items?.[0]?.name, async (newName) => {
    if (newName) {
      await refreshNuxtData('departments')
    }
  })

  watch(() => departments.value, async (newDepartments) => {
    if (newDepartments?.[0]?.id) {
      await refreshNuxtData('department')
      await refreshNuxtData('spaces') // Add this to refresh spaces when department changes
    }
  })

  return {
    result,
    departments,
    department,
    spaces, // Add this
    departmentsError,
    departmentError,
    spacesError // Add this
  }
}
