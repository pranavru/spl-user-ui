import { Box } from '@mui/material'
import { CustomDataGrid } from '../../common/components/data-grid'
import { columns } from '../columns'
import { useContext } from 'react'
import { MandalContext } from '../data-provider'

export const MandalsList = () => {
  const { data } = useContext(MandalContext);

  return (
    <Box sx={{ height: '100%', width: '100%', mt: 2, mb: 2 }}>
      <CustomDataGrid
        columns={columns} 
        rows={data}
      />
    </Box>
  )
}
