<template>
    <div>
        <v-toolbar title="Bookmark a Video"></v-toolbar>
        <v-form>
            <v-container>
                <v-row>
                    <v-col cols="6">
                        <v-text-field label="Video Name" required></v-text-field>
                    </v-col>
                    <v-col cols="6">
                        <v-combobox label="Category"
                            :items="['California', 'Colorado']" hint="Choose the appropriate video category"></v-combobox>
                    </v-col>
                    <v-col cols="6">
                        <v-file-input clearable label="Video Image"></v-file-input>
                    </v-col>
                    <v-col cols="6">
                        <v-text-field label="Video URL" type="url"></v-text-field>
                    </v-col>
                    <v-col cols="12">
                        <v-textarea label="Video Description"></v-textarea>
                    </v-col>
                </v-row>
            </v-container>
        </v-form>
    </div>
</template>

<script>
    export default {
        data: () => ({
            includeFiles: true,
            enabled: false,
        }),
    }
</script>

<script setup>
    useHead({
        title: 'Bookmark a Video',
    })
</script>