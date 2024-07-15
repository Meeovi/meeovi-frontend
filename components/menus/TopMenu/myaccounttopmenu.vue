<template>
  <div>
    <v-menu :location="location" transition="slide-y-transition">
      <template v-slot:activator="{ props }">
        <v-btn v-bind="props">
          <ul v-if="Boolean(user)">
            <li v-for="(value, key) in user"><b>{{ key }}:</b> {{ value }}</li>
          </ul>
        </v-btn>
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
            <v-list-item prepend-icon="fas fa-clock-rotate-left" :href="`/sign-${ user ? 'out' : 'in' }`">Sign {{ user ? 'out' : 'in' }}</v-list-item>
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
  const user = useLogtoUser();

  const query = gql `
query NewQuery {
  navigations(where: {search: "Account Commerce"}) {
    nodes {
      title
      navigationFields {
        menu {
          nodes {
            ... on Website {
              id
              websiteFields {
                link
                type
                description
                icon
              }
              title
            }
          }
        }
      }
    }
  }
}
`

  const {
    data
  } = useAsyncQuery(query);

  const socialquery = gql `
query NewQuery {
  navigations(where: {search: "Account Social"}) {
    nodes {
      title
      navigationFields {
        menu {
          nodes {
            ... on Website {
              id
              websiteFields {
                link
                type
                description
              }
              title
            }
          }
        }
      }
    }
  }
}
`

  const {
    data: social
  } = useAsyncQuery(socialquery);
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