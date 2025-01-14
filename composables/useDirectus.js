import { Directus, createItems, readItems } from "@directus/sdk";

const directus = new Directus(process.env.DIRECTUS_URL);

export async function findOrCreateUserInDirectus(firebaseUser) {
  try {
    // Check if the user already exists
    const { data: users } = await directus.items("users").readItems({
      filter: {
        email: { _eq: firebaseUser.email },
      },
    });

    if (users?.length > 0) {
      return users[0]; // User already exists
    }

    // Create a new user if one doesn't exist
    const [newUser] = await directus.items("users").createItems([
      {
        email: firebaseUser.email,
        first_name: firebaseUser.name,
        status: "active",
        external_uid: firebaseUser.uid,
      },
    ]);

    return newUser;
  } catch (error) {
    console.error("Error in findOrCreateUserInDirectus:", error);
    throw error;
  }
}
