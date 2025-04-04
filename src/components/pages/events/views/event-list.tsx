import { Box } from '@mui/material'
import { useEvents } from '../data-provider'
import { columns } from '../columns.tsx'
import { CustomDataGrid } from '../../common/components/data-grid.tsx';
import { Event } from '../types.ts';

export const EventList = () => {
  const { data, isLoading } = useEvents();

  return (
    <Box sx={{ height: "100%", width: '100%', mt: 2, mb: 2 }}>
      <CustomDataGrid
        getRowId={(row: Event) => row._id}
        columns={columns} 
        rows={data.events}
        isLoading={isLoading}
      />
    </Box>
  )
}
