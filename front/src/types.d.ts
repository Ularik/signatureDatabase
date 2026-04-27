export interface RowTable {
  id: string;
  firstColumn: string;
  secondColumn: string;
  thirdColumn?: string;
}

export interface BlackListIpItem {
  id: number;
  ip_source: string;
  attack_date: number;
  country_source: string;
}

export interface BlackListCompromiseItem {
  id: number;
  cve: string;
  signature: string;
  description: string;
  response_measures: string;
}

export interface BlackListIpItemCopy {
  id: number;
  ip_source: string;
  attack_date: number;
  country_source: string;
  isCopy: boolean;
}

interface RowsCopy {
  id: string;
  value: string;
  isCopy: boolean;
}


export interface User {
  email: string;
  token: string;
}

export interface RegisterPost {
  email: string;
  password: string;
}

export interface LoginPost {
  email: string;
  password: string;
}

export interface AuthResponse {
  email: string;
  refresh: string;
  access: string
}

export interface GlobalError {
  error: string;
}

export interface LoginError {
  detail: string;
  code: string;
}

export interface ValidationError {
  errors: {
    [key: string]: {
      name: string;
      message: string;
    };
  };
  message: string;
  name: string;
  _message: string;
}


export interface CompromiseItem {
  discription: string;
  securityMeasures: string;
}