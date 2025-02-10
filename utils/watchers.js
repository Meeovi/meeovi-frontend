// utils/watchers.js
export const setupAuthWatchers = ({ token, isAuthenticated, currentUser, refreshUserData }) => {
    // Watch for token changes
    watch(token, (newToken) => {
      console.log('Token changed:', !!newToken)
      if (newToken) refreshUserData()
    })
  
    // Watch for auth state changes
    watch(isAuthenticated, (newState) => {
      console.log('Auth state changed:', newState)
      if (newState) refreshUserData()
    })
  
    // Watch for user changes
    watch(currentUser, (newUser) => {
      console.log('Current user updated:', newUser)
      if (newUser) {
        console.log('User details:', {
          first_name: newUser.first_name,
          email: newUser.email,
          username: newUser.username
        })
      }
    }, { deep: true })
  }
  