<template>
    <form class="flex flex-col gap-y-4 text-neutral-900" @submit.prevent="onSubmit">
        <h3 class="font-bold typography-headline-4 md:typography-headline-3">Contact information</h3>
        <div class="gap-y-0.5">
            <label class="gap-y-0.5">
                <span class="text-sm font-medium">Email</span>
                <SfInput v-model="value" name="email" placeholder="email address" :invalid="invalid"
                    auto-complete="email" @input="handleValidation" />
            </label>
            <p v-if="invalid" class="typography-error-sm text-negative-700 font-medium mt-0.5">
                Please provide a valid email
            </p>
        </div>
        <label class="flex flex-col gap-y-0.5">
            <span class="font-medium typography-text-sm">Phone number</span>
            <div class="flex">
                <SfSelect name="phone-country-code" class="w-16 mr-4" placeholder="--" auto-complete="tel-country-code">
                    <option v-for="option in options" :key="option" :value="option">
                        {{ option }}
                    </option>
                    ))}
                </SfSelect>
                <SfInput name="phone-national" wrapper-class="w-full" type="tel" input-mode="tel"
                    auto-complete="tel-national" />
            </div>
        </label>
        <div class="flex justify-between gap-4 md:justify-end">
            <SfButton class="w-full md:w-auto" type="reset" variant="secondary"> Clear all </SfButton>
            <SfButton class="w-full md:w-auto" type="submit">Save</SfButton>
        </div>
    </form>
</template>

<script lang="ts" setup>
    import {
        ref
    } from 'vue';
    import {
        SfInput,
        SfButton,
        SfSelect
    } from '@storefront-ui/vue';

    const invalid = ref(true);
    const options = [1, 7, 20, 27, 30, 30, 31, 32, 33, 34, 36, 39, 40, 41, 43, 44, 45, 46, 47, 48, 49, 51];
    const emailRegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const value = ref('');

    const handleValidation = (event: InputEvent) => {
        invalid.value = !emailRegExp.test((event.target as HTMLInputElement).value);
    };

    const onSubmit = (e: Event) => {
        /* your submit handler, e.g.: */
        const form = e.target as HTMLFormElement;
        // data can be accessed in form of FormData
        const formData = new FormData(form);
        // or JSON object
        const formJSON = Object.fromEntries(formData.entries());
        console.log(formJSON);
    };
</script>