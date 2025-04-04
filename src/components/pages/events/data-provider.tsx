import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Event, EventsContextProps } from './types';
import { initialEventsContext } from './literals';
import { FullPageLoader } from '../common/components/full-page-loader';
import { Event as EventIcon, Error as ErrorIcon } from '@mui/icons-material';
import { FullPageError } from '../common/components/full-page-error';
import { fetchData } from '../../common/api-config';
import { useToast } from '../common/components/toast-provider';

const EventsContext = createContext<EventsContextProps>(initialEventsContext);

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [events, setEvents] = useState<EventsContextProps>(initialEventsContext);

  const showToast = useToast();
  if (!showToast) {
    throw new Error('Toast provider not found');
  }

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
          events: response.data,
        },
      });
    } catch (error) {
      setEvents({
        ...events,
        isLoading: false,
        hasError: true,
      });
      showToast('Failed to fetch events', 'Events', 'error');
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

  const createEvent = async (eventData: Omit<Event, '_id' | 'createdAt' | 'updatedAt' | 'attendees'>) => {
    try {
      const response = await fetchData('/api/events', {
        method: 'POST',
        body: JSON.stringify(eventData),
      });

      const newEvent = response.data;
      setEvents({
        ...events,
        data: {
          events: [...events.data.events, newEvent],
        },
      });

      showToast('Event created successfully', 'Event Creation', 'success');
      return newEvent;
    } catch (error) {
      showToast('Failed to create event', 'Event Creation', 'error');
      throw error;
    }
  };

  const updateEvent = async (id: string, eventData: Partial<Event>) => {
    try {
      const response = await fetchData(`/api/events/${id}`, {
        method: 'PATCH',
        body: JSON.stringify(eventData),
      });

      const updatedEvent = response.data;
      setEvents({
        ...events,
        data: {
          events: events.data.events.map((event) =>
            event._id === id ? updatedEvent : event
          ),
        },
      });

      showToast('Event updated successfully', 'Event Update', 'success');
      return updatedEvent;
    } catch (error) {
      showToast('Failed to update event', 'Event Update', 'error');
      throw error;
    }
  };

  const deleteEvent = async (id: string) => {
    try {
      await fetchData(`/api/events/${id}`, { method: 'DELETE' });

      setEvents({
        ...events,
        data: {
          events: events.data.events.filter((event) => event._id !== id),
        },
      });

      showToast('Event deleted successfully', 'Event Deletion', 'success');
    } catch (error) {
      showToast('Failed to delete event', 'Event Deletion', 'error');
      throw error;
    }
  };

  const markAttendance = async (eventId: string, _userId: string, attended: boolean, ride?: string) => {
    try {
      const response = await fetchData(`/api/events/${eventId}/confirmAttendance`, {
        method: 'POST',
        body: JSON.stringify({ attendance: attended, ride }),
      });

      const updatedEvent = response.data;
      setEvents({
        ...events,
        data: {
          events: events.data.events.map((event) =>
            event._id === eventId ? updatedEvent : event
          ),
        },
      });

      showToast('Attendance marked successfully', 'Attendance', 'success');
      return updatedEvent;
    } catch (error) {
      showToast('Failed to mark attendance', 'Attendance', 'error');
      throw error;
    }
  };

  const values: EventsContextProps = {
    ...events,
    createEvent,
    updateEvent,
    deleteEvent,
    markAttendance
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