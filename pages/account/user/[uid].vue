<template>
    <div v-if="userStore">
        <!--<profilebar />-->
        <section data-bs-version="5.1" class="people3 cid-u1nMLE9Ke9 mbr-fullscreen mbr-parallax-background"
            id="apeople3-6r">

            <div class="mbr-overlay" style="opacity: 0; background-color: rgb(255, 255, 255);">
            </div>
            <div class="container-fluid">
                <div class="row justify-content-center">
                    <div class="col-md-12 col-lg-12">
                        <div class="content-container" v-if="userStore.isLoggedIn">
                            <div class="img-wrap">
                                <div class="item-img">
                                    <NuxtImg loading="lazy" :src="`${userStore?.user?.photoURL}`" :alt="userStore?.user?.displayName" />
                                </div>
                            </div>
                            <div class="text-wrap align-left">
                                <h4 class="mbr-text-name mbr-fonts-style display-5">
                                    <strong>{{ userStore?.user?.displayName }}</strong>
                                </h4>
                                <h4 class="mbr-text mbr-fonts-style display-7">
                                    <v-list style="background: transparent; color: white;">
                                        <v-list-item title="Member Since">{{ userStore?.user?.metadata?.creationTime }}</v-list-item>
                                    </v-list>
                                </h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <v-card variant="text">
            <v-tabs v-model="tab" bg-color="transparent" align-tabs="center">
                <div v-for="(menu, index) in profile?.menus" :key="index">
                    <v-tab :value="menu?.value" v-if="menu?.active === 'Active'">{{ menu?.name }}</v-tab>
                </div>

                <div v-for="(menu, index) in profile?.submenus" :key="index">
                    <v-tab :value="menu?.value"><v-btn variant="text" :href="menu?.url"
                            :prepend-icon="`fas fa-${menu?.icon}`">{{ menu?.name }}</v-btn></v-tab>
                </div>
            </v-tabs>

            <v-card-text>
                <v-window v-model="tab">
                        <v-window-item :value="profile?.menus[0]?.value">
                            <v-row>
                                <v-col cols="4" v-for="(posts, index) in myposts" :key="index" style="margin: 8px;">
                                    <post :post="posts" />
                                </v-col>
                            </v-row>
                        </v-window-item>

                        <v-window-item :value="profile?.menus[1]?.value">
                            <replies />
                        </v-window-item>

                        <v-window-item :value="profile?.menus[2]?.value">
                            <media />
                        </v-window-item>

                        <v-window-item :value="profile?.menus[3]?.value">
                            <likes />
                        </v-window-item>

                        <v-window-item :value="profile?.menus[4]?.value">
                            <v-row style="padding-top: 15px;">
                                <v-col cols="4" v-for="(shorts, index) in myvibez" :key="index">
                                    <shorts :short="shorts" />
                                </v-col>
                            </v-row>
                        </v-window-item>

                        <v-window-item :value="profile?.menus[5]?.value">
                            <archives />
                        </v-window-item>

                        <v-window-item :value="profile?.submenus[2]?.value">
                            <settings />
                        </v-window-item>
                </v-window>
            </v-card-text>
        </v-card>
    </div>
</template>

<script setup>
    import {
        ref
    } from 'vue'
    import post from '~/components/cms/related/posts.vue'
    import shorts from '~/components/cms/related/shorts.vue'
    import replies from '~/components/pages/profile/replies.vue'
    import media from '~/components/pages/profile/media.vue'
    import likes from '~/components/pages/profile/likes.vue'
    import archives from '~/components/pages/profile/archives.vue'
    import settings from '~/components/pages/account/settings.vue'
    import {
        useUserStore
    } from '~/stores/user'

    const userStore = useUserStore()

    const {
        $directus,
        $readItem,
        $readItems
    } = useNuxtApp()

    const userDisplayName = computed(() => {
        return userStore.name || userStore.username || 'User'
    })

    const tab = ref(null);
    const route = useRoute()

    const {
        data: profile
    } = await useAsyncData('profile', () => {
        return $directus.request($readItem('navigation', '36', {
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    const {
        data: myvibez
    } = await useAsyncData('myvibez', () => {
        return $directus.request($readItems('shorts', {
            filter: {
                creator: {
                    _eq: `${userDisplayName.value}`
                }
            },
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    const {
        data: myposts
    } = await useAsyncData('myposts', () => {
        return $directus.request($readItems('posts', {
            filter: {
                username: {
                    _eq: `${userDisplayName.value}`
                }
            },
            fields: ['*', {
                '*': ['*']
            }]
        }))
    })

    useHead({
        title: userStore?.user?.displayName || 'User Profile',
    })

    definePageMeta({
        auth: false,
        middleware: ['authenticated'],
        layout: "nolive",
    });
</script>