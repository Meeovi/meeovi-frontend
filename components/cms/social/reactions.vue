<template>
    <div>
        <v-menu>
            <template v-slot:activator="{ props }">
                <v-btn class="reactionButton" :color="isLiked ? 'primary' : 'default'" v-bind="props"
                    @click="toggleLike" title="Give this your stamp of approval" size="medium">
                    <v-icon>fas fa-stamp</v-icon>
                    <span class="ml-2">{{ likeCount }}</span>
                </v-btn>
            </template>
        </v-menu>
    </div>
</template>

<script setup>
    import {
        ref,
        onMounted
    } from "vue";
    import {
        useUserStore
    } from "~/stores/user";

    const userStore = useUserStore();

    const userDisplayName = computed(() => {
        return userStore.user?.name || userStore.user?.username || "User";
    });

    const {
        $directus,
        $readItem,
        $createItem,
        $deleteItem
    } = useNuxtApp();

    // Define and capture the props
    const props = defineProps({
        contentId: {
            type: String,
            required: true,
        },
        contentType: {
            type: String,
            required: true,
        },
    });

    const likeCount = ref(0);
    const isLiked = ref(false);
    const userLikeId = ref(null); // Add this to store the reaction ID

    const fetchLikes = async () => {
        try {
            const {
                data
            } = await $directus.request(
                $readItem("reactions", {
                    filter: {
                        content_id: {
                            _eq: props.contentId,
                        },
                        content_type: {
                            _eq: props.contentType,
                        },
                    },
                })
            );
            likeCount.value = data.length || 0;

            // Check if current user has liked
            const userLike = data.find(like => like.user === userDisplayName.value);
            if (userLike) {
                isLiked.value = true;
                userLikeId.value = userLike.id;
            }
        } catch (error) {
            console.error("Failed to fetch reactions:", error);
        }
    };

    const toggleLike = async () => {
        try {
            if (isLiked.value) {
                // Remove like
                await $directus.request(
                    $deleteItem("reactions", userLikeId.value)
                );
                likeCount.value -= 1;
                isLiked.value = false;
                userLikeId.value = null;
            } else {
                // Add like
                const response = await $directus.request(
                    $createItem("reactions", {
                        content_id: props.contentId,
                        content_type: props.contentType,
                        user: userDisplayName.value,
                    })
                );
                userLikeId.value = response.id;
                likeCount.value += 1;
                isLiked.value = true;
            }
        } catch (error) {
            console.error("Failed to toggle like:", error);
        }
    };

    onMounted(() => {
        fetchLikes();
    });
</script>

<style scoped>
    .reactionButton {
        display: inline-flex;
        align-items: center;
    }
</style>