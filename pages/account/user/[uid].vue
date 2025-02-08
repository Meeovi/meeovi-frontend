<template>
    <div>
        <!--<LowerBar /> -->
        <div v-if="user && profile" class="accountPage">
            <section data-bs-version="5.1" class="people3 cid-u1nMLE9Ke9 mbr-fullscreen mbr-parallax-background"
                id="apeople3-6r">

                <div class="mbr-overlay" style="opacity: 0; background-color: rgb(255, 255, 255);">
                </div>
                <div class="container-fluid">
                    <div class="row justify-content-center">
                        <div class="col-md-12 col-lg-12">
                            <div class="content-container" v-if="user.isLoggedIn">
                                <div class="img-wrap">
                                    <div class="item-img">
                                        <NuxtImg class="userProfileAvatar" loading="lazy"
                                            :src="`${profile?.avatar}`" :alt="profile?.username" />
                                    </div>
                                </div>
                                <div class="text-wrap align-left">
                                    <h4 class="mbr-text-name mbr-fonts-style display-5">
                                        <strong>{{ profile?.username }}</strong>
                                    </h4>
                                    <h4 class="mbr-text mbr-fonts-style display-7">
                                        <v-list
                                            style="background: transparent; color: white; left: -15px; position: relative;">
                                            <v-list-item
                                                title="Member Since">{{ profile?.created_at }}</v-list-item>
                                        </v-list>
                                    </h4>

                                    <!-- Conditionally render the follow button -->
                                    <followButton v-if="user.id !== loggedInUserId" :entityId="user.id"
                                        entityType="user" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <v-card variant="text">
                <v-tabs v-model="tab" bg-color="transparent" align-tabs="center">
                    <div v-for="(menu, index) in navigationProfile?.menus" :key="index">
                        <v-tab :value="menu?.value" v-if="menu?.active === 'Active'">{{ menu?.name }}</v-tab>
                    </div>

                    <div v-for="(menu, index) in navigationProfile?.submenus" :key="index">
                        <v-tab :value="menu?.value"><v-btn variant="text" :href="menu?.url"
                                :prepend-icon="`fas fa-${menu?.icon}`">{{ menu?.name }}</v-btn></v-tab>
                    </div>
                </v-tabs>

                <v-card-text>
                    <v-window v-model="tab">
                        <v-window-item :value="navigationProfile?.menus[0]?.value">
                            <v-row>
                                <v-col cols="4" v-for="(posts, index) in myposts" :key="index" style="margin: 8px;">
                                    <post :post="posts" />
                                </v-col>
                            </v-row>
                        </v-window-item>

                        <v-window-item :value="navigationProfile?.menus[1]?.value">
                            <replies />
                        </v-window-item>

                        <v-window-item :value="navigationProfile?.menus[2]?.value">
                            <media />
                        </v-window-item>

                        <v-window-item :value="navigationProfile?.menus[3]?.value">
                            <likes />
                        </v-window-item>

                        <v-window-item :value="navigationProfile?.menus[4]?.value">
                            <v-row style="padding-top: 15px;">
                                <v-col cols="4" v-for="(shorts, index) in myvibez" :key="index">
                                    <shorts :short="shorts" />
                                </v-col>
                            </v-row>
                        </v-window-item>

                        <v-window-item :value="navigationProfile?.menus[5]?.value">
                            <archives />
                        </v-window-item>

                        <v-window-item :value="navigationProfile?.submenus[2]?.value">
                            <settings />
                        </v-window-item>
                    </v-window>
                </v-card-text>
            </v-card>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { createClient } from '@supabase/supabase-js'
import followButton from '~/components/partials/followButton.vue'
import post from '~/components/cms/related/posts.vue'
import shorts from '~/components/cms/related/shorts.vue'
import replies from '~/components/pages/profile/replies.vue'
import media from '~/components/pages/profile/media.vue'
import likes from '~/components/pages/profile/likes.vue'
import archives from '~/components/pages/profile/archives.vue'
import settings from '~/components/pages/account/settings.vue'
import { useRuntimeConfig } from '#imports'

// Initialize Supabase client
const config = useRuntimeConfig()
const supabase = createClient(
  config.public.supabase.url,
  config.public.supabase.key,
  {
    auth: {
      persistSession: true,
      autoRefreshToken: true
    }
  }
)

const user = ref(null)
const profile = ref(null)
const loggedInUserId = ref(null)
const tab = ref(null)
const route = useRoute()
const { uid } = route.params

