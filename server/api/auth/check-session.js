// server/api/auth/check-session.js
export default defineEventHandler((event) => {
    if (event.req.session?.customer) {
      return {
        authenticated: true,
        customer: event.req.session.customer
      }
    }
    
    return {
      authenticated: false,
      customer: null
    }
  })
  