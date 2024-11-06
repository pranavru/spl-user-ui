import { Event } from "../../types";

export type EventData = Partial<Event>;

export interface AddEventContextProps {
  isLoading: boolean;
  hasError: boolean;
  data: EventData;
  updateEvent: (key: keyof EventData, value: string) => void;
  saveEvent: () => void;
  cancelEvent: () => void;
}

