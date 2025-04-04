export type Attendance = {
  userId: string;
  attended: boolean;
  ride?: string;
};

export type Event = {
  _id: string;
  title: string;
  description: string;
  date: string;
  mandal: string;
  status: 'ongoing' | 'inactive' | 'completed' | 'cancelled' | 'upcoming';
  attendees: Attendance[];
  createdAt: string;
  updatedAt: string;
};

export type Events = Event[];

export type EventsContextProps = {
  isLoading: boolean;
  hasError: boolean;
  isEditMode: boolean;
  data: {
    events: Events;
  };
  createEvent: (event: Omit<Event, '_id' | 'createdAt' | 'updatedAt' | 'attendees'>) => Promise<Event>;
  updateEvent: (id: string, event: Partial<Event>) => Promise<Event>;
  deleteEvent: (id: string) => Promise<void>;
  markAttendance: (eventId: string, userId: string, attended: boolean, ride?: string) => Promise<Event>;
};