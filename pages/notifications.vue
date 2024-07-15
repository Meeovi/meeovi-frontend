<template>
    <div class="contentPage">
      <v-toolbar color="transparent" title="Notification Center"></v-toolbar>  
      <v-table>
        <thead>
            <tr>
                <th class="text-left">
                    Name
                </th>
                <th class="text-left">
                    Notification Date
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="notifications in data?.activities?.nodes" :key="notifications?.id">
                <td v-html="notifications?.title"></td>
                <td>{{ new Date(notifications?.date).toLocaleDateString() }}</td>
            </tr>
        </tbody>
    </v-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {

            }
        },
    }
</script>

<script setup>
const query = gql`
query NewQuery {
  activities {
    nodes {
      id
      date
      status
      title
      type
    }
  }
}
`

  const {
    data
  } = useAsyncQuery(query, { client: 'cms' });
</script>