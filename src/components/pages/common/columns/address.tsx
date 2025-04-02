import { Box, Typography } from '@mui/material'
import { GridCellParams, GridTreeNodeWithRender } from '@mui/x-data-grid';
import { Link } from 'react-router-dom'
import { User } from '../../users/types';

export const Address = (params: GridCellParams<User, any, any, GridTreeNodeWithRender>) => {
  const address = params.row.address;

  return address ? (
    <Link style={{ textDecorationLine: "none" }} to={'https://www.google.com/maps'} target="_blank">
      <Typography variant="body1" color='secondary'>{address.street}</Typography>
      <Typography variant="caption" color='secondary'>{`${address.city} - ${address.state}.`}</Typography>
      <Typography component='p' variant="caption" color='secondary'>{address.zipCode}</Typography>
    </Link> 
  ) : <Box/>;
};