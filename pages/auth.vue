<template>
    <div>
        <NuxtLayout name="auth">
            <v-card style="height: 100vh; width: 100vw;">
                <v-tabs v-model="tab" bg-color="primary" align-tabs="center">
                    <v-tab value="one">Login</v-tab>
                    <v-tab value="two">Register</v-tab>
                </v-tabs>

                <v-card-text>
                    <v-tabs-window v-model="tab">
                        <v-tabs-window-item value="one">
                            <login />
                        </v-tabs-window-item>

                        <v-tabs-window-item value="two">
                            <register />
                        </v-tabs-window-item>
                    </v-tabs-window>
                </v-card-text>
            </v-card>
        </NuxtLayout>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import login from '../../../components/apps/authentication/login.vue'
import register from '../../../components/apps/authentication/register.vue'

// Registering components is not needed in <script setup>
// because they are automatically registered

const tab = ref(null)

    definePageMeta({
        auth: false,
        //middleware: 'guest',
        layout: false,
    });
</script>