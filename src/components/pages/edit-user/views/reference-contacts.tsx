import { Autocomplete, AutocompleteChangeDetails, AutocompleteChangeReason, TextField } from '@mui/material'
import { User } from '../../users/types';
import React from 'react';
import { fetchData } from '../../../common/api-config';
import { useParams } from 'react-router-dom';

type ComponentProps = {
  label: string;
  value: User | null;
  disabled: boolean;
  onChange: ((event: React.SyntheticEvent, value: User | null, reason: AutocompleteChangeReason, details?: AutocompleteChangeDetails<User> | undefined) => void)
};

type ReferenceContactsContext = {
  data: User[];
  isLoading: boolean;
  hasError: boolean;
}

export const ReferenceContactsAutocomplete = (props: ComponentProps) => {
  const params = useParams();
  const [referenceContactsData, setReferenceContactsData] = React.useState<ReferenceContactsContext>({
    data: [],
    isLoading: false,
    hasError: false
  });

  const fetchDetails = async () => {
    setReferenceContactsData({ 
      ...referenceContactsData, 
      isLoading: true 
    });

    try {
      const data = await fetchData(`/users`);

      setReferenceContactsData({ 
        ...referenceContactsData, 
        data: data.filter((user: User) => user.id !== Number(params.id)),
        isLoading: false
      });
    } catch (error) {
      setReferenceContactsData({ 
        ...referenceContactsData, 
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
      disabled={props.disabled}
      sx={{ width: '100%' }}
      id="reference-contact-dropdown"
      options={referenceContactsData.data}
      value={props.value}
      getOptionLabel={(option) => option.name}
      noOptionsText="No Users found"
      onChange={props.onChange}
      renderInput={(params) => (
        <TextField
          {...params}
          size='small'
          fullWidth
          label={props.label}
        />
      )}
    />
  )
}
