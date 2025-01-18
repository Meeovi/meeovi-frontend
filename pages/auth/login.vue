<template>
  <div class="authPage">
    <section data-bs-version="5.1" class="form2 shopm5 cid-umoq9RvANO mbr-parallax-background" id="aform2-a3"
      data-sortbtn="btn-primary" style="height: 100vh;">
      <div class="mbr-overlay" style="opacity: 0.3; background-color: rgb(255, 255, 255);"></div>

      <div class="container-fluid">
        <div class="row justify-content-center">
          <div class="col content-wrap">
            <div class="mbr-section-head">
              <NuxtImg loading="lazy" src="~/assets/images/logo512alpha-128x128.png" alt="Meeovi Logo"
                class="authLogo" />
              <h2 class="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
                <strong>Login / Register</strong>
              </h2>
            </div>
            <div class="form-wrap">
              <div class="mbr-form" data-form-type="formoid">
                <!-- Show loading skeleton while FirebaseUI loads -->
                <v-skeleton-loader v-if="!showFirebaseUI && !userStore.isLoggedIn" type="card" class="auth-skeleton" />

                <div v-if="!userStore.isLoggedIn">
                  <v-btn @click="signInWithGoogle" class="gBtn" :loading="isLoading" :disabled="isLoading || isBlocked">
                    <v-icon left>mdi-google</v-icon>
                    Sign in with Google
                  </v-btn>

                  <!-- Rate limit warning -->
                  <v-alert v-if="isBlocked" type="warning" class="mt-3">
                    Too many attempts. Please try again in 5 minutes.
                  </v-alert>

                  <div class="auth-divider">
                    <span class="divider-text">or</span>
                  </div>

                  <div id="firebaseui-auth-container" v-if="showFirebaseUI"></div>

                  <v-checkbox v-model="rememberMe" label="Remember me" class="remember-me-checkbox mt-3" />

                  <!-- WebAuthn option if supported -->
                  <v-btn v-if="canUseWebAuthn" @click="handleWebAuthnLogin" class="mt-3" block>
                    <v-icon left>mdi-fingerprint</v-icon>
                    Sign in with Biometrics
                  </v-btn>
                </div>
                <div v-else>
                  <p class="align-center">Welcome {{ userStore.user.displayName }}</p>
                  <v-btn @click="signOut" :loading="isLoading">Sign Out</v-btn>
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
import { setPersistence, browserLocalPersistence } from 'firebase/auth'
import { ref, onMounted, watch, onUnmounted } from 'vue'
import { useFirebaseAuth } from 'vuefire'
import * as firebaseui from 'firebaseui';
import 'firebaseui/dist/firebaseui.css'
import {
  signInWithPopup,
  GoogleAuthProvider,
  EmailAuthProvider,
  signOut as firebaseSignOut
} from 'firebase/auth'
import { useRouter } from 'vue-router'
import { useUserStore } from '~/stores/user'
import { useAuthSync } from "~/composables/useAuthSync";

const { handleUserSignIn } = useAuthSync();

const handleLogin = async () => {
  const email = "test@example.com";
  const password = "securepassword";
  const firstName = "John";
  const lastName = "Doe";

  await handleUserSignIn(email, password, firstName, lastName);
};

// State management
const isLoading = ref(false)
const userStore = useUserStore()
const auth = useFirebaseAuth()
const provider = new GoogleAuthProvider()
const router = useRouter()
const showFirebaseUI = ref(false)
const rememberMe = ref(false)
const canUseWebAuthn = ref(false)

// Rate limiting
const attemptCount = ref(0)
const isBlocked = ref(false)
const blockTimeout = ref(null)

const updateDirectusUser = async (user) => {
  try {
    const directusToken = localStorage.getItem('directusToken'); // Assuming token is stored locally
    if (!directusToken) {
      console.error('Directus token not found');
      return;
    }

    const response = await $fetch(`${config.public.directus.url}`, {
      method: 'PATCH',
      headers: {
        Authorization: `Bearer ${directusToken}`,
        'Content-Type': 'application/json',
      },
      body: {
        id: user.uid, // Assuming Firebase UID is used as Directus user ID
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
      },
    });

    console.log('Directus user updated:', response);
    showNotification('User data synced with Directus!', 'success');
  } catch (error) {
    console.error('Failed to update user in Directus:', error);
    showNotification('Failed to sync with Directus. Please try again.', 'error');
  }
};

const handleFailedAttempt = () => {
  attemptCount.value++;
  localStorage.setItem('attemptCount', attemptCount.value);

  if (attemptCount.value >= 5) {
    isBlocked.value = true;
    localStorage.setItem('isBlocked', 'true');
    showNotification('Too many failed attempts. Please try again in 5 minutes.', 'warning');

    blockTimeout.value = setTimeout(() => {
      isBlocked.value = false;
      attemptCount.value = 0;
      localStorage.removeItem('isBlocked');
      localStorage.removeItem('attemptCount');
    }, 300000); // 5 minutes
  }
};

