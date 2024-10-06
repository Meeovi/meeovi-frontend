<template>
    <div class="chat-room">
        <div class="messages" ref="messageContainer">
            <div v-for="message in messages" :key="message.id"
                :class="['message', message.sender === currentUser ? 'sent' : 'received']">
                {{ message.text }}
            </div>
        </div>
        <div v-if="isTyping" class="typing-indicator">{{ typingUser }} is typing...</div>
        <div class="input-area">
            <input v-model="newMessage" @input="emitTyping" @keyup.enter="sendMessage"
                placeholder="Type a message..." />
            <button @click="sendMessage">Send</button>
        </div>
    </div>
</template>

<script setup>
    import {
        ref,
        onMounted,
        onUnmounted,
        nextTick
    } from 'vue'
    import {
        useUserStore
    } from '~/stores/user'

    const {
        $io
    } = useNuxtApp()
    const userStore = useUserStore()

    const props = defineProps({
        roomId: {
            type: String,
            required: true
        }
    })

    const messages = ref([])
    const newMessage = ref('')
    const isTyping = ref(false)
    const typingUser = ref('')
    const messageContainer = ref(null)
    const currentUser = userStore.currentUser.id

    const typingTimeout = ref(null)

    onMounted(() => {
        $io.emit('join-room', props.roomId)

        $io.on('chat-message', (message) => {
            messages.value.push(message)
            scrollToBottom()
        })

        $io.on('user-typing', (user) => {
            isTyping.value = true
            typingUser.value = user
        })

        $io.on('user-stop-typing', () => {
            isTyping.value = false
        })
    })

    const sendMessage = () => {
        if (newMessage.value.trim()) {
            $io.emit('chat-message', {
                roomId: props.roomId,
                text: newMessage.value,
                sender: currentUser,
                timestamp: new Date()
            })
            newMessage.value = ''
            emitStopTyping()
        }
    }

    const emitTyping = () => {
        $io.emit('typing', {
            roomId: props.roomId,
            user: userStore.currentUser.name
        })

        if (typingTimeout.value) clearTimeout(typingTimeout.value)

        typingTimeout.value = setTimeout(emitStopTyping, 2000)
    }

    const emitStopTyping = () => {
        $io.emit('stop-typing', {
            roomId: props.roomId
        })
    }

    const scrollToBottom = () => {
        nextTick(() => {
            if (messageContainer.value) {
                messageContainer.value.scrollTop = messageContainer.value.scrollHeight
            }
        })
    }

    onUnmounted(() => {
        $io.off('chat-message')
        $io.off('user-typing')
        $io.off('user-stop-typing')
        $io.emit('leave-room', props.roomId)
    })

useHead({
    title: 'Message'
  })
</script>