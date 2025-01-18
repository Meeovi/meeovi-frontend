import 'dotenv'

// composables/useDirectus.js
export async function signInToDirectus(email, password) {
  const directusUrl = process.env.DIRECTUS_URL;

  try {
    const response = await $fetch(`${directusUrl}/auth/login`, {
      method: "POST",
      body: { email, password },
    });
    return response.data; // Contains access token
  } catch (error) {
    console.error("Directus Sign-In Error:", error.message);
    throw error;
  }
}

export async function createUserInDirectus(email, firstName, lastName, password) {
  const directusUrl = process.env.DIRECTUS_URL;
  const adminToken = process.env.NUXTUS_DIRECTUS_STATIC_TOKEN;

  try {
    const response = await $fetch(`${directusUrl}/users`, {
      method: "POST",
      headers: { Authorization: `Bearer ${adminToken}` },
      body: {
        email,
        first_name: firstName,
        last_name: lastName,
        password,
        role: "authenticated", // Or your desired role ID
      },
    });
    return response.data;
  } catch (error) {
    console.error("Directus User Creation Error:", error.message);
    throw error;
  }
}

const updateDirectusUser = async (user) => {
  try {
    const token = await getDirectusToken();
    const response = await $fetch(`${config.public.directus.url}`, {
      method: 'PATCH',
      headers: { Authorization: `Bearer ${token}`, 'Content-Type': 'application/json' },
      body: { id: user.uid, email: user.email, displayName: user.displayName, photoURL: user.photoURL },
    });
    showNotification('User data synced with Directus!', 'success');
  } catch (error) {
    console.error('Directus sync failed:', error);
    showNotification('Directus sync failed. Retrying...', 'warning');
    setTimeout(() => updateDirectusUser(user), 5000);
  }
};

