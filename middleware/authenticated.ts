import { useUserStore } from '~/stores/user'

export default defineNuxtRouteMiddleware((to, from) => {
  const userStore = useUserStore()

  // If the user is not logged in and trying to access a restricted page
  if (!userStore.isLoggedIn && to.meta.requiresAuth) {
    // Redirect to login page
    return navigateTo('/auth/login')
  }

  // If the user is logged in and trying to access login or register page
  if (userStore.isLoggedIn && (to.path === '/auth/login' || to.path === '/auth/register')) {
    // Redirect to home page
    return navigateTo('/')
  }
})