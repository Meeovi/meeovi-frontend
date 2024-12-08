<template>
    <v-alert v-model="alert" :type="type" :color="color" dismissible transition="scale-transition"
        class="position-fixed" style="top: 20px; right: 20px; z-index: 9999;">
        {{ message }}
    </v-alert>
</template>

<script>
    export default {
        data() {
            return {
                alert: false,
                message: '',
                color: 'success',
                type: 'success',
                timeout: 3000
            }
        },
        methods: {
            showAlert(options = {}) {
                this.message = options.message || ''
                this.color = options.color || 'success'
                this.type = options.type || 'success'
                this.alert = true

                // Auto hide after timeout
                setTimeout(() => {
                    this.alert = false
                }, options.timeout || this.timeout)
            }
        }
    }
</script>