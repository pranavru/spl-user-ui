import React from 'react';
import ReusableTextField from '../../../common/columns/column-text-field';
import { GridRenderCellParams, GridTreeNodeWithRender } from '@mui/x-data-grid';
import { Zone } from '../../types';
import { ZoneContext } from '../../data-provider';

export const ZoneLocation = (params: GridRenderCellParams<Zone, any, any, GridTreeNodeWithRender>) => {
  const { updateZone } = React.useContext(ZoneContext);
  const name = params.row.region;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const region = event.target.value;

    updateZone(params.id.toString(), { 
      ...params.row,
      region 
    });
  };

  const error = name.length === 0;

  return (
    <ReusableTextField 
      {...params}
      value={name}
      onChange={handleChange}
      error={error}
      helperText={error ? 'Region is required' : ''}
      placeholder="Enter region"
    />
  );
};
