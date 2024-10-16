export type Modal = {
  title: string;
  description: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export type Zone = {
  id: number;
  name: string;
  location: string;
}

export type Zones = Zone[];

export type ZonesPage = {
  isLoading: boolean;
  hasError: boolean;
  inEditMode: boolean;
  isModalVisible: boolean;
  data: {
    current: Zones;
    saved: Zones;
  }
  modalData: Modal
};

export type ZonesContextType = ZonesPage & {
  setZonesEditable: (isEditable: boolean) => void;
  updateZone: (zoneId: number, updatedZone: Zone) => void;
  saveZones: () => void;
  resetZones: () => void;
  deleteZone: (zoneId: number) => void;
  addZone: () => void;
};