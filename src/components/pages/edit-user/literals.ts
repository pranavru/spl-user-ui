import { UserPayload } from "../users/types";
import { EditUserPageContext } from "./types";

export const initialEditUserPage: EditUserPageContext = {
  isLoading: true,
  hasError: false,
  data: {
    current: null,
    saved: null
  },
  updateUserData: () => {},
  updateAddressData: () => {},
  updateReferenceData: () => {},
  saveUser: async (_body: UserPayload) => {},
  resetUser: () => {},
};