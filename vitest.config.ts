// vitest.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    environment: 'jsdom',
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
  },
})

// tests/cart.test.ts
import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCartStore } from '~/stores/cartStore'

describe('Cart Store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('adds item to cart', async () => {
    const cart = useCartStore()
    await cart.addItem({
      sku: 'TEST-1',
      name: 'Test Product',
      price: 99.99,
      qty: 1
    })
    expect(cart.items).toHaveLength(1)
  })
})
