import { Box, Chip } from '@mui/material';
import { GridCellParams, GridTreeNodeWithRender } from '@mui/x-data-grid';
import { User } from '../../users/types';

export const Roles = (params: GridCellParams<User, any, any, GridTreeNodeWithRender>) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: '5px', alignItems: 'center', height: '100%', flexWrap: 'wrap', mb: 1 }}>
      {params.row.role.map((role) => (
        <Chip 
          key={role.id} 
          label={role.name} 
          size='small' 
          sx={{
            border: '1px solid',
            borderColor: 'primary.main',
            backgroundColor: 'primary.light',
          }}
        />
      ))}
    </Box>
  );
}