// On mount, restore state from localStorage
onMounted(() => {
  attemptCount.value = parseInt(localStorage.getItem('attemptCount')) || 0;
  isBlocked.value = localStorage.getItem('isBlocked') === 'true';
});


const config = {
  signInOptions: [{
    provider: EmailAuthProvider.PROVIDER_ID,
    requireDisplayName: true,
    signInMethod: EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD,
    validationRules: {
      email: {
        required: true,
        pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      },
      password: {
        required: true,
        minLength: 8
      }
    }
  }],
  callbacks: {
    signInSuccessWithAuthResult(authResult, redirectUrl) {
    const user = authResult.user;
    userStore.setUser(user);

    // Sync with Directus
    updateDirectusUser(user);

    showNotification('Successfully signed in!', 'success');
    router.push('/');

    return false;
  },
    uiShown() {
      console.log("FirebaseUI widget rendered");
    },
    signInFailure(error) {
    console.error('Authentication failed:', error);
    if (error.code === 'auth/wrong-password') {
      showNotification('Incorrect password. Please try again.', 'error');
    } else if (error.code === 'auth/user-not-found') {
      showNotification('No account found with this email.', 'error');
    } else {
      showNotification('Authentication failed. Please try again later.', 'error');
    }
    handleFailedAttempt();
  },
  },
  signInFlow: 'popup',
  privacyPolicyUrl: '/privacy-policy',
  tosUrl: '/terms-of-service'
}

const signInWithGoogle = async () => {
  if (isBlocked.value) {
    showNotification('Please wait before trying again.', 'error');
    return;
  }

  isLoading.value = true;
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    userStore.setUser(user);

    // Sync with Directus
    updateDirectusUser(user);

    console.log('User signed in:', user);
    showNotification('Successfully signed in with Google!', 'success');
    await router.push('/');
  } catch (error) {
    console.error('Error during sign in:', error);
    if (error.code === 'auth/popup-closed-by-user') {
      showNotification('Sign-in was cancelled. Please try again if you want to sign in.', 'info');
    } else {
      showNotification('Failed to sign in. Please try again.', 'error');
      handleFailedAttempt();
    }
  } finally {
    isLoading.value = false;
  }
};

const signOut = async () => {
  isLoading.value = true
  try {
    await firebaseSignOut(auth)
    userStore.clearUser()
    console.log('User signed out')
    showNotification('Successfully signed out!')
    await router.push('/auth/login')
  } catch (error) {
    console.error('Error signing out:', error)
    showNotification('Authentication failed. Please try again.', 'error')
  } finally {
    isLoading.value = false
  }
}

const handleWebAuthnLogin = async () => {
  if (!canUseWebAuthn.value) {
    showNotification('Biometric authentication is not supported on this device.');
    return;
  }
  try {
    const publicKeyCredentialRequestOptions = await $fetch('/api/webauthn/options', { method: 'POST' });
    const assertion = await navigator.credentials.get({ publicKey: publicKeyCredentialRequestOptions });
    await $fetch('/api/webauthn/verify', { method: 'POST', body: { assertion } });
    showNotification('Biometric login successful!', 'success');
  } catch (error) {
    console.error('WebAuthn login failed:', error);
    showNotification('Biometric login failed. Please try again.', 'error');
  }
};

const initializeFirebaseUI = () => {
  if (!document.getElementById('firebaseui-auth-container')) {
    console.error('FirebaseUI container not found');
    showNotification('Error initializing login form. Please refresh the page.', 'error');
    return;
  }
  const ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);
  ui.start('#firebaseui-auth-container', config);
};

onMounted(async () => {
  try {
    await setPersistence(auth, browserLocalPersistence); // Set persistence for auth
    initializeFirebaseUI();
    showFirebaseUI.value = true;
  } catch (error) {
    console.error('Error initializing FirebaseUI:', error);
    showNotification('Error initializing login form. Please refresh the page.', 'error');
  }
});


watch(showFirebaseUI, (newValue) => {
  if (newValue) {
    // Use setTimeout to ensure the DOM has updated
    setTimeout(initializeFirebaseUI, 0)
  }
})

// Cleanup on component unmount
onUnmounted(() => {
  if (blockTimeout.value) {
    clearTimeout(blockTimeout.value)
  }
})

definePageMeta({
  layout: 'auth',
});
</script>

<style scoped>
.auth-divider {
  position: relative;
  text-align: center;
  margin: 20px 0;
}

.divider-text {
  background: white;
  padding: 0 10px;
  color: #666;
  position: relative;
  z-index: 1;
}

.auth-divider::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  height: 1px;
  background: #ddd;
  z-index: 0;
}

.gBtn {
  margin-bottom: 1rem;
  width: 100%;
}

.auth-skeleton {
  margin: 1rem 0;
}

.remember-me-checkbox {
  margin-top: 1rem;
}
</style>
