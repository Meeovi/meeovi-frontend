<template>
    <div>
        <v-btn class="footertotopbtn" title="To the Top of the Page" prepend-icon="fas fa-arrow-up" rounded="0"
            href="#mainSection">Back to Top</v-btn>
        <v-footer border>
            <v-row justify="center" no-gutters>
                <v-col class="text-center mt-4" cols="3">
                    <h4><strong>MEEOVI</strong></h4>
                    <v-list-item v-for="pages in about" :key="pages.id" :title="pages.name" :value="pages.name"
                        :href="pages.link"></v-list-item>
                </v-col>

                <v-col class="text-center mt-4" cols="3">
                    <h4><strong>HELP</strong></h4>
                    <v-list-item v-for="pages in legal" :key="pages.id" :title="pages.name" :value="pages.name"
                        :href="pages.link">
                    </v-list-item>
                </v-col>

                <v-col class="text-center mt-4" cols="3">
                    <h4><strong>The Meeovi Company</strong></h4>
                    <v-list-item v-for="pages in company" :key="pages.id" :title="pages.name" :value="pages.name"
                        :href="pages.link"></v-list-item>
                </v-col>

                <v-col class="text-center mt-4" cols="3">
                    <h4><strong>CONNECT</strong></h4>
                    <v-card variant="text" color="primary" elevation="0">
                        <img src="../assets/images/logo512alpha-192x192.png" alt="Meeovi Logo">
                        <v-btn color="orange" href="/applications" title="Download the Meeovi App">Get the App</v-btn>
                    </v-card>
                </v-col>

                <v-col class="text-center mt-4" cols="12">
                    <CopyrightFooter />
                </v-col>
            </v-row>
        </v-footer>
    </div>
</template>

<script>
import CopyrightFooter from './Menus/Footer/CopyrightFooter.vue'

    export default {
        data: () => ({
            components: { CopyrightFooter },
            location: 'top',
        }),
    }
</script>

<script setup>
    const {
        getItems
    } = useDirectusItems()

    const about = await getItems({
        collection: "pages",
        params: {
            search: "About"
        }
    });

    const legal = await getItems({
        collection: "pages",
        params: {
            search: "Legal"
        }
    });

    const company = await getItems({
        collection: "websites",
        params: {
            search: "ecosystemmenu"
        }
    });

    /*import legal from '../apollo/Custom/Queries/legallinks'
    import about from '../apollo/Custom/Queries/aboutlinks'
    import company from '../apollo/Custom/Queries/companylinks'

        const {
            data
        } = await useAsyncQuery(legal)

        const {
            data: aboutquery
        } = await useAsyncQuery(about)

        const {
            data: companyquery
        } = await useAsyncQuery(company)

           const {
               locale,
               locales
           } = useI18n()
           const switchLocalePath = useSwitchLocalePath()

           const availableLocales = computed(() => {
               return (locales.value).filter(i => i.code !== locale.value)
        })*/
</script>