<template>
    <div>
        <v-card class="commentfield">
            <v-form action="">
                <v-textarea clearable label="Leave a Comment"></v-textarea>
                <v-btn id="videocommentbtn" type="submit">Submit</v-btn>
            </v-form>

            <v-list class="videocommentlist" lines="one" v-for="n in 5" :key="n">
                <v-list-item :title="'Person Name ' + n" subtitle="United Kingdom"
                    prepend-avatar="https://randomuser.me/api/portraits/women/8.jpg">
                </v-list-item>
                <v-card title="Card title" subtitle="Subtitle" text="Comment goes here" elevation="0">
                </v-card>
                <v-toolbar density="compact" color="transparent">
                    <v-rating half-increments hover length="5" size="24" model-value="5" color="primary"
                        active-color="warning" />

                    <p>12/3/2023</p>

                    <p>Was this helpful?</p>

                    <v-btn icon="fas fa-thumbs-up"></v-btn>
                    <v-btn icon="fas fa-thumbs-down"></v-btn>
                </v-toolbar>
                <v-divider></v-divider>
            </v-list>
        </v-card>
    </div>
</template>

<script>
    export default {

    }
</script>

<script>

</script>