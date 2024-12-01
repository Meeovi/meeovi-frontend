<template>
  <div class="authPage">
    <section data-bs-version="5.1" class="form2 shopm5 cid-umoq9RvANO mbr-parallax-background" id="aform2-a3"
      data-sortbtn="btn-primary" style="height: 100vh;">
      <div class="mbr-overlay" style="opacity: 0.3; background-color: rgb(255, 255, 255);"></div>

      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col content-wrap">
            <div class="mbr-section-head">
              <nuxt-img loading="lazy" src="~/assets/images/logo512alpha-128x128.png" alt="Meeovi Logo" class="authLogo" />
              <h2 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                <strong>Register</strong>
              </h2>
            </div>
            <div class="form-wrap">
              <form @submit.prevent="register" class="mbr-form">
                <div class="form-group">
                  <input v-model="email" type="email" class="form-control" placeholder="Email" required>
                </div>
                <div class="form-group">
                  <input v-model="password" type="password" class="form-control" placeholder="Password" required>
                </div>
                <div class="form-group">
                  <button type="submit" class="btn btn-primary">Register</button>
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
import { useFirebaseAuth } from 'vuefire'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { useUserStore } from '~/stores/user'

const email = ref('')
const password = ref('')
const auth = useFirebaseAuth()
const router = useRouter()
const userStore = useUserStore()

const register = async () => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email.value, password.value)
    userStore.setUser(userCredential.user)
    console.log('User registered:', userCredential.user)
    await router.push('/')
  } catch (error) {
    console.error('Error during registration:', error)
  }
}

definePageMeta({
  layout: 'auth',
});
</script>
