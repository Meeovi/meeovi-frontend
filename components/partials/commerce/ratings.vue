<template>
    <SfRating size="xs" :half-increment="true" :value="(rating.rating_summary || FALLBACK_RATING)/RATING_CONVERSION_FACTOR" :max="MAX_AVERAGE_RATING" />
</template>

<script setup>
    import {
        SfRating
    } from '@storefront-ui/vue';
    import { MAX_AVERAGE_RATING, RATING_CONVERSION_FACTOR, FALLBACK_RATING } from '~/helpers/constants'

    const props = defineProps({
        rating: {
            type: Number,
            default: 5
        },
    });
</script>