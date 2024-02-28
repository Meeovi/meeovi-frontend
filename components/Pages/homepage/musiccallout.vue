<template>
  <div>
    <section data-bs-version="5.1" class="features2 cid-tAGUH8o3YK" id="features2-5z">

      <div class="container">
        <div class="row main align-items-center">
          <div class="col-md-6 image-element">
            <div class="img-wrap">
              <img src="../../assets/images/04.jpg" alt="" title="">
            </div>
          </div>
          <div class="col-md-6 text-element">
            <div class="text-content">

              <h2 class="mbr-title pt-2 mbr-fonts-style align-center display-2">
                Meeovi Music</h2>
              <div class="mbr-section-text">
                <p class="mbr-text pt-3 mbr-light mbr-fonts-style align-center display-7">Independent Music
                  is growing with all types of artists and producers making the decision to release their
                  music their way without interference of the big labels. With Meeovi Music, now they have
                  a place where they control it all.<br></p>
              </div>
              <div class="mbr-section-btn pt-3 align-center"><a class="btn btn-md btn-primary display-4"
                  href="/categories/music">Start Listening</a></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  const productModel = ref(null)
  export default {
    data: () => ({
      model: null,
      url: process.env.DIRECTUS_URL,
    }),
    setup() {
      return {
        data,
        error,
        loading,
        productModel,
      }
    },
  }
</script>

<script setup>
  const query = gql `
query {
  departments (search: "music"){
    id
    Active
    name
    color
    colortext
    description
    content
    brands {
      id
      brands_id {
        name
        image
      }
    }
    articles {
      articles_id {
        id
        name
        excerpt
        content
        categories {
          categories_id {
            id
            name
          }
        }
      }
    }
    image {
      filename_disk
    }
    customers {
      customers_id {
        id
        username
        image {
          filename_disk
        }
      }
    }
    categories {
      categories_id {
        id
        name
        image {
          filename_disk
        }
      }
    }
    products {
      id
      products_id {
        id
        name
        price
        image {
          filename_disk
        }
        sku
        Space {
          id
          Space_id {
            id
            Name
          }
        }
      }
    }
    shorts {
      shorts_id {
        id
        name
        video {
          filename_disk
        }
      }
    }
    shops {
      shops_id {
        id
        name
      }
    }
    collections {
      collections_id {
        id
        name
      }
    }
    websites
  }
}
`
  const {
    data
  } = await useAsyncQuery(query)

  /*
  const { getItems } = useDirectusItems()

  const products = await getItems({ collection: "products"});
  const departments = await getItems({ collection: "departments", params: {filter: {name: {_eq: "Yardsale"}}}, limit: 6 });*/
</script>