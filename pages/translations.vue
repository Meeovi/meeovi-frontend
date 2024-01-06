<template>
    <div class="contentPage">
        <v-row v-for="pages in pages" :key="pages">
            <v-col cols="6">
                <h5><b> Website (Country/Region)</b></h5>

                <div class="d-flex">
                    <v-btn color="primary">
                        Select your preferred country

                        <v-menu activator="parent">
                            <v-list>
                                <v-list-item v-for="(item, index) in items" :key="index" value="index">
                                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-btn>
                </div>

                <br>
                <p>Note: A new country/region website selection will open in a new tab.</p>

                <v-divider></v-divider>

                <v-btn href="/">Cancel</v-btn>
            </v-col>

            <v-col cols="6">
                <p v-html="pages.content"></p>
            </v-col>

            <v-col cols="12">
                <!--<recentproducts />-->
            </v-col>

            <v-col cols="12">
                <!--<recentlyviewed />-->
            </v-col>

            <v-col cols="12">
                <!--<relatedcreators />-->
            </v-col>
        </v-row>
    </div>
</template>

<script>
    import relatedproducts from '../components/Related/relatedproducts.vue'
    import recentlyviewed from '../components/Related/recentlyviewed.vue'
    import relatedcreators from '../components/Related/relatedcreators.vue'

    export default {
        components: {
            relatedproducts,
            recentlyviewed,
            relatedcreators
        },
    }
</script>

<script setup>
const { getItems } = useDirectusItems()

const pages = await getItems({ collection: "pages", params: {filter: {name: {_eq: "Translations"}}}});

    useHead({
        title: 'Change Meeovi to your country'
    })
</script>