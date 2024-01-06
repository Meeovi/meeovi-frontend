<template>
    <div class="copyrightFooter">
        <v-divider></v-divider>
        <div class="translatebar">
            <ul>
                <li>
                    <v-btn href="/">
                        <v-icon start>
                            <img src="../assets/images/logo512alpha-192x192.png" />
                        </v-icon>Meeovi
                    </v-btn>
                </li>

                <li></li>
                <li>
                    <v-btn href="/translations" prepend-icon="fas fa-globe">Change Country</v-btn>
                </li>
            </ul>
        </div>
        <div class="copyrightText">
            2023 - {{ new Date().getFullYear() }} — <strong><a href="https://www.meeovi.com/about">&copy; The
                    Meeovi Company</a></strong>
        </div>
    </div>
</template>

<script>
    import languageSwitcher from '../components/Partials/languageSwitcher.vue'

    export default {
        components: {
            languageSwitcher
        }
    }
</script>

<script setup>

</script>