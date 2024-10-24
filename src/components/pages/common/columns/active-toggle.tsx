import { GridCellParams, GridTreeNodeWithRender } from '@mui/x-data-grid'
import { User } from '../../users/types'
import { Box, Switch } from '@mui/material'

export const ActiveToggle = (params: GridCellParams<User, any, any, GridTreeNodeWithRender>) => {
  return (
    <Box sx={{ display: 'flex', height: "100%", alignItems: 'center', justifyContent: 'center' }}>
      <Switch 
        checked={params.row.isActive} 
        disabled
        color='secondary' 
      />
    </Box>
  )
}
