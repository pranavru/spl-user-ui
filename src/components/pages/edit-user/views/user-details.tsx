import { Alert, Box, Card, CardContent } from '@mui/material';
import { useContext } from 'react';
import { EditUserContext } from '../data-provider';
import ReusableTextField from '../../common/columns/column-text-field';
import { ReferenceContactsAutocomplete } from './reference-contacts';
import { User } from '../../users/types';

export const UserDetails = () => {
  const { data, updateUserData, updateAddressData, updateReferenceData  } = useContext(EditUserContext);

  const handleChange = (key: keyof Partial<User>, value: string | null) => {
    updateUserData(key, value);
  }

  const handleAddressChange = (key: keyof Partial<User['address']>, value: string) => {
    updateAddressData(key, value)
  }

  const handleReferenceChange = (key: keyof Partial<User['referenceContacts']>, value: User | null) => {
    updateReferenceData(key, value)
  }

  const currentData = data.current;
  const savedData = data.saved;

  return currentData !== null && (
    <Box sx={{ mt: 2 }}>
      {!currentData.active ? (
        <Alert severity="info" sx={{ mb: 2 }}>
          {'Please fill in the Mandal Details, Role and Primary Contact to activate the user.'}
        </Alert>
      ) : (
        <Alert severity="info" sx={{ mb: 2 }}>
          {'User is active. Name, Email Address, and Phone Number cannot be updated.'}
        </Alert>
      )}
      <Card sx={{ backgroundColor: 'Background' }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2, height: 'auto'  }}>
          <ReusableTextField label="Full Name" value={currentData.name} onChange={(event) => handleChange('name', event.target.value)} disabled={Boolean(currentData.active)} helperText='For ex: John Deo' />
          <ReusableTextField label="Email Address" value={currentData.email} onChange={(event) => handleChange('email', event.target.value)} disabled={Boolean(currentData.active)} helperText='For ex: johndeo@example.com' />
          <ReusableTextField label="Phone Number" value={currentData.phone} onChange={(event) => handleChange('phone', event.target.value)} disabled={Boolean(currentData.active)} helperText='For ex: 123-456-7890' />
          <ReusableTextField label="Date of Birth (DoB)" value={currentData.dateOfBirth} onChange={(event) => handleChange('dateOfBirth', event.target.value)} helperText='For ex: 12 Nov, 2023'/>
        </CardContent>
      </Card>
      <Card sx={{ backgroundColor: 'Background', mt: 2 }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <ReusableTextField label="Address Line 1" value={currentData.address.street} onChange={(event) => handleAddressChange('street', event.target.value)} />
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
            <ReusableTextField label="City" value={currentData.address.city} onChange={(event) => handleAddressChange('city', event.target.value)} />
            <ReusableTextField label="State" value={currentData.address.state} onChange={(event) => handleAddressChange('state', event.target.value)} />
            <ReusableTextField label="Zip Code" value={currentData.address.zipCode} onChange={(event) => handleAddressChange('zipCode', event.target.value)} />
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ backgroundColor: 'Background', mt: 2 }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
            <ReferenceContactsAutocomplete
              disabled={savedData !== null && Boolean(savedData.active) && savedData.referenceContacts?.primary !== null}
              label='Primary Contact'
              value={currentData.referenceContacts?.primary || null} 
              onChange={(_, value) => handleReferenceChange('primary' as keyof User['referenceContacts'], value)}
            />
            <ReferenceContactsAutocomplete
              disabled={Boolean(currentData.active) || !currentData.referenceContacts?.primary}
              label='Secondary Contact'
              value={currentData.referenceContacts?.secondary || null} 
              onChange={(_, value) => handleReferenceChange('secondary' as keyof User['referenceContacts'], value)}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
