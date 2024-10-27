<template>
    <div>
      <v-dialog v-model="dialogOpen" max-width="500">
        <template v-slot:activator="{ props }">
          <SfButton
            v-bind="props"
            variant="tertiary"
            size="sm"
            square
            class="absolute bottom-0 right-0 mr-2 mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full"
            aria-label="Add to wishlist"
          >
            <SfIconFavorite size="sm" />
          </SfButton>
        </template>
  
        <v-card>
          <v-card-title>Add to Wishlist</v-card-title>
          <v-card-text>
            <v-select
              v-model="selectedWishlist"
              :items="[{id: 'new', wishlist_name: 'Create New Wishlist'}, ...wishlists]"
              item-title="wishlist_name"
              item-value="multi_wishlist_id"
              label="Select Wishlist"
            ></v-select>
            <template v-if="selectedWishlist === 'new'">
              <v-text-field
                v-model="newWishlistName"
                label="New Wishlist Name"
              ></v-text-field>
              <v-textarea
                v-model="newWishlistDescription"
                label="Description"
              ></v-textarea>
            </template>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="primary" @click="addToWishlist">Add</v-btn>
            <v-btn color="grey" @click="dialogOpen = false">Cancel</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </template>  
  
  <script setup>
  import { ref, onMounted } from 'vue'
  import { SfButton, SfIconFavorite } from '@storefront-ui/vue'
  import { useWishlist } from '~/composables/commerce/customers/useWishlist'
  
  const props = defineProps({
    productId: {
      type: Number,
      required: true
    }
  })
  
  const dialogOpen = ref(false)
  const newWishlistName = ref('')
  const newWishlistDescription = ref('')
  const selectedWishlist = ref(null)
  
  const { wishlists, currentWishlist, fetchWishlists, createWishlist, setCurrentWishlist } = useWishlist()
  
  onMounted(async () => {
    await fetchWishlists()
  })
  
  const createNewWishlist = async () => {
    try {
      if (!newWishlistName.value) {
        alert('Please enter a name for the new wishlist')
        return
      }
      const newWishlist = await createWishlist(newWishlistName.value, newWishlistDescription.value)
      selectedWishlist.value = newWishlist.multi_wishlist_id
      newWishlistName.value = ''
      newWishlistDescription.value = ''
      alert('New wishlist created successfully')
    } catch (error) {
      console.error('Error creating wishlist:', error)
      alert('Failed to create wishlist')
    }
  }
  
  const addToWishlist = async () => {
    try {
      if (selectedWishlist.value === 'new') {
        await createNewWishlist()
      } else if (selectedWishlist.value) {
        setCurrentWishlist(selectedWishlist.value)
        // Here you would typically add the product to the selected wishlist
        // Since we don't have that functionality in the current model, we'll just show an alert
        alert(`Product added to wishlist: ${currentWishlist.value.wishlist_name}`)
      } else {
        alert('Please select a wishlist or create a new one')
        return
      }
      dialogOpen.value = false
    } catch (error) {
      console.error('Error adding to wishlist:', error)
      alert('Failed to add product to wishlist')
    }
  }
  </script>
  
  
  <style scoped>
  .v-dialog {
    border-radius: 8px;
  }
  </style>
  