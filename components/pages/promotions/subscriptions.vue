<template>
    <div>
        <v-row>
            <v-col cols="12">
                <v-toolbar title="Your Subscriptions" subtitle=""></v-toolbar>
                <v-row class="accountRow">
                    <v-col cols="3" v-for="(subscriptions, index) in subscriptions" :key="index">
                        <v-card class="mx-auto" max-width="400">
                            <NuxtImg loading="lazy" class="align-end text-white" height="200"
                            :src="subscriptions?.image?.filename_disk" :alt="subscriptions?.name" cover />
                                <v-card-title>{{subscriptions?.name}}</v-card-title>

                            <v-card-subtitle class="pt-4">
                                Status: {{ subscriptions?.status }}
                            </v-card-subtitle>

                            <v-card-text>
                                <div>Start Date: {{ subscriptions?.start_date }}</div>

                                <div>End Date: {{ subscriptions?.end_date }}</div>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn color="red" :href="`/commerce/subscriptions/${subscriptions?.id}`">
                                    Manage subscription
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>

            <v-col cols="12">
                <v-toolbar title="Available Subscriptions" subtitle=""></v-toolbar>
                <v-row class="accountRow">
                    <v-col cols="3" v-for="(subscriptions, index) in subscriptions" :key="index">
                        <v-card class="mx-auto" max-width="400">
                            <NuxtImg loading="lazy" class="align-end text-white" height="200"
                            :src="subscriptions?.image?.filename_disk" :alt="subscriptions?.name" cover />
                                <v-card-title>{{subscriptions?.name}}</v-card-title>

                            <v-card-subtitle class="pt-4">
                                Status: {{ subscriptions?.status }}
                            </v-card-subtitle>

                            <v-card-text>
                                <div>Start Date: {{ subscriptions?.start_date }}</div>

                                <div>End Date: {{ subscriptions?.end_date }}</div>
                            </v-card-text>

                            <v-card-actions>
                                <v-btn color="red">
                                    Add to Cart
                                </v-btn>
                            </v-card-actions>
                        </v-card>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
  const {
    getItems
  } = useDirectusItems()
  const model = ref(null);

  const subscriptions = await getItems({
    collection: "subscriptions",
  });

    useHead({
        title: 'Subscriptions',
    })

    definePageMeta({
	  middleware: ['authenticated'],
	})
</script>