<template>
    <div class="globalPage">
        <v-row>
            <v-col cols="6">
                <v-list>
                    <v-list-item>
                        <h5>{{ page?.repeaterTextBox?.[0]?.description }}</h5>
                    </v-list-item>

                    <v-list-item>
                        <p>{{ page?.repeaterTextBox?.[1]?.description }}</p>
                    </v-list-item>

                    <v-list-item>
                        <v-menu>
                            <template v-slot:activator="{ props }">
                                <v-btn color="warning" v-bind="props">
                                    {{ page?.repeaterTextBox?.[2]?.description }}
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item v-for="(sites, index) in sites" :key="index" :value="index">
                                    <v-list-item :prepend-icon="sites?.icon" :href="`https://www.meeovi${sites?.url}`">{{ sites?.name }}</v-list-item>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </v-list-item>

                    <v-list-item>
                        <div style="display: inline-block;"><p><strong>Note: </strong>{{ page?.repeaterTextBox?.[3]?.description }}</p></div>
                    </v-list-item>
                </v-list>
            </v-col>

            <v-col cols="6">
                <v-list>
                    <v-list-item>
                        <h5>{{ page?.repeaterTextBox?.[4]?.description }}</h5>
                    </v-list-item>

                    <v-list-item>
                        <p>{{ page?.repeaterTextBox?.[5]?.description }}</p>
                    </v-list-item>
                </v-list>
            </v-col>

            <v-divider></v-divider>
        </v-row>
    </div>
</template>

<script setup>
    const {
        $directus,
        $readItems,
        $readItem
    } = useNuxtApp()

    const {
        data: page
    } = await useAsyncData('page', () => {
        return $directus.request($readItem('page', '46', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    const {
        data: sites
    } = await useAsyncData('sites', () => {
        return $directus.request($readItems('site_preference', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })
</script>