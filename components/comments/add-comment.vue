<template>
  <form
    class="grid grid-cols-[100px_1fr] py-2 px-4 gap-4 md:grid-cols-[176px_1fr] grid-rows-[100px_1fr] md:grid-rows-[28px_1fr] items-center md:items-start"
    @submit.prevent="submitReview">
    <img :src="productImage" :alt="productName" width="100" height="100"
      class="mx-auto border border-neutral-200 rounded-md aspect-square w-[100px] md:w-[176px]" />
    <p class="text-left text-neutral-900 md:typography-text-lg">{{ productName }}</p>

    <div class="col-span-2 md:col-start-2">
      <div class="flex items-center justify-between">
        <p :id="ratingLabelId" class="typography-label-sm font-medium text-neutral-900">Your rating:</p>
        <SfRatingButton v-model="ratingModelValue" :aria-labelledby="ratingLabelId" class="p-1 gap-x-2" />
      </div>

      <label class="my-4 block">
        <span class="block typography-label-sm font-medium mb-0.5 text-neutral-900">Product Summary</span>
        <input v-model="reviewSummary" placeholder="Summary of your experience..."
          class="block w-full py-2 pl-4 pr-3 rounded-md ring-1 ring-neutral-300 placeholder:text-neutral-500" />
        <span
          :class="['block text-xs mt-0.5 text-right', reviewIsAboveLimit ? 'text-negative-700 font-medium' : 'text-neutral-500']">
          {{ reviewCharsCount }}
        </span>
      </label>

      <label class="my-4 block">
        <span class="block typography-label-sm font-medium mb-0.5 text-neutral-900">Product review (optional)</span>
        <textarea v-model="reviewModelValue" placeholder="Describe your experience..."
          class="block w-full py-2 pl-4 pr-3 min-h-[138px] rounded-md ring-1 ring-neutral-300 placeholder:text-neutral-500" />
        <span
          :class="['block text-xs mt-0.5 text-right', reviewIsAboveLimit ? 'text-negative-700 font-medium' : 'text-neutral-500']">
          {{ reviewCharsCount }}
        </span>
      </label>

      <label class="block mb-6">
        <span class="block mb-0.5 typography-label-sm font-medium text-neutral-900">Your name (optional)</span>
        <SfInput v-model="usernameModelValue" />
      </label>

      <div class="flex justify-end gap-x-4">
        <SfButton variant="secondary" class="flex-1 md:flex-initial">Cancel</SfButton>
        <SfButton type="submit" class="flex-1 md:flex-initial"
          :disabled="loading || !isReadyToSubmit || reviewIsAboveLimit">
          {{ loading ? 'Submitting...' : 
     !ratingModelValue ? 'Please select a rating' :
     !isReadyToSubmit ? 'Loading...' : 
     'Submit Review' }}
        </SfButton>
      </div>
    </div>
  </form>
</template>

<script setup>
  import {
    ref,
    computed,
    onMounted,
    watchEffect
  } from 'vue';
  import {
    useMutation,
    useQuery
  } from '@vue/apollo-composable';
  import {
    CREATE_PRODUCT_REVIEW,
    GET_PRODUCT_REVIEW_RATINGS_METADATA
  } from '@/graphql/commerce/queries/productReviews';
  import {
    SfRatingButton,
    SfButton,
    SfInput,
    useId
  } from '@storefront-ui/vue';

  const props = defineProps({
    productName: {
      type: String,
      required: true
    },
    productImage: {
      type: String,
      required: true
    },
    productSku: {
      type: String,
      required: true
    }
  });

  const emit = defineEmits(['review-submitted']);

  const ratingLabelId = useId();
  const ratingModelValue = ref(null);
  const reviewSummary = ref('');
  const usernameModelValue = ref('');
  const reviewModelValue = ref('');
  const reviewCharacterLimit = ref(5000);

  // Computed properties
  const reviewIsAboveLimit = computed(() => reviewModelValue.value.length > reviewCharacterLimit.value);
  const reviewCharsCount = computed(() => reviewCharacterLimit.value - reviewModelValue.value.length);
  const isReadyToSubmit = computed(() => {
    return !ratingsLoading.value &&
      ratingsMetadata.value?.length > 0 &&
      ratingModelValue.value !== null; // Add this condition to check if rating is selected
  });

  // GraphQL Query Setup
  const {
    result,
    loading: ratingsLoading,
    error: ratingsError
  } = useQuery(GET_PRODUCT_REVIEW_RATINGS_METADATA);
  const ratingsMetadata = ref([]);

  // GraphQL Mutation Setup
  const {
    mutate: createReview,
    loading,
    error
  } = useMutation(CREATE_PRODUCT_REVIEW);

  // Watch for changes in the query result
  watchEffect(() => {
    if (result.value?.productReviewRatingsMetadata?.items) {
      ratingsMetadata.value = result.value.productReviewRatingsMetadata.items;
      console.log('Updated ratingsMetadata:', ratingsMetadata.value);
    }
  });

  // Debug watchEffect (keep this for debugging)
  watchEffect(() => {
    console.log('Current ratingsMetadata:', ratingsMetadata.value);
    console.log('Query loading state:', ratingsLoading.value);
    console.log('Query error:', ratingsError.value);
    console.log('Raw query result:', result.value);
  });

  const resetForm = () => {
    ratingModelValue.value = null;
    reviewSummary.value = '';
    usernameModelValue.value = '';
    reviewModelValue.value = '';
  };

  const submitReview = async () => {
    console.log('Submit button clicked');
    console.log('Rating value:', ratingModelValue.value);
    console.log('Is ready to submit:', isReadyToSubmit.value);
    console.log('Ratings metadata:', ratingsMetadata.value);

    if (!ratingModelValue.value || reviewIsAboveLimit.value) {
      console.log('Validation failed:', {
        rating: ratingModelValue.value,
        isAboveLimit: reviewIsAboveLimit.value
      });
      return;
    }

    if (ratingsLoading.value) {
      console.log('Please wait, ratings metadata is still loading');
      return;
    }

    try {
      console.log('Submitting review with metadata:', ratingsMetadata.value);

      if (!ratingsMetadata.value || ratingsMetadata.value.length === 0) {
        console.error('Ratings metadata is not available', {
          loading: ratingsLoading.value,
          error: ratingsError.value,
          result: result.value
        });
        throw new Error('Ratings metadata not found');
      }

      const ratingItem = ratingsMetadata.value.find(rating => rating.name === 'Rating');
      if (!ratingItem) throw new Error('Rating metadata not found');

      const selectedValue = ratingItem.values.find(val => val.value == ratingModelValue.value);
      if (!selectedValue) throw new Error('Invalid rating value');

      const {
        data
      } = await createReview({
        input: {
          sku: props.productSku,
          summary: reviewSummary.value || 'Summary Text',
          nickname: usernameModelValue.value || 'Anonymous',
          text: reviewModelValue.value,
          ratings: [{
            id: ratingItem.id,
            value_id: selectedValue.value_id
          }]
        }
      });

      emit('review-submitted', data.createProductReview.review);
      resetForm(); // Reset form after successful submission

    } catch (err) {
      console.error('Failed to submit review:', err);
    }
  };
</script>