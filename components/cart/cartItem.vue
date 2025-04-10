<template>
    <section class="shop2 marketm4_shop2 cid-uHg6RhKlpj" id="shop2-av">
        <div class="container">
            <div class="row justify-content-between align-items-center">
                <div class="col-xl-6 col-lg-7 col-md-12 content__block">
                    <h2 class="mbr-section-title mbr-bold mbr-fonts-style display-5">
                        Shopping Cart
                    </h2>
                    <div class="block__products">
                        <div class="d-sm-flex align-items-center product__item">
                            <div class="image__item flex-shrink-0">
                                <NuxtImg :src="product?.productVariant?.featuredAsset?.preview"
                                    :alt="product?.productVariant?.name" title="" />
                            </div>
                            <div class="item__text">
                                <div class="d-flex justify-content-between align-items-baseline item__title">
                                    <p class="name__item mbr-medium mbr-fonts-style display-4">
                                        {{ product?.productVariant?.name }}
                                    </p>
                                    <p class="item__price mbr-fonts-style display-4">
                                        €{{ (product.unitPriceWithTax / 100).toFixed(2) }}
                                    </p>
                                </div>
                                <div class="item__buttons">
                                    <div class="mbr-section-btn">
                                        <div class="flex border border-neutral-300 rounded-md">
                                            <SfButton variant="tertiary" :disabled="count <= min" square
                                                class="rounded-r-none p-3" :aria-controls="inputId"
                                                aria-label="Decrease value" @click="dec">
                                                <SfIconRemove />
                                            </SfButton>
                                            <input :id="inputId" v-model="count" type="number"
                                                class="grow appearance-none mx-2 w-8 text-center bg-transparent font-medium"
                                                :min="min" :max="max" @input="handleOnChange" />
                                            <SfButton variant="tertiary" :disabled="count >= max" square
                                                class="rounded-l-none p-3" :aria-controls="inputId"
                                                aria-label="Increase value" @click="inc">
                                                <SfIconAdd />
                                            </SfButton>
                                        </div>
                                        <p class="self-center mt-1 mb-4 text-xs text-neutral-500 xs:mb-0">
                                            <strong class="text-neutral-900">{{ max }}</strong> in stock
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script lang="ts" setup>
    import {
        ref
    } from 'vue';
    import {
        SfButton,
        SfIconAdd,
        SfIconRemove,
        useId
    } from '@storefront-ui/vue';
    import {
        clamp
    } from '@storefront-ui/shared';
    import {
        useCounter
    } from '@vueuse/core';
    import {
        useMutation
    } from '@vue/apollo-composable';
    import {
        removeAllOrderLines
    } from '~/graphql/commerce/mutations/removeAllOrderLines.gql';

    const props = defineProps({
        product: {
            type: Object,
            required: true, // expects one `line` from activeOrder.lines
        },
    });

    const min = ref(1);
    const max = ref(10); // Ideally pulled from inventory if exposed
    const inputId = useId();
    const {
        count,
        inc,
        dec,
        set
    } = useCounter(props.product.quantity, {
        min: min.value,
        max: max.value,
    });

    const {
        mutate: removeItemFromCart,
        loading
    } = useMutation(removeAllOrderLines);

    function handleOnChange(event: Event) {
        const currentValue = (event.target as HTMLInputElement)?.value;
        const nextValue = parseFloat(currentValue);
        set(clamp(nextValue, min.value, max.value));
    }

    async function removeItem() {
        try {
            const response = await removeItemFromCart({
                id: props.product.id, // This is the orderLine ID
            });
            console.log('Item removed:', response);
            // Emit event to update cart externally if needed
        } catch (error) {
            console.error('Error removing item:', error);
        }
    }
</script>