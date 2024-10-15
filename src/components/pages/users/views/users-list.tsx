import { Box } from '@mui/material'
import { CustomDataGrid } from '../../common/components/data-grid'
import { columns } from '../columns'
import { useContext } from 'react'
import { UserContext } from '../data-provider'

export const UsersList = () => {
  const { data } = useContext(UserContext);

  return (
    <Box sx={{ height: 400, width: '100%', mt: 2, mb: 2 }}>
      <CustomDataGrid
        columns={columns} 
        rows={data}
      />
    </Box>
  )
}
