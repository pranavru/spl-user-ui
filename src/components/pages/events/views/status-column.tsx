import Chip from '@mui/material/Chip';
import { Event } from '../types';
import { Box } from '@mui/material';

interface StatusColumnProps {
  status: Event['status'];
}

export const StatusColumn = (props: StatusColumnProps) => {
  const content = {
    active: { 
      color: 'success',
      label: 'Active'
    },
    inactive: {
      color: 'info',
      label: 'Inactive'
    },
    completed: {
      color: 'primary',
      label: 'Completed'
    },
    canceled: {
      color: 'warning',
      label: 'Canceled'
    },
    upcoming: {
      color: 'secondary',
      label: 'Upcoming'
    }
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', height: '30px' }}>
      <Chip
        size='small'
        label={content[props.status].label}
        color={content[props.status].color as 'default' | 'success' | 'warning' | 'info' | 'error' | 'secondary' | 'primary'}
      />
    </Box>
  );
};