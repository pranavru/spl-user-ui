export type Event = {
  status: 'active' | 'inactive' | 'completed' | 'canceled' | 'upcoming';

};

export type Events = Event[];

export type EventsContextProps = {
  isLoading: boolean;
  hasError: boolean;
  data: {
    events: Events;
  };
};