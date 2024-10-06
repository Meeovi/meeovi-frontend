// composables/auth/useAuth.js
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export const useAuth = () => {
  const signIn = async (email, password) => {
    const auth = getAuth();
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const idToken = await userCredential.user.getIdToken();
      
      // Store token in cookies or localStorage for subsequent requests
      useCookie('authToken').value = idToken;
      
      return userCredential.user;
    } catch (error) {
      console.error('Sign in error:', error);
    }
  };

  return { signIn };
};
