import { useFirebaseAuth } from "~/composables/auth/useAuth";
import { useDirectus } from "~/composables/useDirectus";
import { useMagento } from "~/composables/useMagento";

export const useAuthSync = () => {
  const { signInUser } = useFirebaseAuth();
  const { signInToDirectus, createUserInDirectus } = useDirectus();
  const { signInToMagento, createUserInMagento } = useMagento();

  const handleUserSignIn = async (email, password, firstName, lastName) => {
    try {
      // Sign in user with Firebase
      const { token } = await signInUser(email, password);

      // Check and sign in or create a user in Directus
      try {
        await signInToDirectus(email, password);
      } catch (error) {
        if (error.response?.status === 401) {
          await createUserInDirectus(email, firstName, lastName, password);
        }
      }

      // Check and sign in or create a user in Magento
      try {
        await signInToMagento(email, password);
      } catch (error) {
        if (error.response?.status === 401) {
          await createUserInMagento(email, firstName, lastName, password);
        }
      }

      console.log("User successfully signed in to all systems.");
    } catch (error) {
      console.error("Error during user sign-in process:", error.message);
    }
  };

  return { handleUserSignIn };
};
