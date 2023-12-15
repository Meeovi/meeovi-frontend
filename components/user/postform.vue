<template>
    <div>
        <v-card ref="form">
            <v-card-text>
                <v-textarea label="What's happening?" variant="outlined"></v-textarea>
                <v-row>
                    <v-col cols="4">
                        <v-file-input chips multiple clearable density="compact" prepend-icon="fas fa-image"
                            accept="image/*" label="Photo/Video" variant="solo-inverted"></v-file-input>
                    </v-col>
                    <v-col cols="4">
                        <v-file-input chips multiple clearable density="compact" prepend-icon="fas fa-video"
                            accept="video/*" label="Live Video" variant="solo-inverted"></v-file-input>
                    </v-col>
                </v-row>
            </v-card-text>
            <v-divider class="mt-12"></v-divider>
            <v-card-actions>
                <v-btn variant="text">
                    Cancel
                </v-btn>
                <v-spacer></v-spacer>
                <v-slide-x-reverse-transition>
                    <v-tooltip v-if="formHasErrors" location="left">
                        <template v-slot:activator="{ on, attrs }">
                            <v-btn icon class="my-0" v-bind="attrs" @click="reset" v-on="on">
                                <v-icon icon="fas fa-rotate-right"></v-icon>
                            </v-btn>
                        </template>
                        <span>Refresh form</span>
                    </v-tooltip>
                </v-slide-x-reverse-transition>
                <v-btn color="primary" variant="text" @click="submit">
                    Submit
                </v-btn>
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    export default {
        methods: {
            async validate() {
                const {
                    valid
                } = await this.$refs.form.validate()

                if (valid) alert('Form is valid')
            },
            reset() {
                this.$refs.form.reset()
            },
            resetValidation() {
                this.$refs.form.resetValidation()
            },
        },
    }
</script>

<script setup>

</script>