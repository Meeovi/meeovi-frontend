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
          <v-col cols="6" v-for="(menu, index) in data?.navigations?.nodes" :key="index">
            <h6>{{ menu?.title }}</h6>
            <br>
            <v-divider></v-divider>
            <div v-for="(item, index) in menu?.navigationFields?.menu?.nodes" :key="index">
              <v-list-item :title="item?.title" :value="item?.title" :prepend-icon="item?.icon"
                :href="item?.websiteFields?.link"></v-list-item>
            </div>
          </v-col>

          <v-col cols="6" v-for="(menu, index) in social?.navigations?.nodes" :key="index">
            <h6>{{ menu?.title }}</h6>
            <br>
            <v-divider></v-divider>
            <div v-for="(item, index) in menu?.navigationFields?.menu?.nodes" :key="index">
              <v-list-item :title="item?.title" :value="item?.title" :prepend-icon="item?.websiteFields?.icon"
                :href="item?.websiteFields?.link"></v-list-item>
            </div>
          </v-col>
          <v-col cols="12">
            <v-list-item prepend-icon="fas fa-upload" title="Upload Center" href="/upload"></v-list-item>
          </v-col>

          <v-col cols="12">
            <!--<v-list-item prepend-icon="fas fa-clock-rotate-left" :href="`/sign-${ user ? 'out' : 'in' }`"> Sign {{ user ? 'out' : 'in' }}</v-list-item>-->
            <v-list-item @click="signOut({ callbackUrl: '/' })" prepend-icon="fas fa-clock-rotate-left" title="Logoff" href="/logoff"></v-list-item>
          </v-col>
        </v-row>
      </v-list>
    </v-menu>
  </div>
</template>

<script setup>
   import {
        ref
    } from 'vue'
    import { AccountCommerce, AccountSocial } from '~/graphql/CMS/queries/menus/myaccounttopmenu.gql'

const {
    data
} = useAsyncQuery(AccountCommerce);

  const {
    data: social
  } = useAsyncQuery(AccountSocial);

  /*  const {
      getItemById
    } = useDirectusItems()

    const nav = await getItemById({
      collection: "navigation",
      id: 2
    });

    const navcomm = await getItemById({
      collection: "navigation",
      id: 3
    });*/
</script>