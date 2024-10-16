import React from 'react';
import ReusableTextField from '../../../common/columns/column-text-field';
import { GridRenderCellParams, GridTreeNodeWithRender } from '@mui/x-data-grid';
import { Mandal } from '../../types';
import { MandalsContext } from '../../data-provider';

export const MandalName = (params: GridRenderCellParams<Mandal, any, any, GridTreeNodeWithRender>) => {
  const { updateMandal } = React.useContext(MandalsContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;

    updateMandal(params.id as number, { 
      ...params.row,
      name 
    });
  };

  const error = params.row.name.length === 0;

  return (
    <ReusableTextField
      placeholder="Enter Mandal Name"
      value={params.row.name}
      onChange={handleChange}
      error={error}
      helperText={error ? "Mandal name is required" : ""}  
    />
  );
};
