<template>
    <div class="productPage videoPage">
        <v-row>
            <v-col cols="8">
                <video src="" controls autoplay></video>

                <v-card elevation="2">
                    <div>
                        <v-toolbar color="red" title="Video Title"></v-toolbar>

                        <v-list lines="one">
                            <v-list-item :title="'Item ' + n"
                                prepend-avatar="https://randomuser.me/api/portraits/women/8.jpg"></v-list-item>
                        </v-list>

                        <v-toolbar color="transparent" density="compact">
                            <v-btn color="red">Subscribe</v-btn>
                            <v-btn color="gray" disabled="">20,583,258</v-btn>
                            <v-btn icon="fas fa-bell" color="red"></v-btn>

                            <v-toolbar-items class="rightvideoviews">
                                <v-btn disabled>1.679.887.751 views</v-btn>
                                <v-btn prepend-icon="fas fa-thumbs-up">()</v-btn>
                                <v-btn prepend-icon="fas fa-thumbs-down">()</v-btn>
                            </v-toolbar-items>

                        </v-toolbar>

                        <div class="videotags">
                            <h6>Tags:</h6>
                            <v-chip>Tag 1</v-chip>
                        </div>
                    </div>
                    <v-tabs v-model="tab">
                        <v-tab :value="one">Description</v-tab>
                        <v-tab :value="two">Share</v-tab>
                        <v-tab :value="three">Other Content by User</v-tab>
                    </v-tabs>

                    <v-card-text>
                        <v-window v-model="tab">
                            <v-window-item :value="one">
                                <v-list lines="one">
                                    <v-list-item title="Published: December 9, 2023"
                                        subtitle="Lorem ipsum dolor sit amet consectetur adipisicing elit">
                                    </v-list-item>
                                </v-list>
                            </v-window-item>

                            <v-window-item :value="two">
                                <share />
                            </v-window-item>

                            <v-window-item :value="three">
                                <!--<relatedproducts />-->
                            </v-window-item>
                        </v-window>
                    </v-card-text>
                </v-card>

                <br>
                <v-expansion-panels>
                    <v-expansion-panel title="Comments ()" color="red">
                        <v-expansion-panel-text><comments /></v-expansion-panel-text>
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>

            <v-col cols="4"><!--<relatedproducts />--></v-col>
        </v-row>
        <!--<recentlyviewed />-->
    </div>
</template>

<script>
    import recentlyviewed from '../../../components/Related/recentlyviewed.vue'
    import relatedproducts from '../../../components/Related/relatedproducts.vue'
    import editor from '../../../components/Editors/editor.vue'
    import comments from '../../../components/user/comments.vue'
    import share from '../../../components/user/share.vue'

    export default {
        components: {
            recentlyviewed,
            relatedproducts,
            editor,
            comments,
            share
        },
        data: () => ({
            tab: null,
        }),
    }
</script>

<script setup>
    useHead({
        title: '',
    })
</script>