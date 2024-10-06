import { initializeApp, cert } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import { Magento2Client } from '~/server/utils/magento2Client'
import 'dotenv'

// Initialize Firebase Admin SDK (do this only once)
if (!process.env.FIREBASE_ADMIN_INITIALIZED) {
  initializeApp({
    credential: cert(JSON.parse(process.env.FIREBASE_ADMIN_CREDENTIALS))
  })
  process.env.FIREBASE_ADMIN_INITIALIZED = true
}

const auth = getAuth()
const magentoClient = new Magento2Client({
  url: process.env.MAGENTO_URL,
  consumerKey: process.env.MAGENTO_CONSUMER_KEY,
  consumerSecret: process.env.MAGENTO_CONSUMER_SECRET,
  accessToken: process.env.MAGENTO_ACCESS_TOKEN
})

export default defineEventHandler(async (event) => {
  try {
    const { idToken } = await readBody(event)
    
    // Verify the Firebase token
    const decodedToken = await auth.verifyIdToken(idToken)
    const uid = decodedToken.uid
    
    // Use uid to find or create user in Magento
    const magentoUser = await findOrCreateMagentoUser(uid)
    
    // Return user data
    return magentoUser
  } catch (error) {
    console.error('Error in login:', error)
    throw createError({
      statusCode: 400,
      statusMessage: 'Authentication failed'
    })
  }
})

async function findOrCreateMagentoUser(uid) {
  // Implement logic to find or create user in Magento
  // This might involve querying Magento's API or database
  // Return the user data
  // Example:
  try {
    const user = await magentoClient.get(`customers/search?searchCriteria[filter_groups][0][filters][0][field]=email&searchCriteria[filter_groups][0][filters][0][value]=${uid}`)
    if (user.items.length > 0) {
      return user.items[0]
    } else {
      // Create new user in Magento
      const newUser = await magentoClient.post('customers', {
        customer: {
          email: uid,
          firstname: 'New',
          lastname: 'User'
        }
      })
      return newUser
    }
  } catch (error) {
    console.error('Error finding/creating Magento user:', error)
    throw error
  }
}
