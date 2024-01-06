<template>
    <div>
        <v-table fixed-header min-height="300px">
            <tbody>
                <tr v-for="item in desserts" :key="item.name">
                <tr>
                    <th class="text-left">
                        Name
                    </th>
                    <v-divider vertical></v-divider>
                    <td>{{ item.name }}</td>
                </tr>
                </tr>
            </tbody>
        </v-table>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                desserts: [{
                        name: 'Frozen Yogurt',
                        calories: 159,
                    },
                    {
                        name: 'Ice cream sandwich',
                        calories: 237,
                    },
                    {
                        name: 'Eclair',
                        calories: 262,
                    },
                ],
            }
        },
    }
</script>

<script setup>

</script>