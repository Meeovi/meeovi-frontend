// plugins/security.ts
export default defineNuxtPlugin(() => {
    const config = useRuntimeConfig()
  
    // Add security headers
    addRouteMiddleware('security', () => {
      useHead({
        meta: [
          { 'http-equiv': 'Content-Security-Policy', content: "default-src 'self'" },
          { 'http-equiv': 'X-Frame-Options', content: 'DENY' },
          { 'http-equiv': 'X-XSS-Protection', content: '1; mode=block' }
        ]
      })
    })
  
    // Sanitize input
    const sanitizeInput = (input: string) => {
      return input.replace(/[<>]/g, '')
    }
  
    return {
      provide: {
        sanitize: sanitizeInput
      }
    }
  })
  