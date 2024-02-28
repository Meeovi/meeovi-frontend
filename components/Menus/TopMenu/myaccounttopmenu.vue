<template>
    <div>
        <v-menu :location="location" transition="slide-y-transition">
            <template v-slot:activator="{ props }">
                <a variant="flat" v-bind="props">
                    <v-icon start icon="fas fa-user-circle"></v-icon>
                </a>
            </template>
            <v-list>
                <v-row class="accountDropdown">
                    <v-col cols="6">
                        <h6>{{ nav?.name }}</h6>
                        <br>
                        <v-divider></v-divider>
                        
                        <v-list-item v-for="(menu, index) in nav?.menus" :key="index" :title="menu?.name" :value="menu?.name" :append-icon="menu?.icon" :href="menu?.url"></v-list-item>
                    </v-col>

                    <v-col cols="6">
                        <h6>{{ navcomm?.name }}</h6>
                        <br>
                        <v-divider></v-divider>
                        <v-list-item v-for="(menu, index) in navcomm?.menus" :key="index" :title="menu?.name" :value="menu?.name" :append-icon="menu?.icon" :href="menu?.url"></v-list-item>
                    </v-col>
                </v-row>
            </v-list>
        </v-menu>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                location: 'bottom',
            }
        }
    }
</script>

<script setup>
  const {
    getItemById
  } = useDirectusItems()

  const nav = await getItemById({
    collection: "navigation",
    id: 2
  });

  const navcomm = await getItemById({
    collection: "navigation",
    id: 3
  });
</script>