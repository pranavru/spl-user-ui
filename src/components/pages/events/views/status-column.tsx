import Chip from '@mui/material/Chip';
import { Event } from '../types';
import { Box } from '@mui/material';

interface StatusColumnProps {
  status: Event['status'];
}

export const StatusColumn = (props: StatusColumnProps) => {
  const content = {
    inactive: {
      color: 'info',
      label: 'Inactive'
    },
    completed: {
      color: 'primary',
      label: 'Completed'
    },
    cancelled: {
      color: 'warning',
      label: 'Cancelled'
    },
    upcoming: {
      color: 'secondary',
      label: 'Upcoming'
    },
    ongoing: {
      color: 'success',
      label: 'Ongoing'
    }
  }

  return (
    <Box sx={{ display: 'flex', alignItems: 'center', height: '30px' }}>
      <Chip
        size='small'
        label={content[props.status]?.label}
        color={content[props.status]?.color as 'default' | 'success' | 'warning' | 'info' | 'error' | 'secondary' | 'primary'}
      />
    </Box>
  );
};