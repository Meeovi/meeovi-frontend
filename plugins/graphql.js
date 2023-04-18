import { createClient } from 'villus';

export default defineNuxtPlugin(nuxtApp => {
    const client = createClient({
        url: process.env.GQL_HOST, // your endpoint.
    });

  nuxtApp.vueApp.use(client)
})