<template>
    <div>
        <v-footer>
            <v-row justify="center" no-gutters>
                <v-col class="text-center mt-4" cols="4">
                    <v-list-item href="/stores/pickup-locations" title="Pickup Locations"></v-list-item>
                </v-col>

                <v-col class="text-center mt-4" cols="4">
                    <v-btn variant="outlined" color="gray" prepend-icon="fas fa-globe" href="/translations" title="Change Your Store">Meeovi Global</v-btn>
                </v-col>

                <v-col class="text-center mt-4" cols="4">
                    2017 — {{ new Date().getFullYear() }} <strong><a href="https://www.meeovi.com">&copy; Meeovi LLC</a></strong>
                </v-col>
            </v-row>
        </v-footer>
    </div>
</template>

<script>
    export default {
        data: () => ({
            location: 'top',
        }),
    }
</script>

<script setup>

</script>