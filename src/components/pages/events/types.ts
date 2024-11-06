export type Event = {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  location: string;
  status: 'active' | 'inactive' | 'completed' | 'canceled' | 'upcoming';
  createdDate: string;
  updatedDate: string | null;
};

export type Events = Event[];

export type EventsContextProps = {
  isLoading: boolean;
  hasError: boolean;
  isEditMode: boolean;
  data: {
    events: Events;
  };
  deleteEvent: (id: Event['id']) => void;
};