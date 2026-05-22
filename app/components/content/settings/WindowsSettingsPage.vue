<template>
  <AccountSettingsPage
    title="Settings"
    subtitle="Manage your Meeovi experience"
    preset="meeovi"
    :categories="categories"
    :settings="settings" />
</template>

<script setup lang="ts">
  import type {
    AccountSettingDefinition,
    AccountSettingsCategoryDefinition,
  } from '#auth/app/composables/config/accountSettings'
  import AccountSettingsPage from '#shared/app/components/settings/AccountSettingsPage.vue'

  const props = withDefaults(defineProps<{
    categories?: AccountSettingsCategoryDefinition[]
    settings?: AccountSettingDefinition[]
  }>(), {
    categories: undefined,
    settings: undefined,
  })

  const categories = computed(() => props.categories)
  const settings = computed(() => props.settings)
</script>
