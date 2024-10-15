import React, { createContext } from 'react'
import { Error as ErrorIcon } from '@mui/icons-material';
import { FullPageLoader } from '../common/components/full-page-loader';
import { MandalsPage } from './types';
import { fetchData } from '../../common/api-config';
import { FullPageError } from '../common/components/full-page-error';
import { initialState } from './literals';

interface ComponentProps {
  children: React.ReactNode;
}

export const MandalContext = createContext<MandalsPage>(initialState);

const DataProvider = (props: ComponentProps) => {
  const [zoneData, setMandalData] = React.useState<MandalsPage>(initialState);

  const fetchMandals = async () => { 
    setMandalData({ 
      ...zoneData, 
      isLoading: true 
    });

    try {
      const data = await fetchData('/mandals');
      
      setMandalData({ 
        ...zoneData, 
        data, 
        isLoading: false 
      });
    } catch (error) {
      setMandalData({ 
        ...zoneData, 
        hasError: true, 
        isLoading: false 
      });
    }
  }

  React.useEffect(() => {
    fetchMandals();
  }, []);

  if (zoneData.isLoading) {
    return (
      <FullPageLoader 
        title="Fetching Mandals" 
        subtitle="Please wait while the mandals are fetched..." 
        isLoading={zoneData.isLoading} 
      />
    );
  }

  if (zoneData.hasError && !zoneData.isLoading) {
    return (
      <FullPageError
        icon={<ErrorIcon sx={{ fontSize: '10rem' }} color="error" />}
        title="Failed to fetch mandals" 
        subtitle="An error occurred while fetching mandals. Please try again later." 
        isLoading={zoneData.hasError}
      />
    );
  }

  return (
    <MandalContext.Provider value={zoneData}>
      {props.children}
    </MandalContext.Provider>
  )
}

export default DataProvider;