<template>
    <div class="contentPage">
        <div>
            <v-card>
                <v-toolbar :title="`${contact?.first_name} ${contact?.last_name}`" color="info"></v-toolbar>
                <v-toolbar color="info" title="Contact Details">
                    <v-select style="top: 15px; position: relative;" title="Favorite"
                        :items="['Yes', 'No']">{{ contact?.favorite }}</v-select>
                </v-toolbar>
                <v-card-text>
                    <v-row>
                        <v-col cols="4"><v-card read-only :text="contact?.first_name" id="contactName"
                                title="Contact First Name*" prepend-icon="fas fa-user" /></v-col>
                        <v-col cols="4"><v-card :text="contact?.middle_name" id="contactMiddleName" title="Middle Name"
                                prepend-icon="fas fa-user"></v-card></v-col>
                        <v-col cols="4"><v-card :text="contact?.last_name" id="contactLastName" title="Last Name"
                                prepend-icon="fas fa-user"></v-card></v-col>

                        <v-col cols="12">
                            <v-expansion-panels>
                                <v-expansion-panel title="Add more details">
                                    <v-expansion-panel-text>
                                        <v-row>
                                            <v-col cols="6"><v-card :text="contact?.suffix" id="contactSuffix"
                                                    title="Suffix" prepend-icon="fas fa-user"></v-card></v-col>
                                            <v-col cols="6"><v-card :text="contact?.phonetic_first"
                                                    id="contactPhoneticFirst" title="Phonetic first"
                                                    prepend-icon="fas fa-user"></v-card></v-col>
                                            <v-col cols="6"><v-card :text="contact?.phonetic_middle"
                                                    id="contactPhoneticMiddle" title="Phonetic middle"
                                                    prepend-icon="fas fa-user"></v-card></v-col>
                                            <v-col cols="6"><v-card :text="contact?.phonetic_last"
                                                    id="contactPhoneticLast" title="Phonetic last"
                                                    prepend-icon="fas fa-user"></v-card></v-col>
                                            <v-col cols="6"><v-card :text="contact?.nickname" id="contactNickname"
                                                    title="Nickname" prepend-icon="fas fa-user"></v-card></v-col>
                                            <v-col cols="6"><v-card :text="contact?.file_as" id="contactFileAs"
                                                    title="File as" prepend-icon="fas fa-user"></v-card></v-col></v-row>
                                    </v-expansion-panel-text>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-col>

                        <v-col cols="12"><v-card :text="contact?.company" id="contactName" title="Company"
                                prepend-icon="fas fa-building" /></v-col>

                        <v-col cols="12">
                            <v-expansion-panels>
                                <v-expansion-panel title="Add more details about company">
                                    <v-expansion-panel-text>
                                        <v-row>
                                            <v-col cols="6"><v-card :text="contact?.job_title" id="contactJobTitle"
                                                    title="Job title"
                                                    prepend-icon="fas fa-user-doctor"></v-card></v-col>
                                            <v-col cols="6"><v-card :text="contact?.department" id="contactDepartment"
                                                    title="Department"
                                                    prepend-icon="fas fa-user-doctor"></v-card></v-col>
                                        </v-row>
                                    </v-expansion-panel-text>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-col>

                        <v-col cols="6"><v-card :text="contact?.email" id="contactEmail" title="Contact Email"
                                prepend-icon="fas fa-envelope" /></v-col>
                        <v-col cols="6"><v-card :text="contact?.phone" id="contactPhone" title="Contact Phone"
                                prepend-icon="fas fa-phone" /></v-col>
                        <v-col cols="6"><v-card :text="contact?.street" id="contactAddress" title="Contact Address"
                                prepend-icon="fas fa-earth-americas" /></v-col>
                        <v-col cols="6"><v-card :text="contact?.address2" id="contactAddress2" title="Contact Address 2"
                                prepend-icon="fas fa-earth-americas" /></v-col>
                        <v-col cols="6"><v-card :text="contact?.city" id="contactCity" title="Contact City"
                                prepend-icon="fas fa-earth-americas" /></v-col>
                        <v-col cols="6"><v-card :text="contact?.state" id="contactState" title="Contact State"
                                prepend-icon="fas fa-earth-americas" /></v-col>
                        <v-col cols="6"><v-card :text="contact?.zip" id="contactZip" title="Contact Zip"
                                prepend-icon="fas fa-earth-americas" /></v-col>
                        <v-col cols="6"><v-card :text="contact?.country" id="contactCountry" title="Contact Country"
                                prepend-icon="fas fa-earth-americas" /></v-col>

                        <v-col cols="6">
                            <v-expansion-panels>
                                <v-expansion-panel title="Add a Website">
                                    <v-expansion-panel-text>
                                        <v-col cols="12"><v-card :text="contact?.website" id="contactWebsite"
                                                title="Add a website" type="url"
                                                prepend-icon="fas fa-computer"></v-card></v-col>
                                    </v-expansion-panel-text>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-col>

                        <br />

                        <v-col cols="6">
                            <v-expansion-panels>
                                <v-expansion-panel title="Add a Birthday">
                                    <v-expansion-panel-text>
                                        <v-col cols="12"><v-card :text="contact?.birthday" id="contactBirthday"
                                                title="Contact Birthday" type="datetime"
                                                prepend-icon="fas fa-cake-candles" /></v-col>
                                    </v-expansion-panel-text>
                                </v-expansion-panel>
                            </v-expansion-panels>
                        </v-col>

                        <v-col cols="12"><v-card :text="contact?.related_person" id="contactRelatedPerson"
                                title="Related Person" prepend-icon="fas fa-user" /></v-col>

                        <v-col cols="12"><v-card :text="contact?.title" id="contactRelatedPerson" title="Label"
                                prepend-icon="fas fa-plus" /></v-col>

                        <v-col cols="12"><v-textarea :text="contact?.notes" title="Notes" variant="outlined"
                                prepend-icon="fas fa-note-sticky"></v-textarea></v-col>
                    </v-row>
                </v-card-text>
                <v-divider class="mt-12"></v-divider>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <updatecontact :id="contactId" />
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                //url: process.env.DIRECTUS_URL,
                contactId: this.$route.params.id
            }
        },
    }
</script>

<script setup>
    import {
        ref,
        computed
    } from 'vue'
    import {
        useRoute
    } from 'vue-router'
    import updatecontact from '~/components/contacts/update-contact.vue'

    const route = useRoute()

    const {
        $directus,
        $readItem
    } = useNuxtApp()

    const {
        data: contact
    } = await useAsyncData('contact', () => {
        return $directus.request($readItem('contacts', route.params.id))
    })

    useHead({
        title: computed(() => contact?.value?.first_name || 'Contact Page')
    })
</script>