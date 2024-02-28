<template>
    <div>
        <h5 class="menuh5">{{ navsocial?.name }}</h5>
        <v-row>
            <v-col cols="3" v-for="(menu, index) in navsocial?.menus" :key="index">
                <v-btn variant="text" stacked :title="menu?.name" :prepend-icon="menu?.icon" size="x-small"
                    :href="menu?.url">{{ menu?.name }}</v-btn>
            </v-col>
        </v-row>
    </div>
</template>

<script setup>
  const {
    getItemById
  } = useDirectusItems()

  const navsocial = await getItemById({
    collection: "navigation",
    id: 4
  });
</script>