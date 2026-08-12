<template>
    <div>
        <section data-bs-version="5.1" class="formulam5 form1 cid-tZRUOapGTD" id="form1-6c">
            <div class="container-fluid">
                <div class="row content-wrapper justify-content-center">
                    <div class="col-lg-7 mbr-form">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <strong>
                                    <h5 class="mbr-section-title mbr-fonts-style mb-5 display-7"
                                        v-dompurify-html="blocksNewsletter?.description"></h5>
                            </strong>
                            <p v-if="message" :class="messageType === 'error' ? 'text-red-500' : 'text-green-500'">{{ message }}</p>
                        </div>

                        <div class="text-wrapper align-center" data-form-type="formoid">
                            <form @submit.prevent="subscribe" class="mbr-form form-with-styler">
                                <v-card class="mx-auto" elevation="0" color="transparent" max-width="600">
                                    <v-card-text>
                                        <v-text-field 
                                            append-inner-icon="fas fa-envelope" 
                                            v-model="email" 
                                            type="email"
                                            density="compact" 
                                            :label="blocksNewsletter?.content?.[0]?.name"
                                            variant="solo" 
                                            hide-details 
                                            single-line
                                            :disabled="loading"
                                        ></v-text-field>
                                    </v-card-text>
                                </v-card>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const { $directus, $createItem, $readItem } = useNuxtApp()

const email = ref('')
const message = ref('')
const messageType = ref('success')
const loading = ref(false)

const subscribe = async () => {
    try {
        loading.value = true
        message.value = ''

        await $directus.request($createItem('newsletters', {
            email: email.value,
            status: 'subscribed',
            date_created: new Date().toISOString()
        }))

        message.value = 'Successfully subscribed to newsletter!'
        messageType.value = 'success'
        email.value = ''
    } catch (err) {
        message.value = (err && err.message) ? err.message : 'An error occurred while subscribing'
        messageType.value = 'error'
    } finally {
        loading.value = false
    }
}

const { data: blocksNewsletter } = await useAsyncData('blocksNewsletter', async () => {
    const resp = await $directus.request($readItem('page_blocks', '4', {
        fields: ['*', 'media.*.*'],
    }))
    return resp?.data || resp || {}
})
</script>