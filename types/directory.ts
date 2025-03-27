// types/directory.ts

// Export the interfaces
export interface Country {
  id: string;
  full_name_english: string;
  two_letter_abbreviation: string;
  three_letter_abbreviation: string;
  regions: Region[];
}

export interface Region {
  id: number;
  code: string;
  name: string;
}

export interface Currency {
  base_currency_code: string;
  base_currency_symbol: string;
  rates: Record<string, number>;
}
