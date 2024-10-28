import { Box } from '@mui/material'
import { CustomDataGrid } from '../../common/components/data-grid'
import { useEvents } from '../data-provider'
import { columns } from '../columns.tsx'

export const EventList = () => {
  const { data } = useEvents();

  return (
    <Box sx={{ height: "100%", width: '100%', mt: 2, mb: 2 }}>
      <CustomDataGrid
        columns={columns} 
        rows={data.events}
      />
    </Box>
  )
}
