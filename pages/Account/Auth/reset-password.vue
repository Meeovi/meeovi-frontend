<template>
  <div>
    <section data-bs-version="5.1" class="mbr-section form4 agencym4_form4 cid-u465KMdE2N" id="form4-7y"
      data-sortbtn="btn-primary">
      <div class="container">
        <div class="media-container-row" v-for="products in data?.products?.nodes" :key="products">
          <div class="col-md-5 col-lg-3 mb-5 img-block-wrap">
            <div class="image-block">
              <img :src="products?.image?.sourceUrl" :alt="products?.name" />
              <p class="mbr-description mbr-fonts-style pt-2 align-center display-4">
                By: {{ products?.manufacturer }}</p>
            </div>
          </div>
          <div class="col-md-7 col-lg-5 mb-5 text-content">
            <h3 class="content-title mb-4 mbr-fonts-style display-5">Meeovi</h3>
            <p class="mb-4 content-subtitle mbr-fonts-style display-7" v-html="products?.description"></p>
            <div class="list-block mb-4">
              <div class="card-img pb-3">
                <span class="mbr-iconfont mobi-mbri-user-2 mobi-mbri"></span>
              </div>
              <h4 class="list-item-title mbr-fonts-style display-5">{{ products?.name }}</h4>
              <p class="list-item-text mbr-fonts-style display-7">{{ products?.price }}</p>
              <p class="list-item-text mbr-fonts-style display-7" v-for="categories in products?.productCategories?.nodes" :key="categories">Category: {{ categories?.name }}</p>
            </div>
          </div>
          <div class="col-md-8 col-lg-4 block-content mb-5">
            <div class="form-block">
              <div data-form-type="formoid">
                <form @submit.prevent="resetPassword" class="mbr-form form-with-styler"
                  data-form-title="Meeovi Form">
                  <div class="row">
                    <div hidden="hidden" data-form-alert="" class="alert alert-success col-12">Thanks for
                      filling out the form!</div>
                    <div hidden="hidden" data-form-alert-danger="" class="alert alert-danger col-12">
                    </div>
                  </div>
                  <div class="dragArea row">
                    <div class="col-md-12">
                      <h4 class="mbr-fonts-style mbr-section-subtitle mbr-fonts-style mb-4 mbr-light display-5">Enter new Password Below</h4>
                    </div>
                    <div data-for="email" class="col-md-12 form-group mb-3">
                      <input type="email" v-model="email" placeholder="Email*" data-form-field="Email"
                        class="form-control input display-7" required="required" id="email-form4-7y">
                    </div>
                    <div data-for="password" class="col-md-12 form-group mb-3">
                      <input type="password" v-model="password" placeholder="Password*" data-form-field="Password"
                        class="form-control input display-7" required="required" id="password-form4-7y">
                    </div>
                    <div data-for="confirmPassword" class="col-md-12 form-group mb-3">
                      <input type="password" v-model="confirmPassword" placeholder="Enter Password Again*" data-form-field="Confirm Password" class="form-control input display-7" required="required" id="confirm-password-form4-7y">
                    </div>
                    <div class="col-md-12 input-group-btn mt-2">
                      <button type="submit" class="btn btn-primary btn-form btn-bgr display-4">RESET PASSWORD</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
  export default {

  }
</script>

<script setup>
const query = gql `
query NewQuery {
  products(first: 1) {
    nodes {
      id
      image {
        sourceUrl
        id
      }
      name
      onSale
      sku
      slug
      type
      ... on SimpleProduct {
        id
        name
        regularPrice
        type
        price
        averageRating
        productCategories {
          nodes {
            name
          }
        }
        image {
          sourceUrl
        }
      }
      description
    }
  }
}
`

  const {
    data
  } = useAsyncQuery(query);

const email = ref('');
const password = ref('');
const confirmPassword = ref('');

const RESET_PASSWORD_MUTATION = gql`
  mutation resetUserPassword($input: ResetUserPasswordInput!) {
    resetUserPassword(input: $input) {
      success
      message
    }
  }
`

const { mutate: resetPasswordMutation } = useMutation(RESET_PASSWORD_MUTATION);

const resetPassword = async () => {
  if (password.value !== confirmPassword.value) {
    alert('Passwords do not match');
    return;
  }

  try {
    const response = await resetPasswordMutation({
      variables: {
        input: {
          email: email.value,
          newPassword: password.value,
        }
      }
    });

    if (response.data.resetUserPassword.success) {
      alert('Password reset successfully');
    } else {
      alert(response.data.resetUserPassword.message);
    }
  } catch (error) {
    console.error('Error resetting password:', error);
    alert('An error occurred while resetting the password.');
  }
}


  definePageMeta({
    layout: false,
  });

  useHead({
    title: 'Reset Password'
  })
</script>