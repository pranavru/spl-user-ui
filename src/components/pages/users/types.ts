export type ReferenceContacts = {
  primary: User;
  secondary: User;
  additional: User[];
}

export type User = {
  id: string;
  name: string;
  email: string;
  phone: string;
  active: boolean;
  role: string;
  referenceContacts: ReferenceContacts | null;
  createdAt: string;
  updatedAt: string;
  address: { 
    street: string;
    city: string;
    state: string;
    zipCode: string;
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
  deleteUser: (id: string) => void;
};

export type UserPayload = {
  id: string;
  name: string;
  email: string;
  phone: string;
  active: boolean;
  role: string;
  referenceContacts: {
    primary: User['id'];
    secondary: User['id'];
    additional: [User['id']];
  } | null;
  address: { 
    street: string;
    city: string;
    state: string;
    zipCode: string;
  },
  dateOfBirth: string;
}