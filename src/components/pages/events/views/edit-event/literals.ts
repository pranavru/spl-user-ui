import { EditEventPageContext } from "./types";

export const initialEditEventPage: EditEventPageContext = {
  data: {
      current: null,
      saved: null,
  },
  isLoading: false,
  hasError: false,
  saveEvent: async () => {},
  resetEvent: () => {},
  updateEvent: () => {},
};