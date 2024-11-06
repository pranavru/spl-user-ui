import { Box } from '@mui/material'
import { useEvents } from '../data-provider'
import { columns } from '../columns.tsx'
import { CustomDataGrid } from '../../common/components/data-grid.tsx';

export const EventList = () => {
  const { data, isLoading } = useEvents();

  return (
    <Box sx={{ height: "100%", width: '100%', mt: 2, mb: 2 }}>
      <CustomDataGrid
        columns={columns} 
        rows={data.events}
        isLoading={isLoading}
      />
    </Box>
  )
}
