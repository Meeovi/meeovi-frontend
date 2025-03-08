import {
  defineStore
} from 'pinia'
// Remove #imports and use direct import if needed
// import { useRuntimeConfig } from '#imports'
import {
  PrismaClient
} from '@prisma/client'
import bcrypt from 'bcryptjs'
import {
  rateLimit
} from 'express-rate-limit'
import {
  createError
} from 'h3'

// const config = useRuntimeConfig() // Remove if not needed
const prisma = new PrismaClient()

// Rate limiting configuration
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // Limit each IP to 5 login attempts
  message: 'Too many login attempts, please try again later'
})

// Password validation
const isStrongPassword = (password: string): boolean => {
  return (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[^A-Za-z0-9]/.test(password)
  )
}

// Email validation
const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Ensure proper cleanup of Prisma client
if (process.server) {
  process.on('beforeExit', async () => {
    await prisma.$disconnect()
  })
}

export interface UserState {
  user: {
    id ? : string;
    email: string;
    firstname ? : string;
    lastname ? : string;
    website_id ? : number;
    is_seller ? : boolean;
    customer_group_id ? : number;
    store_id ? : number;
    magento_token ? : string;
    confirmation ? : string;
    last_login ? : Date;
  } | null;
  loading: boolean;
  error: string | null;
}

