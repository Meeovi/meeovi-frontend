<template>
    <SfRating :max="length" :value="value" :size="size" :half-increment="halfIncrement" />
</template>

<script setup>
    import {
        SfRating
    } from '@storefront-ui/vue';

    const props = defineProps({
        length: {
            type: Number,
            default: 5
        },
        size: {
            type: String,
            default: 'base',
            validator: (value) => ['xs', 'sm', 'base', 'lg'].includes(value)
        },
        value: {
            type: Number,
            default: 0
        },
        halfIncrement: {
            type: Boolean,
            default: false
        }
    });
</script>