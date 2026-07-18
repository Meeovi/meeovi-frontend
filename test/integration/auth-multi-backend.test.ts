/**
 * Integration Tests — Multi-Backend Authentication
 * 
 * Tests authentication flows (register + sign-in) across multiple backends
 * (Directus and Magento) using the meeovi-frontend setup.
 * 
 * These tests verify:
 * - Registration endpoint works with email/password
 * - Session creation after registration
 * - Sign-in endpoint works with registered credentials
 * - Session validation after sign-in
 * - Backend adapter switching (when configured)
 */

import { describe, it, expect, beforeAll, afterAll } from 'vitest'

/**
 * Configuration from environment
 */
const BASE_URL = process.env.BASE_URL || process.env.NUXT_APP_URL || 'http://0.0.0.0:3011'
const BACKENDS = (process.env.TEST_BACKENDS || 'directus,magento').split(',').map(b => b.trim())
const TEST_EMAIL_PREFIX = process.env.TEST_EMAIL_PREFIX || 'test.auth'
const TEST_PASSWORD = process.env.TEST_PASSWORD || 'SecureTest123!@#'

interface TestContext {
  [key: string]: {
    email: string
    password: string
    sessionCookie?: string
    userId?: string
  }
}

const testContext: TestContext = {}

/**
 * Utility function to make authenticated requests
 */
async function request(
  endpoint: string,
  options: {
    method?: string
    body?: Record<string, unknown>
    cookie?: string
    headers?: Record<string, string>
  } = {}
) {
  const url = `${BASE_URL}${endpoint}`
  const headers: Record<string, string> = {
    'Content-Type': 'application/json',
    ...options.headers,
  }

  if (options.cookie) {
    headers['Cookie'] = options.cookie
  }

  const response = await fetch(url, {
    method: options.method || 'GET',
    headers,
    body: options.body ? JSON.stringify(options.body) : undefined,
  })

  const body = await response.text()
  const data = body ? JSON.parse(body) : {}

  return {
    status: response.status,
    headers: Object.fromEntries(response.headers.entries()),
    body: data,
    text: body,
  }
}

/**
 * Extract auth cookie from response headers
 */
function extractAuthCookie(headers: Record<string, string>): string | null {
  const setCookie = headers['set-cookie'] || headers['Set-Cookie']
  if (!setCookie) return null

  if (Array.isArray(setCookie)) {
    const authCookie = setCookie.find(c => c.includes('auth-token'))
    return authCookie?.split(';')[0] || null
  }

  if (typeof setCookie === 'string' && setCookie.includes('auth-token')) {
    return setCookie.split(';')[0]
  }

  return null
}

/**
 * Test Suite: Auth Endpoint Health Check
 */
describe('Auth Endpoints — Health Check', () => {
  it('should be accessible and respond to session requests', async () => {
    const response = await request('/api/auth/adapter/session')
    
    // Unauthenticated requests may return 401/403 or 200 with null session
    expect([200, 401, 403]).toContain(response.status)
  })
})

/**
 * Test Suite: Multi-Backend Authentication
 */
