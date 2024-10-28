import { Box } from '@mui/material';
import { PageHeader } from '../common/components/page-header';
import { DataProvider } from './data-provider';
import { EventList } from './views/event-list';

export const Events = () => {
  return (
    <DataProvider>
      <Box m={2}>
        <PageHeader title="Events" isBreadcrumbVisible={true}/>
        <EventList />
      </Box>
    </DataProvider>
  );
};
