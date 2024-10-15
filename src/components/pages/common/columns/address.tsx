import { Typography } from '@mui/material'
import { GridCellParams, GridTreeNodeWithRender } from '@mui/x-data-grid';
import { Link } from 'react-router-dom'
import { User } from '../../users/types';

export const Address = (params: GridCellParams<User, any, any, GridTreeNodeWithRender>) => {
  const address = params.row.address;
  
  const getLink = () => Boolean(address.geo) ?
      `https://www.google.com/maps/place/${address.geo?.lat},${address.geo?.lng}` :
      "https://www.google.com/maps";

  return (
    <Link style={{ textDecorationLine: "none" }} to={getLink()} target="_blank">
      <Typography variant="body1" color='secondary'>{`${address.addressLine1} ${address.addressLine2}`}</Typography>
      <Typography variant="caption" color='secondary'>{`${address.city} - ${address.state}, ${address.country}. ${address.postalCode}`}</Typography>
    </Link> 
  )
};