import { Box, Typography } from '@mui/material'
import { GridCellParams, GridTreeNodeWithRender } from '@mui/x-data-grid';
import { User } from '../../users/types';

export const FollowUp = (params: GridCellParams<User, any, any, GridTreeNodeWithRender>) => {
  const followUp = params.row.followUp;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', height: '100%' }}>
      <Typography variant="body1">
        {followUp.primary}
      </Typography>
      <Typography variant="body2">
        {followUp.secondary}
      </Typography>
    </Box>
  );
};
