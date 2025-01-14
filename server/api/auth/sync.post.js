import { verifyIdToken } from "firebase-admin/auth";
import { findOrCreateUserInMagento } from "~~/composables/useMagento";
import { findOrCreateUserInDirectus } from "~~/composables/useDirectus";

export default defineEventHandler(async (event) => {
    const body = await readBody(event);
    const { idToken } = body;

    try {
        const decodedToken = await verifyIdToken(idToken);

        const firebaseUser = {
            uid: decodedToken.uid,
            email: decodedToken.email,
            name: decodedToken.name || decodedToken.email.split("@")[0],
        };

        const magentoUser = await findOrCreateUserInMagento(firebaseUser);
        const directusUser = await findOrCreateUserInDirectus(firebaseUser);

        return {
            success: true,
            magentoUser,
            directusUser,
        };
    } catch (error) {
        return {
            success: false,
            error: error.message,
        };
    }
});
