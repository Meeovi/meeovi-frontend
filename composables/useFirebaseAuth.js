import {
    initializeApp,
    credential as _credential,
    auth
} from "firebase-admin";
import { useRuntimeConfig } from '#imports';
import 'dotenv'

const config = useRuntimeConfig();

initializeApp({
    credential: _credential.cert({
        // Your Firebase service account details
        type: "service_account",
        project_id: config.public.firebaseProjectId,
        private_key: process.env.GOOGLE_APPLICATION_CREDENTIALS,
        client_email: process.env.NUXT_FIREBASE_EMAIL,
    }),
});

async function verifyFirebaseToken(idToken) {
    try {
        const decodedToken = await auth().verifyIdToken(idToken);
        return decodedToken;
    } catch (error) {
        console.error("Error verifying Firebase ID token:", error);
        throw new Error("Invalid Firebase token");
    }
}