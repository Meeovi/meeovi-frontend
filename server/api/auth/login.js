import { initializeApp, cert } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { readFileSync } from 'fs'
import 'dotenv/config'

// Initialize Firebase Admin SDK (do this only once)
if (!process.env.FIREBASE_ADMIN_INITIALIZED) {
  try {
    const serviceAccountPath = process.env.GOOGLE_APPLICATION_CREDENTIALS
    if (!serviceAccountPath) {
      throw new Error('GOOGLE_APPLICATION_CREDENTIALS environment variable is not set')
    }

    const serviceAccount = JSON.parse(readFileSync(serviceAccountPath, 'utf8'))

    initializeApp({
      credential: cert(serviceAccount)
    })

    process.env.FIREBASE_ADMIN_INITIALIZED = 'true'
  } catch (error) {
    console.error('Error initializing Firebase Admin SDK:', error)
    throw error // Re-throw to prevent the app from starting with invalid credentials
  }
}

const auth = getAuth()

export default defineEventHandler(async (event) => {
  try {
    const { idToken } = await readBody(event)
    
    // Verify the Firebase token
    const decodedToken = await auth.verifyIdToken(idToken)
    
    // Get additional user info from Firebase
    const userRecord = await auth.getUser(decodedToken.uid)
    
    // Return user data
    return {
      uid: userRecord.uid,
      email: userRecord.email,
      displayName: userRecord.displayName,
      photoURL: userRecord.photoURL,
      // Add any other user properties you need
    }
  } catch (error) {
    console.error('Error in login:', error)
    return createError({
      statusCode: 400,
      statusMessage: 'Authentication failed',
      data: { message: error.message }
    })
  }
})
