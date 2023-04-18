<template>
    <div>
        <v-expansion-panels variant="accordion">
            <v-expansion-panel title="My Account" expand-icon="fas fa-plus" collapse-icon="fas fa-minus" elevation="0">
                <v-expansion-panel-text>
                    <v-list-item title="Account" value="Account" href="/Admin/User/"></v-list-item>
                    <v-list-item title="Profile" value="Profile" href="/Admin/User/profile"></v-list-item>
                    <v-list-item title="Account" value="Account" href="/Admin/User/Account"></v-list-item>
                    <v-list-item title="Addresses" value="Addresses" href="/Admin/User/Addresses"></v-list-item>
                    <v-list-item title="History" value="History" href="/Admin/User/History"></v-list-item>
                    <v-list-item title="My Uploads" value="My Uploads" href="/Admin/User/my-uploads"></v-list-item>
                    <v-list-item title="Notifications" value="Notifications" href="/Admin/User/Notifications">
                    </v-list-item>
                    <v-list-item title="Recommendations" value="Recommendations" href="/Admin/User/Recommendations">
                    </v-list-item>
                    <v-list-item title="Lists" value="Lists" href="/Admin/User/Lists"></v-list-item>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script>
    export default {

    }
</script>

<script setup>

</script>