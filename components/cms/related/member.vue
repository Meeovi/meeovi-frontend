<template>
    <div>
        <v-row align="center" class="spacer" no-gutters>
            <v-col cols="4" sm="2" md="1">
                <v-avatar size="50">
                    <nuxt-img loading="lazy" :src="`${members?.avatar?.url}`" :alt="members?.username" />
                </v-avatar>
            </v-col>

            <v-col class="hidden-xs-only text-left ms-2" sm="5" md="3">
                <p>{{ members?.username }}</p>
            </v-col>

            <v-col class="text-no-wrap text-left" cols="5" sm="3">
                <p>members?.description</p>
            </v-col>

            <v-col class="text-medium-emphasis text-truncate hidden-sm-and-down">
                <v-btn prepend-icon="fas fa-user-plus" color="primary">Add Friend</v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
    const props = defineProps({
        member: {
            type: Object,
            required: true,
        },
    });
    const {
        member
    } = props;
</script>