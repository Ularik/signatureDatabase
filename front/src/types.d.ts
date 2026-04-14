export interface RowTable {
  firstColumn: string;
  secondColumn: string;
  thirdColumn?: string;
}

export interface User {
  _id: string;
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
  user: User;
  message: string;
}

export interface GlobalError {
  error: string;
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