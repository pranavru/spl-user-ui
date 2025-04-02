import { Box } from '@mui/material'

import { columns } from '../columns'
import { useContext } from 'react'
import { UserContext } from '../data-provider'
import { usersColumnVisibility } from '../literals'
import { User } from '../types'
import { CustomDataGrid } from '../../common/components/data-grid'

export const UsersList = () => {
  const { data, importedUsers } = useContext(UserContext);

  return (
    <Box sx={{ height: "100%", width: '100%', mt: 2, mb: 2 }}>
      <CustomDataGrid
        getRowId={(row: User) => row.email}
        columns={columns} 
        rows={[...importedUsers, ...data]}
        columnsVisibility={usersColumnVisibility}
      />
    </Box>
  )
}
