export const initialState = {
  isLoading: false,
  hasError: false,
  inEditMode: false,
  isModalVisible: false,
  data: { 
    current: [], 
    saved: [] 
  },
  zones: [],
  modalData: {
    title: '',
    description: '',
    onConfirm: () => {},
    onCancel: () => {}
  },
  setMandalsEditable: () => {},
  updateMandal: () => {},
  saveMandals: () => {},
  resetMandals: () => {},
  deleteMandal: () => {},
  addMandal: () => {}
};