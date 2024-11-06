import React, { createContext, useContext, useState, ReactNode } from 'react';
import { defaultEventContext } from './literals';
import { AddEventContextProps, EventData } from './types';
import { useToast } from '../../../common/components/toast-provider';
import { useNavigate } from 'react-router-dom';
import { fetchData } from '../../../../common/api-config';

const AddEventContext = createContext<AddEventContextProps | undefined>(undefined);

export const AddEventProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const toast = useToast();
  const navigate = useNavigate();

  const [eventData, setEventData] = useState<AddEventContextProps>(defaultEventContext);

  const updateEvent = (key: keyof EventData, value: string) => {
    setEventData((prev) => ({
      ...prev,
      data: {
        ...prev.data,
        [key]: value,
      },
    }));
  }

  const saveEvent = async () => {
    setEventData({
      ...eventData,
      isLoading: true,
    });

    try {
      await fetchData('/event', {
        method: 'POST',
        body: JSON.stringify(eventData.data),
      });

      if(toast) {
        toast('Event saved successfully', 'Save New Event', 'success');
      }

      navigate('/events', {replace: true});
    } catch (error) {
      setEventData({
        ...eventData,
        isLoading: false,
        hasError: true,
      });

      if(toast) {
        toast('An error occurred while saving the event', 'Save New Event', 'error');
      }
    }
  }

  const value = {
    ...eventData,
    updateEvent,
    saveEvent,
    cancelEvent: () => navigate('/events', {replace: true}),
  };

  return (
    <AddEventContext.Provider value={value}>
      {children}
    </AddEventContext.Provider>
  );
};

export const useAddEvent = (): AddEventContextProps => {
  const context = useContext(AddEventContext);

  if (!context) {
    throw new Error('useAddEvent must be used within an AddEventProvider');
  }

  return context;
};