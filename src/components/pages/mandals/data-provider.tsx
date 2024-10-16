import React, { createContext } from 'react'
import { Error as ErrorIcon } from '@mui/icons-material';
import { FullPageLoader } from '../common/components/full-page-loader';
import { MandalsContextType, MandalsPage } from './types';
import { fetchData } from '../../common/api-config';
import { FullPageError } from '../common/components/full-page-error';
import { initialState } from './literals';
import { ConfirmModal } from '../common/components/confirm-modal';
import { useToast } from '../common/components/toast-provider';
import { Modal } from '../common/types';
import { Zone } from '../zones/types';

interface ComponentProps {
  children: React.ReactNode;
}

export const MandalsContext = createContext<MandalsContextType>(initialState);

const DataProvider = (props: ComponentProps) => {
  const [mandalData, setMandalData] = React.useState<MandalsPage>(initialState);
  const toast = useToast();

  const fetchMandals = async () => { 
    setMandalData({ 
      ...mandalData, 
      isLoading: true 
    });

    try {
      const data = await fetchData('/mandals');
      
      setMandalData({ 
        ...mandalData, 
        data: {
          current: data,
          saved: data
        }, 
        isLoading: false 
      });
    } catch (error) {
      setMandalData({ 
        ...mandalData, 
        hasError: true, 
        isLoading: false 
      });
    }
  }

  const fetchZones = async () => { 
    setMandalData({ 
      ...mandalData, 
      isLoading: true 
    });

    try {
      const data = await fetchData('/zones');
      
      setMandalData({ 
        ...mandalData, 
        zones: data.map((zone: Zone) => ({ 
          ...zone, 
          label: `${zone.name} - ${zone.location}`, 
          value: `${zone.name} - ${zone.location}`
        })),
        isLoading: false 
      });
    } catch (error) {
      setMandalData({ 
        ...mandalData,
        hasError: true, 
        isLoading: false 
      });
    }
  }

  React.useEffect(() => {
    fetchMandals();
  }, []);

  React.useEffect(() => {
    if(mandalData.inEditMode) {
      fetchZones();
    }
  }, [mandalData.inEditMode]);

  if (mandalData.isLoading) {
    return (
      <FullPageLoader 
        title="Fetching Mandals" 
        subtitle="Please wait while the mandals are fetched..." 
        isLoading={mandalData.isLoading} 
      />
    );
  }

  if (mandalData.hasError && !mandalData.isLoading) {
    return (
      <FullPageError
        icon={<ErrorIcon sx={{ fontSize: '10rem' }} color="error" />}
        title="Failed to fetch mandals" 
        subtitle="An error occurred while fetching mandals. Please try again later." 
        isLoading={mandalData.hasError}
      />
    );
  }

  const value: MandalsContextType = {
    ...mandalData,
    setMandalsEditable: (isEditable: boolean) => {
      setMandalData({ 
        ...mandalData, 
        inEditMode: isEditable 
      });
    },
    updateMandal: (mandalId: number, updatedMandal) => {
      const updatedMandals = mandalData.data.current.map((mandal) => {
        if (mandal.id === mandalId) {
          return updatedMandal;
        }
        return mandal;
      });

      setMandalData({ 
        ...mandalData, 
        data: { 
          ...mandalData.data, 
          current: updatedMandals 
        } 
      });
    },
    saveMandals: async () => {
      setMandalData({
        ...mandalData,
        isLoading: true
      });

      try {
        const newMandals = mandalData.data.current.filter((mandal) => mandal.id < 0);
        const updatedMandals = mandalData.data.current.filter((mandal) => mandal.id >= 0 && mandal !== mandalData.data.saved.find((savedMandal) => savedMandal.id === mandal.id));
        
        if(newMandals.length > 0) {
          await fetchData('/mandals', {
            method: 'POST',
            body: JSON.stringify(newMandals)
          });
        }

        if(updatedMandals.length > 0) {
          await fetchData('/mandals', {
            method: 'PUT',
            body: JSON.stringify(updatedMandals)
          });
        }
        
        setMandalData({ 
          ...mandalData, 
          data: { 
            ...mandalData.data, 
            saved: mandalData.data.current 
          },
          isLoading: false,
          inEditMode: false
        });

        if (toast) {
          toast('Mandals saved successfully', 'Save Mandals Action', 'success');
        }
      } catch (error) {
        if (toast) {
          toast('Failed to save mandals', 'Save Mandals Action', 'error');
        }
      }
    },
    resetMandals: () => {
      const modalData: Partial<Modal> = {};

      if(mandalData.data.current !== mandalData.data.saved) {
        modalData.title = 'Reset Mandals';
        modalData.description = 'You have unsaved changes. Are you sure you want to reset mandals?';
        modalData.onConfirm = () => {
          setMandalData({ 
            ...mandalData, 
            data: { 
              ...mandalData.data, 
              current: mandalData.data.saved 
            },
            isModalVisible: false
          });
        };
        modalData.onCancel = () => {
          setMandalData({ 
            ...mandalData, 
            isModalVisible: false 
          });
        };

        setMandalData({ 
          ...mandalData, 
          isModalVisible: true, 
          modalData: modalData as Modal
        });
      }

      setMandalData({ 
        ...mandalData, 
        data: { 
          ...mandalData.data, 
          current: mandalData.data.saved 
        },
        inEditMode: false
      });
    },
    deleteMandal: async (mandalId: number) => {
      const updatedMandals = mandalData.data.current.filter((mandal) => mandal.id !== mandalId);

      try {
        await fetchData(`/mandals/${mandalId}`, {
          method: 'DELETE'
        });

        setMandalData({ 
          ...mandalData, 
          data: { 
            ...mandalData.data, 
            current: updatedMandals,
            saved: updatedMandals
          } 
        });

        if (toast) {
          toast('Mandal deleted successfully', 'Delete Mandal Action', 'success');
        }
      } catch (error) {
        if (toast) {
          toast('Failed to delete mandal', 'Delete Mandal Action', 'error');
        }
      }
    },
    addMandal: () => {
      const existingMandal = mandalData.data.current.length > 0 ? mandalData.data.current[0] : undefined;

      const newMandal = {
        id: existingMandal && existingMandal.id > 0 ? existingMandal.id - 1 : -1,
        name: '',
        location: '',
        zone: null
      };

      setMandalData({ 
        ...mandalData, 
        data: { 
          ...mandalData.data, 
          current: [newMandal, ...mandalData.data.current] 
        } 
      });
    }
  };

  return (
    <MandalsContext.Provider value={value}>
      {props.children}
      <ConfirmModal
        open={mandalData.isModalVisible}
        {...mandalData.modalData}
      />
    </MandalsContext.Provider>
  )
}

export default DataProvider;