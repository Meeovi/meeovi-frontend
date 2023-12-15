<template>
    <div>
        <v-card variant="text">
            <v-tabs v-model="tab" bg-color="crimson">
                <v-tab :value="one">Description</v-tab>
                <v-tab :value="two">Comments</v-tab>
                <v-tab :value="three">FAQS</v-tab>
                <v-tab :value="four">Also from Seller</v-tab>
            </v-tabs>

            <v-card-text>
                <v-window v-model="tab">
                    <!--About Product-->
                    <v-window-item :value="one">
                        <v-card title="Card title" subtitle="Subtitle" text="..." variant="text"></v-card>
                    </v-window-item>

                    <!--Comments-->
                    <v-window-item :value="two">
                        <v-row>
                            <v-col cols="4">
                                <v-card class="d-flex flex-column mx-auto py-8" elevation="0" width="360">

                                    <div class="d-flex align-center flex-column my-auto">
                                        <div class="text-h2 mt-5">3.5 <span class="text-h6 ml-n3">/5</span></div>

                                        <v-rating :model-value="3.5" color="yellow-darken-3" half-increments></v-rating>
                                        <div class="px-3">3,360 ratings</div>
                                    </div>

                                    <v-list bg-color="transparent" class="d-flex flex-column-reverse" density="compact">
                                        <v-list-item v-for="(rating,i) in 5" :key="i">
                                            <v-progress-linear :model-value="rating * 15" class="mx-n5"
                                                color="yellow-darken-3" height="20" rounded></v-progress-linear>

                                            <template v-slot:prepend>
                                                <span>{{ rating }}</span>
                                                <v-icon icon="mdi-star" class="mx-3"></v-icon>
                                            </template>

                                            <template v-slot:append>
                                                <div class="rating-values">
                                                    <span class="d-flex justify-end"> {{ rating * 224 }} </span>
                                                </div>
                                            </template>
                                        </v-list-item>
                                    </v-list>
                                    <v-expansion-panels variant="accordion">
                                        <v-expansion-panel title="Write A Review">
                                            <productinfo />
                                        </v-expansion-panel>
                                    </v-expansion-panels>
                                </v-card>
                            </v-col>

                            <v-col cols="8" class="videocommentfield">
                                <v-list lines="two" v-for="n in 5" :key="n">
                                    <v-list-item :title="'Person Name ' + n" subtitle="United Kingdom"
                                        prepend-avatar="https://randomuser.me/api/portraits/women/8.jpg">
                                    </v-list-item>
                                    <v-card title="Card title" subtitle="Subtitle" text="Comment goes here"
                                        elevation="0"></v-card>
                                    <v-toolbar density="compact" color="transparent">
                                        <v-rating half-increments hover length="5" size="28" model-value="5"
                                            color="primary" active-color="warning" />

                                        <p>12/3/2023</p>

                                        <p>Was this helpful?</p>

                                        <v-btn icon="fas fa-thumbs-up"></v-btn>
                                        <v-btn icon="fas fa-thumbs-down"></v-btn>
                                    </v-toolbar>
                                    <v-divider></v-divider>
                                </v-list>
                            </v-col>

                        </v-row>
                    </v-window-item>

                    <!--FAQS-->
                    <v-window-item :value="three">
                        <v-expansion-panels variant="accordion">
                            <v-expansion-panel v-for="i in 3" :key="i" title="Item"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.">
                            </v-expansion-panel>
                        </v-expansion-panels>
                    </v-window-item>

                    <!--Also from Seller-->
                    <v-window-item :value="four">
                        <!--<relatedproducts />-->
                    </v-window-item>
                </v-window>
            </v-card-text>
        </v-card>
    </div>
</template>

<script>
    import productinfo from './productinfo.vue'
    import relatedproducts from '../../../Related/relatedproducts.vue'

    export default {
        components: { productinfo, relatedproducts },
        data: () => ({
            tab: null,
            show: false,
        }),
    }
</script>

<script>

</script>