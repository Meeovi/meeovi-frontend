<template>
    <div class="contentPage">
        <!--<profilebar />-->
        <v-row>
            <v-col cols="12">
                <v-toolbar title="Spaces" color="primary">
                    <v-dialog min-width="500">
                        <template v-slot:activator="{ props: activatorProps }">
                            <v-btn v-bind="activatorProps" prepend-icon="fas fa-plus" title="Create a Space"
                                variant="flat">Create a Space
                            </v-btn>
                        </template>

                        <template v-slot:default="{ isActive }">
                            <createspace />
                        </template>
                    </v-dialog>
                </v-toolbar>

                <v-row>
                    <v-col cols="4" v-for="(spaces, index) in spaces" :key="index">
                        <v-card class="mx-auto" max-width="400" height="450">
                            <v-img class="align-end text-white" height="200"
                            :src="`${url}${spaces?.image?.filename_disk}`" :alt="spaces?.name" cover>
                                <v-card-title>{{ spaces?.name }}</v-card-title>
                            </v-img>

                            <v-card-subtitle class="pt-4">
                                Created: {{ new Date(spaces?.date_created).toLocaleDateString() }}
                            </v-card-subtitle>

                            <v-card-text>
                                <div>Last Activity: {{ new Date(spaces?.date_updated).toLocaleDateString() }}</div>

                                <div># of Members: {{spaces?.totalMemberCount}}</div>

                                <div>Status: {{spaces?.status}}</div>

                                <div v-html="spaces?.description"></div>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn color="orange" text="Explore" :href="`/social/group/${spaces?.id}`"></v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
    import createspace from '~/components/crud/create/add-space.vue'

    const {
        $directus,
        $readItems
    } = useNuxtApp()

    const {
        data: spaces
    } = await useAsyncData('spaces', () => {
        return $directus.request($readItems('spaces'))
    })

    useHead({
        title: 'Spaces',
    })
</script>