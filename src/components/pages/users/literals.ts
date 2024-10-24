import { UsersPageContext } from "./types";

export const initialUsersPage: UsersPageContext = {
  isLoading: false,
  hasError: false,
  data: [],
  importedUsers: [],
  setImportedUsers: () => {},
  saveUsersInBulk: async () => {},
  deleteUser: async () => {},
};

export const usersColumnVisibility = {
  name: true,
  email: true,
  address: true,
  dateOfBirth: true,
  mandal: true,
  role: true,
  referenceContacts: true,
  isActive: false,
  createdAt: false,
  updatedAt: false,
  actions: true
}

export const addressFields = [
  'addressLine1',
  'addressLine2',
  'city',
  'state',
  'postalCode',
  'country'
];