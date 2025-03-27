<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" :scrim="false" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Add Attribute Set
                </v-btn>
            </template>
            <v-card>
                <form method="post" @v-on:submit.prevent="addAttribute()">
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Attribute Set</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field v-model="name" id="addressName" label="Attribute Name*" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea v-model="content" label="Description" id="addressDescription">
                                    </v-textarea>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="meta_title" label="Meta Name" id="addressName"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="meta_keywords" label="Meta Keywords"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea v-model="meta_description" label="Meta Description" id="addressDescription"></v-textarea>
                                </v-col>
                            </v-row>
                        </v-container>
                        <small>*indicates required field</small>
                    </v-card-text>
                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                            Close
                        </v-btn>
                        <v-btn color="blue-darken-1" variant="text" @click="dialog = false">
                            Save
                        </v-btn>
                    </v-card-actions>
                </form>
            </v-card>
        </v-dialog>
    </v-row>
</template>

<script>
 /*   import gql from "graphql-tag";
    import findManyCategories from "~/graphql/query/findManyCategories"

    const ADD_CATEGORIES = gql `
    mutation createOneCategories($name: String!, $content: String, $image: String, $meta_title: String, $meta_keywords: String, $meta_description:String){
    createOneCategories(data: {name: $name, content: $content, image: $image, meta_description: $meta_description, meta_keywords: $meta_keywords, meta_title: $meta_title}) {
      name
        content
        image
        meta_description
        meta_keywords
        meta_title
}
    }`; */

    export default {
        data() {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
            /*    name: ' ',
                content: ' ',
                image: ' ',
                meta_description: ' ',
                meta_keywords: ' ',
                meta_title: ' ' */
            }
        },
      /*  methods: {
            addAttribute() {
                const name = this.name;
                const content = this.content;
                const image = this.image;
                // eslint-disable-next-line camelcase
                const meta_title = this.meta_title;
                // eslint-disable-next-line camelcase
                const meta_keywords = this.meta_keywords;
                // eslint-disable-next-line camelcase
                const meta_description = this.meta_description;
                this.$apollo.mutate({
                    mutation: ADD_CATEGORIES,
                    variables: {
                        name,
                        content,
                        image,
                        meta_description,
                        meta_keywords,
                        meta_title,
                    },
                    update: (store, {
                        data: {
                            addAttribute
                        }
                    }) => {
                        // Read data from store for this query
                        const data = store.readQuery({
                            query: findManyCategories,
                            variables: {
                                first: 5,
                                skip: 0,
                                orderBy: 'createdAt_DESC'
                            }
                        })
                        data.allCategories.push(addAttribute)
                        store.writeQuery({
                            query: findManyCategories,
                            variables: {
                                first: 5,
                                skip: 0,
                                orderBy: 'createdAt_DESC'
                            },
                            data
                        })
                    }
                }).then((_data) => {
                    this.$router.push({
                        path: '~/content/categories'
                    })
                }).catch(error => console.error(error));
                this.name = ' ';
                this.content = ' ';
                this.image = ' ';
                this.meta_description = ' ';
                this.meta_keywords = ' ';
                this.meta_title = ' ';
            },
        }, */
    }
</script>

<script setup>
    import {
        ref
    } from 'vue'
    import { useRuntimeConfig } from '#imports';

    const config = useRuntimeConfig();
    const name = ref('');
    const slug = ref('');
    const type = ref('');
    const description = ref('');
    const errorMessage = ref('');
    const successMessage = ref('');

    const createAttribute = async () => {
        try {
            const response = await $fetch(`${config.public.wordpressUrl}/wp-json/dokan/v1/products/attributes/${attribute.id}/terms`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${config.public.wordpressToken}`
                },
                body: JSON.stringify({
                    name: name.value,
                    slug: slug.value,
                    type: type.value,
                    description: description.value,
                    description: description.value,
                    status: 'publish',
                })
            })

            console.log(response);

            if (response.id) {
                successMessage.value = 'Attribute Term created successfully!'
                errorMessage.value = ''
            } else {
                throw new Error('Failed to create attribute term')
            }
        } catch (error) {
            console.error('Error creating attribute term:', error);
            if (error.response) {
                console.error('Error response:', error.response);
                if (error.response.status === 403) {
                    errorMessage.value = 'You do not have permission to create a attribute term.'
                } else {
                    errorMessage.value = `Error: ${error.response.status} ${error.response.statusText}`
                }
            } else {
                errorMessage.value = error.message
            }
            successMessage.value = ''
        }
    }

    useHead({
        title: 'Create Attribute Term',
    })
</script>