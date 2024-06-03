<template>
<div>
    <div v-if="viewer">
              <v-list-item :prepend-avatar="viewer?.avatar?.url" :title="viewer?.username">
                <template v-slot:append>
                  <v-btn variant="text" icon="fas fa-chevron-left" @click.stop="rail = !rail"></v-btn>
                </template>
              </v-list-item>
            </div>

            <div v-else>
              <v-list-item title="Login" href="/account/auth/login">
                <template v-slot:append>
                  <v-btn variant="text" icon="fas fa-chevron-left" @click.stop="rail = !rail"></v-btn>
                </template>
              </v-list-item>
            </div>
</div>
</template>

<script>
export default {

}
</script>

<script setup>
  import {
    CURRENT_USER_QUERY
  } from '../apollo/Queries/currentUser';

  const router = useRouter();
  const {
    result,
  } = useQuery(CURRENT_USER_QUERY);
  const viewer = result.value?.viewer;
</script>