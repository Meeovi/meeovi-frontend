// Import necessary dependencies
import { defineComponent, ref } from 'vue'
import { useDirectus } from 'nuxt-directus'

// Define the BookmarkButton component
export default defineComponent({
  name: 'BookmarkButton',
  props: {
    // Props to receive necessary data for bookmarking
    itemId: { type: String, required: true }, // ID of the item to be bookmarked
    itemType: { type: String, required: true }, // Type of the item (e.g., article, post, etc.)
    userId: { type: String, required: true }, // ID of the user performing the bookmark action
  },
  setup(props) {
    // Initialize Directus hook
    const { directus } = useDirectus()

    // Define a reactive variable to track bookmark status
    const isBookmarked = ref(false)

    // Function to toggle bookmark status
    const toggleBookmark = async () => {
      try {
        // Check if the item is already bookmarked by the user
        const existingBookmark = await directus.items('bookmarks').readMany({
          filter: {
            user: { _eq: props.userId },
            item: { _eq: props.itemId },
            type: { _eq: props.itemType }
          }
        })

        // If the bookmark exists, delete it
        if (existingBookmark.data.length > 0) {
          await directus.items('bookmarks').deleteOne(existingBookmark.data[0].id)
          isBookmarked.value = false // Update bookmark status
        } else {
          // If the bookmark doesn't exist, create a new one
          await directus.items('bookmarks').createOne({
            user: props.userId,
            item: props.itemId,
            type: props.itemType
          })
          isBookmarked.value = true // Update bookmark status
        }
      } catch (error) {
        console.error('Error toggling bookmark:', error)
      }
    }

    // Function to check if the item is already bookmarked
    const checkBookmarkStatus = async () => {
      try {
        const existingBookmark = await directus.items('bookmarks').readMany({
          filter: {
            user: { _eq: props.userId },
            item: { _eq: props.itemId },
            type: { _eq: props.itemType }
          }
        })
        isBookmarked.value = existingBookmark.data.length > 0
      } catch (error) {
        console.error('Error checking bookmark status:', error)
      }
    }

    // On component mount, check if the item is already bookmarked
    checkBookmarkStatus()

    // Return necessary data and functions for template
    return {
      isBookmarked,
      toggleBookmark
    }
  }
})
