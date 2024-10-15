import { Box, Chip } from '@mui/material';
import { GridCellParams, GridTreeNodeWithRender } from '@mui/x-data-grid';
import { User } from '../../users/types';

export const Roles = (params: GridCellParams<User, any, any, GridTreeNodeWithRender>) => {
  const role = params.row.role;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '5px', alignItems: 'center', height: '100%', flexWrap: 'wrap', mb: 1 }}>
      <Chip 
        key={role.id} 
        label={role.role} 
        size='small' 
        sx={{
          border: '1px solid',
          borderColor: 'primary.main',
          backgroundColor: 'primary.light',
        }}
      />
    </Box>
  );
}
