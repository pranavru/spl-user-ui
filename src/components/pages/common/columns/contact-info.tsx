import { Box, Typography } from '@mui/material'
import { User } from '../../users/types';
import { GridCellParams, GridTreeNodeWithRender } from '@mui/x-data-grid';

export const ContactInfo = (params: GridCellParams<User, any, any, GridTreeNodeWithRender>) => (
  <Box sx={{ display: "flex", flexDirection: "column" }}>
    <Typography 
      variant="body1"
    >
      {params.row.phoneNumber}
    </Typography>
    <Typography 
      variant="body2" 
      sx={{ textDecorationLine: "none" }} 
      color='secondary' 
      component={'a'} 
      href={`mailto:${params.row.email}`}
    >
      {params.row.email}
    </Typography>
  </Box> 
);

