<template>
    <div>
        <v-menu :location="location" transition="slide-y-transition">
            <template v-slot:activator="{ props }">
              <a variant="flat" v-bind="props">
                <v-icon start icon="fas fa-bell"></v-icon>
              </a>
            </template>
            <v-list>
              <v-list-item title="" value="" href="/"></v-list-item>
              <v-divider></v-divider>
              <v-list-item title="All Notifications" value="notifications" append-icon="fas fa-bell"
                href="/admin/user/notifications">
              </v-list-item>
            </v-list>
          </v-menu>
    </div>
</template>

<script>
  export default {
    data: () => ({
      location: 'bottom',
    }),
  }
</script>

<script setup>
    
</script>