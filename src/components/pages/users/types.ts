export type Role = {
  id: number;
  role: string;
  description: string;
}

export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  isActive: boolean;
  role: Role;
  createdAt: string;
  updatedAt: string;
  address: { 
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    geo?: {
      lat: string;
      lng: string;
    }
  },
  followUp?: {
    primary: string;
    secondary: string;
  },
  dateOfBirth: string;
};

export type Users = User[];

export type UsersPage = {
  isLoading: boolean;
  hasError: boolean;
  data: Users;
};