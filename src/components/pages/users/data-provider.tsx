import React, { createContext } from 'react'
import { People, Error as ErrorIcon } from '@mui/icons-material';
import { FullPageLoader } from '../common/components/full-page-loader';
import { initialUsersPage } from './literals';
import { UsersPage } from './types';
import { fetchData } from '../../common/api-config';
import { FullPageError } from '../common/components/full-page-error';

interface ComponentProps {
  children: React.ReactNode;
}

export const UserContext = createContext<UsersPage>(initialUsersPage);

const DataProvider = (props: ComponentProps) => {
  const [userData, setUserData] = React.useState<UsersPage>(initialUsersPage);

  const fetchUsers = async () => { 
    setUserData({ 
      ...userData, 
      isLoading: true 
    });

    try {
      const data = await fetchData('/users');
      
      setUserData({ 
        ...userData, 
        data, 
        isLoading: false 
      });
    } catch (error) {
      setUserData({ 
        ...userData, 
        hasError: true, 
        isLoading: false 
      });
    }
  }

  React.useEffect(() => {
    fetchUsers();
  }, []);

  if (userData.isLoading) {
    return (
      <FullPageLoader 
        icon={<People sx={{ fontSize: '10rem' }} color="secondary" />}
        title="Fetching Users" 
        subtitle="Please wait while the users are fetched..." 
        isLoading={userData.isLoading} 
      />
    );
  }

  if (userData.hasError && !userData.isLoading) {
    return (
      <FullPageError
        icon={<ErrorIcon sx={{ fontSize: '10rem' }} color="error" />}
        title="Failed to fetch users" 
        subtitle="An error occurred while fetching users. Please try again later." 
        isLoading={userData.hasError}
      />
    );
  }

  return (
    <UserContext.Provider value={userData}>
      {props.children}
    </UserContext.Provider>
  )
}

export default DataProvider;
