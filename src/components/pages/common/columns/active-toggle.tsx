import { GridCellParams, GridTreeNodeWithRender } from '@mui/x-data-grid'
import { User } from '../../users/types'
import { Switch } from '@mui/material'

export const ActiveToggle = (params: GridCellParams<User, any, any, GridTreeNodeWithRender>) => {
  return (
    <Switch 
      checked={params.row.isActive} 
      disabled
      color='secondary' 
    />
  )
}
