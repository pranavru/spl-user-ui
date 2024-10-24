import { Box, Button } from '@mui/material'
import { useContext } from 'react'
import { EditUserContext } from '../data-provider'
import isEqual from 'react-fast-compare';
import { nullValueHelper, referenceContactNullValueHelper } from '../helpers';
import { User, UserPayload } from '../../users/types';
import { NewReleases } from '@mui/icons-material';

export const PageActions = () => {
  const { data, saveUser, resetUser } = useContext(EditUserContext);

  const hasChanges = () => !isEqual(data.current, data.saved);

  const checkToActivateUser = () => {
    const check = data.saved !== null && [
      data.saved.role !== null,
      data.saved.mandal !== null,
      data.saved.referenceContacts?.primaryContact !== null
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
        phoneNumber: data.current.phoneNumber,
        address: data.current.address,
        isActive: data.current.isActive,
        roleId: nullValueHelper(data.current.role),
        mandalId: nullValueHelper(data.current.mandal),
        dateOfBirth: data.current.dateOfBirth
      };

      body['referenceContacts'] = data.current.referenceContacts === null ? null : {
        id: referenceContactNullValueHelper(data.current.referenceContacts, 'id') as number,
        primaryContactId: referenceContactNullValueHelper(data.current.referenceContacts, 'primaryContact') as User['id'],
        secondaryContactId: referenceContactNullValueHelper(data.current.referenceContacts, 'secondaryContact') as User['id']
      }
    };

    saveUser(body as UserPayload);
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2 }}>
      {!data.current?.isActive && (
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
