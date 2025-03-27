<template>
  <div class="authPage">
    <!-- Use same layout as login but change title to "Register" -->
    <section data-bs-version="5.1" class="form2 shopm5 cid-umoq9RvANO mbr-parallax-background" id="aform2-a3"
      data-sortbtn="btn-primary" style="height: 100vh;">
      <div class="mbr-overlay" style="opacity: 0.3; background-color: rgb(255, 255, 255);"></div>

      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col content-wrap">
            <div class="mbr-section-head">
              <img src="~/assets/images/logo512alpha-128x128.png" alt="Meeovi Logo" class="authLogo" />
              <h2 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                <strong>Register</strong>
              </h2>
            </div>
            <div class="form-wrap">
              <form class="row flex-center flex" @submit.prevent="handleRegister">
                <div class="col-12 form-widget">
                  <div class="mb-3">
                    <v-text-field class="inputField" type="email" placeholder="Email" v-model="email" required />
                  </div>

                  <div class="mb-3">
                    <v-text-field class="inputField" placeholder="Username" v-model="username" required />
                  </div>

                  <div class="mb-3">
                    <v-text-field class="inputField" type="password" placeholder="Password" v-model="password"
                      required />
                  </div>
                  <div>
                    <v-btn type="submit" class="button block" :disabled="loading">
                      {{ loading ? 'Loading...' : 'Sign Up' }}
                    </v-btn>
                  </div>
                  <div v-if="error" class="error-message mt-3">
                    {{ error }}
                  </div>
                  <div class="mt-3 text-center">
                    <p>Already have an account?
                      <NuxtLink to="/auth/login">Sign In</NuxtLink>
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
  import {
    ref
  } from 'vue'
  import {
    useRouter
  } from 'vue-router'

  const router = useRouter()
  const loading = ref(false)
  const email = ref('')
  const username = ref('')
  const password = ref('')
  const error = ref(null)

  const supabase = useSupabaseClient()

  const handleRegister = async () => {
    try {
      loading.value = true
      error.value = null

      const {
        data,
        error: signUpError
      } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
      })

      if (signUpError) throw signUpError

      // Successful registration
      await router.push('/auth/login')
    } catch (e) {
      error.value = e.message
    } finally {
      loading.value = false
    }
  }

  definePageMeta({
    layout: 'auth',
  })
</script>