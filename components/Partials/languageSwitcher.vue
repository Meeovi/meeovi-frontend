<template>
    <select aria-label="Select language"
        class="mt-1 block w-full p-2.5 border border-gray-300 text-gray-900 text-sm rounded-md shadow-sm focus:ring-brand-light focus:border-brand-light"
        @change="onChangeHandler">
        <option v-for="language in languages" :key="language.id" :value="language.id"
            :selected="languageIdChain === language.id" :label="getLanguageName(language)">
            {{ getLanguageName(language) }}
        </option>
    </select>
</template>

<script setup lang="ts">

</script>