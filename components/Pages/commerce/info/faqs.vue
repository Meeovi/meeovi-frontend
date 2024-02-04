<template>
    <div>
        <v-expansion-panels variant="accordion">
            <v-expansion-panel :title="data?.products_by_id?.faqs?.faqs_id?.question">
                {{data?.products_by_id?.faqs?.faqs_id?.answer}}
            </v-expansion-panel>
        </v-expansion-panels>
    </div>
</template>

<script setup lang="ts">
const query = gql `
  query products_by_id($id: ID!){
    products_by_id(id: $id){
        id
        faqs {
            faqs_id {
                id
                question
                answer
            }
        }
    }
}
`

    const {
        data
    } = await useAsyncQuery(query)
</script>