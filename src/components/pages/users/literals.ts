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
  role: true,
  referenceContacts: true,
  active: true,
  createdAt: false,
  updatedAt: true,
  actions: true
}

export const addressFields = [
  'street',
  'city',
  'state',
  'zipCode'
];