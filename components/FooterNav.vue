<template>
    <div>
        <v-footer border>
            <v-row justify="center" no-gutters>
                <v-col class="text-center mt-4" cols="3">
                    <h5><strong>MEEOVI</strong></h5>
                    <v-list-item title="About Us" value="about us" href="/about/"></v-list-item>
                    <v-list-item v-for="pages in aboutpages" :key="pages.id" :title="pages.name" :value="pages.name" :href="`/legal/${pages.id}`"></v-list-item>
                    <v-list-item title="Buyers" value="Buyers" href="/about/buyers"></v-list-item>
                </v-col>

                <v-col class="text-center mt-4" cols="3">
                    <h5><strong>HELP</strong></h5>
                    <v-list-item v-for="ecosystemmenu in ecosystemmenu" :key="ecosystemmenu.id" :title="ecosystemmenu.name" :value="ecosystemmenu.name" :href="ecosystemmenu.link"></v-list-item>
                </v-col>

                <v-col class="text-center mt-4" cols="3">
                    <h5><strong>The Meeovi Company</strong></h5>
                    <v-list-item v-for="pages in legalpages" :key="pages.id" :title="pages.name" :value="pages.name" :href="`/legal/${pages.id}`"></v-list-item>
                </v-col>

                <v-col class="text-center mt-4" cols="3">
                    <h5><strong>CONNECT</strong></h5>
                    <v-list-item class="fas fa-mobile" title="Get the App" value="Get the App" href="/applications">
                    </v-list-item>
                </v-col>
            </v-row>
        </v-footer>
    </div>
</template>

<script>
    export default {}
</script>

<script setup>
    const {
        getItems
    } = useDirectusItems()

    const ecosystemmenu = await getItems({ collection: "ecosystemmenu"});
    const aboutpages = await getItems({ collection: "pages", params: {filter: {type: {_eq: "About"}}}});
    const legalpages = await getItems({ collection: "pages", params: {filter: {type: {_eq: "Legal"}}}});
</script>