<template>
    <div>
        <section data-bs-version="5.1" class="formulam5 form1 cid-tZRUOapGTD" id="form1-6c">
            <div class="container-fluid">
                <div class="row content-wrapper justify-content-center">
                    <div class="col-lg-7 mbr-form">
                        <div class="col-lg-12 col-md-12 col-sm-12">
                            <strong><h5 class="mbr-section-title mbr-fonts-style mb-5 display-7" v-html="blocksNewsletter?.description"></h5></strong>
                                <p v-if="message">{{ message }}</p>
                        </div>

                        <div class="text-wrapper align-center" data-form-type="formoid">
                            <!--Formbuilder Form-->
                            <form method="POST" @submit.prevent="submit" class="mbr-form form-with-styler"><input
                                    type="hidden" name="email" data-form-email="true">
                                <v-card class="mx-auto" elevation="0" color="transparent" max-width="600">
                                    <v-card-text>
                                        <v-text-field append-inner-icon="fas fa-envelope" v-model="subscriber_email"
                                            density="compact" :label="blocksNewsletter?.content?.[0]?.name" variant="solo" hide-details
                                            single-line></v-text-field>
                                    </v-card-text>
                                </v-card>
                            </form>
                            <!--Formbuilder Form-->
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
</template>

<script setup>
    import {
        ref
    } from 'vue';

    const subscriber_email = ref('')
    const message = ref('');

    const submit = async () => {
        try {
            const {
                data,
                error
            } = await useFetch('/api/commerce/marketing/newsletter', {
                method: 'POST',
                body: {
                    subscriber_email: subscriber_email.value,
                },
            });

            if (error.value) {
                message.value = 'An error occurred. Please try again.';
                console.error('Error:', error.value);
            } else {
                message.value = 'You have successfully subscribed!';
                // Clear the form
                subscriber_email.value = '';
            }
        } catch (err) {
            console.error('Unexpected error:', err);
            message.value = 'An unexpected error occurred. Please try again later.';
        }
    };

    const {
        $directus,
        $readItem
    } = useNuxtApp()

    const {
        data: blocksNewsletter
    } = await useAsyncData('blocksNewsletter', () => {
        return $directus.request($readItem('page_blocks', '4', {
            fields: ['*', 'media.*.*'],
        }))
    })
</script>