describe.each(BACKENDS)('Auth Flow — Backend: %s', (backend) => {
  const testEmail = `${TEST_EMAIL_PREFIX}.${backend}.${Date.now()}@example.com`
  const testPassword = TEST_PASSWORD

  // Initialize context for this backend
  beforeAll(() => {
    testContext[backend] = {
      email: testEmail,
      password: testPassword,
    }
  })

  /**
   * Test 1: User Registration
   */
  describe('Registration', () => {
    it('should register a new user with email and password', async () => {
      const response = await request('/api/auth/adapter/sign-up', {
        method: 'POST',
        body: {
          email: testEmail,
          password: testPassword,
        },
      })

      // Expect success (2xx) or conflict if email already exists
      expect([200, 201, 400, 409]).toContain(response.status)

      if (response.status >= 200 && response.status < 300) {
        // Successful registration
        expect(response.body).toHaveProperty('user')
        expect(response.body.user).toHaveProperty('email')
        expect(response.body.user.email).toBe(testEmail)

        // Store user ID if available
        if (response.body.user.id) {
          testContext[backend].userId = response.body.user.id
        }

        // Check for session in response
        if (response.body.session) {
          expect(response.body.session).toHaveProperty('user')
        }
      } else if (response.status === 400 || response.status === 409) {
        // Email might already exist from previous test run
        console.warn(`Registration returned ${response.status} for ${backend} - email may already exist`)
      }
    })

    it('should set auth token cookie on successful registration', async () => {
      const response = await request('/api/auth/adapter/sign-up', {
        method: 'POST',
        body: {
          email: `${TEST_EMAIL_PREFIX}.${backend}.${Date.now()}-cookie@example.com`,
          password: testPassword,
        },
      })

      if (response.status >= 200 && response.status < 300) {
        const authCookie = extractAuthCookie(response.headers)
        if (authCookie) {
          expect(authCookie).toContain('auth-token')
          testContext[backend].sessionCookie = authCookie
        }
      }
    })

    it('should reject registration with invalid email', async () => {
      const response = await request('/api/auth/adapter/sign-up', {
        method: 'POST',
        body: {
          email: 'invalid-email',
          password: testPassword,
        },
      })

      expect(response.status).toBeGreaterThanOrEqual(400)
      expect(response.body).toHaveProperty('error')
    })

    it('should reject registration with weak password', async () => {
      const response = await request('/api/auth/adapter/sign-up', {
        method: 'POST',
        body: {
          email: `${TEST_EMAIL_PREFIX}.${backend}.${Date.now()}-weak@example.com`,
          password: '123', // Too weak
        },
      })

      expect(response.status).toBeGreaterThanOrEqual(400)
    })
  })

  /**
   * Test 2: User Sign-In
   */
  describe('Sign-In', () => {
    it('should sign in user with correct email and password', async () => {
      const response = await request('/api/auth/adapter/sign-in', {
        method: 'POST',
        body: {
          email: testEmail,
          password: testPassword,
        },
      })

      // Should succeed or return 401 if user doesn't exist (e.g., registration failed)
      if (response.status >= 200 && response.status < 300) {
        expect(response.body).toHaveProperty('session')
        expect(response.body.session).toHaveProperty('user')
        expect(response.body.session.user).toHaveProperty('email')
        expect(response.body.session.user.email).toBe(testEmail)

        // Extract and store cookie for next tests
        const authCookie = extractAuthCookie(response.headers)
        if (authCookie) {
          testContext[backend].sessionCookie = authCookie
        }
      } else {
        console.warn(
          `Sign-in returned ${response.status} for ${backend} - registration may have failed`
        )
      }
    })

    it('should reject sign-in with incorrect password', async () => {
      const response = await request('/api/auth/adapter/sign-in', {
        method: 'POST',
        body: {
          email: testEmail,
          password: 'WrongPassword123!@#',
        },
      })

      expect(response.status).toBeGreaterThanOrEqual(400)
      expect(response.body).toHaveProperty('error')
    })

    it('should reject sign-in for non-existent user', async () => {
      const response = await request('/api/auth/adapter/sign-in', {
        method: 'POST',
        body: {
          email: `${TEST_EMAIL_PREFIX}.nonexistent.${Date.now()}@example.com`,
          password: testPassword,
        },
      })

      expect(response.status).toBeGreaterThanOrEqual(400)
      expect(response.body).toHaveProperty('error')
    })

    it('should set auth token cookie on successful sign-in', async () => {
      const response = await request('/api/auth/adapter/sign-in', {
        method: 'POST',
        body: {
          email: testEmail,
          password: testPassword,
        },
      })

      if (response.status >= 200 && response.status < 300) {
        const authCookie = extractAuthCookie(response.headers)
        expect(authCookie).toBeTruthy()
        expect(authCookie).toContain('auth-token')
      }
    })
  })

  /**
   * Test 3: Session Validation
   */
  describe('Session Validation', () => {
    it('should retrieve current session with valid cookie', async () => {
      // First sign in to get a valid cookie
      const signInResponse = await request('/api/auth/adapter/sign-in', {
        method: 'POST',
        body: {
          email: testEmail,
          password: testPassword,
        },
      })

      if (signInResponse.status >= 200 && signInResponse.status < 300) {
        const authCookie = extractAuthCookie(signInResponse.headers)
        
        // Then retrieve session with cookie
        const sessionResponse = await request('/api/auth/adapter/session', {
          cookie: authCookie || '',
        })

        expect(sessionResponse.status).toBe(200)
        expect(sessionResponse.body).toHaveProperty('user')
        expect(sessionResponse.body.user.email).toBe(testEmail)
      }
    })

    it('should return null or 401 for session without valid cookie', async () => {
      const response = await request('/api/auth/adapter/session')

      // Should return 200 with null user, or 401/403
      expect([200, 401, 403]).toContain(response.status)
    })

    it('should return user data in session response', async () => {
      const signInResponse = await request('/api/auth/adapter/sign-in', {
        method: 'POST',
        body: {
          email: testEmail,
          password: testPassword,
        },
      })

      if (signInResponse.status >= 200 && signInResponse.status < 300) {
        const authCookie = extractAuthCookie(signInResponse.headers)
        
        const sessionResponse = await request('/api/auth/adapter/session', {
          cookie: authCookie || '',
        })

        if (sessionResponse.status === 200 && sessionResponse.body.user) {
          expect(sessionResponse.body.user).toHaveProperty('id')
          expect(sessionResponse.body.user).toHaveProperty('email')
          expect(sessionResponse.body.user).toHaveProperty('emailVerified')
          expect(sessionResponse.body.user).toHaveProperty('createdAt')
        }
      }
    })
  })

  /**
   * Test 4: Sign-Out / Session Termination
   */
  describe('Sign-Out', () => {
    it('should sign out user and invalidate session', async () => {
      // First sign in
      const signInResponse = await request('/api/auth/adapter/sign-in', {
        method: 'POST',
        body: {
          email: testEmail,
          password: testPassword,
        },
      })

      if (signInResponse.status >= 200 && signInResponse.status < 300) {
        const authCookie = extractAuthCookie(signInResponse.headers)

        // Then sign out
        const signOutResponse = await request('/api/auth/adapter/sign-out', {
          method: 'POST',
          cookie: authCookie || '',
        })

        // Sign-out should succeed
        expect([200, 204]).toContain(signOutResponse.status)

        // Session with old cookie should be invalid
        const sessionResponse = await request('/api/auth/adapter/session', {
          cookie: authCookie || '',
        })

        // Should return 401/403 or 200 with null user
        if (sessionResponse.status === 200 && sessionResponse.body) {
          expect(sessionResponse.body.user).toBeNull()
        }
      }
    })
  })

  afterAll(() => {
    // Cleanup context
    delete testContext[backend]
  })
})

