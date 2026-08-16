import type { CodegenConfig } from '@graphql-codegen/cli'
import 'dotenv'
 
const config: CodegenConfig = {
  schema: 'https://cms.meeovicms.com/graphql',
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    './app/graphql/': {
      preset: 'client',
      plugins: ['typescript', 'typescript-operations'],
      config: {
        useTypeImports: true,
        nonOptionalTypename: true,
      }
    }
  }
}
 
export default config