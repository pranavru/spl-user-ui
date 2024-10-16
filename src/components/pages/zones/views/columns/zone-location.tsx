import React from 'react';
import ReusableTextField from '../../../common/columns/column-text-field';
import { GridRenderCellParams, GridTreeNodeWithRender } from '@mui/x-data-grid';
import { Zone } from '../../types';
import { ZoneContext } from '../../data-provider';

export const ZoneLocation = (params: GridRenderCellParams<Zone, any, any, GridTreeNodeWithRender>) => {
  const { updateZone } = React.useContext(ZoneContext);
  const name = params.row.location;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const location = event.target.value;

    updateZone(params.id as number, { 
      ...params.row,
      location 
    });
  };

  const error = name.length === 0

  return (
    <ReusableTextField
      placeholder="Enter Zone Location"
      value={params.row.location}
      onChange={handleChange}
      error={error}
      helperText={error ? "Zone location is required" : ""}  
    />
  );
};
