<template>
    <div>
        <v-container>
            <v-row justify="center">
                <v-col cols="12" md="6">
                    <v-card class="text-center pa-4">
                        <v-card-title class="text-h4 justify-center">
                            Timer
                        </v-card-title>

                        <v-card-text>
                            <!-- Timer Display -->
                            <div class="text-h2 my-4">
                                {{ displayTime }}
                            </div>

                            <!-- Time Input Fields (shown when timer is not running) -->
                            <v-row justify="center" v-if="!isRunning && !isPaused">
                                <v-col cols="auto">
                                    <v-text-field v-model="hours" label="Hours" type="number" min="0" max="99"
                                        style="width: 100px" @input="validateInput('hours')"></v-text-field>
                                </v-col>
                                <v-col cols="auto">
                                    <v-text-field v-model="minutes" label="Minutes" type="number" min="0" max="59"
                                        style="width: 100px" @input="validateInput('minutes')"></v-text-field>
                                </v-col>
                                <v-col cols="auto">
                                    <v-text-field v-model="seconds" label="Seconds" type="number" min="0" max="59"
                                        style="width: 100px" @input="validateInput('seconds')"></v-text-field>
                                </v-col>
                            </v-row>

                            <!-- Control Buttons -->
                            <v-row justify="center" class="mt-4">
                                <v-col cols="auto">
                                    <v-btn color="primary" @click="startTimer" :disabled="isRunning || !isValidInput">
                                        Start
                                    </v-btn>
                                </v-col>
                                <v-col cols="auto">
                                    <v-btn color="warning" @click="pauseTimer" :disabled="!isRunning">
                                        Pause
                                    </v-btn>
                                </v-col>
                                <v-col cols="auto">
                                    <v-btn color="error" @click="resetTimer"
                                        :disabled="!isRunning && !isPaused && totalSeconds === 0">
                                        Reset
                                    </v-btn>
                                </v-col>
                            </v-row>
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
        computed,
        onBeforeUnmount
    } from 'vue'

    useHead({
        title: 'Meeovi Time - Timer'
    })

    // State variables
    const hours = ref('0')
    const minutes = ref('0')
    const seconds = ref('0')
    const remainingTime = ref(0)
    const isRunning = ref(false)
    const isPaused = ref(false)
    const timer = ref(null)

    // Computed properties
    const isValidInput = computed(() => {
        const h = parseInt(hours.value) || 0
        const m = parseInt(minutes.value) || 0
        const s = parseInt(seconds.value) || 0
        return h > 0 || m > 0 || s > 0
    })

    const totalSeconds = computed(() => {
        return remainingTime.value
    })

    const displayTime = computed(() => {
        const h = Math.floor(totalSeconds.value / 3600)
        const m = Math.floor((totalSeconds.value % 3600) / 60)
        const s = totalSeconds.value % 60
        return `${padZero(h)}:${padZero(m)}:${padZero(s)}`
    })

    // Methods
    const validateInput = (field) => {
        switch (field) {
            case 'hours':
                hours.value = Math.min(Math.max(parseInt(hours.value) || 0, 0), 99).toString()
                break
            case 'minutes':
                minutes.value = Math.min(Math.max(parseInt(minutes.value) || 0, 0), 59).toString()
                break
            case 'seconds':
                seconds.value = Math.min(Math.max(parseInt(seconds.value) || 0, 0), 59).toString()
                break
        }
    }

    const startTimer = () => {
        if (!isRunning.value) {
            if (!isPaused.value) {
                // Calculate total seconds from input
                remainingTime.value = (
                    parseInt(hours.value) * 3600 +
                    parseInt(minutes.value) * 60 +
                    parseInt(seconds.value)
                )
            }
            isRunning.value = true
            isPaused.value = false

            timer.value = setInterval(() => {
                if (remainingTime.value > 0) {
                    remainingTime.value--
                } else {
                    playAlarm()
                    resetTimer()
                }
            }, 1000)
        }
    }

    const pauseTimer = () => {
        if (isRunning.value) {
            clearInterval(timer.value)
            isRunning.value = false
            isPaused.value = true
        }
    }

    const resetTimer = () => {
        clearInterval(timer.value)
        isRunning.value = false
        isPaused.value = false
        remainingTime.value = 0
        hours.value = '0'
        minutes.value = '0'
        seconds.value = '0'
    }

    const playAlarm = () => {
        // Play sound when timer ends
        const audio = new Audio()
        audio.src = '/path/to/alarm-sound.mp3' // Add your alarm sound file
        audio.play().catch(error => console.log('Error playing alarm:', error))
    }

    const padZero = (num) => {
        return String(num).padStart(2, '0')
    }

    // Cleanup on component unmount
    onBeforeUnmount(() => {
        if (timer.value) {
            clearInterval(timer.value)
        }
    })
</script>

<style scoped>
    .v-card {
        max-width: 600px;
        margin: auto;
    }

    /* Remove spinner buttons from number inputs */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    input[type=number] {
        -moz-appearance: textfield;
    }
</style>