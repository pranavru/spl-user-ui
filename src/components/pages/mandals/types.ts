import { Modal } from "../common/types";

export type Mandal = {
  id: number;
  name: string;
  location: string;
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