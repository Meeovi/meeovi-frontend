<template>
    <v-app class="contentPage">
        <v-toolbar title="Meeovi Messages" color="primary"></v-toolbar>
        <v-main>
            <v-container fluid class="pa-0 fill-height chatWindow">
                <v-row no-gutters class="fill-height">
                    <!-- Left sidebar for contacts -->
                    <v-col cols="4" class="border-right chatSidebar">
                        <v-list>
                            <v-toolbar title="Chats" color="transparent"></v-toolbar>
                            <v-list-item v-for="(chat, index) in chats" :key="chat.id" :title="chat.name"
                                :subtitle="chat.lastMessage" @click="selectChat(chat)"></v-list-item>
                        </v-list>
                    </v-col>

                    <!-- Right side for messages -->
                    <v-col v-if="selectedChat" cols="8" class="d-flex flex-column messageWindow">
                        <v-toolbar color="primary" dark>
                            <v-list-item :title="selectedChat.name" :subtitle="selectedChat.lastMessage"></v-list-item>
                        </v-toolbar>

                        <!-- Messages area -->
                        <v-card class="flex-grow-1 overflow-y-auto pa-3 messageWindow" flat>
                            <div v-for="(message, index) in selectedChat.messages" :key="index"
                                :class="['d-flex', message.sent ? 'justify-end' : 'justify-start']">
                                <v-card :color="message.sent ? 'light-green lighten-3' : 'grey lighten-3'"
                                    class="ma-2 pa-3" max-width="80%" rounded="lg">
                                    {{ message.text }}
                                </v-card>
                            </div>
                        </v-card>

                        <!-- Message input -->
                        <v-footer app class="pa-3 chatMessage">
                            <v-text-field v-model="newMessage" placeholder="Type a message" append-icon="mdi-send"
                                @click:append="sendMessage" @keyup.enter="sendMessage" hide-details rounded
                                dense></v-text-field>
                        </v-footer>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'

const chats = reactive([])
const selectedChat = ref(null)
const newMessage = ref('')
const error = ref(null)

const loadChats = async () => {
  try {
    const response = await $fetch('/api/rocketChat/getChats', { method: 'GET' })
    console.log('Full response from getChats:', response) // Add this line for debugging
    if (response.success) {
      chats.splice(0, chats.length, ...response.data)
      if (chats.length > 0) {
        selectChat(chats[0])
      }
    } else {
      throw new Error(response.error || 'Failed to load chats')
    }
  } catch (err) {
    console.error('Failed to load chats:', err)
    error.value = err.message
  }
}

const selectChat = async (chat) => {
  selectedChat.value = chat
  await loadMessages(chat.id)
}

const loadMessages = async (roomId) => {
  try {
    const response = await $fetch('/api/rocketChat/getMessages', {
      method: 'POST',
      body: { roomId }
    })
    console.log('Full response from getMessages:', response) // Add this line for debugging
    if (response.success) {
      selectedChat.value.messages = response.data
    } else {
      throw new Error(response.error || 'Failed to load messages')
    }
  } catch (err) {
    console.error('Failed to load messages:', err)
    error.value = err.message
  }
}

const sendMessage = async () => {
  if (newMessage.value.trim() && selectedChat.value) {
    try {
      const response = await $fetch('/api/rocketChat/sendMessage', {
        method: 'POST',
        body: {
          roomId: selectedChat.value.id,
          message: newMessage.value
        }
      })
      if (response.success) {
        selectedChat.value.messages.push({
          text: newMessage.value,
          sent: true
        })
        selectedChat.value.lastMessage = newMessage.value
        newMessage.value = ''
      } else {
        throw new Error(response.error || 'Failed to send message')
      }
    } catch (err) {
      console.error('Failed to send message:', err)
      error.value = err.message
    }
  }
}

onMounted(loadChats)

useHead({
  title: 'Messages',
})
</script>

<style scoped>
    .border-right {
        border-right: 1px solid rgba(0, 0, 0, 0.12);
    }
</style>