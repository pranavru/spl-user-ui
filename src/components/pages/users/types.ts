import { Mandal } from "../mandals/types";

export type Role = {
  id: number;
  role: string;
  description: string;
}

export type User = {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  isActive: boolean;
  role: Role | null;
  mandal: Mandal | null;
  createdAt: string;
  updatedAt: string;
  address: { 
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  },
  dateOfBirth: string;
};

export type Users = User[];

export type UsersPage = {
  isLoading: boolean;
  hasError: boolean;
  data: Users;
};