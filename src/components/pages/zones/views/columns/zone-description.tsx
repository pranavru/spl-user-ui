import React from 'react';
import ReusableTextField from '../../../common/columns/column-text-field';
import { GridRenderCellParams, GridTreeNodeWithRender } from '@mui/x-data-grid';
import { Zone } from '../../types';
import { ZoneContext } from '../../data-provider';

export const ZoneDescription = (params: GridRenderCellParams<Zone, any, any, GridTreeNodeWithRender>) => {
  const { updateZone } = React.useContext(ZoneContext);
  const description = params.row.description;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const description = event.target.value;

    updateZone(params.id.toString(), { 
      ...params.row,
      description 
    });
  };

  return (
    <ReusableTextField 
      {...params}
      value={description}
      onChange={handleChange}
      multiple
      placeholder="Enter zone description"
    />
  );
};
