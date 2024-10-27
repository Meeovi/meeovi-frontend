<template>
    <v-row justify="center">
        <v-dialog v-model="dialog" :scrim="false" transition="dialog-bottom-transition">
            <template v-slot:activator="{ props }">
                <v-btn v-bind="props" class="rightAddBtn">
                    <v-icon start icon="fas fa-plus"></v-icon>Add Payment
                </v-btn>
            </template>
            <v-card>
                <form method="post" @v-on:submit.prevent="addPayment()">
                    <v-toolbar dark color="primary">
                        <v-btn icon dark @click="dialog = false">
                            <v-icon icon="fas fa-circle-xmark"></v-icon>
                        </v-btn>
                        <v-card-title>
                            <span class="text-h6">Create new Payment</span>
                        </v-card-title>
                    </v-toolbar>
                    <v-card-text>
                        <v-container>
                            <v-row>
                                <v-col cols="12">
                                    <v-text-field v-model="name" id="paymentName" label="Payment Name*" required></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea v-model="content" label="Payment Type" id="paymentDescription">
                                    </v-textarea>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="meta_title" label="Meta Name" id="paymentName"></v-text-field>
                                </v-col>
                                <v-col cols="6">
                                    <v-text-field v-model="meta_keywords" label="Meta Keywords"></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                    <v-textarea v-model="meta_description" label="Meta Description" id="paymentDescription"></v-textarea>
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
    export default {
        data() {
            return {
                dialog: false,
                notifications: false,
                sound: true,
                widgets: false,
            }
        },
    }
</script>