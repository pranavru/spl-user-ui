import { Modal } from "../common/types";
import { Zone, ZoneOptions } from "../zones/types";

export type Mandal = {
  id: number;
  name: string;
  location: string;
  zone: Zone | null;
}

export type Mandals = Mandal[];

export type MandalsPage = {
  isLoading: boolean;
  hasError: boolean;
  inEditMode: boolean;
  isModalVisible: boolean;
  data: {
    current: Mandals;
    saved: Mandals;
  },
  zones: ZoneOptions;
  modalData: Modal
};

export type MandalsContextType = MandalsPage & {
  setMandalsEditable: (isEditable: boolean) => void;
  updateMandal: (zoneId: number, updatedMandal: Mandal) => void;
  saveMandals: () => void;
  resetMandals: () => void;
  deleteMandal: (zoneId: number) => void;
  addMandal: () => void;
};