// utils/signatures.ts
import { createSign, createVerify } from 'crypto'

interface SignatureRequest {
  headers: {
    get(name: string): string | null;
    set(name: string, value: string): void;
    host?: string;
  };
  method: string;
  path: string;
}

interface SignatureParams {
  keyId: string;
  algorithm: string;
  headers: string[];
  signature: string;
}

function parseSignatureHeader(signatureHeader: string): SignatureParams {
  const parts = signatureHeader
    .split(',')
    .map(part => part.trim().split('='))
    .reduce((acc: any, [key, value]) => {
      acc[key] = value.replace(/^"(.*)"$/, '$1');
      return acc;
    }, {});

  return {
    keyId: parts.keyId,
    algorithm: parts.algorithm || 'rsa-sha256',
    headers: (parts.headers || '').split(' '),
    signature: parts.signature
  };
}

export async function verifySignature(request: SignatureRequest, publicKey: string): Promise<boolean> {
  const signatureHeader = request.headers.get('signature')
  if (!signatureHeader) return false
  
  try {
    const { headers, signature } = parseSignatureHeader(signatureHeader)
    
    const verifier = createVerify('sha256')
    const signatureString = headers
      .map(header => {
        if (header === '(request-target)') {
          return `(request-target): ${request.method.toLowerCase()} ${request.path}`
        }
        return `${header}: ${request.headers.get(header)}`
      })
      .join('\n')
    
    verifier.update(signatureString)
    return verifier.verify(publicKey, signature, 'base64')
  } catch (error) {
    console.error('Signature verification error:', error)
    return false
  }
}

export async function signRequest(request: SignatureRequest, privateKey: string): Promise<SignatureRequest> {
  const signer = createSign('sha256')
  const date = new Date().toUTCString()
  const signString = `(request-target): ${request.method.toLowerCase()} ${request.path}\nhost: ${request.headers.host}\ndate: ${date}`
  signer.update(signString)
  const signature = signer.sign(privateKey, 'base64')
  
  request.headers.set('signature', `keyId="${process.env.KEY_ID}",headers="(request-target) host date",signature="${signature}"`)
  request.headers.set('date', date)
  
  return request
}
