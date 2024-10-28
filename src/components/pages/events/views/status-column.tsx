import Chip from '@mui/material/Chip';
import { GridRenderCellParams, GridTreeNodeWithRender } from '@mui/x-data-grid';
import { Event } from '../types';
import { Box } from '@mui/material';

interface StatusColumnProps {
  params: GridRenderCellParams<Event, any, any, GridTreeNodeWithRender>;
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
    <Box sx={{ display: 'flex', alignItems: 'center', height: '100%' }}>
      <Chip
        label={content[props.params.row.status].label}
        color={content[props.params.row.status].color as 'default' | 'success' | 'warning' | 'info' | 'error' | 'secondary' | 'primary'}
      />
    </Box>
  );
};