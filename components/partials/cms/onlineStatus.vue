<template>
    <div class="status-indicator" :title="text">
        <span :style="statusDot"></span>
        <span v-if="showText" class="status-text">{{ text }}</span>
    </div>
</template>

<script setup>
    import onlineStatus from '@/utils/onlineStatus'

    const props = defineProps({
        showText: {
            type: Boolean,
            default: true
        }
    })

    const {
        statusDot,
        text
    } = onlineStatus
</script>

<style scoped>
    .status-indicator {
        display: inline-flex;
        align-items: center;
        gap: 8px;
    }

    .status-text {
        font-size: 14px;
    }
</style>