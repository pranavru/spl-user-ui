import { Autocomplete, TextField } from '@mui/material'
import { Role } from '../../users/types';
import React from 'react';
import { fetchData } from '../../../common/api-config';

type ComponentProps = {
  value: Role | null;
  onChange: (event: React.SyntheticEvent, value: Role | null) => void;
};

type RoleContext = {
  data: Role[];
  isLoading: boolean;
  hasError: boolean;
}

export const RolesAutocomplete = (props: ComponentProps) => {
  const [rolesData, setRolesData] = React.useState<RoleContext>({
    data: [],
    isLoading: false,
    hasError: false
  });

  const fetchDetails = async () => {
    setRolesData({ 
      ...rolesData, 
      isLoading: true 
    });

    try {
      const data = await fetchData(`/roles`);

      setRolesData({ 
        ...rolesData, 
        data,
        isLoading: false
      });
    } catch (error) {
      setRolesData({ 
        ...rolesData, 
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
      options={rolesData.data}
      value={props.value}
      getOptionLabel={(option) => option.role}
      noOptionsText="No roles found"
      onChange={props.onChange} 
      renderInput={(params) => (
        <TextField
          {...params}
          size='small'
          fullWidth
          label="Role" 
        />
      )}
    />
  )
}
