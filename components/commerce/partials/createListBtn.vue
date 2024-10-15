<template>
    <div>
        <v-dialog max-width="500">
            <template v-slot:activator="{ props: activatorProps }">
                <SfButton variant="tertiary" size="sm" square
                    class="absolute bottom-0 right-0 mr-2 mb-2 bg-white ring-1 ring-inset ring-neutral-200 !rounded-full"
                    aria-label="Add to wishlist" @click="toggleWishlist" :class="{ 'in-wishlist': isInWishlist }">
                    <SfIconFavorite size="sm" :class="{ 'text-orange-500': isInWishlist }" />
                </SfButton>
            </template>

            <template v-slot:default="{ isActive }">
                <v-card>
                    <createlist />

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn text="Close" @click="isActive.value = false"></v-btn>
                    </v-card-actions>
                </v-card>
            </template>
        </v-dialog>
    </div>
</template>


<script setup>
    import {
        ref,
        onMounted
    } from 'vue'
    import { SfButton, SfIconFavorite } from '@storefront-ui/vue';
    import createlist from '~/components/commerce/create/createlist.vue'

    const props = defineProps({
        productId: {
            type: Number,
            required: true
        }
    })

    const isInWishlist = ref(false)

    const toggleWishlist = async () => {
        try {
            if (isInWishlist.value) {
                await removeFromWishlist()
            } else {
                await addToWishlist()
            }
            isInWishlist.value = !isInWishlist.value
        } catch (error) {
            console.error('Error toggling wishlist:', error)
        }
    }

    const addToWishlist = async () => {
        // Implement API call to add item to wishlist
        // Example:
         await $fetch('/api/wishlist', {
           method: 'POST',
           body: { productId: props.productId }
         })
    }

    const removeFromWishlist = async () => {
        // Implement API call to remove item from wishlist
        // Example:
         await $fetch(`/api/wishlist/${props.productId}`, {
           method: 'DELETE'
         })
    }

    const checkWishlistStatus = async () => {
        // Implement API call to check wishlist status
        // Example:
         const response = await $fetch(`/api/wishlist/check/${props.productId}`)
         isInWishlist.value = response.inWishlist
    }

    onMounted(async () => {
        await checkWishlistStatus()
    })
</script>

<style scoped>
    .in-wishlist {
        background-color: orange !important;
    }
</style>