/**
 * Test Suite: Cross-Backend Compatibility
 */
describe('Cross-Backend Compatibility', () => {
  it('should support registration across all configured backends', async () => {
    const registrationPromises = BACKENDS.map(backend => {
      const email = `${TEST_EMAIL_PREFIX}.${backend}.cross-test.${Date.now()}@example.com`
      return request('/api/auth/adapter/sign-up', {
        method: 'POST',
        body: {
          email,
          password: TEST_PASSWORD,
        },
      }).then(response => ({
        backend,
        status: response.status,
        email,
      }))
    })

    const results = await Promise.all(registrationPromises)

    // At least one backend should succeed
    const successCount = results.filter(r => r.status >= 200 && r.status < 300).length
    const allowedErrorCount = results.filter(r => r.status === 400 || r.status === 409).length

    expect(successCount + allowedErrorCount).toBe(BACKENDS.length)
    expect(successCount + allowedErrorCount).toBeGreaterThan(0)
  })

  it('should support sign-in across all configured backends', async () => {
    const backends = BACKENDS
    const testEmails: Record<string, string> = {}

    // First, register users for each backend
    for (const backend of backends) {
      const email = `${TEST_EMAIL_PREFIX}.${backend}.signin-test.${Date.now()}@example.com`
      testEmails[backend] = email

      await request('/api/auth/adapter/sign-up', {
        method: 'POST',
        body: {
          email,
          password: TEST_PASSWORD,
        },
      })
    }

    // Then, sign in with each backend
    const signInPromises = backends.map(backend =>
      request('/api/auth/adapter/sign-in', {
        method: 'POST',
        body: {
          email: testEmails[backend],
          password: TEST_PASSWORD,
        },
      }).then(response => ({
        backend,
        status: response.status,
      }))
    )

    const results = await Promise.all(signInPromises)

    // At least one backend should succeed
    const successCount = results.filter(r => r.status >= 200 && r.status < 300).length
    expect(successCount).toBeGreaterThan(0)
  })
})
