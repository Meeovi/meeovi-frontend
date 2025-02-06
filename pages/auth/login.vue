<template>
  <div class="authPage">
    <section data-bs-version="5.1" class="form2 shopm5 cid-umoq9RvANO mbr-parallax-background" id="aform2-a3"
      data-sortbtn="btn-primary" style="height: 100vh;">
      <div class="mbr-overlay" style="opacity: 0.3; background-color: rgb(255, 255, 255);"></div>

      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col content-wrap">
            <div class="mbr-section-head">
              <img src="~/assets/images/logo512alpha-128x128.png" alt="Meeovi Logo" class="authLogo" />
              <h2 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                <strong>Login / Register</strong>
              </h2>
            </div>
            <div class="form-wrap">
              <form class="row flex-center flex" @submit.prevent="handleLogin">
                <div class="col-6 form-widget">
                  <p class="description">Sign in via magic link with your email below</p>
                  <div>
                    <input class="inputField" type="email" placeholder="Your email" v-model="email" />
                  </div>
                  <div>
                    <input type="submit" class="button block" :value="loading ? 'Loading' : 'Send magic link'"
                      :disabled="loading" />
                  </div>
                </div>
              </form>
            </div>
            <p class="comment-text mbr-fonts-style align-center mb-0 display-7">
              We respect your privacy, so we never will share your info.
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { createClient } from '@supabase/supabase-js'

const loading = ref(false)
const email = ref('')

// Initialize Supabase client
const supabase = createClient(
  process.env.SUPABASE_URL,
  process.env.SUPABASE_KEY
)

const handleLogin = async () => {
  try {
    loading.value = true
    const { error } = await supabase.auth.signInWithOtp({ email: email.value })
    if (error) throw error
    alert('Check your email for the login link!')
  } catch (error) {
    alert(error.error_description || error.message)
  } finally {
    loading.value = false
  }
}

definePageMeta({
  layout: 'auth',
})
</script>
