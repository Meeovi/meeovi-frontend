<template>
    <div>
        <section data-bs-version="5.1" class="formulam5 form1 cid-tZRUOapGTD" id="form1-6c">
            <div class="container-fluid">
                <div class="row content-wrapper justify-content-center">
                    <div class="col-lg-7 mbr-form">
                        <MeeoviNewsletter
                            variant="inline"
                            source="footer"
                            :placeholder="blocksNewsletter?.content?.[0]?.name || 'Your email address'"
                            @subscribed="onSubscribed"
                        >
                            <template #description>
                                <strong>
                                    <h5
                                        class="mbr-section-title mbr-fonts-style mb-5 display-7"
                                        v-dompurify-html="blocksNewsletter?.description"
                                    ></h5>
                                </strong>
                            </template>
                        </MeeoviNewsletter>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
// Newsletter sign-up is provided by @mframework/meeovi-newsletter.
// This wrapper only supplies the Directus-managed copy around the form.
const { $directus, $readItem } = useNuxtApp()

// lazy: true — see LowerBar.vue's comment on the same pattern; this
// component also renders in the default layout on nearly every page.
const { data: blocksNewsletter } = useAsyncData('blocksNewsletter', async () => {
    try {
        const resp = await $directus.request($readItem('page_blocks', '4', {
            fields: ['*', 'media.*.*'],
        }))
        return resp?.data || resp || {}
    } catch {
        return {}
    }
}, { lazy: true })

function onSubscribed(result) {
    // Hook for analytics / toasts; the component handles its own UI state.
}
</script>
