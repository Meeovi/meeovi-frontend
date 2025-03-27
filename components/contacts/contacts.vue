<template>
    <div>
        <v-toolbar title="Contacts" subtitle="" color="transparent"></v-toolbar>
        <v-table min-height="300px" fixed-header>
            <thead>
                <tr>
                    <th></th>
                    <th class="text-left">
                        Name
                    </th>
                    <th class="text-left">
                        Email
                    </th>
                    <th class="text-left">
                        Phone number
                    </th>
                    <th class="text-left">
                        Job title & company
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="contacts in contacts" :key="contacts">
                    <td><v-avatar :image="`${$directus.url}/assets/${contacts?.image?.filename_disk}`"
                            size="64"></v-avatar></td>
                    <td>{{ contacts?.first_name }} {{ contacts?.last_name }}</td>
                    <td>{{ contacts?.email }}</td>
                    <td>{{ contacts?.phone }}</td>
                    <td>{{ contacts?.job_title }} {{ contacts?.company }}</td>
                    <td></td>
                    <td>
                        <v-menu>
                            <template v-slot:activator="{ props }">
                                <v-btn color="primary" v-bind="props" icon="fas fa-ellipsis-vertical"></v-btn>
                            </template>
                            <v-list>
                                <v-list-item>
                                    <v-list-item-title><NuxtLink :to="`/social/member/${contacts?.id}`">Edit</NuxtLink></v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                    </td>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script setup>
    import updatecontact from '@/components/contacts/update-contact.vue'

    const {
        $directus,
        $readItems
    } = useNuxtApp()

    const {
        data: contacts
    } = await useAsyncData('contacts', () => {
        return $directus.request($readItems('contacts'))
    })
</script>