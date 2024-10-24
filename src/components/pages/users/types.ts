import { Mandal } from "../mandals/types";

export type Role = {
  id: number;
  role: string;
  description: string;
}

export type ReferenceContacts = {
  id: number;
  primaryContact: User;
  secondaryContact: User;
}

export type User = {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  isActive: boolean;
  role: Role | null;
  mandal: Mandal | null;
  referenceContacts: ReferenceContacts | null;
  createdAt: string;
  updatedAt: string;
  address: { 
    id: number;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  },
  dateOfBirth: string;
  isNew?: boolean;
};

export type Users = User[];

export type UsersPage = {
  isLoading: boolean;
  hasError: boolean;
  data: Users;
};

export type UsersPageContext = UsersPage & {
  importedUsers: Users;
  setImportedUsers: React.Dispatch<React.SetStateAction<Users>>;
  saveUsersInBulk: () => Promise<void>;
  deleteUser: (id: number) => void;
};

export type UserPayload = {
  id: number;
  name: string;
  email: string;
  phoneNumber: string;
  isActive: boolean;
  roleId: Role['id'] | null;
  mandalId: Mandal['id'] | null;
  referenceContacts: {
    id: number;
    primaryContactId: User['id'];
    secondaryContactId: User['id'];
  } | null;
  address: { 
    id: number;
    addressLine1: string;
    addressLine2: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
  },
  dateOfBirth: string;
}