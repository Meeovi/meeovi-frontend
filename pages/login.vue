<template>
  <div>
    <LoginLink to="/api/login" external>
      Sign in
    </LoginLink>

    <RegisterLink to="/api/register" external>
      Sign up
    </RegisterLink>
  </div>
</template>

<script>
  export default {

  }
</script>

<script setup>
  /*const query = gql `
query MyQuery {
  products(filter: {price: {to: "999"}}, pageSize: 1) {
    items {
      uid
      name
      categories {
        name
      }
      price_range {
        maximum_price {
          regular_price {
            currency
            value
          }
        }
      }
      image {
        url
      }
      rating_summary
      manufacturer
      short_description {
        html
      }
    }
  }
}
`
  const {
    data
  } = await useAsyncQuery(query)*/

  definePageMeta({
    layout: false,
  });

  useHead({
    title: 'Welcome Back to Meeovi'
  })
</script>