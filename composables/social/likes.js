// Import necessary dependencies
import { defineComponent, ref } from 'vue'
import { useDirectus } from 'nuxt-directus'

// Define the LikeButton component
export default defineComponent({
  name: 'LikeButton',
  props: {
    // Props to receive necessary data for liking
    itemId: { type: String, required: true }, // ID of the item to be liked
    itemType: { type: String, required: true }, // Type of the item (e.g., post, comment, etc.)
    userId: { type: String, required: true }, // ID of the user performing the like action
  },
  setup(props) {
    // Initialize Directus hook
    const { directus } = useDirectus()

    // Define a reactive variable to track like status
    const likeStatus = ref(null)

    // Function to handle liking with different emotions
    const like = async (emotion) => {
      try {
        // Check if the item is already liked by the user
        const existingLike = await directus.items('likes').readMany({
          filter: {
            user: { _eq: props.userId },
            item: { _eq: props.itemId },
            type: { _eq: props.itemType }
          }
        })

        // If the like exists, update the emotion
        if (existingLike.data.length > 0) {
          await directus.items('likes').updateOne(existingLike.data[0].id, { emotion })
          likeStatus.value = emotion // Update like status
        } else {
          // If the like doesn't exist, create a new one
          await directus.items('likes').createOne({
            user: props.userId,
            item: props.itemId,
            type: props.itemType,
            emotion
          })
          likeStatus.value = emotion // Update like status
        }
      } catch (error) {
        console.error('Error liking:', error)
      }
    }

    // Function to check like status
    const checkLikeStatus = async () => {
      try {
        const existingLike = await directus.items('likes').readMany({
          filter: {
            user: { _eq: props.userId },
            item: { _eq: props.itemId },
            type: { _eq: props.itemType }
          }
        })
        likeStatus.value = existingLike.data.length > 0 ? existingLike.data[0].emotion : null
      } catch (error) {
        console.error('Error checking like status:', error)
      }
    }

    // On component mount, check like status
    checkLikeStatus()

    // Return necessary data and functions for template
    return {
      likeStatus,
      like
    }
  }
})
