<template>
  <div class="contentPage">
    <v-toolbar color="transparent" title="Notification Center"></v-toolbar>
    <v-table>
      <thead>
        <tr>
          <th class="text-left">
            ID
          </th>
          <th class="text-left">
            Timestamp
          </th>
          <th class="text-left">
            Status
          </th>
          <th class="text-left">
            Sender
          </th>
          <th class="text-left">
            Subject
          </th>
          <th class="text-left">
            Message
          </th>
          <th class="text-left">
            Related to
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="notifications in activities" :key="notifications?.id">
          <td v-html="notifications?.id"></td>
          <td>{{ new Date(notifications?.timestamp).toLocaleDateString() }}</td>
          <td v-html="notifications?.status"></td>
          <td v-html="notifications?.sender"></td>
          <td v-html="notifications?.subject"></td>
          <td v-html="notifications?.message"></td>
          <td v-html="notifications?.collection"></td>
        </tr>
      </tbody>
    </v-table>
  </div>
</template>

<script setup>
  import {
    ref,
    onMounted,
    onUnmounted
  } from 'vue'
  import {
    useUserStore
  } from '~/stores/user'
  import {
    readNotifications
  } from '@directus/sdk';

  const {
    $directus
  } = useNuxtApp();

  const activities = await $directus.request(
    readNotifications({
      fields: ['*'],
    })
  );
</script>