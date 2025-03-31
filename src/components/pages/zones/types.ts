import { Modal } from "../common/types";
import { User } from "../users/types";

export type Zone = {
  id: string;
  name: string;
  description: string;
  region: string;
  isActive: boolean;
  coordinator: User | null;
}

export type Zones = Zone[];

export type ZoneOption = Zone & {
  label: string;
  value: string;
}

export type ZoneOptions = ZoneOption[];

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
  updateZone: (zoneId: string, updatedZone: Zone) => void;
  saveZones: () => void;
  resetZones: () => void;
  deleteZone: (zoneId: string) => void;
  addZone: () => void;
};