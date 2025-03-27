
import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: "graphql/schema.graphql",
  generates: {
    "graphql/": {
      preset: "client",
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-apollo-client-helpers",
        "typescript-document-nodes"
      ]
    }
  }
};

export default config;
