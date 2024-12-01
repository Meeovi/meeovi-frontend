<template>
    <div>
        <v-card class="mx-auto" max-width="300">
            <nuxt-img loading="lazy" class="align-end text-white" height="200" :src="`${customers?.avatar?.url}`" :alt="customers?.firstname"
                cover />

            <v-card-title>@{{ customers?.firstname }}</v-card-title>

            <v-card-text>
                <div>Member Since: {{ new Date(customers?.created_at).toLocaleDateString() }}</div>
            </v-card-text>

            <v-card-actions>
                <followButton />
            </v-card-actions>
        </v-card>
    </div>
</template>

<script>
    import followButton from '~/components/partials/followButton.vue'

    export default {
        components: {
            followButton
        },
        data: () => ({
            model: null,
        }),
    }
</script>

<script setup>
    const props = defineProps({
        customers: {
            type: Object,
            required: true,
        },
    });
    const {
        customers
    } = props;
</script>