import { User, UserPayload } from "../users/types";

export type EditUserPage = {
  isLoading: boolean;
  hasError: boolean;
  data: {
    current: User | null;
    saved: User | null;
  }
};

export type EditUserPageContext = EditUserPage & {
  updateUserData: (key: keyof Partial<User>, value: string | null) => void;
  updateAddressData: (key: keyof Partial<User['address']>, value: string) => void;
  updateReferenceData: (key: keyof Partial<User['referenceContacts']>, value: User | null) => void;
  saveUser: (body: UserPayload) => Promise<void>;
  resetUser: () => void;
};