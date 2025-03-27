import { ref, computed } from 'vue'

export function useWishlist() {
  const wishlists = ref([])
  const currentWishlist = ref(null)

  const fetchWishlists = async () => {
    try {
      const response = await fetch('/api/commerce/catalog/wishlist')
      if (!response.ok) throw new Error('Failed to fetch wishlists')
      wishlists.value = await response.json()
    } catch (error) {
      console.error('Error fetching wishlists:', error)
    }
  }

  const createWishlist = async (name: string, description: string = '') => {
    try {
      const response = await fetch('/api/commerce/catalog/wishlist', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, description })
      })
      if (!response.ok) throw new Error('Failed to create wishlist')
      const newWishlist = await response.json()
      wishlists.value.push(newWishlist)
      return newWishlist
    } catch (error) {
      console.error('Error creating wishlist:', error)
      throw error
    }
  }

  const deleteWishlist = async (wishlistId: number) => {
    try {
      const response = await fetch(`/api/commerce/catalog/wishlist/${wishlistId}`, {
        method: 'DELETE'
      })
      if (!response.ok) throw new Error('Failed to delete wishlist')
      wishlists.value = wishlists.value.filter(w => w.multi_wishlist_id !== wishlistId)
    } catch (error) {
      console.error('Error deleting wishlist:', error)
      throw error
    }
  }

  const setCurrentWishlist = (wishlistId: number) => {
    currentWishlist.value = wishlists.value.find(w => w.multi_wishlist_id === wishlistId) || null
  }

  return {
    wishlists: computed(() => wishlists.value),
    currentWishlist: computed(() => currentWishlist.value),
    fetchWishlists,
    createWishlist,
    deleteWishlist,
    setCurrentWishlist
  }
}
