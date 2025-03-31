import React, { createContext } from 'react'
import { Error as ErrorIcon } from '@mui/icons-material';
import { FullPageLoader } from '../common/components/full-page-loader';
import { useToast } from '../common/components/toast-provider';
import { Zone, ZonesContextType, ZonesPage } from './types';
import { fetchData } from '../../common/api-config';
import { FullPageError } from '../common/components/full-page-error';
import { initialState } from './literals';
import { ConfirmModal } from '../common/components/confirm-modal';
import { Modal } from '../common/types';

interface ComponentProps {
  children: React.ReactNode;
}

export const ZoneContext = createContext<ZonesContextType>(initialState);

const DataProvider = (props: ComponentProps) => {
  const [zoneData, setZoneData] = React.useState<ZonesPage>(initialState);
  const toast = useToast();

  const fetchZones = async () => { 
    setZoneData({ 
      ...zoneData, 
      isLoading: true 
    });

    try {
      const response = await fetchData('/zones');
      
      setZoneData({ 
        ...zoneData, 
        data: { 
          current: response.data, 
          saved: response.data 
        }, 
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

  const setZonesEditable = (isEditable: boolean) => {
    setZoneData({ 
      ...zoneData, 
      inEditMode: isEditable 
    });
  }

  const updateZone = (zoneId: string, updatedZone: Zone) => {
    const updatedZones = zoneData.data.current.map((zone) => zone.id === zoneId ? updatedZone : zone);

    setZoneData({ 
      ...zoneData, 
      data: { 
        ...zoneData.data,
        current: updatedZones,
      } 
    });
  };

  const saveZones = async () => {
    setZoneData({ 
      ...zoneData, 
      isLoading: true 
    });

    try {
      const newZones = zoneData.data.current.filter((zone) => zone.id === 'new').map((zone) => ({
        name: zone.name,
        description: zone.description,
        region: zone.region,        
      }));
      const updatedZones = zoneData.data.current
        .filter((zone) => zone.id !== 'new' && zone !== zoneData.data.saved.find((savedZone) => savedZone.id === zone.id))
        .map((zone) => ({
          id: zone.id,
          name: zone.name,
          description: zone.description,
          region: zone.region,
          coordinator: zone.coordinator?.id,
          isActive: zone.isActive
      }));
      
      if(newZones.length > 0) {
        await fetchData('/zones', {
          method: 'POST',
          body: JSON.stringify(newZones)
        });
      }

      if(updatedZones.length > 0) {
        await fetchData('/zones', {
          method: 'PATCH',
          body: JSON.stringify(updatedZones)
        });
      }

      setZoneData({ 
        ...zoneData, 
        data: { 
          ...zoneData.data, 
          saved: zoneData.data.current 
        },
        inEditMode: false,
        isLoading: false
      });

      if(toast) {
        toast('Zones saved successfully', 'Save Zones Action', 'success');
      }
    } catch (error) {
      if(toast) {
        toast('Unable to save zones', 'Save Zones Action', 'error');
      }
    }
  }

  const resetZones = () => {
    const modalData: Partial<Modal> = {};

    if(zoneData.data.current !== zoneData.data.saved) {
      modalData.title = 'Unsaved Changes';
      modalData.description = 'You have unsaved changes. Are you sure you want to discard them?';
      modalData.onConfirm = () => {
        setZoneData({ 
          ...zoneData, 
          data: { 
            ...zoneData.data, 
            current: zoneData.data.saved 
          },
          inEditMode: false,
          isModalVisible: false
        });
      };
      modalData.onCancel = () => {
        setZoneData({ 
          ...zoneData, 
          isModalVisible: false 
        });
      };

      setZoneData({ 
        ...zoneData, 
        isModalVisible: true,
        modalData: modalData as Modal
      });

      return;
    }

    setZoneData({ 
      ...zoneData, 
      data: { 
        ...zoneData.data, 
        current: zoneData.data.saved 
      },
      inEditMode: false
    });
  }

  const deleteZone = async (zoneId: string) => {
    const updatedZones = zoneData.data.current.filter((zone) => zone.id !== zoneId);

    try {
      await fetchData(`/zones/${zoneId}`, {
        method: 'DELETE'
      });

      setZoneData({ 
        ...zoneData, 
        data: { 
          ...zoneData.data, 
          current: updatedZones,
          saved: updatedZones
        }
      });

      if (toast) {
        toast('Zone deleted successfully', 'Delete Zone Action', 'success');
      }
    } catch (error) {
      if (toast) {
        toast('Unable to delete zone', 'Delete Zone Action', 'error');
      }
    }
  }

  const addZone = () => {
    const newZone: Zone = {
      id: 'new',
      name: '',
      region: '',
      description: '',
      isActive: false,
      coordinator: null
    };

    setZoneData({ 
      ...zoneData, 
      data: { 
        ...zoneData.data, 
        current: [newZone, ...zoneData.data.current]
      }
    });
  };

  const value: ZonesContextType = {
    ...zoneData,
    setZonesEditable,
    updateZone,
    saveZones,
    resetZones,
    deleteZone,
    addZone
  };
  
  return (
    <ZoneContext.Provider value={value}>
      {props.children}
      <ConfirmModal
        open={zoneData.isModalVisible}
        {...zoneData.modalData}
      />
    </ZoneContext.Provider>
  );
};

export default DataProvider;