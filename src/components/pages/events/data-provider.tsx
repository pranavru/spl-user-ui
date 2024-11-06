import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Event, EventsContextProps } from './types';
import { initialEventsContext } from './literals';
import { FullPageLoader } from '../common/components/full-page-loader';
import { Event as EventIcon, Error as ErrorIcon } from '@mui/icons-material';
import { FullPageError } from '../common/components/full-page-error';
import { fetchData } from '../../common/api-config';

const EventsContext = createContext<EventsContextProps>(initialEventsContext);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [events, setEvents] = useState<EventsContextProps>(initialEventsContext);

  const fetchEvents = async () => {
    setEvents({
      ...events,
      isLoading: true,
    });

    try {
      const response = await fetchData('/events');

      setEvents({
        ...events,
        isLoading: false,
        hasError: false,
        data: {
          events: response,
        },
      });
    } catch (error) {
      setEvents({
        ...events,
        isLoading: false,
        hasError: true,
      });
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  if(events.isLoading) {
    return (
      <FullPageLoader
        icon={<EventIcon sx={{ fontSize: '10rem' }} color="secondary" />}
        title="Fetching Events" 
        subtitle="Please wait while the events is fetched..." 
        isLoading={events.isLoading} 
      />
    );
  }

  if(events.hasError) {
    return (
      <FullPageError
        icon={<ErrorIcon sx={{ fontSize: '10rem' }} color="error" />}
        title="Failed to fetch user details" 
        subtitle="An error occurred while fetching user details. Please try again later." 
        isLoading={events.hasError}
      />
    );
  }

  const deleteEvent = async (id: number) => {
    try {
      await fetchData(`/event/${id}`, { method: 'DELETE' });

      const filteredEvents = events.data.events.filter((event: Event) => event.id !== id);

      setEvents({
        ...events,
        data: {
          events: filteredEvents,
        },
      });
    } catch (error) {
      console.error('Failed to delete event', error);
    }
  }

  const values: EventsContextProps = {
    ...events,
    deleteEvent
  };

  return (
    <EventsContext.Provider value={values}>
      {children}
    </EventsContext.Provider>
  );
};

export const useEvents = (): EventsContextProps => {
  const context = useContext(EventsContext);

  if (!context) {
    throw new Error('useEvents must be used within an EventsProvider');
  }

  return context;
};