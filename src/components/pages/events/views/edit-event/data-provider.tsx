import React, { createContext, useContext, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { fetchData } from "../../../../common/api-config";
import { useToast } from "../../../common/components/toast-provider";
import { initialEditEventPage } from "./literals";
import { EditEventPageContext, EventPayload } from "./types";
import { FullPageLoader } from "../../../common/components/full-page-loader";
import { Event as EventIcon, Error as ErrorIcon } from "@mui/icons-material";
import { FullPageError } from "../../../common/components/full-page-error";
import { Event } from "../../types";
import { Alert } from "@mui/material";

interface ComponentProps {
  children: React.ReactNode;
}

export const EditEventContext = createContext<EditEventPageContext>(initialEditEventPage);

export const DataProvider = (props: ComponentProps) => {
  const params = useParams();
  const navigate = useNavigate();
  const toast = useToast();

  const [eventData, setEventData] = React.useState<EditEventPageContext>(initialEditEventPage);

  const fetchDetails = async () => {
    setEventData({ 
      ...eventData, 
      isLoading: true 
    });

    try {
      const data = await fetchData(`/events/${params.id}`);

      setEventData({ 
        ...eventData, 
        data: {
          current: data,
          saved: data,
        },
        isLoading: false
      });
    } catch (error) {
      setEventData({ 
        ...eventData, 
        hasError: true, 
        isLoading: false 
      });
    }
  }

  const saveEvent = async (body: EventPayload) => {
    setEventData({ 
      ...eventData, 
      isLoading: true 
    });

    try {
      await fetchData(`/event/${params.id}`, {
        method: 'PUT',
        body: JSON.stringify(body)
      });

      setEventData({ 
        ...eventData, 
        data: {
          ...eventData.data,
          saved: eventData.data.current,
        },
        isLoading: false
      });

      navigate('/events', { replace: true });
      
      if(toast) {
        toast('Event details updated successfully', 'Update Event Action', 'success');
      }
    } catch (error) {
      setEventData({ 
        ...eventData,
        isLoading: false
      });

      if(toast) {
        toast('Failed to update event details', 'Update Event Action', 'error');
      }
    }
  };

  const resetEvent = () => {
    setEventData({
      ...eventData,
      data: {
        ...eventData.data,
        current: eventData.data.saved
      }
    });

    if(toast) {
      toast('Event details reset successfully', 'Reset Event Action', 'info');
    }
  }
  
  useEffect(() => { 
    fetchDetails();
  }, []);
  
  if (eventData.isLoading) {
    return (
      <FullPageLoader
        icon={<EventIcon sx={{ fontSize: '10rem' }} color="secondary" />}
        title="Fetching Event Details" 
        subtitle="Please wait while the event is fetched..." 
        isLoading={eventData.isLoading} 
      />
    );
  }

  if (eventData.hasError && !eventData.isLoading) {
    return (
      <FullPageError
        icon={<ErrorIcon sx={{ fontSize: '10rem' }} color="error" />}
        title="Failed to fetch event details" 
        subtitle="An error occurred while fetching event details. Please try again later." 
        isLoading={eventData.hasError}
      />
    );
  }

  const updateEvent = (key: keyof Partial<Event>, value: string) => {
    setEventData({
      ...eventData,
      data: {
        ...eventData.data,
        current: {
          ...eventData.data.current!,
          [key]: value
        }
      }
    });
  };
  
  const values: EditEventPageContext = {
    ...eventData,
    saveEvent,
    resetEvent,
    updateEvent
  };

  return (
    <EditEventContext.Provider value={values}>
      {eventData.data.current === null ? (
          <Alert severity="info" sx={{ mt: 1 }}>
            {'No Event Found'}
          </Alert> 
        ) : props.children
      }
    </EditEventContext.Provider>
  )
}

export const useEditEvent = (): EditEventPageContext => {
  const context = useContext(EditEventContext);

  if (!context) {
    throw new Error('useEvents must be used within an EventsProvider');
  }

  return context;
};
