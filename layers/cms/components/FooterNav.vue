<template>
  <div>
    <Newsletter />
    <v-btn class="footertotopbtn" title="To the Top of the Page" prepend-icon="fas fa-arrow-up" rounded="0"
      href="#mainSection">Back to Top</v-btn>
    <section data-bs-version="5.1" class="footer3 cid-u4cbW5p2qg" once="footer" id="footer03-8b"
      data-sortbtn="btn-primary">
      <div class="container">
        <div class="row align-left justify-content-center mbr-white">
          <div class="col-md-6 col-lg-3 md-pb" v-for="menu in data?.navigations?.nodes" :key="menu">
            <h2 class="mbr-section-title pb-2 mbr-fonts-style display-7">
              <strong>{{ menu?.title }}</strong></h2>
            <div v-for="child in menu?.navigationFields?.menu?.nodes" :key="child.id">
              <h3 class="mbr-section-subtitle mbr-fonts-style mbr-lighter display-4"><a
                  :href="`/${child?.id}`">{{ child?.title }}</a></h3>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 md-pb" v-for="menu in legal?.navigations?.nodes" :key="menu">
            <h2 class="mbr-section-title pb-2 mbr-fonts-style display-7">
              <strong>{{ menu?.title }}</strong></h2>
            <div v-for="child in menu?.navigationFields?.menu?.nodes" :key="child.id">
              <h3 class="mbr-section-subtitle mbr-fonts-style mbr-lighter display-4"><a
                  :href="`/${child?.id}`">{{ child?.title }}</a></h3>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 md-pb" v-for="menu in company?.navigations?.nodes" :key="menu">
            <h2 class="mbr-section-title pb-2 mbr-fonts-style display-7">
              <strong>{{ menu?.title }}</strong></h2>
            <div v-for="child in menu?.navigationFields?.menu?.nodes" :key="child.id">
              <h3 class="mbr-section-subtitle mbr-fonts-style mbr-lighter display-4"><a :href="`/${child?.id}`">{{ child?.title }}</a></h3>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section data-bs-version="5.1" class="footer7 cid-u4ccfXoeP6" once="footers" id="footer7-8c"
      data-sortbtn="btn-primary">
      <div class="container">
        <div class="row align-left justify-content-center mbr-white" v-for="(menu, index) in copyrightfooter?.navigations?.nodes" :key="index">
          <v-col cols="3" v-for="child in menu?.navigationFields?.menu?.nodes" :key="child.id">
            <v-list-item :title="child?.title" :value="child?.title" :prepend-icon="child?.websiteFields?.icon" :href="`/${child?.id}`"></v-list-item>
          </v-col>
          <v-col cols="12">
            <p class="mbr-text mb-0 align-center mbr-fonts-style display-7" v-for="site in msite?.navigations?.nodes"
              :key="site.id">
              @ 2017 - {{ new Date().getFullYear() }}&nbsp;<a href="/">{{ site?.title }}&nbsp;&nbsp;</a>All Rights Reserved.
            </p>
          </v-col>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
    import {
        ref
    } from 'vue'

  const location = ref('top');

  const overview = gql `
query NewQuery {
  pages(where: {name: "Meeovi"}) {
    nodes {
      id
      title
      featuredImage {
        node {
          sourceUrl
        }
      }
      content
    }
  }
}
`

  const {
    data: msite
  } = useAsyncQuery(overview);

  const query = gql `
query NewQuery {
  navigations(where: {title: "About Us"}) {
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
                icon
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
    data
  } = useAsyncQuery(query);


  const querylegal = gql `
query NewQuery {
  navigations(where: {title: "Legal"}) {
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
                icon
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
    data: legal
  } = useAsyncQuery(querylegal);

  const querycompany = gql `
query NewQuery {
  navigations(where: {title: "Company"}) {
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
                icon
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
    data: company
  } = useAsyncQuery(querycompany);

  const copyright = gql `
query NewQuery {
  navigations(where: {title: "Footer Copyright Menu"}) {
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
                icon
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
    data: copyrightfooter
  } = useAsyncQuery(copyright);

  /* const {
       getItems, getItemById, getSingletonItem
   } = useDirectusItems()

   const siteoverview = await getSingletonItem({
       collection: "siteoverview"
   });

   const navabout = gql`
   query {
       pages (filter: {type: {_eq: "About"}}) {
       id
       status
       sort
       name
       }
   }`

       const {
           data: about
       } = useAsyncQuery(navabout);


   const navlegal = gql`
   query {
       pages (filter: {type: {_eq: "Legal"}}) {
       id
       status
       sort
       name
       }
   }`

   const {
       data: legal
   } = useAsyncQuery(navlegal); 

   const navstores = await getItems({
       collection: "meeovistores",
   });

   const about = await getItemById({
       collection: "navigation",
       id: 7
   });

   const legal = await getItemById({
       collection: "navigation",
       id: 8
   });

   const store = await getItemById({
       collection: "navigation",
       id: 9
   });

   const copyright = await getItemById({
       collection: "navigation",
       id: 10
   });

   const newsletter = await getItemById({
       collection: "navigation",
       id: 11
   });*/
</script>