import { useContext } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { GridRenderCellParams, GridTreeNodeWithRender } from '@mui/x-data-grid';
import { MandalsContext } from '../../data-provider';

const ZoneAutocomplete = (params: GridRenderCellParams<any, any, any, GridTreeNodeWithRender>) => {
  const { zones, updateMandal } = useContext(MandalsContext);

  return (
    <Autocomplete
      multiple={false}
      value={params.row.zone !== null ? `${params.row.zone.name} - ${params.row.zone.location}` : null}
      onChange={(_, value) => {
        updateMandal(params.row.id, { 
          ...params.row, 
          zone: value 
        });
      }}
      options={zones}
      renderInput={(params) => (
        <TextField 
          {...params} 
          placeholder="Select Zone" 
          label=""
          variant="outlined" 
          size='small' 
        />
      )}
    />
  );
};

export default ZoneAutocomplete;