<template>
    <div>
        <v-card class="lowerbar">
            <v-tabs center-active>
                <h5>Meeovi Charts</h5>
                <v-tab><a :href="`/Product/Chart/charts/`">All</a></v-tab>
                <v-tab><a :href="`/categories/`"></a></v-tab>
            </v-tabs>
        </v-card>
        <v-row class="contentPage">
            <v-col cols="4">
                <v-container>
                    <v-row justify="space-around">
                        <v-card width="400">
                            <v-img height="200" src="https://cdn.vuetifyjs.com/docs/images/cards/purple-flowers.jpg"
                                cover class="text-white">
                                <v-toolbar color="rgba(0, 0, 0, 0)" theme="dark">
                                    <v-toolbar-title class="text-h6">
                                        Chart Name
                                    </v-toolbar-title>
                                </v-toolbar>
                            </v-img>

                            <v-card-text>
                                <div class="font-weight-bold ms-1 mb-2">
                                    Today
                                </div>

                                <v-timeline density="compact" align="start">
                                    <v-timeline-item v-for="message in messages" :key="message.time"
                                        :dot-color="message.color" size="x-small">
                                        <div class="mb-4">
                                            <div class="font-weight-normal">
                                                <strong>{{ message.from }}</strong> @{{ message.time }}
                                            </div>
                                            <div>{{ message.message }}</div>
                                        </div>
                                    </v-timeline-item>
                                </v-timeline>
                            </v-card-text>
                        </v-card>
                    </v-row>
                </v-container>
            </v-col>
        </v-row>
    </div>
</template>

<script>
  export default {
    data: () => ({
      messages: [
        {
          from: 'You',
          message: `Sure, I'll see you later.`,
          time: '10:42am',
          color: 'deep-purple-lighten-1',
        },
        {
          from: 'John Doe',
          message: 'Yeah, sure. Does 1:00pm work?',
          time: '10:37am',
          color: 'green',
        },
        {
          from: 'You',
          message: 'Did you still want to grab lunch today?',
          time: '9:47am',
          color: 'deep-purple-lighten-1',
        },
      ],
    }),
  }
</script>

<script setup>
    useHead({
        title: 'Charts',
    })
</script>