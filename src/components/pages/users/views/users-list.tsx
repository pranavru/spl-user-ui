import { Box } from '@mui/material'
import { CustomDataGrid } from '../../common/components/data-grid'
import { columns } from '../columns'
import { useContext } from 'react'
import { UserContext } from '../data-provider'
import { usersColumnVisibility } from '../literals'
import { Users } from '../types'

export const UsersList = () => {
  const { data, importedUsers } = useContext(UserContext);

  return (
    <Box sx={{ height: "100%", width: '100%', mt: 2, mb: 2 }}>
      <CustomDataGrid
        columns={columns} 
        rows={[...importedUsers, ...data] as Users}
        columnsVisibility={usersColumnVisibility}
      />
    </Box>
  )
}
