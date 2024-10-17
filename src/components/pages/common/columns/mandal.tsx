import { GridCellParams, GridTreeNodeWithRender } from '@mui/x-data-grid'
import { User } from '../../users/types'
import { Box, Chip, Typography } from '@mui/material';

export const MandalColumn = (params: GridCellParams<User, any, any, GridTreeNodeWithRender>) => {
  const mandal = params.row.mandal;
  return mandal === null ? <Box/> : (
    <Box>
      <Typography variant="subtitle2" color="text.secondary" fontSize={'medium'} sx={{ display: 'flex', alignItems: 'center' }}>
        {mandal.name}
        {mandal.zone !== null ? (
          <Chip
            key={mandal.id} 
            label={mandal.zone.name} 
            size='small' 
            sx={{
              ml: 1,
              border: '1px solid',
              borderColor: 'secondary.main',
              fontWeight: 'semibold'
            }}
          />
        ) : <Box/>}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        {mandal.location}
      </Typography>
    </Box>
  )
};