export const useUserStore = defineStore('user', {
  state: (): UserState => ({
    user: null,
    loading: false,
    error: null,
  }),

  actions: {
    async init() {
      this.loading = true
      try {
        const session = await this.getCurrentUser()
        this.setUser(session)
        return session
      } catch (error) {
        console.error('Error initializing auth:', error)
        this.clearUser()
        return null
      } finally {
        this.loading = false
      }
    },

    async getCurrentUser() {
      try {
        const token = localStorage.getItem('user_token')
        if (!token) return null

        const user = await prisma.mgtn_customer_entity.findFirst({
          where: {
            rp_token: token,
            is_active: 1,
          },
          select: {
            entity_id: true,
            email: true,
            firstname: true,
            lastname: true,
            website_id: true,
            is_seller: true,
            group_id: true,
            store_id: true,
            rp_token: true,
            confirmation: true,
          }
        })

        return user ? this.formatUserData(user) : null
      } catch (error) {
        console.error('Error getting current user:', error)
        throw error
      }
    },

    async login(email: string, password: string, website_id: number) {
      this.loading = true
      this.error = null

      try {
        // Apply rate limiting
        await authLimiter(email)

        // Input validation
        if (!email || !password || !website_id) {
          throw createError({
            statusCode: 400,
            statusMessage: 'Email, password and website ID are required'
          })
        }

        if (!isValidEmail(email)) {
          throw createError({
            statusCode: 400,
            statusMessage: 'Invalid email format'
          })
        }

        // Find user
        const user = await prisma.mgtn_customer_entity.findFirst({
          where: {
            email: email,
            website_id: website_id,
            is_active: 1
          }
        })

        // Check if user exists and has password
        if (!user?.password_hash) {
          throw createError({
            statusCode: 401,
            statusMessage: 'Invalid credentials'
          })
        }

        // Now TypeScript knows password_hash is not null
        const isValidPassword = await bcrypt.compare(password, user.password_hash)
        if (!isValidPassword) {
          throw createError({
            statusCode: 401,
            statusMessage: 'Invalid credentials'
          })
        }

        // Check confirmation
        if (user.confirmation !== 'confirmed') {
          throw createError({
            statusCode: 403,
            statusMessage: 'Please confirm your email before logging in'
          })
        }

        // Generate new token
        const token = await this.generateToken()

        // Update user
        const updatedUser = await prisma.mgtn_customer_entity.update({
          where: {
            entity_id: user.entity_id
          },
          data: {
            rp_token: token,
            updated_at: new Date()
          },
          select: {
            entity_id: true,
            email: true,
            firstname: true,
            lastname: true,
            website_id: true,
            is_seller: true,
            group_id: true,
            store_id: true,
            rp_token: true,
            confirmation: true
          }
        })

        // Store token securely
        localStorage.setItem('user_token', token)

        this.setUser(this.formatUserData(updatedUser))
        return updatedUser
      } catch (error: any) {
        this.error = error.message
        throw error
      } finally {
        this.loading = false
      }
    },

    async register(userData: {
      email: string;
      password: string;
      firstname?: string;
      lastname?: string;
      website_id: number;
      is_seller?: boolean;
    }) {
      this.loading = true
      this.error = null
    
      try {
        // Input validation
        if (!userData.email || !userData.password || !userData.website_id) {
          throw createError({
            statusCode: 400,
            statusMessage: 'Email, password and website ID are required'
          })
        }
    
        if (!isValidEmail(userData.email)) {
          throw createError({
            statusCode: 400,
            statusMessage: 'Invalid email format'
          })
        }
    
        if (!isStrongPassword(userData.password)) {
          throw createError({
            statusCode: 400,
            statusMessage: 'Password must be at least 8 characters long and contain uppercase, lowercase, numbers, and special characters'
          })
        }
    
        // Check existing user
        const existingUser = await prisma.mgtn_customer_entity.findFirst({
          where: {
            email: userData.email,
            website_id: userData.website_id
          }
        })
    
        if (existingUser) {
          throw createError({
            statusCode: 409,
            statusMessage: 'User already exists'
          })
        }
    
        // Hash password
        const hashedPassword = await bcrypt.hash(userData.password, 12)
        
        // Generate confirmation token
        const confirmationToken = await this.generateToken()
    
        // Create new user
        const newUser = await prisma.mgtn_customer_entity.create({
          data: {
            email: userData.email,
            password_hash: hashedPassword,
            firstname: userData.firstname || '',
            lastname: userData.lastname || '',
            website_id: userData.website_id,
            is_seller: userData.is_seller || false,
            is_active: 1,
            confirmation: 'pending',
            rp_token: confirmationToken,
            created_at: new Date(),
            updated_at: new Date()
          },
          select: {
            entity_id: true,
            email: true,
            firstname: true,
            lastname: true,
            website_id: true,
            is_seller: true,
            group_id: true,
            store_id: true,
            rp_token: true,
            confirmation: true
          }
        })
    
        if (!newUser.email) {
          throw createError({
            statusCode: 500,
            statusMessage: 'User email is missing'
          })
        }
    
        // Send confirmation email
        await this.sendConfirmationEmail(newUser.email, confirmationToken)
    
        return newUser
      } catch (error: any) {
        this.error = error.message
        throw error
      } finally {
        this.loading = false
      }
    },
    
    async sendConfirmationEmail(email: string, token: string) {
      // Implement email sending logic
      console.log('Sending confirmation email to:', email, 'with token:', token)
    },

    setUser(user: any) {
      this.user = user
    },

    formatUserData(user: any) {
      return {
        id: user.entity_id.toString(),
        email: user.email,
        firstname: user.firstname,
        lastname: user.lastname,
        website_id: user.website_id,
        is_seller: user.is_seller,
        customer_group_id: user.group_id,
        store_id: user.store_id,
        magento_token: user.rp_token,
        confirmation: user.confirmation
      }
    },

    async generateToken(): Promise < string > {
      return crypto.randomUUID()
    },

    async logout() {
      this.loading = true
      try {
        if (this.user?.id) {
          // Update the user's token in the database
          await prisma.mgtn_customer_entity.update({
            where: { 
              entity_id: parseInt(this.user.id) 
            },
            data: { 
              rp_token: null,
              updated_at: new Date()
            }
          })
        }

        // Clear local storage
        if (typeof window !== 'undefined') {
          localStorage.removeItem('user_token')
        }

        // Clear the user state
        this.user = null
        this.error = null

        return true
      } catch (error: any) {
        console.error('Logout error:', error)
        this.error = error.message || 'Logout failed'
        throw error
      } finally {
        this.loading = false
      }
    },

    // Helper method to clear user state
    clearUser() {
      this.user = null
      this.error = null
      if (typeof window !== 'undefined') {
        localStorage.removeItem('user_token')
      }
    },
  },

  getters: {
    isLoggedIn: (state) => !!state.user,
    currentUser: (state) => state.user,
    isLoading: (state) => state.loading,
    getError: (state) => state.error
  },
})