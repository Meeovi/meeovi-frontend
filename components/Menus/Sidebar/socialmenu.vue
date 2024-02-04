<template>
    <div>
        <h5 class="menuh5">Social</h5>
        <v-row>
            <v-col cols="3">
                <v-btn variant="text" stacked title="Social Feed" prepend-icon="fas fa-feed" size="x-small"
                    href="/social/newsfeed">Feed</v-btn>
            </v-col>
            <v-col cols="3">
                <v-btn variant="text" stacked title="Spaces" prepend-icon="fas fa-people-group" size="x-small"
                    href="/social/spaces">Spaces</v-btn>
            </v-col>
            <v-col cols="3">
                <v-btn variant="text" stacked title="Meeovi Live" prepend-icon="fas fa-video" size="x-small"
                    href="/departments/live">Live</v-btn>
            </v-col>
            <v-col cols="3">
                <v-btn variant="text" stacked title="Journals" prepend-icon="fas fa-book" size="x-small"
                    href="/social/journals">Journals</v-btn>
            </v-col>
        </v-row>
    </div>
</template>