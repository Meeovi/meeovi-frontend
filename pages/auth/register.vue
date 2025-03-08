<template>
  <div class="authPage">
    <section data-bs-version="5.1" class="form2 shopm5 cid-umoq9RvANO mbr-parallax-background" id="aform2-a3"
      data-sortbtn="btn-primary">
      <div class="mbr-overlay" style="opacity: 0.3; background-color: rgb(255, 255, 255);"></div>

      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col content-wrap">
            <div class="mbr-section-head">
              <img src="../../assets/images/logo512alpha-128x128.png" alt="Meeovi Logo" class="authLogo" />
              <h2 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                <strong>Welcome To Meeovi</strong>
              </h2>
              <!-- Display success message -->
              <p v-if="successMessage" class="success-message">{{ successMessage }}</p>

              <!-- Display error message -->
              <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
            </div>
            <div class="form-wrap">
              <div class="mbr-form" data-form-type="formoid">
                <form @submit.prevent="createCustomer" width="500">
                  <v-text-field v-model="firstname" label="First Name" hint="First Name is required"
                    required></v-text-field>
                  <v-text-field v-model="lastname" label="Last Name" hint="Last Name is required"
                    required></v-text-field>
                  <v-text-field type="email" v-model="email" label="Email" hint="Email is required"
                    required></v-text-field>
                  <v-text-field type="password" v-model="password_hash" hint="Password is required" label="Password"
                    required></v-text-field>
                  <v-checkbox label="Become a Seller" v-model="is_seller"></v-checkbox>

                  <v-list lines="one" style="background: transparent;">
                    <v-list-item>
                      <v-list-item-subtitle>By registering to Meeovi.com, you agree to our
                        <a href="/terms-conditions">Terms and Conditions</a>.</v-list-item-subtitle>
                    </v-list-item>
                    <v-list-item>
                      <v-list-item-subtitle>Already have an account?
                        <a href="/auth/login">Sign In</a></v-list-item-subtitle>
                    </v-list-item>
                  </v-list>

                  <v-btn class="mt-2 btn btn-primary display-4" type="submit" block>Sign Up</v-btn>
                </form>
              </div>
            </div>
            <p class="comment-text mbr-fonts-style align-center mb-0 display-7">
              We respect your privacy, so we never share your info.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  import {
    ref
  } from 'vue';
  import {
    useRouter
  } from 'vue-router';

  const router = useRouter();

  const firstname = ref('');
  const lastname = ref('');
  const email = ref('');
  const password_hash = ref('');
  const website_id = ref(1);
  const is_seller = ref(false); // Default to false if not selected
  const created_in = ref('Default Store View')
  const successMessage = ref('');
  const errorMessage = ref('');

  const createCustomer = async () => {
    const customerData = {
      firstname: firstname.value,
      lastname: lastname.value,
      email: email.value,
      password_hash: password_hash.value,
      website_id: website_id.value,
      is_seller: is_seller.value,
      created_in: created_in.value
    };

    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(customerData),
      });

      const data = await response.json();

      if (response.status === 200 || response.status === 201) {
        console.log('Customer created:', data);
        successMessage.value = 'Account created successfully! Redirecting to login...';

        // Redirect after a short delay to allow the user to see the success message
        setTimeout(() => {
          router.push('/auth/login');
        }, 2000); // 2-second delay
      } else {
        errorMessage.value = data.message || 'Error creating account. Please try again.';
      }
    } catch (error) {
      console.error('Error during customer creation:', error);
      errorMessage.value = 'An unexpected error occurred. Please try again.';
    }
  };

  useHead({
    title: 'Welcome to Meeovi',
  });

  definePageMeta({
    auth: false,
    layout: false,
  });
</script>

<style scoped>
  .success-message {
    color: green;
    margin-top: 10px;
  }

  .error-message {
    color: red;
    margin-top: 10px;
  }
</style>

<style scoped>
  .success-message {
    color: green;
    margin-top: 10px;
  }

  .error-message {
    color: red;
    margin-top: 10px;
  }
</style>