import React, { createContext } from 'react'
import { People, Error as ErrorIcon } from '@mui/icons-material';
import { FullPageLoader } from '../common/components/full-page-loader';
import { initialUsersPage } from './literals';
import { UsersPage, UsersPageContext } from './types';
import { fetchData } from '../../common/api-config';
import { FullPageError } from '../common/components/full-page-error';
import { useToast } from '../common/components/toast-provider';

interface ComponentProps {
  children: React.ReactNode;
}

export const UserContext = createContext<UsersPageContext>(initialUsersPage);

const DataProvider = (props: ComponentProps) => {
  const toast = useToast();
  const [userData, setUserData] = React.useState<UsersPage>(initialUsersPage);
  const [importedUsers, setImportedUsers] = React.useState<UsersPage['data']>([]);

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

  const saveUsersInBulk = async () => {
    setUserData({ 
      ...userData, 
      isLoading: true 
    });

    try {
      const data = await fetchData('/bulk/users', {
        method: 'POST',
        body: JSON.stringify(importedUsers)
      });
      
      importedUsers.map((user, index) => ({
        ...user,
        id: data[index].id,
        isNew: false
      }))

      setUserData({ 
        ...userData,
        data: [...userData.data, ...importedUsers],
        isLoading: false 
      });

      setImportedUsers([]);

      if(toast) {
        toast('Imported Users saved successfully', 'Users Bulk Import Action', 'success');
      }
    } catch (error) {
      setUserData({ 
        ...userData, 
        hasError: true, 
        isLoading: false 
      });

      if(toast) {
        toast('Failed to save import users', 'Users Bulk Import Action', 'error');
      }
    }
  }

  const deleteUser = async (id: number) => {
    try {
      await fetchData(`/users/${id}`, {
        method: 'DELETE'
      });

      const data = userData.data.filter(user => user.id !== id);

      setUserData({ 
        ...userData, 
        data
      });

      if(toast) {
        toast('User deleted successfully', 'User Delete Action', 'success');
      }
    } catch (error) {
      if(toast) {
        toast('Failed to delete user', 'User Delete Action', 'error');
      }
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

  const value: UsersPageContext = {
    ...userData,
    importedUsers,
    setImportedUsers,
    saveUsersInBulk,
    deleteUser
  };

  return (
    <UserContext.Provider value={value}>
      {props.children}
    </UserContext.Provider>
  )
}

export default DataProvider;
