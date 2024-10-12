import { Typography } from '@mui/material'
import { GridCellParams, GridTreeNodeWithRender } from '@mui/x-data-grid';
import { Link } from 'react-router-dom'
import { User } from '../../users/types';

export const Address = (params: GridCellParams<User, any, any, GridTreeNodeWithRender>) => {
  const address = params.row.address;
  
  return (
    <Link style={{ textDecorationLine: "none" }} to={`https://www.google.com/maps/place/${address.geo.lat},${address.geo.lng}`} target="_blank">
      <Typography variant="body1" color='secondary'>{`${address.addressLine1} ${address.addressLine2}`}</Typography>
      <Typography variant="caption" color='secondary'>{`${address.city} - ${address.state}, ${address.country}. ${address.zipcode}`}</Typography>
    </Link> 
  )
};