// Subscription cleanup
let profileSubscription = null

// Initialize user data and set up real-time listeners
async function initializeUserData() {
  try {
    // Get initial session
    const { data: { session }, error: sessionError } = await supabase.auth.getSession()
    if (sessionError) throw sessionError

    if (session) {
      user.value = session.user
      loggedInUserId.value = session.user.id

      // Initial profile fetch with caching
      await fetchUserProfile()

      // Set up real-time subscription for profile changes
      profileSubscription = supabase
        .channel('profile-changes')
        .on(
          'postgres_changes',
          {
            event: '*',
            schema: 'public',
            table: 'profiles',
            filter: `id=eq.${uid}`
          },
          (payload) => {
            // Update profile data in real-time
            profile.value = payload.new
          }
        )
        .subscribe()
    }

    // Set up auth state change listener
    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      user.value = session?.user || null
      loggedInUserId.value = session?.user?.id || null
      
      if (session) {
        await fetchUserProfile()
      }
    })

  } catch (error) {
    console.error('Error initializing user data:', error.message)
  }
}

// Optimized profile fetching with caching
async function fetchUserProfile() {
  try {
    // First, try to get from cache
    const cachedProfile = await getCachedProfile()
    if (cachedProfile) {
      profile.value = cachedProfile
    }

    // Fetch fresh data from Supabase
    const { data, error } = await supabase
      .from('profiles')
      .select(`
        *,
        followers:profile_followers(follower_id),
        following:profile_followers!follower_id(profile_id),
        posts(count)
      `)
      .eq('id', uid)
      .single()

    if (error) throw error

    // Update profile and cache
    profile.value = data
    await cacheProfile(data)

  } catch (error) {
    console.error('Error fetching user profile:', error.message)
  }
}

// Cache management functions
async function cacheProfile(profileData) {
  try {
    localStorage.setItem(`profile_${uid}`, JSON.stringify({
      data: profileData,
      timestamp: Date.now()
    }))
  } catch (error) {
    console.error('Error caching profile:', error)
  }
}

async function getCachedProfile() {
  try {
    const cached = localStorage.getItem(`profile_${uid}`)
    if (!cached) return null

    const { data, timestamp } = JSON.parse(cached)
    // Cache expiry after 5 minutes
    if (Date.now() - timestamp > 5 * 60 * 1000) {
      localStorage.removeItem(`profile_${uid}`)
      return null
    }

    return data
  } catch (error) {
    console.error('Error reading cached profile:', error)
    return null
  }
}

// Optimized profile update function with real-time sync
async function updateProfile(profileData) {
  try {
    const { data, error } = await supabase
      .from('profiles')
      .update(profileData)
      .eq('id', uid)
      .select()
      .single()

    if (error) throw error

    // Update local state immediately
    profile.value = data
    // Update cache
    await cacheProfile(data)

    return data
  } catch (error) {
    console.error('Error updating profile:', error.message)
    throw error
  }
}

// Lifecycle hooks
onMounted(() => {
  initializeUserData()
})

onUnmounted(() => {
  // Clean up subscriptions
  if (profileSubscription) {
    supabase.removeChannel(profileSubscription)
  }
})

// Keep your existing Directus related code with optimizations
const { $directus, $readItem, $readItems } = useNuxtApp()

const { data: navigationProfile } = await useAsyncData('profile', () => {
  return $directus.request($readItem('navigation', '36', {
    fields: ['*', { '*': ['*'] }]
  }))
}, {
  // Add caching options for Nuxt
  watch: false,
  server: true,
  cache: true
})

const { data: myvibez } = await useAsyncData('myvibez', () => {
  return $directus.request($readItems('shorts', {
    filter: {
      creator: {
        _eq: `${user.value?.username}`
      }
    },
    fields: ['*', { '*': ['*'] }]
  }))
}, {
  watch: [() => user.value?.username],
  server: true,
  cache: true
})

const { data: myposts } = await useAsyncData('myposts', () => {
  return $directus.request($readItems('posts', {
    filter: {
      username: {
        _eq: `${user.value?.username}`
      }
    },
    fields: ['*', { '*': ['*'] }]
  }))
}, {
  watch: [() => user.value?.username],
  server: true,
  cache: true
})

// Reactive page title
watchEffect(() => {
  useHead({
    title: profile.value?.username || 'User Profile',
  })
})

definePageMeta({
  auth: false,
  middleware: ['authenticated'],
  layout: "nolive",
})
</script>