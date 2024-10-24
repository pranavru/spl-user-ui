import { GridCellParams, GridTreeNodeWithRender } from '@mui/x-data-grid'
import { User } from '../../users/types'
import { Box, Chip, Typography } from '@mui/material';

export const MandalColumn = (params: GridCellParams<User, any, any, GridTreeNodeWithRender>) => {
  const mandal = params.row.mandal;
  return mandal === null ? <Box/> : (
    <Box sx={{ p: 0.1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', height: '100%', flexDirection: 'column' }}>
      <Typography variant="subtitle2" color="text.secondary" fontSize={'medium'}>
        {mandal.name}
        {mandal.zone !== null ? (
          <Chip
            key={mandal.id} 
            label={mandal.zone.name} 
            size='small' 
            variant="outlined" 
            sx={{
              ml: 1,
              border: '1px solid',
              borderColor: 'secondary.light',
              fontWeight: 'semibold',
              color: 'secondary.main',
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
