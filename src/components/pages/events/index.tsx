import { Box } from '@mui/material';
import { PageHeader } from '../common/components/page-header';
import { DataProvider } from './data-provider';
import { EventList } from './views/event-list';

export const Events = () => {
  return (
    <DataProvider>
      <Box m={2}>
        <PageHeader title="Events" isBreadcrumbVisible={true}/>
          {/* <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
            <Button 
              variant="contained"
              color="primary" 
              size="small" 
              startIcon={<Add fontSize='inherit' />}
              onClick={() => { navigate('/add-event') }}
            >
              {"Add New Event"}
            </Button>
          </Box>
        </PageHeader> */}
        <EventList />
      </Box>
    </DataProvider>
  );
};
