import { Event } from "../../types";

export type EditEventPageContext = {
  data: {
    current: Event | null,
    saved: Event | null,
  },
  isLoading: boolean,
  hasError: boolean,
  saveEvent: (body: EventPayload) => Promise<void>;
  resetEvent: () => void;
  updateEvent: (key: keyof Partial<Event>, value: string) => void;
};

export type EventPayload = Partial<Event> &{

};