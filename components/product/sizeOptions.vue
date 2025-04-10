<template>
    <v-row>
        <v-col cols="12">
            <h6>Size</h6>
        </v-col>

        <v-col cols="12">
            <v-select v-model="selectedSize" :items="sizes?.name" label="Select Size" :item-value="sizes?.name" :item-title="sizes?.name" single-line variant="solo"></v-select>
        </v-col>
    </v-row>
</template>

<script>
    export default {
        props: {
            sizes: {
                type: Array,
                required: true, // Sizes should always be passed
            },
        },
        data() {
            return {
                selectedSize: null, // Stores the selected size
            };
        },
        watch: {
            selectedSize(newSize) {
                // Emit the selected size to the parent component
                this.$emit('size-selected', newSize);
            },
        },
    };
</script>