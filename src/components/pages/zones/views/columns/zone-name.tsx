import React from 'react';
import ReusableTextField from '../../../common/columns/column-text-field';
import { GridRenderCellParams, GridTreeNodeWithRender } from '@mui/x-data-grid';
import { Zone } from '../../types';
import { ZoneContext } from '../../data-provider';

export const ZoneName = (params: GridRenderCellParams<Zone, any, any, GridTreeNodeWithRender>) => {
  const { updateZone } = React.useContext(ZoneContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const name = event.target.value;

    updateZone(params.id.toString(), { 
      ...params.row,
      name 
    });
  };

  const error = params.row.name.length === 0;

  return (
    <ReusableTextField
      placeholder="Enter Zone Name"
      value={params.row.name}
      onChange={handleChange}
      error={error}
      helperText={error ? "Zone name is required" : ""}  
    />
  );
};
