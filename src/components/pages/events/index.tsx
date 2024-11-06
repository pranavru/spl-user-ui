import { Box, Button } from '@mui/material';
import { PageHeader } from '../common/components/page-header';
import { DataProvider } from './data-provider';
import { EventList } from './views/event-list';
import { Add } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

export const Events = () => {
  const navigate = useNavigate();

  return (
    <DataProvider>
      <Box m={2}>
        <PageHeader title="Events" isBreadcrumbVisible={true}>
          <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
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
        </PageHeader>
        <EventList />
      </Box>
    </DataProvider>
  );
};
