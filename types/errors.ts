// types/errors.ts
interface DirectusErrorResponse {
    errors: Array<{
      message: string;
      extensions: {
        code: string;
      };
    }>;
  }
  
  export function isDirectusError(error: unknown): error is DirectusErrorResponse {
    return (
      typeof error === 'object' &&
      error !== null &&
      'errors' in error &&
      Array.isArray((error as DirectusErrorResponse).errors)
    )
  }
  
  // types/errors.ts
export class CartError extends Error {
  constructor(message: string, public code: string) {
    super(message)
    this.name = 'CartError'
  }
}
