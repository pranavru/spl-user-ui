import { Box, Button } from '@mui/material'
import { useContext } from 'react'
import { EditUserContext } from '../data-provider'
import isEqual from 'react-fast-compare';
import { UserPayload } from '../../users/types';
import { NewReleases } from '@mui/icons-material';

export const PageActions = () => {
  const { data, saveUser, resetUser } = useContext(EditUserContext);

  const hasChanges = () => !isEqual(data.current, data.saved);

  const checkToActivateUser = () => {
    const check = data.saved !== null && [
      data.saved.role !== null,
      data.saved.referenceContacts?.primary !== null
    ].every(Boolean);

    return check;
  }

  const saveChanges = () => {
    let body: Partial<UserPayload> = {};

    if(data.current !== null) {
      body = {
        id: data.current.id,
        name: data.current.name,
        email: data.current.email,
        phone: data.current.phone,
        address: data.current.address,
        active: data.current.active,
        role: data.current.role,
        dateOfBirth: data.current.dateOfBirth,
        // referenceContacts: data.current.referenceContacts === null ? null : {
        //   primary: nullValueHelper(data.current.referenceContacts, 'primary'),
        //   secondary: nullValueHelper(data.current.referenceContacts, 'secondary'),
        //   additional: data.current.referenceContacts.additional
        // }
      };
    };

    saveUser(body as UserPayload);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
      {!data.current?.active && (
        <Button variant="text" color="secondary" disabled={!checkToActivateUser()} startIcon={<NewReleases />}>
          {'Activate User'}
        </Button>
      )}

      <Button variant="text" color="secondary" onClick={resetUser} disabled={!hasChanges()}>
        {'Reset'}
      </Button>

      <Button variant="contained" color="primary" onClick={saveChanges} disabled={!hasChanges()}>
        {'Save'}
      </Button>
    </Box>
  )
}
