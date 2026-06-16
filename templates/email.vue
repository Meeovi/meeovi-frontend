<template>
  <html>
    <body style="font-family: Arial, sans-serif; color: #111827; line-height: 1.5;">
      <h1 style="margin: 0 0 12px;">You are invited</h1>
      <p style="margin: 0 0 8px;">Hello {{ username || 'there' }},</p>
      <p style="margin: 0 0 8px;">
        {{ invitedByUsername || 'A teammate' }} invited you to join {{ teamName || 'our team' }}.
      </p>
      <p style="margin: 0 0 16px;">
        <a :href="inviteLink" style="color: #2563eb;">Accept invitation</a>
      </p>
      <p v-if="showFootnote" style="font-size: 12px; color: #6b7280; margin: 16px 0 0;">
        Sent from Meeovi workflow notifications.
      </p>
    </body>
  </html>
</template>

<script setup lang="ts">
defineProps<{
  showFootnote?: boolean
  username?: string
  invitedByUsername?: string
  invitedByEmail?: string
  teamName?: string
  inviteLink?: string
  inviteFromIp?: string
  inviteFromLocation?: string
  userImage?: string
  teamImage?: string
}>()
</script>
