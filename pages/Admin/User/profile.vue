<template>
    <div class="profilePage">
        <v-row>
            <v-col cols="12" style="background-image: url(); background-size:cover; background-repeat:no-repeat;">
                <v-row>
                    <v-col cols="6"><v-img cover src="https://cdn.vuetifyjs.com/images/profiles/marcus.jpg" :aspect-ratio="16 / 9" :width="300"></v-img></v-col>
                    <v-col cols="6">
                        Name:   <br>
                        Profession:   <br>
                        Website:   <br>
                        Social:   <br>
                        Description:   <br>
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="12">
                <profilesubpage />
            </v-col>
        </v-row>
    </div>
</template>

<script>
import profilesubpage from '../../../components/user/profilesubpage.vue'

    export default {
        components: { profilesubpage },
        data: () => ({
            tab: null,
        }),
    }
</script>

<script setup>
    useHead({
        title: 'My Profile',
    })
</script>