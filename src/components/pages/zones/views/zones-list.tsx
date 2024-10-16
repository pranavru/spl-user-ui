import { Box } from '@mui/material'
import { CustomDataGrid } from '../../common/components/data-grid'
import { columns, editableColumns } from '../columns'
import { useContext } from 'react'
import { ZoneContext } from '../data-provider'

export const ZonesList = () => {
  const { data, inEditMode } = useContext(ZoneContext);

  return (
    <Box sx={{ height: "100%", width: '100%', mt: 2, mb: 2 }}>
      <CustomDataGrid
        columns={!inEditMode ? columns : editableColumns} 
        rows={data.current}
      />
    </Box>
  )
}
