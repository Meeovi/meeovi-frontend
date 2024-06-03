<template>
  <div>
    <NewsletterForm />
    <v-btn class="footertotopbtn" title="To the Top of the Page" prepend-icon="fas fa-arrow-up" rounded="0"
      href="#mainSection">Back to Top</v-btn>
    <section data-bs-version="5.1" class="footer3 cid-u4cbW5p2qg" once="footer" id="footer03-8b"
      data-sortbtn="btn-primary">
      <div class="container">
        <div class="row align-left justify-content-center mbr-white">
          <div class="col-md-6 col-lg-3 md-pb" v-for="menu in data?.pages?.nodes" :key="menu">
            <h2 class="mbr-section-title pb-2 mbr-fonts-style display-7">
              <strong>{{ menu?.title }}</strong></h2>
            <div v-for="child in menu?.children?.nodes" :key="child.id">
              <h3 class="mbr-section-subtitle mbr-fonts-style mbr-lighter display-4"><a
                  :href="`/${child?.id}`">{{ child?.title }}</a></h3>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 md-pb" v-for="menu in legal?.pages?.nodes" :key="menu">
            <h2 class="mbr-section-title pb-2 mbr-fonts-style display-7">
              <strong>{{ menu?.title }}</strong></h2>
            <div v-for="child in menu?.children?.nodes" :key="child.id">
              <h3 class="mbr-section-subtitle mbr-fonts-style mbr-lighter display-4"><a
                  :href="`/${child?.id}`">{{ child?.title }}</a></h3>
            </div>
          </div>
          <div class="col-md-6 col-lg-3 md-pb" v-for="menu in company?.pages?.nodes" :key="menu">
            <h2 class="mbr-section-title pb-2 mbr-fonts-style display-7">
              <strong>{{ menu?.title }}</strong></h2>
            <div v-for="child in menu?.children?.nodes" :key="child.id">
              <h3 class="mbr-section-subtitle mbr-fonts-style mbr-lighter display-4"><a
                  :href="`/${child?.id}`">{{ child?.title }}</a></h3>
            </div>
          </div>
          <!--<div class="col-md-6 col-lg-3 md-pb">
                        <h2 class="mbr-section-title pb-2 mbr-fonts-style display-7">
                            <strong>{{ newsletter?.name }}</strong></h2>
                        <h3 class="mbr-section-subtitle mbr-fonts-style mbr-lighter display-4">
                            {{ newsletter?.description }}</h3>
                        <div class="form1 px-2" data-form-type="formoid">
                            <form action="https://mobirise.eu/" method="POST" class="mbr-form form-with-styler"
                                data-form-title="My Mobirise Form"><input type="hidden" name="email"
                                    data-form-email="true"
                                    value="G+i4QxkPVy/kVx4r8JG5yl7LGhxFqKoNbvYJqz+fIZl0UtW3JZaUCJRJVUS5WFN81MUognCLb/fwak5vTjavSdYAWmhhwSrUQSg5zopqd2vqN8py1k/5/r9M4xyp/ooz.DzZJXN3qwMq9XSMplPqUqJizJjx23mmEXWW/dk2e9GuqLirjenkJtYIpqFFcwMGt+F0DxsEZX3WEhoplZQGEbGsk0u+erLEYnpYQzSjXCysAWgqoQY+ujKMSoMMHBlGG">
                                <div class="row">
                                    <div hidden="hidden" data-form-alert="" class="alert alert-success col-12">Thanks
                                        for filling
                                        out the form!</div>
                                    <div hidden="hidden" data-form-alert-danger="" class="alert alert-danger col-12">
                                    </div>
                                </div>
                                <div class="dragArea row">
                                    <div class="col form-group " data-for="email">
                                        <input type="text" name="email" placeholder="E-mail" data-form-field="E-mail"
                                            required="required" class="form-control display-7" value=""
                                            id="email-footer03-8b">
                                    </div>
                                    <div class="col-auto mbr-section-btn"><button type="submit"
                                            class="btn btn-lg btn-primary display-4">&gt;</button></div>
                                </div>
                            </form>
                        </div>
                    </div>-->
        </div>
      </div>
    </section>

    <section data-bs-version="5.1" class="footer7 cid-u4ccfXoeP6" once="footers" id="footer7-8c"
      data-sortbtn="btn-primary">
      <div class="container">
        <div class="row align-left justify-content-center mbr-white" v-for="(menu, index) in copyrightfooter?.pages?.nodes" :key="index">
          <v-col cols="3" v-for="child in menu?.children?.nodes" :key="child.id">
            <v-list-item :title="child?.title" :value="child?.title" :href="child?.id"></v-list-item>
          </v-col>
          <v-col cols="12">
            <p class="mbr-text mb-0 align-center mbr-fonts-style display-7" v-for="site in msite?.pages?.nodes"
              :key="site.id">
              @ 2017 - {{ new Date().getFullYear() }}&nbsp;<a href="/">{{ site?.title }}&nbsp;&nbsp;</a>All Rights Reserved.
            </p>
          </v-col>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {
    data: () => ({
      location: 'top',
    }),
  }
</script>

<script setup>
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
  pages(where: {title: "About Meeovi"}) {
    nodes {
      title
      children {
        nodes {
          id
          slug
          ... on Page {
            id
            title
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
  pages(where: {title: "Legal"}) {
    nodes {
      title
      children {
        nodes {
          id
          slug
          ... on Page {
            id
            title
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
  pages(where: {title: "Company"}) {
    nodes {
      title
      children {
        nodes {
          id
          slug
          ... on Page {
            id
            title
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
  pages(where: {title: "Copyright"}) {
    nodes {
      title
      children {
        nodes {
          id
          slug
          ... on Page {
            id
            title
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