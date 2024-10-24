import { Person, Error as ErrorIcon } from "@mui/icons-material";
import { FullPageError } from "../common/components/full-page-error";
import { FullPageLoader } from "../common/components/full-page-loader";
import React, { createContext, useEffect } from "react";
import { EditUserPageContext } from "./types";
import { initialEditUserPage } from "./literals";
import { fetchData } from "../../common/api-config";
import { useNavigate, useParams } from "react-router-dom";
import { Alert } from "@mui/material";
import { Role, User, UserPayload } from "../users/types";
import { Mandal } from "../mandals/types";
import { useToast } from "../common/components/toast-provider";

interface ComponentProps {
  children: React.ReactNode;
}

export const EditUserContext = createContext<EditUserPageContext>(initialEditUserPage);

export const DataProvider = (props: ComponentProps) => {
  const params = useParams();
  const navigate = useNavigate();
  const toast = useToast();

  const [userData, setUserData] = React.useState<EditUserPageContext>(initialEditUserPage);

  const fetchDetails = async () => {
    setUserData({ 
      ...userData, 
      isLoading: true 
    });

    try {
      const data = await fetchData(`/users/${params.id}`);

      setUserData({ 
        ...userData, 
        data: {
          current: data,
          saved: data,
        },
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

  const saveUser = async (body: UserPayload) => {
    setUserData({ 
      ...userData, 
      isLoading: true 
    });

    try {
      await fetchData(`/users/${params.id}`, {
        method: 'PUT',
        body: JSON.stringify(body)
      });

      setUserData({ 
        ...userData, 
        data: {
          ...userData.data,
          saved: userData.data.current,
        },
        isLoading: false
      });

      navigate('/users', { replace: true });
      
      if(toast) {
        toast('User details updated successfully', 'Update User Action', 'success');
      }
    } catch (error) {
      setUserData({ 
        ...userData,
        isLoading: false
      });

      if(toast) {
        toast('Failed to update user details', 'Update User Action', 'error');
      }
    }
  };

  const resetUser = () => {
    setUserData({
      ...userData,
      data: {
        ...userData.data,
        current: userData.data.saved
      }
    });

    if(toast) {
      toast('User details reset successfully', 'Reset User Action', 'info');
    }
  }
  
  useEffect(() => { 
    fetchDetails();
  }, []);

  if (userData.isLoading) {
    return (
      <FullPageLoader
        icon={<Person sx={{ fontSize: '10rem' }} color="secondary" />}
        title="Fetching User Details" 
        subtitle="Please wait while the user is fetched..." 
        isLoading={userData.isLoading} 
      />
    );
  }

  if (userData.hasError && !userData.isLoading) {
    return (
      <FullPageError
        icon={<ErrorIcon sx={{ fontSize: '10rem' }} color="error" />}
        title="Failed to fetch user details" 
        subtitle="An error occurred while fetching user details. Please try again later." 
        isLoading={userData.hasError}
      />
    );
  }

  const updateUserData = (key: keyof Partial<User>, value: string | Role | Mandal | null) => {
    setUserData({
      ...userData,
      data: {
        ...userData.data,
        current: {
          ...userData.data.current!,
          [key]: value
        }
      }
    });
  };

  const updateAddressData = (key: keyof Partial<User['address']>, value: string) => {
    setUserData({
      ...userData,
      data: {
        ...userData.data,
        current: {
          ...userData.data.current!,
          address: {
            ...userData.data.current!.address,
            [key]: value
          }
        }
      }
    });
  };

  const updateReferenceData = (key: keyof Partial<User['referenceContacts']>, value: User | null) => {
    setUserData({
      ...userData,
      data: {
        ...userData.data,
        current: {
          ...userData.data.current!,
          referenceContacts: {
            ...userData.data.current!.referenceContacts!,
            [key]: value
          }
        }
      }
    });
  }

  const value: EditUserPageContext = {
    ...userData,
    updateUserData,
    updateAddressData,
    updateReferenceData,
    saveUser,
    resetUser
  };

  return (
    <EditUserContext.Provider value={value}>
      {userData.data.current === null ? (
          <Alert severity="info" sx={{ mt: 1 }}>
            {'No User Found'}
          </Alert> 
        ) : props.children
      }
    </EditUserContext.Provider>
  )
};