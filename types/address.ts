export interface Country {
    id: string;
    full_name_locale: string;
    available_regions?: Region[];
  }
  
  export interface Region {
    id: string;
    code: string;
    name: string;
  }
  
  export interface BillingAddress {
    firstname: string;
    lastname: string;
    street: string[];
    city: string;
    region: string;
    postcode: string;
    telephone: string;
    country_code: string;
  }
  
  export interface BillingAddressInput {
    address: {
      firstname: string;
      lastname: string;
      street: string[];
      city: string;
      region: string;
      postcode: string;
      telephone: string;
      country_code: string;
      save_in_address_book: boolean;
    };
    use_for_shipping: boolean;
  }
  
  export interface ShippingAddress {
    firstname: string;
    lastname: string;
    street: string[];
    city: string;
    region: string;
    postcode: string;
    telephone: string;
    country_code: string;
  }
  
  export interface ShippingAddressInput {
    address: {
      firstname: string;
      lastname: string;
      street: string[];
      city: string;
      region: string;
      postcode: string;
      telephone: string;
      country_code: string;
      save_in_address_book: boolean;
    };
    use_for_billing: boolean;
  }