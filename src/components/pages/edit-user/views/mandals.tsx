import { Autocomplete, TextField } from '@mui/material'
import React from 'react';
import { fetchData } from '../../../common/api-config';
import { Mandal } from '../../mandals/types';

type ComponentProps = {
  value: Mandal | null;
  onChange: (event: React.SyntheticEvent, value: Mandal | null) => void;
};

type MandalContext = {
  data: Mandal[];
  isLoading: boolean;
  hasError: boolean;
}

export const MandalsAutocomplete = (props: ComponentProps) => {
  const [mandalData, setMandalsData] = React.useState<MandalContext>({
    data: [],
    isLoading: false,
    hasError: false
  });

  const fetchDetails = async () => {
    setMandalsData({ 
      ...mandalData, 
      isLoading: true 
    });

    try {
      const data = await fetchData(`/mandals`);

      setMandalsData({ 
        ...mandalData, 
        data,
        isLoading: false
      });
    } catch (error) {
      setMandalsData({ 
        ...mandalData, 
        hasError: true, 
        isLoading: false 
      });
    }
  }

  React.useEffect(() => {
    fetchDetails();
  }, []);

  return (
    <Autocomplete
      sx={{ width: '100%' }}
      id="role-dropdown"
      options={mandalData.data}
      value={props.value}
      getOptionLabel={(option) => option.name}
      noOptionsText="No mandals found"
      onChange={props.onChange} 
      renderInput={(params) => (
        <TextField
          {...params}
          size='small'
          fullWidth
          label="Mandal" 
        />
      )}
    />
  )
}
