// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // ESLint silenced repo-wide — ignore every file. Delete to re-enable.
  { ignores: ['**/*'] }
)
