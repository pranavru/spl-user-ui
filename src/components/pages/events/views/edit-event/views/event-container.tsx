import { useEditEvent } from '../data-provider';
import { PageActions } from './actions';
import { Container } from '@mui/material';
import { PageHeader } from '../../../../common/components/page-header';
import { EventDetails } from './event-details';

export const EventContainer = () => {
  const { data: { current: currentData }, updateEvent } = useEditEvent();

  return (
    <Container maxWidth="xl" sx={{ mt: 2 }}>
        <PageHeader
          title="Edit Event"
          isBreadcrumbVisible={false} 
        >
          <PageActions/>
        </PageHeader>
        <EventDetails 
          currentData={currentData} 
          updateEvent={updateEvent} 
        />
      </Container>
  )
}
