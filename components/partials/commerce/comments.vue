<template>
  <div class="max-w-[376px] md:max-w-[768px]">
    <h3 class="font-bold py-2 pl-4 pr-3 typography-headline-4">Leave a comment</h3>
    
    <!-- Import the CreateReviewForm -->
    <CreateReviewForm 
      :productName="productName" 
      :productImage="productImage" 
      :productSku="productSku"
      @review-submitted="handleNewReview"
    />

    <!-- List of Comments -->
    <div v-if="loading">Loading reviews...</div>
    <div v-else-if="error">Failed to load reviews.</div>
    
    <article v-for="(comment, index) in comments" :key="index" class="w-full p-4 border rounded-md mt-4">
      <p class="pb-2 font-medium">{{ comment.text }}</p>
      <header class="flex flex-col pb-2 md:flex-row md:justify-between">
        <div class="flex flex-col items-start">
          <span class="flex items-center pr-2 text-xs text-neutral-500">
            <SfRating :value="comment.ratingValue" :max="5" size="xs" class="mr-2" />
            {{ comment.timeAgo }}
          </span>
        </div>
        <div class="flex items-end">
          <p class="flex items-center text-xs truncate text-primary-700">
            <span class="mr-2 text-xs text-neutral-500">{{ comment.nickname }}</span>
            <SfIconCheck size="xs" class="mr-1" /> Verified purchase
          </p>
        </div>
      </header>
    </article>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useQuery } from '@vue/apollo-composable';
import { GET_PRODUCT_REVIEWS } from '@/graphql/commerce/queries/productReviews';
import { SfRating, SfIconCheck } from '@storefront-ui/vue';
import CreateReviewForm from '~/components/crud/create/add-comment.vue';

const props = defineProps({
  productName: { type: String, required: true },
  productImage: { type: String, required: true },
  productSku: { type: String, required: true } // Required for GraphQL query
});

const { result, loading, error, refetch } = useQuery(GET_PRODUCT_REVIEWS, () => ({
  sku: props.productSku
}));

const comments = computed(() => {
  if (!result.value) return [];
  
  return result.value.products.items[0]?.reviews.items.map(review => ({
    nickname: review.nickname,
    text: review.text,
    ratingValue: review.ratings_breakdown?.[0]?.value || 0,
    timeAgo: new Date(review.created_at).toLocaleDateString()
  })) || [];
});

const handleNewReview = (newReview) => {
  comments.value.unshift({
    nickname: newReview.nickname,
    text: newReview.text,
    ratingValue: newReview.ratings_breakdown?.[0]?.value || 0,
    timeAgo: 'Just now'
  });

  refetch(); // Refresh the reviews from GraphQL
};
</script>
