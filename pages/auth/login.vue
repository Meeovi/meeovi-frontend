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
              <div class="mbr-form" data-form-type="formoid">
                <div v-if="!userStore.isLoggedIn">
                  <v-btn @click="signInWithGoogle" class="gBtn">Sign in with Google</v-btn>
                  <div id="firebaseui-auth-container" v-if="showFirebaseUI"></div>
                </div>
                <div v-else>
                  <p class="align-center">Welcome {{ userStore.user.displayName }}</p>
                  <v-btn @click="signOut">Sign Out</v-btn>
                </div>
              </div>
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
import { ref, onMounted, watch } from 'vue'
import { useFirebaseAuth } from 'vuefire'
import * as firebaseui from 'firebaseui'
import 'firebaseui/dist/firebaseui.css'
import { signInWithPopup, GoogleAuthProvider, EmailAuthProvider, signOut as firebaseSignOut } from 'firebase/auth'
import { useRouter } from 'vue-router'
import { useUserStore } from '~/stores/user'

const userStore = useUserStore()
const auth = useFirebaseAuth()
const provider = new GoogleAuthProvider()
const router = useRouter()
const showFirebaseUI = ref(false)

const config = {
  signInOptions: [
    EmailAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    signInSuccessWithAuthResult(authResult, redirectUrl) {
      console.log("Sign-in success callback triggered");
      console.log("Auth result:", authResult);
      console.log("Redirect URL:", redirectUrl);
      
      userStore.setUser(authResult.user)
      router.push('/')
      
      return false;
    },
    uiShown() {
      console.log("FirebaseUI widget rendered");
    },
    signInFailure(error) {
      console.error('Authentication failed:', error);
    },
  },
}

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider)
    userStore.setUser(result.user)
    console.log('User signed in:', result.user)
    await router.push('/')
  } catch (error) {
    console.error('Error during sign in:', error)
    if (error.code === 'auth/popup-closed-by-user') {
      // Display a user-friendly message, e.g., using a toast notification
      alert('Sign-in was cancelled. Please try again if you want to sign in.')
    }
  }
}


const signOut = async () => {
  try {
    await firebaseSignOut(auth)
    userStore.clearUser()
    console.log('User signed out')
    await router.push('/auth/login')
  } catch (error) {
    console.error('Error signing out:', error)
  }
}

const initializeFirebaseUI = () => {
  if (document.getElementById('firebaseui-auth-container')) {
    const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth)
    ui.start("#firebaseui-auth-container", config)
  } else {
    console.error('FirebaseUI container not found')
  }
}

onMounted(() => {
  showFirebaseUI.value = true
})

watch(showFirebaseUI, (newValue) => {
  if (newValue) {
    // Use setTimeout to ensure the DOM has updated
    setTimeout(initializeFirebaseUI, 0)
  }
})

definePageMeta({
  layout: 'auth',
});
</script>
