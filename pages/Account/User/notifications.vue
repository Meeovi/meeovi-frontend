<template>
    <div>
        <!--<profilebar />-->
        <v-toolbar title="Notification Center" color="transparent"></v-toolbar>
    <v-table fixed-header height="300px">
        <thead>
            <tr>
                <th class="text-left">
                  <strong>User</strong>
                </th>
                <th class="text-left">
                  <strong>Notifications</strong>
                </th>
                <th class="text-left">
                  <strong>Date</strong>
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="notifications in data?.activities?.nodes" :key="notifications">
                <td><v-avatar :image="`${notifications?.creator?.avatar?.url}`"></v-avatar></td>
                <td v-html="notifications?.title"></td>
                <td>{{ new Date(notifications?.date).toLocaleDateString() }}</td>
            </tr>
        </tbody>
    </v-table>
   </div> 
</template>

<script>
import profilebar from '../../../components/menus/profilebar.vue'

    export default {
        components: { profilebar },
        data: () => ({
            tab: null,
        }),
    }
</script>

<script setup>
const query = gql`
query NewQuery {
  activities(where: {order: DESC}) {
    nodes {
      date
      id
      title
      creator {
        username
        avatar {
          url
        }
      }
    }
  }
}
`
  const {
    data
  } = await useAsyncQuery(query)

/*const {
        getItems
    } = useDirectusItems()

    const notifications = await getItems({
        collection: "notifications"
    });*/

    useHead({
        title: 'Notifications',
    });

    definePageMeta({
	  //middleware: ['auth-logged-in'],
	})
</script>