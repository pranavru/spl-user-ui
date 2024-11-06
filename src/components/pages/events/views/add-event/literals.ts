import { AddEventContextProps, EventData } from "./types";

export const defaultEventData: EventData = {
  id: -1,
  name: '',
  startDate: new Date().toISOString(),
  endDate: new Date().toISOString(),
  location: '',
  description: '',
  status: 'upcoming'
};

export const defaultEventContext: AddEventContextProps = {
  isLoading: false,
  hasError: false,
  data: defaultEventData,
  updateEvent: () => {},
  saveEvent: () => {}
};