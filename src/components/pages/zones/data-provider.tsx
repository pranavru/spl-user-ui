import React, { createContext } from 'react'
import { Error as ErrorIcon } from '@mui/icons-material';
import { FullPageLoader } from '../common/components/full-page-loader';
import { ZonesPage } from './types';
import { fetchData } from '../../common/api-config';
import { FullPageError } from '../common/components/full-page-error';
import { initialState } from './literals';

interface ComponentProps {
  children: React.ReactNode;
}

export const ZoneContext = createContext<ZonesPage>(initialState);

const DataProvider = (props: ComponentProps) => {
  const [zoneData, setZoneData] = React.useState<ZonesPage>(initialState);

  const fetchZones = async () => { 
    setZoneData({ 
      ...zoneData, 
      isLoading: true 
    });

    try {
      const data = await fetchData('/zones');
      
      setZoneData({ 
        ...zoneData, 
        data, 
        isLoading: false 
      });
    } catch (error) {
      setZoneData({ 
        ...zoneData, 
        hasError: true, 
        isLoading: false 
      });
    }
  }

  React.useEffect(() => {
    fetchZones();
  }, []);

  if (zoneData.isLoading) {
    return (
      <FullPageLoader 
        title="Fetching Zones" 
        subtitle="Please wait while the zones are fetched..." 
        isLoading={zoneData.isLoading} 
      />
    );
  }

  if (zoneData.hasError && !zoneData.isLoading) {
    return (
      <FullPageError
        icon={<ErrorIcon sx={{ fontSize: '10rem' }} color="error" />}
        title="Failed to fetch zones" 
        subtitle="An error occurred while fetching zones. Please try again later." 
        isLoading={zoneData.hasError}
      />
    );
  }

  return (
    <ZoneContext.Provider value={zoneData}>
      {props.children}
    </ZoneContext.Provider>
  )
}

export default DataProvider;