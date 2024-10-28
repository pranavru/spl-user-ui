import { EventsContextProps } from "./types";

export const initialEventsContext: EventsContextProps = {
  isLoading: true,
  hasError: false,
  data: {
    events: [],
  }
};