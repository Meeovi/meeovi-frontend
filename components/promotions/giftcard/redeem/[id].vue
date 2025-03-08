<template>
    <div>
        <!---->
        <v-row class="giftCardSection">
            <v-col cols="12">
                <h2>Redeem a gift card</h2>
            </v-col>

            <v-col cols="12">
                <v-row>
                    <v-col cols="6"><v-text-field class="giftcardfield" label="Enter code"></v-text-field></v-col>
                    <v-col cols="6"><v-btn class="giftcardbtn" color="orange" size="x-large" type="submit" variant="elevated">Apply to your balance</v-btn></v-col>
                </v-row>
                
                
                <v-expansion-panels>
                    <v-expansion-panel title="How do I find the claim code?"
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus! Eaque cupiditate minima">
                    </v-expansion-panel>
                </v-expansion-panels>
            </v-col>

            <v-col cols="12">
                <h2>Current Gift Card Balance: {{ card?.amount }}</h2>
                <NuxtLink :to="`/commerce/giftcard/${card?.id}`">View balance history</NuxtLink>
            </v-col>
            <v-divider></v-divider>

            <v-col cols="12">
                <p></p>
            </v-col>
            <v-divider></v-divider>

            <v-col cols="12" v-for="cmsblocks in data" :key="cmsblocks">
                <p v-html="cmsblocks.content"></p>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
import gql from 'graphql-tag'
const {
    getItemById
  } = useDirectusItems()
  const route = useRoute();

  const card = await getItemById({
    collection: "gift_card",
    id: route.params.id,
  });

const query = gql`
query MyQuery {
    cmsBlocks(identifiers: "redeemtextbox") {
    items {
      content
    }
  }
}
`
  const {
    data
  } = await useAsyncQuery(query)

    useHead({
        title: 'Redeem an Meeovi Gift Card'
    })

    definePageMeta({
	  middleware: ['auth'],
	})
</script>