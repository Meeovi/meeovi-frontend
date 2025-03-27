<template>
    <div>
        <v-container>
            <v-row justify="center">
                <v-col cols="12" md="8">
                    <v-card class="mb-4">
                        <v-card-title class="text-h4 justify-center">
                            Alarms
                        </v-card-title>

                        <!-- Add New Alarm -->
                        <v-card-text>
                            <v-row align="center">
                                <v-col cols="12" sm="4">
                                    <v-time-picker v-model="newAlarmTime" format="24hr" class="mt-4"></v-time-picker>
                                </v-col>
                                <v-col cols="12" sm="8">
                                    <v-text-field v-model="newAlarmLabel" label="Alarm Label"
                                        placeholder="Enter alarm description"></v-text-field>

                                    <!-- Repeat Days -->
                                    <v-chip-group v-model="selectedDays" multiple class="mb-4">
                                        <v-chip v-for="day in weekDays" :key="day.value" :value="day.value" filter>
                                            {{ day.label }}
                                        </v-chip>
                                    </v-chip-group>

                                    <v-btn color="primary" @click="addAlarm" :disabled="!newAlarmTime">
                                        Add Alarm
                                    </v-btn>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>

                    <!-- Alarm List -->
                    <v-card>
                        <v-list>
                            <v-list-item v-for="alarm in alarms" :key="alarm.id" class="mb-2">
                                <v-list-item-content>
                                    <v-row align="center">
                                        <v-col cols="12" sm="4">
                                            <div class="text-h5">{{ formatTime(alarm.time) }}</div>
                                            <div class="text-caption">{{ alarm.label }}</div>
                                        </v-col>
                                        <v-col cols="12" sm="4">
                                            <v-chip-group>
                                                <v-chip v-for="day in alarm.days" :key="day" small label>
                                                    {{ weekDays.find(d => d.value === day).shortLabel }}
                                                </v-chip>
                                            </v-chip-group>
                                        </v-col>
                                        <v-col cols="12" sm="4" class="text-right">
                                            <v-switch v-model="alarm.active" @change="toggleAlarm(alarm)"
                                                color="primary" hide-details inset></v-switch>
                                            <v-btn icon color="error" @click="deleteAlarm(alarm.id)">
                                                <v-icon>mdi-delete</v-icon>
                                            </v-btn>
                                        </v-col>
                                    </v-row>
                                </v-list-item-content>
                            </v-list-item>
                        </v-list>
                    </v-card>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<script setup>
    import {
        ref,
        onMounted,
        watch
    } from 'vue'

    useHead({
        title: 'Meeovi Time - Alarms'
    })

    // State
    const alarms = ref([])
    const newAlarmTime = ref('')
    const newAlarmLabel = ref('')
    const selectedDays = ref([])

    // Constants
    const weekDays = [{
            value: 0,
            label: 'Sunday',
            shortLabel: 'Sun'
        },
        {
            value: 1,
            label: 'Monday',
            shortLabel: 'Mon'
        },
        {
            value: 2,
            label: 'Tuesday',
            shortLabel: 'Tue'
        },
        {
            value: 3,
            label: 'Wednesday',
            shortLabel: 'Wed'
        },
        {
            value: 4,
            label: 'Thursday',
            shortLabel: 'Thu'
        },
        {
            value: 5,
            label: 'Friday',
            shortLabel: 'Fri'
        },
        {
            value: 6,
            label: 'Saturday',
            shortLabel: 'Sat'
        }
    ]

    // Methods
    const loadAlarms = () => {
        const savedAlarms = localStorage.getItem('alarms')
        if (savedAlarms) {
            alarms.value = JSON.parse(savedAlarms)
            setupAlarmChecks()
        }
    }

    const saveAlarms = () => {
        localStorage.setItem('alarms', JSON.stringify(alarms.value))
    }

    const addAlarm = () => {
        if (!newAlarmTime.value) return

        const newAlarm = {
            id: Date.now(),
            time: newAlarmTime.value,
            label: newAlarmLabel.value || 'Alarm',
            days: selectedDays.value,
            active: true,
            nextTrigger: calculateNextTrigger(newAlarmTime.value, selectedDays.value)
        }

        alarms.value.push(newAlarm)
        saveAlarms()
        setupAlarmCheck(newAlarm)

        // Reset form
        newAlarmTime.value = ''
        newAlarmLabel.value = ''
        selectedDays.value = []
    }

    const deleteAlarm = (id) => {
        alarms.value = alarms.value.filter(alarm => alarm.id !== id)
        saveAlarms()
    }

    const toggleAlarm = (alarm) => {
        alarm.active = !alarm.active
        if (alarm.active) {
            alarm.nextTrigger = calculateNextTrigger(alarm.time, alarm.days)
        }
        saveAlarms()
    }

    const formatTime = (time) => {
        if (!time) return ''
        return time
    }

    const calculateNextTrigger = (time, days) => {
        const [hours, minutes] = time.split(':')
        const now = new Date()
        const today = now.getDay()

        let nextDate = new Date()
        nextDate.setHours(parseInt(hours), parseInt(minutes), 0, 0)

        if (days.length === 0) {
            if (nextDate <= now) {
                nextDate.setDate(nextDate.getDate() + 1)
            }
            return nextDate.getTime()
        }

        // Find the next day that the alarm should trigger
        let daysUntilNext = 7
        for (const day of days) {
            const diff = (day - today + 7) % 7
            if (diff === 0 && nextDate > now) {
                daysUntilNext = 0
                break
            }
            if (diff < daysUntilNext && (diff > 0 || (diff === 0 && nextDate <= now))) {
                daysUntilNext = diff
            }
        }

        nextDate.setDate(nextDate.getDate() + daysUntilNext)
        return nextDate.getTime()
    }

    const setupAlarmChecks = () => {
        alarms.value.forEach(setupAlarmCheck)
    }

    const setupAlarmCheck = (alarm) => {
        if (!alarm.active) return

        const checkAlarm = () => {
            const now = Date.now()
            if (now >= alarm.nextTrigger) {
                triggerAlarm(alarm)
                alarm.nextTrigger = calculateNextTrigger(alarm.time, alarm.days)
                saveAlarms()
            }
        }

        // Check every minute
        setInterval(checkAlarm, 60000)
    }

    const triggerAlarm = (alarm) => {
        // Play alarm sound
        const audio = new Audio()
        audio.src = '/path/to/alarm-sound.mp3' // Add your alarm sound file
        audio.loop = true

        // Show notification if supported
        if ('Notification' in window) {
            Notification.requestPermission().then(permission => {
                if (permission === 'granted') {
                    const notification = new Notification('Alarm', {
                        body: alarm.label,
                        icon: '/path/to/alarm-icon.png' // Add your alarm icon
                    })

                    // Close notification and stop sound after 1 minute
                    setTimeout(() => {
                        notification.close()
                        audio.pause()
                    }, 60000)
                }
            })
        }

        audio.play().catch(error => console.log('Error playing alarm:', error))
    }

    // Watch for changes
    watch(alarms, () => {
        saveAlarms()
    }, {
        deep: true
    })

    // Initialize
    onMounted(() => {
        loadAlarms()
    })
</script>

<style scoped>
    .v-card {
        max-width: 800px;
        margin: auto;
    }
</style>