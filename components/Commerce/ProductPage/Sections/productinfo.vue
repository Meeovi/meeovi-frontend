<template>
    <div>
        <v-sheet class="mx-auto">
            <v-form validate-on="submit lazy" @submit.prevent="submit">
                <editor />

                <v-btn :loading="loading" type="submit" block class="mt-2" color="orange" text="Submit Review"></v-btn>
            </v-form>
        </v-sheet>
    </div>
</template>

<script>
    import editor from '../../../Editors/editor.vue'

    export default {
        components: {
            editor
        },
        data: vm => ({
            loading: false,
            rules: [value => vm.checkApi(value)],
            timeout: null,
            userName: '',
        }),

        methods: {
            async submit(event) {
                this.loading = true

                const results = await event

                this.loading = false

                alert(JSON.stringify(results, null, 2))
            },
            async checkApi(userName) {
                return new Promise(resolve => {
                    clearTimeout(this.timeout)

                    this.timeout = setTimeout(() => {
                        if (!userName) return resolve('Please enter a user name.')
                        if (userName === 'johnleider') return resolve(
                            'User name already taken. Please try another one.')

                        return resolve(true)
                    }, 1000)
                })
            },
        },
    }
</script>

<script>

</script>