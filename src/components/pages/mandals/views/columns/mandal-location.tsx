import React from 'react';
import ReusableTextField from '../../../common/columns/column-text-field';
import { GridRenderCellParams, GridTreeNodeWithRender } from '@mui/x-data-grid';
import { Mandal } from '../../types';
import { MandalsContext } from '../../data-provider';

export const MandalLocation = (params: GridRenderCellParams<Mandal, any, any, GridTreeNodeWithRender>) => {
  const { updateMandal } = React.useContext(MandalsContext);
  const location = params.row.location;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const location = event.target.value;

    updateMandal(params.id as number, { 
      ...params.row,
      location 
    });
  };

  const error = location.length === 0

  return (
    <ReusableTextField
      placeholder="Enter Mandal Location"
      value={params.row.location}
      onChange={handleChange}
      error={error}
      helperText={error ? "Mandal location is required" : ""}  
    />
  );
};
