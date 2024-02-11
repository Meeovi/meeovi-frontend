<template>
    <div>
      <form>
        <label for="locale-select">{{ $t('language') }}: </label>
        <select id="locale-select" v-model="$i18n.locale">
          <option value="en">English</option>
          <option value="fr">France</option>
          <option value="ja">Japanese</option>
        </select>
      </form>
    </div>
  </template>

<script setup lang="ts">

</script>