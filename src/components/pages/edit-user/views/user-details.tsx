import { Alert, Box, Card, CardContent } from '@mui/material';
import { useContext } from 'react';
import { EditUserContext } from '../data-provider';
import ReusableTextField from '../../common/columns/column-text-field';
import { RolesAutocomplete } from './roles';
import { ReferenceContactsAutocomplete } from './reference-contacts';
import { MandalsAutocomplete } from './mandals';
import { Role, User } from '../../users/types';
import { Mandal } from '../../mandals/types';

export const UserDetails = () => {
  const { data, updateUserData, updateAddressData, updateReferenceData  } = useContext(EditUserContext);

  const handleChange = (key: keyof Partial<User>, value: string | Role | Mandal | null) => {
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
      {!currentData.isActive ? (
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
          <ReusableTextField label="Full Name" value={currentData.name} onChange={(event) => handleChange('name', event.target.value)} disabled={Boolean(currentData.isActive)} helperText='For ex: John Deo' />
          <ReusableTextField label="Email Address" value={currentData.email} onChange={(event) => handleChange('email', event.target.value)} disabled={Boolean(currentData.isActive)} helperText='For ex: johndeo@example.com' />
          <ReusableTextField label="Phone Number" value={currentData.phoneNumber} onChange={(event) => handleChange('phoneNumber', event.target.value)} disabled={Boolean(currentData.isActive)} helperText='For ex: 123-456-7890' />
          <ReusableTextField label="Date of Birth (DoB)" value={currentData.dateOfBirth} onChange={(event) => handleChange('dateOfBirth', event.target.value)} helperText='For ex: 12 Nov, 2023'/>
        </CardContent>
      </Card>
      <Card sx={{ backgroundColor: 'Background', mt: 2 }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
            <ReusableTextField label="Address Line 1" value={currentData.address.addressLine1} onChange={(event) => handleAddressChange('addressLine1', event.target.value)} />
            <ReusableTextField label="Address Line 2" value={currentData.address.addressLine2} onChange={(event) => handleAddressChange('addressLine2', event.target.value)} />
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
            <ReusableTextField label="City" value={currentData.address.city} onChange={(event) => handleAddressChange('city', event.target.value)} />
            <ReusableTextField label="State" value={currentData.address.state} onChange={(event) => handleAddressChange('state', event.target.value)} />
            <ReusableTextField label="Country" value={currentData.address.country} onChange={(event) => handleAddressChange('country', event.target.value)} />
            <ReusableTextField label="Postal Code" value={currentData.address.postalCode} onChange={(event) => handleAddressChange('postalCode', event.target.value)} />
          </Box>
        </CardContent>
      </Card>
      <Card sx={{ backgroundColor: 'Background', mt: 2 }}>
        <CardContent sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2 }}>
            {/* 
              * TODO: 
              * User Logged In should be an SUPER_ADMIN 
              * if Current user being edited is an ADMIN
            */}
            <RolesAutocomplete
              value={currentData.role} 
              onChange={(_, value) => handleChange('role', value)} 
            />
            <ReferenceContactsAutocomplete
              disabled={savedData !== null && Boolean(savedData.isActive) && savedData.referenceContacts?.primaryContact !== null}
              label='Primary Contact'
              value={currentData.referenceContacts?.primaryContact || null} 
              onChange={(_, value) => handleReferenceChange('primaryContact' as keyof User['referenceContacts'], value)}
            />
            <ReferenceContactsAutocomplete
              disabled={Boolean(currentData.isActive) || !currentData.referenceContacts?.primaryContact}
              label='Secondary Contact'
              value={currentData.referenceContacts?.secondaryContact || null} 
              onChange={(_, value) => handleReferenceChange('secondaryContact' as keyof User['referenceContacts'], value)}
            />
            <MandalsAutocomplete
              value={currentData.mandal} 
              onChange={(_, value) => handleChange('mandal', value)}
            />
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
