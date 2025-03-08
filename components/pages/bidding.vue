<template>
    <div class="auction-item">
        <h2>{{ item.name }}</h2>
        <NuxtImg loading="lazy" :src="item.image" :alt="item.name" />
        <p>Current Bid: ${{ currentBid }}</p>
        <p>Time Left: {{ timeLeft }}</p>
        <input v-model.number="bidAmount" type="number" :min="minBid" step="0.01" />
        <button @click="placeBid" :disabled="!canBid">Place Bid</button>
        <div v-if="bidHistory.length > 0">
            <h3>Bid History</h3>
            <ul>
                <li v-for="bid in bidHistory" :key="bid.id">
                    {{ bid.user }}: ${{ bid.amount }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup>
    import {
        ref,
        computed,
        onMounted,
        onUnmounted
    } from 'vue'
    import {
        useUserStore
    } from '~/stores/user'

    const {
        $io
    } = useNuxtApp()
    const userStore = useUserStore()

    const props = defineProps({
        itemId: {
            type: String,
            required: true
        }
    })

    const item = ref({})
    const currentBid = ref(0)
    const timeLeft = ref('')
    const bidAmount = ref(0)
    const bidHistory = ref([])

    const minBid = computed(() => currentBid.value + 1)
    const canBid = computed(() => bidAmount.value >= minBid.value)

    onMounted(async () => {
        // Fetch initial item data
        const {
            data
        } = await useFetch(`/api/items/${props.itemId}`)
        item.value = data.value
        currentBid.value = item.value.startingBid

        $io.emit('join-auction', props.itemId)

        $io.on('new-bid', (bid) => {
            currentBid.value = bid.amount
            bidHistory.value.unshift(bid)
        })

        $io.on('auction-time-update', (time) => {
            timeLeft.value = time
        })

        $io.on('auction-ended', (winner) => {
            alert(`Auction ended! Winner: ${winner}`)
        })
    })

    const placeBid = () => {
        if (canBid.value) {
            $io.emit('place-bid', {
                itemId: props.itemId,
                amount: bidAmount.value,
                user: userStore.currentUser.name
            })
            bidAmount.value = 0
        }
    }

    onUnmounted(() => {
        $io.off('new-bid')
        $io.off('auction-time-update')
        $io.off('auction-ended')
        $io.emit('leave-auction', props.itemId)
    })
</script>