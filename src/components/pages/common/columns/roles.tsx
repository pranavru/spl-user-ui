import { Box, Chip } from '@mui/material';
import { GridCellParams, GridTreeNodeWithRender } from '@mui/x-data-grid';
import { User } from '../../users/types';
import { ROLES } from '../../../../auth/constants';

export const Roles = (params: GridCellParams<User, any, any, GridTreeNodeWithRender>) => {
  const role = params.row.role;

  return role === null ? <Box/> : (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '5px', alignItems: 'center', justifyContent: 'center', height: '100%', flexWrap: 'wrap', mb: 1 }}>
      <Chip 
        key={role} 
        label={ROLES[role as keyof typeof ROLES]} 
        size='small' 
        sx={{
          border: '1px solid',
          borderColor: 'primary.main',
          backgroundColor: 'primary.light',
          fontWeight: 'bold',
        }}
      />
    </Box>
  );
}
