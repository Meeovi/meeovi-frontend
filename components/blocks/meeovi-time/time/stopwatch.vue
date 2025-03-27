<template>
    <div>
        <v-container>
            <v-row justify="center">
                <v-col cols="12" md="6">
                    <v-card class="text-center pa-4">
                        <v-card-title class="text-h4 justify-center">
                            Stopwatch
                        </v-card-title>
                        <v-card-text>
                            <div class="text-h2 my-4">
                                {{ hours | zeroPad }}:{{ minutes | zeroPad }}:{{ seconds | zeroPad }}.{{ milliseconds | zeroPad(3) }}
                            </div>
                            <v-row justify="center" class="mt-4">
                                <v-col cols="auto">
                                    <v-btn color="primary" @click="startTimer" :disabled="isRunning">
                                        Start
                                    </v-btn>
                                </v-col>
                                <v-col cols="auto">
                                    <v-btn color="warning" @click="pauseTimer" :disabled="!isRunning">
                                        Pause
                                    </v-btn>
                                </v-col>
                                <v-col cols="auto">
                                    <v-btn color="error" @click="resetTimer">
                                        Reset
                                    </v-btn>
                                </v-col>
                            </v-row>
                            <v-list v-if="laps.length" class="mt-4">
                                <v-list-item v-for="(lap, index) in laps" :key="index">
                                    <v-list-item-content>
                                        Lap {{ index + 1 }}: {{ formatTime(lap) }}
                                    </v-list-item-content>
                                </v-list-item>
                            </v-list>
                        </v-card-text>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
    import {
        ref,
        computed
    } from 'vue'

    useHead({
        title: 'Meeovi Time - Stopwatch'
    })

    const time = ref(0)
    const isRunning = ref(false)
    const timer = ref(null)
    const laps = ref([])

    const hours = computed(() => Math.floor(time.value / 3600000))
    const minutes = computed(() => Math.floor((time.value % 3600000) / 60000))
    const seconds = computed(() => Math.floor((time.value % 60000) / 1000))
    const milliseconds = computed(() => time.value % 1000)

    const startTimer = () => {
        if (!isRunning.value) {
            isRunning.value = true
            const startTime = Date.now() - time.value
            timer.value = setInterval(() => {
                time.value = Date.now() - startTime
            }, 10)
        }
    }

    const pauseTimer = () => {
        isRunning.value = false
        clearInterval(timer.value)
    }

    const resetTimer = () => {
        pauseTimer()
        time.value = 0
        laps.value = []
    }

    const addLap = () => {
        laps.value.push(time.value)
    }

    const formatTime = (timeValue) => {
        const h = Math.floor(timeValue / 3600000)
        const m = Math.floor((timeValue % 3600000) / 60000)
        const s = Math.floor((timeValue % 60000) / 1000)
        const ms = timeValue % 1000
        return `${padZero(h)}:${padZero(m)}:${padZero(s)}.${padZero(ms, 3)}`
    }

    const padZero = (num, places = 2) => {
        return String(num).padStart(places, '0')
    }
</script>

<style scoped>
    .v-card {
        max-width: 600px;
        margin: auto;
    }
</style>