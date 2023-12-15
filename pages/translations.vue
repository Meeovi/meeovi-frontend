<template>
    <div class="contentPage">
        <v-row>
            <v-col cols="6">
                <h5><b> Website (Country/Region)</b></h5>

                <h6>Select your preferred country.</h6>

                <div class="d-flex">
                    <v-btn color="primary">
                        Parent activator

                        <v-menu activator="parent">
                            <v-list>
                                <v-list-item v-for="(item, index) in items" :key="index" :value="index">
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
                <h5><b>Changing country/region website</b></h5>

                <p>Changing the country/region you shop from may affect factors including price, shipping options and product availability.</p>
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

<script>

</script>