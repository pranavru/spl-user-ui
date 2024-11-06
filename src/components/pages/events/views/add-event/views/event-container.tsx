import { useAddEvent } from '../data-provider';
import { Container } from '@mui/material';
import { PageHeader } from '../../../../common/components/page-header';
import { PageActions } from '../views/page-actions';
import { EventDetails } from '../../edit-event/views/event-details';
import { Event } from '../../../types';

export const EventContainer = () => {
  const { data, updateEvent } = useAddEvent();
  
  return (
    <Container maxWidth="xl" sx={{ mt: 2 }}>
        <PageHeader
          title="Add Event"
          isBreadcrumbVisible={false} 
        >
          <PageActions/>
        </PageHeader>
        <EventDetails currentData={data as Event} updateEvent={updateEvent} />
      </Container>
  )
}
