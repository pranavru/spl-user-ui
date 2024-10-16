export const initialState = {
  isLoading: false,
  hasError: false,
  inEditMode: false,
  isModalVisible: false,
  data: { 
    current: [], 
    saved: [] 
  },
  modalData: {
    title: '',
    description: '',
    onConfirm: () => {},
    onCancel: () => {}
  },
  setZonesEditable: () => {},
  updateZone: () => {},
  saveZones: () => {},
  resetZones: () => {},
  deleteZone: () => {},
  addZone: () => {}
};

