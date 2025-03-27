// types/auth.ts
export interface MagentoUser {
    entity_id: number;
    email: string;
    firstname: string | null;
    lastname: string | null;
    website_id: number;
    is_seller: boolean;
    group_id: number;
    store_id: number | null;
    rp_token: string | null;
    confirmation: string | null;
    password_hash: string | null;
    is_active: number;
    created_at: Date;
    updated_at: Date;
  }
  
  export interface LoginRequest {
    email: string;
    password: string;
    website_id: number;
    rememberMe?: boolean;
  }
  
  export interface LoginResponse {
    user: MagentoUser;
    token: string;
  }
  
  export interface TokenPayload {
    userId: number;
    email: string;
    rememberMe?: boolean;
    exp?: number;
    iat?: number;
  }
  