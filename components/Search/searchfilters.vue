<template>
    <div>
        <form action="">
            <div class="searchfilter">
                <v-expansion-panels>
                    <v-expansion-panel title="Subscriptions" elevation="0">
                        <v-expansion-panel-text>
                            <v-checkbox label="Meeovi"></v-checkbox>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>

                <v-divider></v-divider>

                <v-expansion-panels>
                    <v-expansion-panel title="Price" elevation="0">
                        <v-expansion-panel-text>
                            <v-range-slider v-model="range" :max="10" :min="-10" :step="1" hide-details
                                class="align-center">
                                <template v-slot:prepend>
                                    <v-text-field v-model="range[0]" hide-details single-line type="number"
                                        variant="outlined" density="compact" style="width: 70px"></v-text-field>
                                </template>
                                <template v-slot:append>
                                    <v-text-field v-model="range[1]" hide-details single-line type="number"
                                        variant="outlined" style="width: 70px" density="compact"></v-text-field>
                                </template>
                            </v-range-slider>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>

                <v-divider></v-divider>

                <v-expansion-panels>
                    <v-expansion-panel title="Featured Brands" elevation="0">
                        <v-expansion-panel-text>
                            <v-checkbox label="Meeovi"></v-checkbox>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>

                <v-divider></v-divider>

                <v-expansion-panels>
                    <v-expansion-panel title="Type" elevation="0">
                        <v-expansion-panel-text>
                            <v-checkbox label="Meeovi"></v-checkbox>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>

                <v-divider></v-divider>

                <v-expansion-panels>
                    <v-expansion-panel title="Color" elevation="0">
                        <v-expansion-panel-text>
                            <v-checkbox label="Black"></v-checkbox>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>

                <v-divider></v-divider>

                <v-expansion-panels>
                    <v-expansion-panel title="Size" elevation="0">
                        <v-expansion-panel-text>
                            <v-checkbox label="Small"></v-checkbox>
                        </v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>

                <br>
                <v-btn type="reset" color="orange" size="x-large" width="100%">Clear filters</v-btn>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                range: [0, 999999],
            }
        },
    }
</script>

<script>

</script>