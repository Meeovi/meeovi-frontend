<template>
    <div class="contentPage">
        <profilebar />
        <v-toolbar title="Notification Center" color="transparent"></v-toolbar>
    <v-table fixed-header height="300px">
        <thead>
            <tr>
                <th class="text-left">
                    Name
                </th>
                <th class="text-left">
                    Notifications
                </th>
                <th class="text-left">
                    Status
                </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="notifications in notifications" :key="notifications.name">
                <td>{{ notifications.id }}</td>
                <td>{{ notifications.content }}</td>
                <td>{{ notifications.is_read }}</td>
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
const {
        getItems
    } = useDirectusItems()

    const notifications = await getItems({
        collection: "notifications"
    });    
/*import notifications from '../../../apollo/queries-mutations_subscriptions/queries/notifications.gql'

const {
    data
} = useAsyncQuery(notifications);*/

    useHead({
        title: 'Notifications',
    });
</script>