import { Box } from '@mui/material'
import { CustomDataGrid } from '../../common/components/data-grid'
import { columns, editableColumns } from '../columns'
import { useContext } from 'react'
import { MandalsContext } from '../data-provider'

export const MandalsList = () => {
  const { data, inEditMode } = useContext(MandalsContext);

  return (
    <Box sx={{ height: '100%', width: '100%', mt: 2, mb: 2 }}>
      <CustomDataGrid
        columns={inEditMode ? editableColumns: columns} 
        rows={data.current}
      />
    </Box>
  )
}
